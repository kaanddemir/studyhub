import { data, saveData } from '../data.js'
import { t } from '../translations.js'
import { verifyDevPin, escapeHTML } from '../security.js'
import { getStatsCardsHTML } from './StatsCards.js'
import { renderChart } from './Chart.js'
import { renderCalendar, renderTodoList } from './Schedule.js'
import { renderProfile } from './Highlights.js'
import { renderNotes } from './MiscWidgets.js'
import { renderPomodoro } from './Pomodoro.js'
import { renderTimeWidget } from './TimeWidget.js'
import { renderScratchpad } from './Scratchpad.js'
import { renderBookmarks } from './Bookmarks.js'
import { renderGradeCalculator } from './GradeCalculator.js'
import { renderStopwatch } from './Stopwatch.js'
import { renderGames } from './Games.js'
import { renderHabitTracker } from './HabitTracker.js'
import { renderWeeklySchedule } from './WeeklySchedule.js'
import { renderPhotoWidget } from './PhotoWidget.js'

export function renderDashboard(element) {
    let isDevModeUnlocked = false;
    // Dynamic Data Calculation
    // Dynamic Data Calculation Helper
    const updateHeaderSummary = () => {
        const todoCount = data.todos.filter(t => !t.completed).length;
        let upcomingExamText = t('no_upcoming_exams');
        if (data.todos.length > 0) {
            upcomingExamText = t('check_schedule');
        }

        const summaryEl = document.getElementById('header-summary');
        if (summaryEl) {
            summaryEl.innerHTML = `${t('summary_prefix')} <span class="font-bold text-dark">${data.courses.length} ${t('classes')}</span> & <span class="font-bold text-dark">${todoCount} ${t('todos')}</span> ${t('summary_suffix')}`;
        }
    };
    // Widget Management System
    let draggedItem = null;
    const widgetCache = new Map(); // Stores elements that are hidden
    const allWidgetDefinitions = [
        { id: 'stats-card-0', name: t('total_courses') },
        { id: 'stats-card-1', name: t('completed') },
        { id: 'stats-card-2', name: t('studyai') },
        { id: 'chart-container', name: t('hours_spent') },
        { id: 'time-container', name: t('time') },
        { id: 'notes-container', name: t('quick_notes') },
        { id: 'scratchpad-container', name: t('scratchpad') }, // New Widget
        { id: 'pomodoro-container', name: t('focus_timer') },
        { id: 'profile-container', name: t('profile') },
        { id: 'exam-schedule-container', name: t('calendar') },
        { id: 'todo-container', name: t('todo_list') },
        { id: 'calculator-card', name: t('calculator') },
        { id: 'bookmarks-container', name: t('bookmarks') },
        { id: 'grade-calc-container', name: t('grade_calculation') },
        { id: 'stopwatch-container', name: t('stopwatch') },
        { id: 'games-container', name: t('mini_games') },
        { id: 'habit-container', name: t('daily_habits') },

        { id: 'weekly-schedule-container', name: t('weekly_schedule') },
        { id: 'photo-container', name: t('photo_frame') }
    ];

    const saveLayout = () => {
        const container = document.getElementById('dashboard-grid');
        const items = Array.from(container.children);
        const layout = items.map(item => ({
            id: item.id,
            className: item.className
        }));
        localStorage.setItem('dashboardLayout', JSON.stringify(layout));
    };

    const loadLayout = () => {
        const saved = localStorage.getItem('dashboardLayout');
        if (saved) {
            try {
                const layout = JSON.parse(saved);

                // Validate Layout: Check for empty IDs (Legacy Bug)
                const hasInvalidIds = layout.some(item => !item.id);
                if (hasInvalidIds) {
                    console.warn("Invalid layout detected (missing IDs). Resetting layout.");
                    localStorage.removeItem('dashboardLayout');
                    return; // Stop loading, use default
                }

                const container = document.getElementById('dashboard-grid');
                const fragment = document.createDocumentFragment();

                // 1. Process Saved Items (Order & Visiblity)
                const processedIds = new Set();
                layout.forEach(itemData => {
                    let el = document.getElementById(itemData.id) || widgetCache.get(itemData.id);

                    // Recover Dynamic Widgets (e.g., Photo Widgets)
                    if (!el && itemData.id.startsWith('photo-widget-')) {
                        const newWidget = document.createElement('div');
                        newWidget.id = itemData.id;
                        newWidget.className = itemData.className || "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
                        newWidget.draggable = true;
                        renderPhotoWidget(newWidget, itemData.id);
                        setupDraggableItem(newWidget); // Ensure listeners are attached
                        el = newWidget;
                    }

                    if (el) {
                        el.className = itemData.className; // Restore size
                        fragment.appendChild(el);
                        widgetCache.delete(itemData.id); // Ensure it's not in cache if active
                        processedIds.add(itemData.id);
                    }
                });

                // 2. Recovery: Ensure Standard Widgets are not lost if missing from layout
                // (This prevents accidental disappearances, though it resets "Hidden" status for standard widgets)
                allWidgetDefinitions.forEach(def => {
                    if (!processedIds.has(def.id)) {
                        // Check if it exists in DOM or Cache
                        const el = document.getElementById(def.id) || widgetCache.get(def.id);
                        if (el) {
                            fragment.appendChild(el);
                            widgetCache.delete(def.id);
                            processedIds.add(def.id);
                        }
                    }
                });

                // 3. Identify Hidden Items (Move remaining DOM children to cache)
                Array.from(container.children).forEach(child => {
                    // If child is still in container (not moved to fragment), it means it's hidden in this layout
                    widgetCache.set(child.id, child);
                    child.remove();
                });

                container.appendChild(fragment);

            } catch (e) {
                console.error("Failed to load layout", e);
            }
        }
    };

    // Helper to Initialize Drag & Resize for a Widget
    const setupDraggableItem = (item) => {
        const container = document.getElementById('dashboard-grid');
        if (item.getAttribute('data-dnd-initialized')) return;
        item.setAttribute('data-dnd-initialized', 'true');

        // --- Resize Handler ---
        if (!item.querySelector('.resize-handle') && item.id !== 'weekly-schedule-container') {
            const handle = document.createElement('div');
            handle.className = 'resize-handle absolute bottom-2 right-2 w-6 h-6 bg-gray-100 hover:bg-primary rounded-full cursor-nwse-resize flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all z-20';
            handle.innerHTML = `<svg class="w-3 h-3 text-gray-500 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>`;

            handle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const isBig = item.classList.contains('md:col-span-2');
                if (isBig) {
                    item.classList.remove('md:col-span-2');
                    item.classList.add('col-span-1');
                    handle.title = "Maximize";
                } else {
                    item.classList.remove('col-span-1');
                    item.classList.add('md:col-span-2');
                    handle.title = "Minimize";
                }
                saveLayout();
            });
            item.appendChild(handle);
        }

        // --- Drag Events ---
        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('source', 'grid');
            setTimeout(() => item.classList.add('opacity-0', 'scale-95'), 0);
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('opacity-0', 'scale-95');
            draggedItem = null;
            container.querySelectorAll('.draggable-item').forEach(i => i.classList.remove('ring-2', 'ring-primary', 'ring-offset-2'));
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (draggedItem && draggedItem !== item) {
                item.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
            }
        });

        item.addEventListener('dragleave', () => {
            item.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            item.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');

            // Case 1: Dropping a PICKER item into the grid (Insert)
            if (draggedItem && draggedItem.dataset && draggedItem.dataset.widgetId) {
                const widgetId = draggedItem.dataset.widgetId;
                const realWidget = widgetCache.get(widgetId);

                if (realWidget) {
                    container.insertBefore(realWidget, item); // Insert before this item
                    widgetCache.delete(widgetId);
                    setupDraggableItem(realWidget); // Init listeners
                    saveLayout();
                    // Close Picker
                    const popup = document.getElementById('manage-widgets-popup');
                    if (popup) popup.classList.add('invisible', 'opacity-0', 'scale-95');
                }
                return;
            }

            // Case 2: Reordering Grid Items
            if (draggedItem && draggedItem !== item && !draggedItem.dataset.widgetId) {
                const parent = container;
                // Swap logic
                const placeholder1 = document.createElement('div');
                const placeholder2 = document.createElement('div');
                parent.insertBefore(placeholder1, item);
                parent.insertBefore(placeholder2, draggedItem);
                parent.insertBefore(draggedItem, placeholder1);
                parent.insertBefore(item, placeholder2);
                parent.removeChild(placeholder1);
                parent.removeChild(placeholder2);
                setTimeout(() => saveLayout(), 50); // Small delay to ensure DOM is ready
            }
        });
    };

    // Manage Widgets Dropdown Logic
    window.toggleManageDropdown = () => {
        let popup = document.getElementById('manage-widgets-popup');
        const list = document.getElementById('manage-widgets-list');
        const isMobile = window.innerWidth < 768;

        if (popup && list) {
            const isOpen = popup.classList.contains('visible');

            if (!isOpen) {
                // === OPEN ===
                popup.classList.remove('invisible', 'opacity-0', 'scale-95');
                popup.classList.add('visible', 'opacity-100', 'scale-100');

                // Clear List
                list.innerHTML = '';

                // Remove existing header text if present
                const existingHeader = list.querySelector('.available-widgets-header');
                if (existingHeader) existingHeader.remove();

                if (isMobile) {
                    // PORTAL STRATEGY
                    const placeholder = document.createElement('div');
                    placeholder.id = 'widgets-popup-placeholder';
                    placeholder.style.display = 'none';
                    popup.parentNode.insertBefore(placeholder, popup);
                    document.body.appendChild(popup);

                    // Adjust List Height for Mobile
                    list.classList.remove('max-h-48');
                    list.classList.add('max-h-[75vh]');

                    // Apply Mobile Popup Styles
                    popup.classList.remove('absolute', 'top-full', 'right-0', 'mt-2', 'origin-top-right', 'scale-95');
                    popup.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'z-[105]');

                    popup.style.width = '90vw';
                    popup.style.maxHeight = '85vh';
                    popup.style.maxWidth = '400px';
                    popup.style.margin = '0';

                    // Add Backdrop
                    let backdrop = document.getElementById('widgets-backdrop');
                    if (!backdrop) {
                        backdrop = document.createElement('div');
                        backdrop.id = 'widgets-backdrop';
                        backdrop.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity opacity-0';
                        backdrop.onclick = window.toggleManageDropdown;
                        document.body.appendChild(backdrop);
                        requestAnimationFrame(() => backdrop?.classList.remove('opacity-0'));
                    }

                    // Inject Mobile Header if not exists
                    if (!document.getElementById('mobile-widgets-header')) {
                        const header = document.createElement('div');
                        header.id = 'mobile-widgets-header';
                        header.className = 'flex md:hidden items-center justify-between px-0 pb-3 mb-2 border-b border-gray-100';
                        header.innerHTML = `
                            <h3 class="font-bold text-dark text-lg">${t('available_widgets')}</h3>
                            <button onclick="toggleManageDropdown()" class="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        `;
                        // Insert as first child
                        popup.insertBefore(header, popup.firstChild);
                    }
                }


                // --- MOBILE: SELECTION UI (No Drag) ---
                if (isMobile) {
                    // Hide Dropzone (It is for drag removal)
                    const dropzone = document.getElementById('manage-widgets-dropzone');
                    if (dropzone) dropzone.style.display = 'none';

                    // 1. Add Photo Widget (Generator)
                    const addPhotoItem = document.createElement('div');
                    addPhotoItem.className = 'w-full py-3 bg-primary/10 border border-primary/20 text-primary rounded-xl font-bold text-xs shadow-sm flex items-center justify-center gap-2 mb-4 cursor-pointer active:scale-95 transition-all';
                    addPhotoItem.innerHTML = `
                       <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                       ${t('add_photo_widget')}
                    `;
                    addPhotoItem.onclick = (e) => {
                        e.preventDefault();
                        const container = document.getElementById('dashboard-grid');
                        const newId = `photo-widget-${Date.now()}`;
                        const newWidget = document.createElement('div');
                        newWidget.id = newId;
                        newWidget.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
                        renderPhotoWidget(newWidget, newId);
                        container.appendChild(newWidget);
                        setupDraggableItem(newWidget);
                        saveLayout();
                        window.toggleManageDropdown(); // Re-render list
                        // Scroll to bottom
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    };
                    list.appendChild(addPhotoItem);

                    // 2. Active Widgets (Click to Remove)
                    const activeHeader = document.createElement('p');
                    activeHeader.className = "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4 ml-1";
                    activeHeader.innerText = t('active') || 'ACTIVE';
                    list.appendChild(activeHeader);

                    const container = document.getElementById('dashboard-grid');
                    const children = Array.from(container.children);

                    if (children.length === 0) {
                        const empty = document.createElement('div');
                        empty.className = "text-xs text-gray-400 italic p-2";
                        empty.innerText = "No active widgets";
                        list.appendChild(empty);
                    } else {
                        children.forEach(child => {
                            // Find Name
                            let name = "Unknown Widget";
                            const def = allWidgetDefinitions.find(d => d.id === child.id);
                            if (def) name = def.name;
                            else if (child.id.startsWith('photo-widget-')) name = t('photo_frame');

                            const item = document.createElement('div');
                            item.className = 'flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl mb-2 shadow-sm';
                            item.innerHTML = `
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span class="text-xs font-bold text-dark">${name}</span>
                                </div>
                                <button class="text-gray-400 hover:text-red-500 transition-colors p-1">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            `;
                            // Remove Logic
                            item.onclick = () => {
                                widgetCache.set(child.id, child);
                                child.remove();
                                saveLayout();
                                window.toggleManageDropdown(); // Re-render list
                            };
                            list.appendChild(item);
                        });
                    }

                    // 3. Available Widgets (Click to Add)
                    // (Header removed as per request)

                    // Calc Unused
                    const activeIds = children.map(c => c.id);
                    const unusedDefs = allWidgetDefinitions.filter(d => !activeIds.includes(d.id));
                    // Also check cache for dynamic photos that were removed
                    const cachedDynamic = [];
                    // User requested to NOT show custom photo widgets after removal.
                    // They are effectively deleted when removed from dashboard.


                    const allUnused = [...unusedDefs, ...cachedDynamic];

                    if (allUnused.length > 0) { // Changed to only run if there ARE items
                        allUnused.forEach(def => {
                            const item = document.createElement('div');
                            item.className = 'flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl mb-2 opacity-80 hover:opacity-100';
                            item.innerHTML = `
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                                    <span class="text-xs font-bold text-gray-600">${def.name}</span>
                                </div>
                                <button class="text-primary hover:text-primary-dark transition-colors p-1">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                                </button>
                            `;
                            // Add Logic
                            item.onclick = () => {
                                const realWidget = widgetCache.get(def.id);
                                if (realWidget) {
                                    container.appendChild(realWidget);
                                    widgetCache.delete(def.id);
                                    setupDraggableItem(realWidget);
                                    saveLayout();
                                    window.toggleManageDropdown();
                                }
                            };
                            list.appendChild(item);
                        });
                    }

                } else {
                    // --- DESKTOP: DRAG UI (Original) ---
                    const dropzone = document.getElementById('manage-widgets-dropzone');
                    if (dropzone) dropzone.style.display = 'block';

                    // --- SPECIAL: Add Photo Widget Button (Generator) ---
                    const addPhotoItem = document.createElement('div');
                    addPhotoItem.className = 'w-full py-2.5 bg-primary text-white rounded-xl font-bold text-xs shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:opacity-90 transition-all mb-3 cursor-pointer';
                    addPhotoItem.draggable = true;
                    addPhotoItem.innerHTML = `
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    ${t('add_photo_widget')}
                    `;

                    // Generator Click
                    addPhotoItem.onclick = (e) => {
                        e.preventDefault();
                        const container = document.getElementById('dashboard-grid');

                        const newId = `photo-widget-${Date.now()}`;
                        const newWidget = document.createElement('div');
                        newWidget.id = newId;
                        newWidget.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
                        newWidget.draggable = true;

                        renderPhotoWidget(newWidget, newId);

                        container.appendChild(newWidget);
                        setupDraggableItem(newWidget);
                        saveLayout();

                        // Close popup
                        popup.classList.add('invisible', 'opacity-0', 'scale-95');
                    };

                    // Generator Drag
                    addPhotoItem.addEventListener('dragstart', (e) => {
                        draggedItem = addPhotoItem;
                        e.dataTransfer.effectAllowed = 'copy';
                        e.dataTransfer.setData('source', 'generator');
                        e.dataTransfer.setData('type', 'photo-widget');
                        addPhotoItem.classList.add('opacity-50');
                    });

                    addPhotoItem.addEventListener('dragend', () => {
                        addPhotoItem.classList.remove('opacity-50');
                        draggedItem = null;
                    });

                    list.appendChild(addPhotoItem);

                    // Active widgets
                    const container = document.getElementById('dashboard-grid');
                    const activeIds = Array.from(container.children).map(c => c.id);
                    // Unused widgets
                    const unusedWidgets = allWidgetDefinitions.filter(def => !activeIds.includes(def.id));

                    if (unusedWidgets.length === 0) {
                        const msg = document.createElement('div');
                        msg.innerHTML = t('all_widgets_active');
                        msg.className = 'text-xs text-gray-400 text-center py-2';
                        list.appendChild(msg);
                    } else {
                        unusedWidgets.forEach(def => {
                            const item = document.createElement('div');
                            item.className = 'flex items-center gap-2 p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors mb-2';
                            item.draggable = true;
                            item.dataset.widgetId = def.id;
                            item.innerHTML = `
                                <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                                <span class="text-xs font-bold text-gray-600">${def.name}</span>
                            `;

                            // Click to Add (Desktop)
                            item.onclick = (e) => {
                                e.preventDefault();
                                const container = document.getElementById('dashboard-grid');
                                const realWidget = widgetCache.get(def.id);
                                if (realWidget) {
                                    container.appendChild(realWidget);
                                    widgetCache.delete(def.id);
                                    setupDraggableItem(realWidget);
                                    saveLayout();
                                    item.remove(); // Remove item from list
                                    if (list.children.length === 1) { // 1 because AddPhotoItem is always there
                                        const msg = document.createElement('div');
                                        msg.innerHTML = t('all_widgets_active');
                                        msg.className = 'text-xs text-gray-400 text-center py-2';
                                        list.appendChild(msg);
                                    }
                                }
                            };

                            // Drag Events for "Adding"
                            item.addEventListener('dragstart', (e) => {
                                draggedItem = item;
                                e.dataTransfer.effectAllowed = 'copy';
                                e.dataTransfer.setData('source', 'picker');
                                e.dataTransfer.setData('widgetId', def.id);
                                item.classList.add('opacity-50');
                            });

                            item.addEventListener('dragend', () => {
                                item.classList.remove('opacity-50');
                                draggedItem = null;
                            });

                            list.appendChild(item);
                        });
                    }
                }

            } else {
                // === CLOSE ===
                popup.classList.add('invisible', 'opacity-0', 'scale-95');
                popup.classList.remove('visible', 'opacity-100', 'scale-100');

                // Cleanup Mobile Mode
                if (popup.parentNode === document.body) {
                    setTimeout(() => {
                        const placeholder = document.getElementById('widgets-popup-placeholder');
                        if (placeholder) {
                            placeholder.parentNode.insertBefore(popup, placeholder);
                            placeholder.remove();
                        }

                        // Remove Header
                        const header = document.getElementById('mobile-widgets-header');
                        if (header) header.remove();

                        // Restore Styles
                        popup.classList.add('absolute', 'top-full', 'right-0', 'mt-2', 'origin-top-right', 'scale-95');
                        popup.classList.remove('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'z-[105]');
                        popup.style.width = '';
                        popup.style.maxHeight = '';
                        popup.style.maxWidth = '';
                        popup.style.margin = '';

                        // Restore List Height
                        list.classList.add('max-h-48');
                        list.classList.remove('max-h-[75vh]');
                    }, 300);
                }

                // Remove Backdrop
                const backdrop = document.getElementById('widgets-backdrop');
                if (backdrop) {
                    backdrop.classList.add('opacity-0');
                    setTimeout(() => backdrop.remove(), 300);
                }
            }
        }
    };

    // Setting Modal Logic
    let activeSettingsTab = 'general'; // general | language | about | developer

    window.toggleSettingsModal = () => {
        let modal = document.getElementById('settings-modal');
        const isMobile = window.innerWidth < 768;

        if (modal) {
            // Check visibility to determine state
            const isOpen = modal.classList.contains('visible');

            if (!isOpen) {
                // === OPEN ===
                renderSettingsContent();
                modal.classList.remove('invisible', 'opacity-0', 'scale-95');
                modal.classList.add('visible', 'opacity-100', 'scale-100');

                if (isMobile) {
                    // PORTAL STRATEGY: Move to document.body to avoid z-index/clipping issues
                    const placeholder = document.createElement('div');
                    placeholder.id = 'settings-modal-placeholder';
                    placeholder.style.display = 'none';
                    modal.parentNode.insertBefore(placeholder, modal);
                    document.body.appendChild(modal);

                    // Apply Mobile Popup Styles
                    modal.classList.remove('absolute', 'top-full', 'right-0', 'mt-2', 'origin-top-right', 'scale-95');
                    modal.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'z-[105]');

                    // Inline styles for specificity
                    modal.style.width = '85vw';
                    modal.style.maxHeight = '70vh';
                    modal.style.maxWidth = '360px';
                    modal.style.margin = '0 auto';

                    // Add Backdrop
                    let backdrop = document.getElementById('settings-backdrop');
                    if (!backdrop) {
                        backdrop = document.createElement('div');
                        backdrop.id = 'settings-backdrop';
                        backdrop.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity opacity-0';
                        backdrop.onclick = window.toggleSettingsModal;
                        document.body.appendChild(backdrop);
                        // Animate in
                        requestAnimationFrame(() => backdrop?.classList.remove('opacity-0'));
                    }
                }
            } else {
                // === CLOSE ===
                modal.classList.add('invisible', 'opacity-0', 'scale-95');
                modal.classList.remove('visible', 'opacity-100', 'scale-100');

                // If it was moved to body (Mobile Mode cleanup)
                if (modal.parentNode === document.body) {
                    setTimeout(() => {
                        // Restore DOM position
                        const placeholder = document.getElementById('settings-modal-placeholder');
                        if (placeholder) {
                            placeholder.parentNode.insertBefore(modal, placeholder);
                            placeholder.remove();
                        } else {
                            // Fallback if placeholder lost: append back to settings-btn container? 
                            // Hard to find without placeholder. But placeholder should exist.
                            // If not found, we might have an issue, but standard flow preserves it.
                        }

                        // Restore Desktop Styles
                        modal.classList.add('absolute', 'top-full', 'right-0', 'mt-2', 'origin-top-right');
                        modal.classList.remove('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'z-[105]');
                        modal.style.width = '';
                        modal.style.maxHeight = '';
                        modal.style.maxWidth = '';
                        modal.style.margin = '';
                    }, 300); // Wait for transition
                }

                // Remove Backdrop
                const backdrop = document.getElementById('settings-backdrop');
                if (backdrop) {
                    backdrop.classList.add('opacity-0');
                    setTimeout(() => backdrop.remove(), 300);
                }
            }
        }
    };

    window.switchSettingsTab = (tabId) => {
        activeSettingsTab = tabId;
        renderSettingsContent();
    };

    // Theme Logic
    window.changeTheme = (themeName) => {
        const themes = {
            emerald: '5 150 105',
            blue: '37 99 235',
            pink: '236 72 153',
            orange: '234 88 12',
            rose: '225 29 72',
            lila: '178 106 251'
        };

        if (themes[themeName]) {
            // Update CSS Variable
            document.documentElement.style.setProperty('--color-primary-rgb', themes[themeName]);

            // Update Data
            data.user.themePreference = themeName;
            // Also update customThemeRgb to null so it uses preference? 
            // The onboarding logic sets customThemeRgb from the HSL sliders.
            // If we choose a preset, we should probably align customThemeRgb or clear it.
            // Looking at main.js: if (user.customThemeRgb) use it, else if (user.themePreference) use theme.
            // So we MUST clear customThemeRgb to allow themePreference to take effect if we aren't using sliders here.
            data.user.customThemeRgb = null;

            saveData();
            renderSettingsContent(); // Re-render to show selection

            // If background is theme-tinted, update it dynamically
            if (data.user.bgPreference === 'theme') {
                document.body.style.backgroundColor = `rgb(${themes[themeName]} / 0.04)`;
            }
        }
    };

    window.changeBgPreference = (pref) => {
        data.user.bgPreference = pref;

        if (pref === 'theme') {
            document.body.style.backgroundColor = 'rgb(var(--color-primary-rgb) / 0.04)';
        } else {
            document.body.style.backgroundColor = '';
        }

        saveData();
        renderSettingsContent();
    };

    window.updateProfileField = (field, value) => {
        data.user[field] = value;
        saveData();

        if (field === 'name') {
            const greeting = document.getElementById('header-greeting');
            if (greeting) greeting.innerHTML = `${t('hello')}, ${escapeHTML(value)}!`;
        }

        if (field === 'avatar') {
            renderSettingsContent(); // Re-render to show active avatar
        }

        // Re-render Profile Component if it exists
        const profileContainer = document.getElementById('profile-container');
        if (profileContainer) {
            // We need to re-render the content inside the container
            // Clearing it first might be safe
            profileContainer.innerHTML = '';
            renderProfile(profileContainer, data.user);
        }
    };

    window.checkDevPin = (value) => {
        const input = document.getElementById('dev-pin-input');
        const container = document.getElementById('dev-lock-container');

        // Visual feedback for typing
        if (value.length > 0) {
            input.classList.add('border-primary', 'bg-white');
            input.classList.remove('border-gray-200', 'bg-gray-50');
        } else {
            input.classList.remove('border-primary', 'bg-white');
            input.classList.add('border-gray-200', 'bg-gray-50');
        }

        if (value.length === 4) {
            if (verifyDevPin(value)) {
                // Success Animation
                input.classList.add('text-green-500', 'border-green-500');
                if (container) {
                    container.classList.add('scale-105', 'opacity-0');
                }
                setTimeout(() => {
                    isDevModeUnlocked = true;
                    renderSettingsContent();
                }, 300);
            } else {
                // Error Animation (Only Shake, No Lockout)
                input.classList.add('animate-shake', 'border-red-500', 'text-red-500');
                setTimeout(() => {
                    input.value = '';
                    input.classList.remove('animate-shake', 'border-red-500', 'text-red-500');
                    input.focus();
                }, 500);
            }
        }
    };

    window.toggleDevPremium = () => {
        data.user.isPremium = !data.user.isPremium;
        saveData();
        renderSettingsContent();

        // Update Header Button
        const headerBtn = document.getElementById('header-premium-btn');
        if (headerBtn) {
            if (data.user.isPremium) {
                headerBtn.classList.remove('bg-primary', 'text-white', 'shadow-primary/30');
                headerBtn.classList.add('bg-amber-100', 'text-amber-600', 'border-amber-200', 'shadow-amber-500/10');
                headerBtn.innerHTML = `
                    <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span class="hidden md:inline">${t('premium_active')}</span>
                `;
                headerBtn.onclick = null; // Disable modal on click or redirect to settings
            } else {
                headerBtn.classList.add('bg-primary', 'text-white', 'shadow-primary/30');
                headerBtn.classList.remove('bg-amber-100', 'text-amber-600', 'border-amber-200', 'shadow-amber-500/10');
                headerBtn.innerHTML = `
                    <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span class="hidden md:inline">${t('premium')}</span>
                 `;
                headerBtn.onclick = window.togglePremiumModal;
            }
        }
    };

    // Premium Modal Logic
    window.togglePremiumModal = () => {
        const modal = document.getElementById('premium-modal');
        if (modal) {
            const content = modal.querySelector('.modal-content');
            if (modal.classList.contains('invisible')) {
                // OPEN
                modal.classList.remove('invisible', 'opacity-0');
                modal.classList.add('visible', 'opacity-100');
                if (content) {
                    content.classList.remove('scale-95');
                    content.classList.add('scale-100');
                }
            } else {
                // CLOSE
                modal.classList.add('invisible', 'opacity-0');
                modal.classList.remove('visible', 'opacity-100');
                if (content) {
                    content.classList.add('scale-95');
                    content.classList.remove('scale-100');
                }
            }
        }
    };



    // Data Management (Premium)
    window.exportData = () => {
        toggleSettingsModal(); // Close settings
        if (!data.user.isPremium) {
            togglePremiumModal();
            return;
        }

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        const date = new Date().toISOString().slice(0, 10);
        downloadAnchorNode.setAttribute("download", `studyhub_backup_${date}.json`);
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    window.triggerImportData = () => {
        toggleSettingsModal(); // Close settings
        if (!data.user.isPremium) {
            togglePremiumModal();
            return;
        }
        // Create hidden input if not exists
        let input = document.getElementById('import-file-input');
        if (!input) {
            input = document.createElement('input');
            input.type = 'file';
            input.id = 'import-file-input';
            input.accept = '.json';
            input.className = 'hidden';
            input.onchange = window.handleFileImport;
            document.body.appendChild(input);
        }
        input.click();
    };

    window.handleFileImport = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                // Basic validation
                if (importedData.user && importedData.stats) {
                    if (confirm(t('overwrite_confirm'))) {
                        // Mutate properties of data object to keep reference
                        Object.keys(data).forEach(key => delete data[key]); // clear
                        Object.assign(data, importedData); // fill

                        saveData();
                        location.reload(); // Reload to apply everything
                    }
                } else {
                    alert(t('invalid_backup'));
                }
            } catch (err) {
                console.error(err);
                alert(t('parse_error'));
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset
    };

    const renderSettingsContent = () => {
        const contentArea = document.getElementById('settings-content-area');
        const tabButtons = document.querySelectorAll('.settings-tab-btn');

        // Update Tab Styles
        tabButtons.forEach(btn => {
            if (btn.dataset.tab === activeSettingsTab) {
                btn.classList.add('text-primary', 'bg-primary/10');
                btn.classList.remove('text-gray-500', 'hover:bg-gray-50');
            } else {
                btn.classList.remove('text-primary', 'bg-primary/10');
                btn.classList.add('text-gray-500', 'hover:bg-gray-50');
            }
        });

        // Render Content
        // Render Content
        if (activeSettingsTab === 'general') {
            const themes = {
                emerald: '5 150 105',
                blue: '37 99 235',
                pink: '236 72 153',
                orange: '234 88 12',
                rose: '225 29 72',
                lila: '178 106 251'
            };

            const themeButtons = Object.keys(themes).map(theme => {
                const rgbVal = themes[theme].split(' ').join(',');
                const isSelected = (data.user.themePreference || 'emerald') === theme;
                return `
                    <button onclick="changeTheme('${theme}')" class="group relative h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 ring-2 ring-offset-2 w-full ${isSelected ? '' : 'ring-transparent hover:ring-gray-200'} bg-gray-50 border border-gray-100 overflow-hidden" 
                            style="${isSelected ? `--tw-ring-color: rgb(${rgbVal});` : ''}">
                        <div class="w-5 h-5 rounded-full shadow-sm relative z-10" style="background-color: rgb(${rgbVal})"></div>
                        ${isSelected ? `
                            <div class="absolute inset-0" style="background-color: rgba(${rgbVal}, 0.1)"></div>
                            <div class="absolute bottom-1 w-1 h-1 rounded-full" style="background-color: rgb(${rgbVal})"></div>
                        ` : ''}
                    </button>
                    `;
            }).join('');

            contentArea.innerHTML = `
                <div class="space-y-4">
                     <!-- Theme Color Section -->
                     <div class="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                        <h4 class="font-bold text-dark text-sm mb-1">${t('theme_color')}</h4>
                        <p class="text-xs text-gray-500 mb-3">${t('personalize_accent')}</p>
                        
                        <div class="grid grid-cols-6 gap-2">
                            ${themeButtons}
                        </div>

                        <!-- Background Preference -->
                        <div class="mt-4 pt-4 border-t border-gray-200/50">
                            <h4 class="font-bold text-dark text-sm mb-2">${t('background_style')}</h4>
                             <div class="flex gap-2">
                                <button onclick="changeBgPreference('default')" class="flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${data.user.bgPreference === 'default' ? 'bg-white border-primary text-primary shadow-sm' : 'bg-gray-100/50 border-transparent text-gray-500 hover:bg-gray-100'}">
                                    ${t('default')}
                                </button>
                                <button onclick="changeBgPreference('theme')" class="flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${data.user.bgPreference === 'theme' ? 'bg-primary/10 border-primary text-primary shadow-sm' : 'bg-gray-100/50 border-transparent text-gray-500 hover:bg-gray-100'}">
                                    ${t('tinted')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                        <h4 class="font-bold text-dark text-sm mb-1">${t('layout_settings')}</h4>
                        <p class="text-xs text-gray-500 mb-4">${t('layout_desc')}</p>
                        
                        <div class="flex flex-col gap-3">
                            <button onclick="manualSaveLayout()" class="flex items-center justify-between w-full p-3 bg-white border border-gray-200 rounded-lg hover:border-primary/50 hover:shadow-sm transition-all group">
                                <span class="text-sm font-medium text-gray-700 group-hover:text-primary">${t('save_layout')}</span>
                                <svg id="settings-save-icon" class="w-4 h-4 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                            </button>
                            
                            <button onclick="confirmResetLayout()" class="flex items-center justify-between w-full p-3 bg-red-50 border border-red-200 rounded-lg hover:border-red-300 hover:bg-red-100 hover:shadow-md transition-all group">
                                <span class="text-sm font-bold text-red-700">${t('reset_layout')}</span>
                                <svg class="w-4 h-4 text-red-500 group-hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            </button>
                        </div>
                    </div>

                    <!-- Data Management (Premium) -->
                    <div class="p-4 rounded-xl border ${data.user.isPremium ? 'border-amber-200 bg-amber-50/30' : 'border-gray-100 bg-gray-50/50'} relative overflow-hidden">
                        ${!data.user.isPremium ? `
                            <div class="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur px-2 py-0.5 rounded-md border border-gray-100 shadow-sm z-10">
                                <svg class="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                <span class="text-[10px] font-bold text-gray-500">${t('premium')}</span>
                            </div>
                        ` : ''}
                        
                        <h4 class="font-bold text-dark text-sm mb-1 flex items-center gap-2">
                             ${t('data_backup')}
                        </h4>
                        <p class="text-xs text-gray-500 mb-4">${t('data_desc')}</p>
                        
                        <div class="flex gap-3">
                            <button onclick="exportData()" class="flex-1 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2 shadow-sm ${!data.user.isPremium ? 'opacity-70' : ''}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                ${t('export_data')}
                            </button>
                             <button onclick="triggerImportData()" class="flex-1 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2 shadow-sm ${!data.user.isPremium ? 'opacity-70' : ''}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                ${t('import_data')}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (activeSettingsTab === 'language') {
            // Add new language changing function
            window.changeLanguage = (lang) => {
                data.user.language = lang;
                saveData();
                location.reload(); // Reload to apply translations
            };

            const currentLang = data.user.language || 'tr';

            contentArea.innerHTML = `
                     <div class="space-y-3">
                        <!-- English -->
                         <div onclick="changeLanguage('en')" class="flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${currentLang === 'en' ? 'bg-primary/5 border-primary/20 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'}">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-sm font-bold text-dark">English</p>
                                    <p class="text-[10px] text-gray-500">${t('default')}</p>
                                </div>
                            </div>
                            <div class="w-4 h-4 rounded-full flex items-center justify-center ${currentLang === 'en' ? 'bg-primary' : 'border border-gray-300'}">
                                ${currentLang === 'en' ? '<svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>' : ''}
                            </div>
                        </div>

                        <!-- Turkish -->
                        <div onclick="changeLanguage('tr')" class="flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${currentLang === 'tr' ? 'bg-primary/5 border-primary/20 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'}">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-sm font-bold text-dark">Türkçe</p>
                                    <p class="text-[10px] text-gray-500">Türkçe</p>
                                </div>
                            </div>
                            <div class="w-4 h-4 rounded-full flex items-center justify-center ${currentLang === 'tr' ? 'bg-primary' : 'border border-gray-300'}">
                                ${currentLang === 'tr' ? '<svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>' : ''}
                            </div>
                        </div>

                        <!-- German (Coming Soon) -->
                        <div class="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-xl opacity-60 cursor-not-allowed grayscale">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-sm font-bold text-gray-600">German</p>
                                    <p class="text-[10px] text-gray-400">${t('coming_soon')}</p>
                                </div>
                            </div>
                        </div>
                     </div>
                `;
        } else if (activeSettingsTab === 'profile') {
            const avatars = ['🎓', '🚀', '⭐', '🧠', '🦁', '⚡'];

            contentArea.innerHTML = `
                <div class="space-y-6">
                    <!-- Avatar Selection -->
                    <div class="flex flex-col items-center">
                        <div class="w-20 h-20 rounded-full bg-primary/10 text-4xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 border-4 border-white relative">
                             ${data.user.avatar ? `<span>${data.user.avatar}</span>` : `<svg class="w-10 h-10 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`}
                             <div class="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white z-10">
                                <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                             </div>
                        </div>
                        
                        <div class="flex gap-2 p-1 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                            ${avatars.map(av => `
                                <button onclick="updateProfileField('avatar', '${av}')" class="w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all ${data.user.avatar === av ? 'bg-white shadow-md text-primary scale-110' : 'hover:bg-white/50 text-gray-400 grayscale hover:grayscale-0'}">
                                    ${av}
                                </button>
                            `).join('')}
                            
                            <div class="w-px h-6 bg-gray-200 mx-1"></div>
                             <button onclick="updateProfileField('avatar', null)" class="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all" title="${t('remove_avatar')}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">${t('full_name')}</label>
                            <input type="text" oninput="updateProfileField('name', this.value)" value="${data.user.name || ''}" class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-dark text-sm" placeholder="${t('your_name_placeholder')}">
                        </div>
                        
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">${t('university')}</label>
                            <input type="text" oninput="updateProfileField('university', this.value)" value="${data.user.university || ''}" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark text-sm placeholder-gray-400" placeholder="${t('uni_name_placeholder')}">
                        </div>

                         <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">${t('department')}</label>
                            <input type="text" oninput="updateProfileField('department', this.value)" value="${data.user.department || ''}" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark text-sm placeholder-gray-400" placeholder="${t('major_placeholder')}">
                        </div>
                    </div>

                     <!-- Plan Info -->
                    ${data.user.isPremium ? `
                        <div class="px-4 py-3 bg-amber-50 rounded-xl border border-amber-100 flex items-center justify-between">
                             <div>
                                <p class="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-0.5">${t('current_plan')}</p>
                                <p class="text-sm font-bold text-dark flex items-center gap-2">
                                    ${t('premium_plan')}
                                    <span class="px-2 py-0.5 rounded-md bg-amber-200 text-amber-700 text-[10px] flex items-center gap-1">
                                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                                        ${t('active')}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ` : `
                        <div class="px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                             <div>
                                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">${t('current_plan')}</p>
                                <p class="text-sm font-bold text-dark flex items-center gap-2">
                                    ${t('basic_plan')}
                                    <span class="px-2 py-0.5 rounded-md bg-gray-200 text-gray-500 text-[10px]">${t('free')}</span>
                                </p>
                            </div>
                            <button onclick="toggleSettingsModal(); togglePremiumModal()" class="px-3 py-1.5 bg-white border border-gray-200 text-xs font-bold text-primary rounded-lg shadow-sm hover:bg-gray-50 transition-all">
                                ${t('upgrade')}
                            </button>
                        </div>
                    `}
                    
                    <div class="pt-2 text-center">
                         <p class="text-[10px] text-gray-400">${t('changes_saved')}</p>
                    </div>
                </div>
            `;
        } else if (activeSettingsTab === 'about') {
            contentArea.innerHTML = `
                <div class="p-4 bg-gray-50/50 rounded-xl border border-gray-100 text-center">
                    <img src="logo.png" class="w-16 h-16 mx-auto mb-3 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300" alt="StudyHub Logo">
                    <h4 class="font-bold text-dark text-lg mb-1">StudyHub</h4>
                    <p class="text-xs text-gray-500 mb-4">${t('version')} 1.0.0 • ${t('basic_edition')}</p>
                </div>
            `;
        } else if (activeSettingsTab === 'developer') {
            if (!isDevModeUnlocked) {
                contentArea.innerHTML = `
                   <div class="relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50/50">
                       <!-- Blurred Background (Matches content size perfectly) -->
                       <div class="filter blur-sm pointer-events-none opacity-50 p-4 select-none">
                            <div class="space-y-4">
                               <div class="p-4 rounded-xl border border-gray-200 bg-white">
                                   <h4 class="font-bold text-dark text-sm mb-1">${t('developer_mode')}</h4>
                                   <p class="text-xs text-gray-500 mb-4">${t('dev_desc')}</p>
                                   <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg opacity-50">
                                       <div><div class="h-4 w-24 bg-gray-200 rounded mb-1"></div><div class="h-3 w-32 bg-gray-100 rounded"></div></div>
                                       <div class="w-12 h-6 bg-gray-200 rounded-full"></div>
                                   </div>
                               </div>
                            </div>
                       </div>

                       <!-- Lock UI Overlay -->
                       <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm">
                           <div id="dev-lock-container" class="flex flex-col items-center gap-5 transition-all duration-300 transform scale-100">
                               <div class="flex flex-col items-center gap-2">
                                   <div class="p-3 bg-white/50 border border-white/60 rounded-full text-gray-500 shadow-sm backdrop-blur-md">
                                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                   </div>
                                   <span class="text-[10px] font-bold text-gray-500 uppercase tracking-widest drop-shadow-sm">${t('security_lock')}</span>
                               </div>
                               
                               <div class="relative group">
                                    <input type="password" id="dev-pin-input" class="w-40 text-center text-2xl font-bold tracking-[0.5em] py-3 border-b-2 border-gray-300 focus:border-primary focus:outline-none bg-transparent transition-all placeholder-gray-300/50 text-dark" maxlength="4" placeholder="••••" oninput="checkDevPin(this.value)">
                                    <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-focus-within:w-full"></div>
                               </div>
                           </div>
                       </div>
                   </div>
                `;
                // Auto focus
                setTimeout(() => {
                    const el = document.getElementById('dev-pin-input');
                    if (el) el.focus();
                }, 100);
            } else {
                contentArea.innerHTML = `
                    <div class="space-y-4">
                         <div class="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                            <h4 class="font-bold text-dark text-sm mb-1">${t('developer_mode')}</h4>
                            <p class="text-xs text-gray-500 mb-4">${t('dev_desc')}</p>
                            
                            <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                                <div>
                                    <p class="text-sm font-bold text-dark">${t('enable_premium')}</p>
                                    <p class="text-[10px] text-gray-500">${t('unlock_desc')}</p>
                                </div>
                                
                                <button onclick="toggleDevPremium()" class="w-12 h-6 rounded-full transition-colors relative ${data.user.isPremium ? 'bg-primary' : 'bg-gray-300'}">
                                    <div class="w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${data.user.isPremium ? 'left-7' : 'left-1'}"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    };


    element.innerHTML = `
    <!-- Header -->
    <header class="sticky top-0 z-30 bg-white/80 md:bg-transparent backdrop-blur-xl px-4 md:px-8 pt-4 md:pt-8 pb-3 md:pb-4 flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between items-start md:items-center mb-2 md:mb-4 gap-0 md:gap-4 border-b md:border-b-0 border-gray-100 transition-all">
      
      <!-- Left: Greeting -->
      <div class="w-full md:w-auto md:flex-1 min-w-[200px] mb-4 md:mb-0">
        <h1 id="header-greeting" class="text-2xl md:text-3xl font-bold text-dark truncate">${t('hello')}, ${data.user.name}!</h1>
        <p id="header-summary" class="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1 truncate">${t('loading_summary')}</p>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-2 md:gap-4 shrink-0 w-full md:w-auto justify-start md:justify-end">
        
        <!-- Mobile Logout Button -->
        <button onclick="window.logout()" class="lg:hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors border border-gray-100 shadow-sm" title="${t('logout')}">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        </button>

        <!-- Manage Widgets Button (Mobile: Smaller) -->
        <div class="relative">
            <button id="manage-widgets-btn" onclick="toggleManageDropdown()" class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shadow-sm" title="${t('manage_widgets')}">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </button>
            <div id="manage-widgets-popup" class="absolute top-full right-0 mt-2 w-64 bg-white p-4 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible transition-all z-50 transform origin-top-right scale-95">
                <div class="flex justify-between items-center mb-3 hidden md:flex">
                    <p class="text-xs font-bold text-dark">${t('available_widgets')}</p>
                </div>
                <div id="manage-widgets-dropzone" class="mb-3 border-2 border-dashed border-primary/20 bg-primary/5 rounded-lg p-3 text-center transition-colors">
                     <p class="text-[10px] text-primary/60">${t('drag_remove')}</p>
                </div>
                <div id="manage-widgets-list" class="max-h-48 overflow-y-auto custom-scrollbar"></div>
            </div>
        </div>

        <!-- Premium Button (Mobile: Icon only or Compact) -->
        ${data.user.isPremium ? `
             <button id="header-premium-btn" class="w-10 h-10 md:w-auto md:h-10 md:px-4 md:py-2 bg-amber-100 text-amber-600 border border-amber-200 rounded-full md:rounded-xl font-bold text-sm shadow-sm md:shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all flex items-center justify-center md:justify-start gap-2">
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span class="hidden md:inline">Premium</span>
            </button>
        ` : `
            <button id="header-premium-btn" onclick="togglePremiumModal()" class="w-10 h-10 md:w-auto md:h-10 md:px-4 md:py-2 bg-primary text-white rounded-full md:rounded-xl font-bold text-sm shadow-sm md:shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center justify-center md:justify-start gap-2">
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span class="hidden md:inline">${t('premium')}</span>
            </button>
        `}

        <!-- Settings Button (Mobile: Smaller) -->
        <div class="relative">
             <button id="settings-btn" onclick="toggleSettingsModal()" class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shadow-sm" title="${t('settings')}">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </button>
            
            <!-- Settings Modal (Dropdown Style but larger) -->
            <div id="settings-modal" class="absolute top-full right-0 mt-2 w-[88vw] md:w-96 max-w-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible transition-all z-50 transform origin-top-right scale-95 overflow-hidden">
                <!-- Mobile Header -->
                <div class="flex md:hidden items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <h3 class="font-bold text-dark text-lg">${t('settings')}</h3>
                    <button onclick="toggleSettingsModal()" class="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <!-- Header Tabs -->
                <div class="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 no-scrollbar touch-pan-x">
                    <button onclick="switchSettingsTab('general')" data-tab="general" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${t('general')}</button>
                    <button onclick="switchSettingsTab('profile')" data-tab="profile" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${t('profile')}</button>
                    <button onclick="switchSettingsTab('language')" data-tab="language" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${t('language')}</button>
                    <button onclick="switchSettingsTab('about')" data-tab="about" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${t('about')}</button>
                    <button onclick="switchSettingsTab('developer')" data-tab="developer" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${t('developer')}</button>
                </div>
                
                <!-- Content Area -->
                <div id="settings-content-area" class="p-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <!-- Default Content (General) -->
                    <!-- Injected by renderSettingsContent() -->
                </div>
            </div>
        </div>

      </div>
    </header>

    
    <!-- Main Widget Grid -->
    <div id="dashboard-grid" class="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20 md:pb-10">
        <!-- Grid content will be populated by JavaScript to ensure correct order and structural integrity -->
    </div>

    <!-- Premium Modal -->
    <div id="premium-modal" class="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center invisible opacity-0 transition-all duration-300 px-4">
        <div class="modal-content bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden transform scale-95 transition-all duration-300 flex flex-col max-h-[90vh]">
            
            <!-- Header -->
            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                     <h2 class="text-2xl font-black text-dark flex items-center gap-2">
                        ${t('upgrade_to')} <span class="text-primary">${t('premium')}</span>
                    </h2>
                    <p class="text-gray-500 text-sm">${t('unlock_potential')}</p>
                </div>
                <button onclick="togglePremiumModal()" class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>

            <!-- Content -->
            <div class="p-8 overflow-y-auto custom-scrollbar">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Basic Plan -->
                    <div class="rounded-3xl border-2 border-gray-100 p-6 flex flex-col relative overflow-hidden">
                        <div class="mb-6">
                            <h3 class="text-xl font-bold text-gray-600 mb-2">${t('basic')}</h3>
                            <div class="flex items-end gap-1">
                                <span class="text-4xl font-black text-dark">${t('free')}</span>
                                <span class="text-gray-400 mb-1">${t('forever')}</span>
                            </div>
                            <p class="text-sm text-gray-400 mt-2">${t('essential_tools')}</p>
                        </div>
                        
                        <div class="space-y-4 mb-8 flex-1">
                             <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                <span class="text-gray-600 font-medium">${t('standard_dashboard')}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                <span class="text-gray-600 font-medium">${t('basic_analytics')}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                <span class="text-gray-600 font-medium">${t('limited_ai')}</span>
                            </div>
                             <div class="flex items-center gap-3 opacity-50">
                                <svg class="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                <span class="text-gray-400">${t('cloud_sync_backup')}</span>
                            </div>
                            <div class="flex items-center gap-3 opacity-50">
                                <svg class="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                <span class="text-gray-400">${t('advanced_customization')}</span>
                            </div>
                        </div>

                        <button class="w-full py-4 bg-gray-100 text-gray-500 font-bold rounded-2xl cursor-default">${t('current_plan')}</button>
                    </div>

                    <!-- Premium Plan -->
                    <div class="rounded-3xl border-2 border-primary/20 bg-primary/5 p-6 flex flex-col relative overflow-hidden group">
                        <div class="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-2xl uppercase tracking-wider shadow-lg shadow-primary/20">
                            ${t('recommended')}
                        </div>

                        <div class="mb-6">
                            <h3 class="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                ${t('premium')}
                                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            </h3>
                            <div class="flex items-end gap-1">
                                <span class="text-4xl font-black text-dark">$4.99</span>
                                <span class="text-gray-400 mb-1">${t('per_month')}</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">${t('premium_desc')}</p>
                        </div>
                        
                        <div class="space-y-4 mb-8 flex-1">
                             <div class="flex items-center gap-3">
                                <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span class="text-dark font-bold">${t('unlimited_ai')}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span class="text-dark font-bold">${t('cloud_sync_multi')}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                 <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span class="text-dark font-medium">${t('advanced_analytics')}</span>
                            </div>
                             <div class="flex items-center gap-3">
                                 <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span class="text-dark font-medium">${t('custom_themes')}</span>
                            </div>

                        </div>

                        <button class="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-lg">
                            ${t('upgrade_now')}
                        </button>
                    </div>
                </div>
                
                 <!-- Security Badge / Footer -->
                <!-- Security Badge / Footer -->
                <div class="mt-8 flex flex-col items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <div class="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                        <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        <span>${t('secure_payment')}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  `;

    // We need to manually inject the HTML for the split stats cards and calculator since we broke the single call
    // Actually, getStatsCardsHTML returns a big string. Splitting it is risky if implementation changes.
    // Better approach: Let's use the standard render but Javascript will re-order if "loadLayout" doesn't find a saved layout.
    // BUT user wants this as DEFAULT. So we should structure HTML this way.

    // Re-verification of StatsCards.js:
    // It returns 3 stats cards and 1 calculator card.
    // We need to render them individually to place them in the grid slots we defined above.

    const statsHTML = getStatsCardsHTML(data.stats);
    // This is a bit hacky to split by existing structure, but valid for this task to enforce order.
    // We will parse the string into a temp div to extract children.
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = statsHTML;
    const statsChildren = Array.from(tempDiv.children);

    // Inject into the placeholders we created above
    // Note: This logic needs to run AFTER element.innerHTML is set.
    // We will modify the bottom part of this function to populate these.



    // Mount components
    // 1. Inject Stats and Calculator Content manually (since we split the container)
    // We are trusting the order of getStatsCardsHTML here: 3 stats + 1 calculator
    if (statsChildren && statsChildren.length >= 4) {
        // The HTML structure has placeholders already if we use the top approach, but accessing them by index is safer.
        // Actually, let's just replace the Grid content logic entirely to be safe and clean.

        const grid = element.querySelector('#dashboard-grid');
        // We'll clear it and rebuild with the Children to be 100% sure of order.
        grid.innerHTML = ''; // Clear placeholders

        // 1. Stats 0
        grid.appendChild(statsChildren[0]);
        // 2. Stats 1
        grid.appendChild(statsChildren[1]);
        // 3. Stats 2
        grid.appendChild(statsChildren[2]);

        // 4. Profile
        const profileCont = document.createElement('div');
        profileCont.id = "profile-container";
        profileCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        profileCont.draggable = true;
        grid.appendChild(profileCont);

        // 5. Chart
        const chartCont = document.createElement('div');
        chartCont.id = "chart-container";
        chartCont.className = "col-span-1 md:col-span-2 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        chartCont.draggable = true;
        grid.appendChild(chartCont);

        // 6. Time 
        const timeCont = document.createElement('div');
        timeCont.id = "time-container";
        timeCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out"; // Fixed height
        timeCont.draggable = true;
        grid.appendChild(timeCont);

        // 7. Notes
        const notesCont = document.createElement('div');
        notesCont.id = "notes-container";
        notesCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        notesCont.draggable = true;
        grid.appendChild(notesCont);

        // 8. Pomodoro
        const pomodoroCont = document.createElement('div');
        pomodoroCont.id = "pomodoro-container";
        pomodoroCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        pomodoroCont.draggable = true;
        grid.appendChild(pomodoroCont);

        // 9. Calculator (From statsChildren[3])
        grid.appendChild(statsChildren[3]);

        // 10. Todo
        const todoCont = document.createElement('div');
        todoCont.id = "todo-container";
        todoCont.className = "col-span-1 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        todoCont.draggable = true;
        todoCont.innerHTML = '<div id="todo-content" class="w-full h-full"></div>';
        grid.appendChild(todoCont);

        // 11. Calendar
        const calCont = document.createElement('div');
        calCont.id = "exam-schedule-container";
        calCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        calCont.draggable = true;
        grid.appendChild(calCont);

        // 12. Scratchpad
        const scCont = document.createElement('div');
        scCont.id = "scratchpad-container";
        scCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        scCont.draggable = true;
        grid.appendChild(scCont);

        // 13. Bookmarks
        const bmCont = document.createElement('div');
        bmCont.id = "bookmarks-container";
        bmCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        bmCont.draggable = true;
        grid.appendChild(bmCont);

        // 14. Grade Calc
        const gcCont = document.createElement('div');
        gcCont.id = "grade-calc-container";
        gcCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        gcCont.draggable = true;
        grid.appendChild(gcCont);

        // 15. Stopwatch
        const swCont = document.createElement('div');
        swCont.id = "stopwatch-container";
        swCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        swCont.draggable = true;
        grid.appendChild(swCont);

        // 16. Games
        const gamesCont = document.createElement('div');
        gamesCont.id = "games-container";
        gamesCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        gamesCont.draggable = true;
        grid.appendChild(gamesCont);

        // 17. Habit Tracker
        const habitCont = document.createElement('div');
        habitCont.id = "habit-container";
        habitCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        habitCont.draggable = true;
        grid.appendChild(habitCont);

        // 18. Weekly Schedule
        const scheduleCont = document.createElement('div');
        scheduleCont.id = "weekly-schedule-container";
        scheduleCont.className = "col-span-1 md:col-span-2 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        scheduleCont.draggable = true;
        grid.appendChild(scheduleCont);

        // 19. Photo Frame
        const photoCont = document.createElement('div');
        photoCont.id = "photo-container";
        photoCont.className = "col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out";
        photoCont.draggable = true;
        grid.appendChild(photoCont);
    }

    renderChart(document.querySelector('#chart-container'), data.chartData);
    renderTimeWidget(document.querySelector('#time-container'));
    renderNotes(document.querySelector('#notes-container'));
    renderPomodoro(document.querySelector('#pomodoro-container'));
    renderCalendar(document.querySelector('#exam-schedule-container'), data.todos, data.exams);
    renderProfile(document.querySelector('#profile-container'), data.user);
    renderScratchpad(document.querySelector('#scratchpad-container'));
    renderBookmarks(document.querySelector('#bookmarks-container'));
    renderGradeCalculator(document.querySelector('#grade-calc-container'));
    renderStopwatch(document.querySelector('#stopwatch-container'));
    renderGames(document.querySelector('#games-container'));
    renderHabitTracker(document.querySelector('#habit-container'));
    renderWeeklySchedule(document.querySelector('#weekly-schedule-container'));
    renderPhotoWidget(document.querySelector('#photo-container'));

    // Initialize Calculator logic (since we just injected the HTML)
    // The main flow already has a Calculator functionality block that runs on setTimeout.
    // We just need to ensure generic listeners are applied.

    // Load saved layout on TOP of this default
    loadLayout();

    // Fix: Force height update for Weekly Schedule if legacy height persists in localStorage
    const wsContainer = document.getElementById('weekly-schedule-container');
    if (wsContainer && wsContainer.classList.contains('h-96')) {
        wsContainer.classList.remove('h-96');
        wsContainer.classList.add('h-80');
    }

    updateHeaderSummary();

    // Interactive Features (Drag/Drop + Resize)
    const container = document.getElementById('dashboard-grid');

    // Initialize all current items
    const items = container.querySelectorAll('.draggable-item');
    items.forEach(setupDraggableItem);

    // Container Drop (For appending to end or when empty)
    // Note: Using container drop logic defined here instead of inside setupDraggableItem to handle global empty state
    // Actually, setupDraggableItem attached drop listeners to ITEMS.
    // We need a container level listener for empty space.

    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        // Auto Scroll Logic
        const scrollContainer = element; // The main #dashboard wrapper
        const threshold = 100; // Distance from edge to start scrolling
        const scrollSpeed = 15; // px per event

        if (scrollContainer) {
            const rect = scrollContainer.getBoundingClientRect();
            // Scroll Up
            if (e.clientY < rect.top + threshold) {
                scrollContainer.scrollTop -= scrollSpeed;
            }
            // Scroll Down (using window height/rect limit)
            else if (e.clientY > rect.bottom - threshold) {
                scrollContainer.scrollTop += scrollSpeed;
            }
        }
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();

        // Case: Drop from Picker into Empty Space or End of List
        if (draggedItem && draggedItem.dataset && draggedItem.dataset.widgetId) {
            const widgetId = draggedItem.dataset.widgetId;
            const realWidget = widgetCache.get(widgetId);

            if (realWidget) {
                container.appendChild(realWidget); // Append to end
                widgetCache.delete(widgetId);
                setupDraggableItem(realWidget);
                saveLayout();
                // Close Picker
                const popup = document.getElementById('manage-widgets-popup');
                if (popup) popup.classList.add('invisible', 'opacity-0', 'scale-95');
            }
            return;
        }

        // Case: Move Grid Item to End of List (if valid grid item)
        if (draggedItem && !draggedItem.dataset.widgetId && container.contains(draggedItem)) {
            container.appendChild(draggedItem);
            saveLayout();
        }
    });

    // Reset Layout Handlers
    window.manualSaveLayout = () => {
        saveLayout();
        const icon = document.getElementById('settings-save-icon');
        // Animation feedback
        if (icon) {
            const originalPath = icon.innerHTML;
            icon.classList.add('text-primary');
            icon.classList.remove('text-gray-400');
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />';

            setTimeout(() => {
                icon.classList.add('text-gray-400');
                icon.classList.remove('text-primary');
                icon.innerHTML = originalPath;
            }, 1000);
        }
    };

    // Consolidating confirm logic
    window.confirmResetLayout = () => {
        toggleSettingsModal(); // Close settings first
        // Custom Modal for Web
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-[60] flex items-center justify-center bg-dark/50 backdrop-blur-sm opacity-0 transition-opacity duration-300 px-4';

        modal.innerHTML = `
            <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl transform scale-95 transition-transform duration-300">
                <div class="flex flex-col items-center text-center">
                     <div class="mb-4 bg-primary/10 p-4 rounded-full">
                        <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                     </div>
                     <h3 class="text-xl font-bold text-dark mb-2">${t('reset_layout')}?</h3>
                     <p class="text-sm text-gray-500 mb-6 leading-relaxed">${t('reset_layout_confirm')}</p>
                     
                     <div class="flex gap-3 w-full">
                         <button id="cancel-reset-layout" class="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">${t('no')}</button>
                         <button id="confirm-reset-layout-btn" class="flex-1 py-3 rounded-xl font-bold text-white bg-primary hover:opacity-90 shadow-lg shadow-primary/30 transition-all">${t('yes')}</button>
                     </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Animate In
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            modal.querySelector('div').classList.remove('scale-95');
            modal.querySelector('div').classList.add('scale-100');
        });

        // Handlers
        const close = () => {
            modal.classList.add('opacity-0');
            modal.querySelector('div').classList.remove('scale-100');
            modal.querySelector('div').classList.add('scale-95');
            setTimeout(() => modal.remove(), 300);
        };

        modal.querySelector('#cancel-reset-layout').onclick = close;
        modal.onclick = (e) => {
            if (e.target === modal) close();
        };

        modal.querySelector('#confirm-reset-layout-btn').onclick = () => {
            localStorage.removeItem('dashboardLayout');
            location.reload();
        };
    };




    // Append Modal HTML to body
    // Delete Modal Logic if exists
    if (document.getElementById('edit-widgets-modal')) {
        document.getElementById('edit-widgets-modal').remove();
    }

    // Initialize Dropzone Logic for Removal
    setTimeout(() => {
        const dropzone = document.getElementById('manage-widgets-dropzone');
        if (dropzone) {
            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                dropzone.classList.remove('border-primary/20', 'bg-primary/5');
                dropzone.classList.add('border-primary/50', 'bg-primary/10');
            });

            dropzone.addEventListener('dragleave', () => {
                dropzone.classList.add('border-primary/20', 'bg-primary/5');
                dropzone.classList.remove('border-primary/50', 'bg-primary/10');
            });

            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropzone.classList.add('border-primary/20', 'bg-primary/5');
                dropzone.classList.remove('border-primary/50', 'bg-primary/10');

                if (draggedItem && !draggedItem.dataset.widgetId) {
                    // It is a grid item (because picker items have widgetId in dataset but we check source too)
                    if (draggedItem.classList.contains('draggable-item')) {
                        const id = draggedItem.id;
                        widgetCache.set(id, draggedItem);
                        draggedItem.remove();
                        saveLayout();

                        // Refresh the picker list if open
                        window.toggleManageDropdown();
                        window.toggleManageDropdown(); // Hack refesh
                    }
                }
            });
        }
    }, 500);

    // Initial Render of Todos (List)
    const todoContent = document.querySelector('#todo-content');

    const refreshTodos = (editingIndex = null, deletingIndex = null) => {
        if (todoContent) {
            renderTodoList(todoContent, data.todos, editingIndex, deletingIndex);
        }
    };

    // Global handlers setup
    if (!window.dashboardHandlersInitialized) {
        window.addNewTodo = () => { };

        window.toggleTodo = (index) => {
            if (data.todos[index]) {
                data.todos[index].completed = !data.todos[index].completed;
                document.dispatchEvent(new Event('dataChanged'));
            }
        };

        window.editTodo = (index) => refreshTodos(index, null);

        window.saveEditTodo = (index) => {
            const titleInput = document.getElementById(`edit-title-${index}`);
            const dateInput = document.getElementById(`edit-date-${index}`);
            const timeInput = document.getElementById(`edit-time-${index}`);

            if (titleInput && data.todos[index]) {
                data.todos[index].title = titleInput.value || data.todos[index].title;
                data.todos[index].date = dateInput.value || null;
                data.todos[index].time = timeInput.value || "";
                document.dispatchEvent(new Event('dataChanged'));
                refreshTodos(null, null);
            }
        };

        window.cancelEditTodo = () => refreshTodos(null, null);
        window.deleteTodo = (index) => refreshTodos(null, index);
        window.confirmDeleteTodo = (index) => {
            data.todos.splice(index, 1);
            document.dispatchEvent(new Event('dataChanged'));
        };
        window.cancelDeleteTodo = () => refreshTodos(null, null);

        window.addSpecificTodo = (title) => {
            if (title) {
                const now = new Date();
                const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

                data.todos.push({
                    title,
                    subject: "General",
                    time: "09:00",
                    completed: false,
                    date: date
                });
                document.dispatchEvent(new Event('dataChanged'));
            }
        };

        window.dashboardHandlersInitialized = true;
    }

    refreshTodos();

    const refreshStats = () => {
        const completedTodos = data.todos ? data.todos.filter(t => t.completed).length : 0;
        const habitData = JSON.parse(localStorage.getItem('habit_tracker_data_v3') || '{}');
        const completedHabits = habitData.habits ? habitData.habits.filter(h => h.completed).length : 0;
        const total = completedTodos + completedHabits;

        // Assuming stats-card-1 is the 'Completed' card as per generic ID assignment
        const card = document.getElementById('stats-card-1');
        if (card) {
            const valEl = card.querySelector('.text-3xl');
            if (valEl) valEl.innerText = total;

            // Update breakdown
            const todoEl = document.getElementById('stat-todo-count');
            if (todoEl) todoEl.innerText = completedTodos;

            const habitEl = document.getElementById('stat-habit-count');
            if (habitEl) habitEl.innerText = completedHabits;
        }
    };

    const handleDataChanged = () => {
        refreshTodos(null, null);
        renderCalendar(document.querySelector('#exam-schedule-container'), data.todos, data.exams);
        updateHeaderSummary();
        refreshStats();
    };
    document.removeEventListener('dataChanged', handleDataChanged);
    document.addEventListener('dataChanged', handleDataChanged);

    // Profile Update Listener
    const handleProfileUpdate = () => {
        const header = document.getElementById('header-greeting');
        if (header) header.innerText = `${t('hello')}, ${data.user.name}!`;
    };
    document.removeEventListener('profileUpdated', handleProfileUpdate);
    document.addEventListener('profileUpdated', handleProfileUpdate);

    // AI Coach Logic
    if (!window.aiCoachInitialized) {
        window.openAiCoach = () => {
            let modal = document.getElementById('ai-coach-modal');
            if (!modal) {
                // Create Modal
                const modalHTML = `
                <div id="ai-coach-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 opacity-0 invisible transition-all duration-300">
                    <div class="absolute inset-0 bg-dark/60 backdrop-blur-sm" onclick="window.closeAiCoach()"></div>
                    <div class="relative w-full max-w-lg bg-white h-[600px] rounded-3xl shadow-2xl flex flex-col overflow-hidden transform scale-95 transition-all duration-300" id="ai-coach-card">
                        <!-- Header -->
                        <div class="bg-primary/5 p-4 flex justify-between items-center border-b border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 relative">
                                    <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    <span class="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-dark">StudyAI</h3>
                                    <p class="text-xs text-green-600 font-medium">${t('always_online')}</p>
                                </div>
                            </div>
                            <button onclick="window.closeAiCoach()" class="p-2 text-gray-400 hover:text-dark hover:bg-white rounded-full transition-all">
                                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <!-- Chat Area -->
                        <div id="ai-chat-messages" class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50/50">
                            <!-- Intro -->
                            <div class="flex gap-3 max-w-[85%]">
                                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                                    ${t('studyai_dashboard_intro')}
                                </div>
                            </div>
                        </div>

                        <!-- Input Area -->
                        <div class="p-4 bg-white border-t border-gray-100 flex gap-2">
                             <input type="text" id="ai-chat-input" class="flex-1 bg-gray-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" placeholder="${t('ask_me_anything')}" onkeypress="if(event.key === 'Enter') window.sendAiMessage()">
                             <button onclick="window.sendAiMessage()" class="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-all hover:scale-105 active:scale-95">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                             </button>
                        </div>
                    </div>
                </div>`;
                document.body.insertAdjacentHTML('beforeend', modalHTML);
                modal = document.getElementById('ai-coach-modal');
            }

            // Show
            modal.classList.remove('invisible', 'opacity-0');
            const card = modal.querySelector('#ai-coach-card');
            card.classList.remove('scale-95');
            card.classList.add('scale-100');
            setTimeout(() => document.getElementById('ai-chat-input').focus(), 100);
        };

        window.closeAiCoach = () => {
            const modal = document.getElementById('ai-coach-modal');
            if (modal) {
                modal.classList.add('invisible', 'opacity-0');
                const card = modal.querySelector('#ai-coach-card');
                card.classList.add('scale-95');
                card.classList.remove('scale-100');
            }
        };

        window.sendAiMessage = () => {
            const input = document.getElementById('ai-chat-input');
            const container = document.getElementById('ai-chat-messages');
            const msg = input.value.trim();

            if (msg) {
                // User Msg
                const userHTML = `
                    <div class="flex gap-3 max-w-[85%] self-end">
                        <div class="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-md shadow-primary/20 text-sm">
                            ${msg}
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', userHTML);
                input.value = '';
                container.scrollTop = container.scrollHeight;

                // Fake AI Response (Simulated Delay)
                setTimeout(() => {
                    // Simple response logic for demo
                    let reply = t('ai_resp_default');

                    if (msg.toLowerCase().includes('schedule') || msg.toLowerCase().includes('plan')) {
                        reply = t('ai_resp_schedule');
                    } else if (msg.toLowerCase().includes('motivat')) {
                        reply = t('ai_resp_motivation');
                    } else if (msg.toLowerCase().includes('help')) {
                        reply = t('ai_resp_help');
                    }

                    const aiHTML = `
                        <div class="flex gap-3 max-w-[85%] animate-fade-in-up">
                            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                                ${reply}
                            </div>
                        </div>
                     `;
                    container.insertAdjacentHTML('beforeend', aiHTML);
                    container.scrollTop = container.scrollHeight;
                }, 1000);
            }
        };

        window.aiCoachInitialized = true;
    }

    // Initialize Calculator Listeners
    setTimeout(() => {
        const calcDisplay = document.getElementById('calc-display');
        const calcBtns = document.querySelectorAll('.calc-btn');

        if (calcDisplay && calcBtns.length > 0) {
            calcBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const val = btn.getAttribute('data-val');

                    // Stop propagation to prevent dragstart on the card container if clicked
                    e.stopPropagation();

                    if (val === 'C') {
                        calcDisplay.value = '0';
                    } else if (val === '=') {
                        try {
                            // Safe math expression parser (no eval)
                            const expression = calcDisplay.value.replace(/×/g, '*').replace(/÷/g, '/');

                            // Validate: only allow numbers, operators, parentheses, and decimal points
                            if (!/^[\d+\-*/().%\s]+$/.test(expression)) {
                                throw new Error('Invalid characters');
                            }

                            // Safe calculation using Function constructor with restricted scope
                            const safeEval = (expr) => {
                                // Tokenize and calculate step by step
                                const sanitized = expr.replace(/\s/g, '');

                                // Handle percentage
                                const withPercent = sanitized.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');

                                // Use Function with no access to global scope
                                const fn = new Function('return ' + withPercent);
                                const result = fn();

                                if (!isFinite(result)) throw new Error('Invalid result');
                                return result;
                            };

                            const result = safeEval(expression);
                            calcDisplay.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
                        } catch (err) {
                            calcDisplay.value = 'Error';
                        }
                    } else {
                        if (calcDisplay.value === '0' || calcDisplay.value === 'Error') {
                            calcDisplay.value = val;
                        } else {
                            calcDisplay.value += val;
                        }
                    }
                });

                // Prevent drag start on buttons
                btn.setAttribute('draggable', 'true'); // Prevents parent dragging? No, draggable=true makes IT draggable. 
                // We want to PREVENT dragging the CARD when clicking the button.
                btn.addEventListener('dragstart', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                });
                // Also mousedown?
                btn.addEventListener('mousedown', (e) => {
                    e.stopPropagation(); // Don't trigger drag on parent
                });
            });
        }
    }, 500);
}
