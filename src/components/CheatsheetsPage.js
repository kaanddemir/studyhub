
import { data, saveData } from '../data.js';
import { t } from '../translations.js';

export function renderCheatsheetsPage(element) {
    if (!data.cheatsheets) {
        data.cheatsheets = [];
        saveData();
    }

    let draggedItem = null;

    // --- Drag & Drop Helpers ---
    const saveLayout = () => {
        const container = document.getElementById('sheets-grid').querySelector('.grid');
        if (!container) return;
        const items = Array.from(container.children);
        const layout = items.map(item => item.getAttribute('data-sheet-id'));
        localStorage.setItem('cheatsheetsLayout', JSON.stringify(layout));
    };

    const getSortedSheets = () => {
        const savedLayout = localStorage.getItem('cheatsheetsLayout');
        if (!savedLayout) return data.cheatsheets;

        try {
            const layoutIds = JSON.parse(savedLayout).map(id => parseInt(id));
            const sheetMap = new Map(data.cheatsheets.map(s => [s.id, s]));

            const sorted = [];
            layoutIds.forEach(id => {
                if (sheetMap.has(id)) {
                    sorted.push(sheetMap.get(id));
                    sheetMap.delete(id);
                }
            });
            // Add any valid new items not in layout
            sheetMap.forEach(sheet => sorted.push(sheet));
            return sorted;
        } catch (e) {
            console.error("Failed to parse layout", e);
            return data.cheatsheets;
        }
    };

    const setupDraggableItem = (item) => {
        const container = document.getElementById('sheets-grid').querySelector('.grid');

        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', item.dataset.sheetId);
            // Delay adding opacity so the drag image is opaque
            requestAnimationFrame(() => {
                item.classList.add('opacity-50', 'scale-95');
            });
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('opacity-50', 'scale-95');
            draggedItem = null;
            if (container) {
                container.querySelectorAll('.draggable-item').forEach(i => {
                    i.classList.remove('ring-2', 'ring-primary', 'z-30');
                });
            }
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (draggedItem && draggedItem !== item) {
                item.classList.add('ring-2', 'ring-primary', 'z-30');
            }
        });

        item.addEventListener('dragleave', (e) => {
            if (item.contains(e.relatedTarget)) return;
            item.classList.remove('ring-2', 'ring-primary', 'z-30');
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            item.classList.remove('ring-2', 'ring-primary', 'z-30');

            if (draggedItem && draggedItem !== item) {
                const parent = container;
                const siblings = Array.from(parent.children);
                const idxFrom = siblings.indexOf(draggedItem);
                const idxTo = siblings.indexOf(item);

                if (idxFrom < idxTo) {
                    parent.insertBefore(draggedItem, item.nextSibling);
                } else {
                    parent.insertBefore(draggedItem, item);
                }
                saveLayout();
            }
        });
    };

    const render = () => {
        const sortedSheets = getSortedSheets();

        element.innerHTML = `
        <div class="p-8 h-full flex flex-col relative">
            <header class="flex justify-between items-center mb-8">
                 <div class="flex items-center gap-4">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-3xl font-bold text-dark">${t('cheatsheets')}</h1>
                 </div>
                 
                 <button id="add-sheet-btn" class="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    ${t('new_note')}
                </button>
            </header>
            
            <div id="sheets-grid" class="flex-1 overflow-y-auto custom-scrollbar">
                ${sortedSheets.length === 0 ? `
                    <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl">
                        <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <svg class="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-400 mb-2">${t('no_cheatsheets_yet')}</h2>
                        <p class="text-gray-400 text-sm max-w-xs text-center">${t('create_first_sheet')}</p>
                    </div>
                ` : `
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 pb-10">
                        ${sortedSheets.map(sheet => {
            const hasImages = sheet.images && sheet.images.length > 0;

            return `
                            <div 
                                class="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group relative border border-gray-200 cursor-pointer flex flex-row min-h-[180px] draggable-item overflow-hidden"
                                draggable="true"
                                data-sheet-id="${sheet.id}"
                                onclick="window.navigateTo('cheatsheet-detail', { id: ${sheet.id} })"
                            >
                                <!-- Left Strip -->
                                <div class="w-3 bg-primary shrink-0"></div>
                                
                                <!-- Content Container -->
                                <div class="flex-1 p-6 flex flex-col">
                                    <div class="flex justify-between items-start mb-4">
                                        <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                        
                                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button class="text-gray-300 hover:text-primary p-1.5 rounded-lg hover:bg-primary/10" onclick="event.stopPropagation(); editSheet(${sheet.id})" title="${t('edit_title')}">
                                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                            </button>
                                            <button class="text-gray-300 hover:text-primary p-1.5 rounded-lg hover:bg-primary/10" onclick="event.stopPropagation(); deleteSheet(${sheet.id})" title="${t('delete')}">
                                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <h3 class="text-xl font-bold text-dark leading-tight line-clamp-2 mb-4 pr-2">${sheet.title}</h3>

                                    <div class="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                                        <div class="flex gap-2">
                                             ${hasImages ? `
                                                <span class="flex items-center gap-1 text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded">
                                                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    ${t('attachment')}
                                                </span>
                                            ` : ''}
                                        </div>
                                        <span class="text-[10px] font-bold text-primary/60 uppercase tracking-wider group-hover:text-primary transition-colors">${t('view_details')} &rarr;</span>
                                    </div>
                                </div>
                            </div>
                            `;
        }).join('')}
                    </div>
                `}
            </div>

            <!-- Simple New Note Modal -->
            <div id="add-sheet-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-200">
                <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-sm transform scale-95 transition-all duration-200 p-6">
                    <h3 class="text-xl font-bold text-dark mb-1" id="modal-title">${t('new_note')}</h3>
                    <p class="text-sm text-gray-400 mb-6" id="modal-desc">${t('enter_title_start')}</p>
                    
                    <div class="mb-6">
                        <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${t('title')}</label>
                        <input type="text" id="new-sheet-title" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="${t('new_note_placeholder')}" autocomplete="off">
                    </div>

                    <div class="flex gap-3">
                        <button id="cancel-create-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${t('cancel')}</button>
                        <button id="confirm-create-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm transform active:scale-95">${t('create_one')}</button>
                    </div>
                </div>
            </div>
            
             <!-- Delete Confirmation Modal -->
             <div id="delete-sheet-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${t('delete_note_confirm')}</h3>
                    <p class="text-sm text-gray-400 mb-6">${t('action_undone')}</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${t('cancel')}</button>
                         <button id="confirm-delete-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${t('delete')}</button>
                    </div>
                </div>
            </div>

        </div>
        `;

        attachListeners();
        // Initialize Drag & Drop
        element.querySelectorAll('.draggable-item').forEach(setupDraggableItem);
    };

    const attachListeners = () => {
        const modal = element.querySelector('#add-sheet-modal');
        const modalContent = modal.querySelector('div');
        const modalTitle = modal.querySelector('h3');
        const modalDesc = modal.querySelector('p');
        const addBtn = element.querySelector('#add-sheet-btn');
        const cancelBtn = element.querySelector('#cancel-create-btn');
        const createBtn = element.querySelector('#confirm-create-btn');
        const titleInput = element.querySelector('#new-sheet-title');

        let editingId = null;

        // Open Modal (Create Mode)
        addBtn.addEventListener('click', () => {
            editingId = null;
            modalTitle.textContent = t('new_note');
            modalDesc.textContent = t('enter_title_start');
            createBtn.textContent = t('create_one');

            modal.classList.remove('invisible', 'opacity-0');
            modal.classList.add('visible', 'opacity-100');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
            titleInput.value = ''; // Reset
            setTimeout(() => titleInput.focus(), 100);
        });

        // Close Modal
        const closeModal = () => {
            modal.classList.add('invisible', 'opacity-0');
            modal.classList.remove('visible', 'opacity-100');
            modalContent.classList.add('scale-95');
            modalContent.classList.remove('scale-100');
        };
        cancelBtn.addEventListener('click', closeModal);

        // Create / Update Logic
        createBtn.addEventListener('click', () => {
            const title = titleInput.value.trim();
            if (!title) {
                titleInput.classList.add('ring-2', 'ring-red-500/50', 'border-red-500');
                titleInput.focus();
                return;
            }

            if (editingId) {
                // Edit Mode
                const sheet = data.cheatsheets.find(s => s.id === editingId);
                if (sheet) {
                    sheet.title = title;
                    saveData();
                    closeModal();
                    render();
                }
            } else {
                // Create Mode
                const newSheet = {
                    id: Date.now(),
                    title,
                    tags: [],
                    content: '',
                    images: []
                };

                data.cheatsheets.push(newSheet);
                saveData();
                closeModal();
                render();
            }
        });

        // Enter key support
        titleInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') createBtn.click();
            titleInput.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500');
        });

        // Edit Functionality
        window.editSheet = (id) => {
            const sheet = data.cheatsheets.find(s => s.id === id);
            if (sheet) {
                editingId = id;
                titleInput.value = sheet.title;
                modalTitle.textContent = t('edit_note');
                modalDesc.textContent = t('update_note_title');
                createBtn.textContent = t('save');

                modal.classList.remove('invisible', 'opacity-0');
                modal.classList.add('visible', 'opacity-100');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
                setTimeout(() => titleInput.focus(), 100);
            }
        };

        // Delete Logic
        let sheetToDelete = null;
        const deleteModal = element.querySelector('#delete-sheet-modal');
        const deleteContent = deleteModal.querySelector('div');

        window.deleteSheet = (id) => {
            sheetToDelete = id;
            deleteModal.classList.remove('invisible', 'opacity-0');
            deleteModal.classList.add('visible', 'opacity-100');
            deleteContent.classList.remove('scale-95');
            deleteContent.classList.add('scale-100');
        };

        element.querySelector('#cancel-delete-btn').addEventListener('click', () => {
            deleteModal.classList.add('invisible', 'opacity-0');
            deleteModal.classList.remove('visible', 'opacity-100');
            deleteContent.classList.add('scale-95');
            deleteContent.classList.remove('scale-100');
            sheetToDelete = null;
        });

        element.querySelector('#confirm-delete-btn').addEventListener('click', () => {
            if (sheetToDelete) {
                const idx = data.cheatsheets.findIndex(s => s.id === sheetToDelete);
                if (idx > -1) {
                    // Also remove from layout if present
                    const savedLayout = localStorage.getItem('cheatsheetsLayout');
                    if (savedLayout) {
                        let layoutIds = JSON.parse(savedLayout);
                        layoutIds = layoutIds.filter(lid => lid !== sheetToDelete);
                        localStorage.setItem('cheatsheetsLayout', JSON.stringify(layoutIds));
                    }

                    data.cheatsheets.splice(idx, 1);
                    saveData();
                    render();
                }
            }
        });
    };

    render();
}
