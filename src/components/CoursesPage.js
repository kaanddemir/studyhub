import { data, saveData } from '../data.js';
import { t } from '../translations.js';
import { escapeHTML } from '../security.js';

export function renderCoursesPage(element) {
    // Ensure courses array exists
    if (!data.courses) {
        data.courses = [];
        saveData();
    }

    let draggedItem = null;

    const saveLayout = () => {
        const container = document.getElementById('courses-grid').querySelector('.grid');
        if (!container) return;
        const items = Array.from(container.children);
        const layout = items.map(item => item.getAttribute('data-course-id'));
        localStorage.setItem('coursesLayout', JSON.stringify(layout));
    };

    const getSortedCourses = () => {
        const savedLayout = localStorage.getItem('coursesLayout');
        if (!savedLayout) return data.courses;

        try {
            const layoutIds = JSON.parse(savedLayout).map(id => parseInt(id));
            const courseMap = new Map(data.courses.map(c => [c.id, c]));

            const sorted = [];
            // Add courses in the saved order
            layoutIds.forEach(id => {
                if (courseMap.has(id)) {
                    sorted.push(courseMap.get(id));
                    courseMap.delete(id);
                }
            });
            // Add any remaining courses (newly created ones)
            courseMap.forEach(course => sorted.push(course));

            return sorted;
        } catch (e) {
            console.error("Failed to parse course layout", e);
            return data.courses;
        }
    };

    const setupDraggableItem = (item) => {
        const container = document.getElementById('courses-grid').querySelector('.grid');

        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', item.id);
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
                    i.classList.remove('ring-2', 'ring-primary', 'ring-offset-2', 'z-30');
                    i.classList.remove('ring-2', 'ring-primary'); // Safety clear
                });
            }
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (draggedItem && draggedItem !== item) {
                // Removed ring-offset-2 to prevent "overflowing" look
                // Add z-30 to ensure the ring sits on top of neighbors
                item.classList.add('ring-2', 'ring-primary', 'z-30');
            }
        });

        item.addEventListener('dragleave', (e) => {
            // Fix flickering: ensure we aren't just entering a child element
            if (item.contains(e.relatedTarget)) return;
            item.classList.remove('ring-2', 'ring-primary', 'z-30');
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            item.classList.remove('ring-2', 'ring-primary', 'z-30');

            if (draggedItem && draggedItem !== item) {
                const parent = container;
                // Move draggedItem relative to item
                // Find positions
                const siblings = Array.from(parent.children);
                const idxFrom = siblings.indexOf(draggedItem);
                const idxTo = siblings.indexOf(item);

                if (idxFrom < idxTo) {
                    // Moving down/right: insert after target
                    parent.insertBefore(draggedItem, item.nextSibling);
                } else {
                    // Moving up/left: insert before target
                    parent.insertBefore(draggedItem, item);
                }

                saveLayout();
            }
        });
    };

    const render = () => {
        const sortedCourses = getSortedCourses();

        element.innerHTML = `
        <div class="p-4 md:p-8 h-full flex flex-col relative">
            <header class="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
                 <div class="flex items-center gap-4 w-full md:w-auto">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shrink-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-2xl md:text-3xl font-bold text-dark truncate">${t('my_courses')}</h1>
                 </div>
                 
                 <button id="add-course-btn" class="w-full md:w-auto px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    ${t('new_course')}
                </button>
            </header>
            
            <div id="courses-grid" class="flex-1 overflow-y-auto custom-scrollbar pb-20 md:pb-0">
                ${sortedCourses.length === 0 ? `
                    <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl mx-2 md:mx-0">
                        <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <svg class="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-400 mb-2">${t('no_courses_yet')}</h2>
                        <p class="text-gray-400 text-sm max-w-xs text-center">${t('no_courses_desc')}</p>
                    </div>
                ` : `
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 pb-10">
                        ${sortedCourses.map(course => `
                            <div 
                                id="course-card-${course.id}"
                                data-course-id="${course.id}"
                                draggable="true"
                                onclick="window.navigateTo('course-detail', { id: ${course.id} })" 
                                class="bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative border border-gray-100 cursor-pointer draggable-item flex flex-col overflow-hidden h-52"
                            >
                                <!-- Header Strip -->
                                    <div class="w-14 h-14 rounded-2xl bg-white shadow-sm text-primary flex items-center justify-center font-black text-2xl border border-primary/30 z-10">
                                        ${escapeHTML(course.name).charAt(0).toUpperCase()}
                                    </div>
                                    
                                    <!-- Actions -->
                                     <div class="flex gap-1 z-20">
                                        <button class="text-gray-400 hover:text-primary hover:bg-white/80 p-1.5 rounded-lg transition-all edit-course-btn" data-id="${course.id}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </button>
                                        <button class="text-gray-400 hover:text-red-500 hover:bg-white/80 p-1.5 rounded-lg transition-all delete-course-btn" data-id="${course.id}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                    
                                    <!-- Decorative circle -->
                                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none"></div>
                                </div>

                                <!-- Body -->
                                    <div class="px-6 pb-6 pt-2 flex flex-col flex-1">
                                    <div class="flex items-center gap-2 mb-1">
                                        ${course.code ? `<span class="px-2.5 py-0.5 rounded-md bg-gray-50 text-gray-400 text-[10px] font-bold tracking-wider uppercase border border-gray-100">${escapeHTML(course.code)}</span>` : ''}
                                        <span class="h-1 w-1 rounded-full bg-gray-300"></span>
                                        <span class="text-[10px] font-bold text-gray-300 uppercase tracking-widest">${t('course_caps')}</span>
                                    </div>
                                    
                                    <h3 class="text-xl font-bold text-dark truncate leading-tight mb-2" title="${escapeHTML(course.name)}">${escapeHTML(course.name)}</h3>
                                    
                                    <div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-50/50">
                                        <div class="text-xs text-gray-400 line-clamp-1 max-w-[60%]">
                                            ${escapeHTML(course.note) || `<span class="opacity-50 italic">${t('no_details')}</span>`}
                                        </div>
                                        <span class="text-[10px] font-bold text-primary/60 uppercase tracking-wider group-hover:text-primary transition-colors flex items-center gap-1">
                                            ${t('view_details')} &rarr;
                                        </span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>

            <!-- Course Setup Wizard Modal -->
            <div id="add-course-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
                <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-2xl transform scale-95 transition-all duration-300 overflow-hidden flex flex-col max-h-[90vh]">
                    <!-- Wizard Header -->
                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h3 class="text-lg font-bold text-dark" id="modal-title">${t('new_course_setup')}</h3>
                            <p class="text-xs text-gray-400" id="wizard-step-indicator">${t('step_1_basic')}</p>
                        </div>
                        <button id="close-modal-btn" class="p-1 rounded-full hover:bg-gray-200 text-gray-400 transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <!-- Progress Bar -->
                    <div class="h-1 w-full bg-gray-100">
                        <div id="wizard-progress" class="h-full bg-primary transition-all duration-300 w-1/2"></div>
                    </div>
                    
                    <!-- Wizard Content -->
                    <div class="p-6 overflow-y-auto custom-scrollbar">
                        <!-- Step 1: Basic Info -->
                        <div id="step-1" class="wizard-step space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${t('course_name')} <span class="text-red-400">*</span></label>
                                <input type="text" id="course-name-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Advanced Calculus">
                            </div>
                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${t('course_code')} (${t('optional')})</label>
                                <input type="text" id="course-code-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300 uppercase" placeholder="e.g. MATH 201">
                            </div>
                        </div>

                        <!-- Step 2: Logistics -->
                        <div id="step-2" class="wizard-step hidden space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${t('instructor')}</label>
                                    <input type="text" id="course-instructor-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Dr. Smith">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${t('email')}</label>
                                    <input type="email" id="course-email-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="mail@uni.edu">
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${t('schedule_time')}</label>
                                    <input type="text" id="course-schedule-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Mon 09:00">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${t('location_platform')}</label>
                                    <input type="text" id="course-location-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Room 101">
                                </div>
                            </div>
                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${t('note_optional')}</label>
                                <textarea id="course-note-input" rows="2" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300 resize-none text-sm" placeholder="${t('note_placeholder')}"></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Buttons -->
                    <div class="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-between">
                         <button id="prev-step-btn" class="px-4 py-2 text-gray-400 hover:text-dark font-bold text-sm transition-colors hidden">${t('back')}</button>
                         <button id="next-step-btn" class="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm ml-auto">
                            ${t('next_step')}
                        </button>
                        <button id="finish-step-btn" class="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm ml-auto hidden">
                            ${t('create_course')}
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Delete Confirmation Modal -->
             <div id="delete-course-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${t('delete_course_confirm')}</h3>
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

        // Initialize Drag & Drop for all cards
        element.querySelectorAll('.draggable-item').forEach(setupDraggableItem);
    };

    const attachListeners = () => {
        const modal = element.querySelector('#add-course-modal');
        const modalContent = modal.querySelector('div');
        const addBtn = element.querySelector('#add-course-btn');
        const closeBtn = element.querySelector('#close-modal-btn');

        // Wizard Elements
        const step1 = element.querySelector('#step-1');
        const step2 = element.querySelector('#step-2');
        const nextBtn = element.querySelector('#next-step-btn');
        const prevBtn = element.querySelector('#prev-step-btn');
        const finishBtn = element.querySelector('#finish-step-btn');
        const stepIndicator = element.querySelector('#wizard-step-indicator');
        const progressBar = element.querySelector('#wizard-progress');

        // Inputs
        const nameInput = element.querySelector('#course-name-input');
        const codeInput = element.querySelector('#course-code-input');
        const instructorInput = element.querySelector('#course-instructor-input');
        const emailInput = element.querySelector('#course-email-input');
        const scheduleInput = element.querySelector('#course-schedule-input');
        const locationInput = element.querySelector('#course-location-input');
        const noteInput = element.querySelector('#course-note-input');

        let selectedColor = 'blue';
        let editingCourseId = null;
        const modalTitle = element.querySelector('#modal-title');

        const resetWizard = () => {
            step1.classList.remove('hidden');
            step2.classList.add('hidden');

            prevBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');

            stepIndicator.textContent = t('step_1_basic');
            progressBar.style.width = '50%';

            // Clear inputs
            nameInput.value = '';
            if (codeInput) codeInput.value = '';
            if (instructorInput) instructorInput.value = '';
            if (emailInput) emailInput.value = '';
            if (scheduleInput) scheduleInput.value = '';
            if (locationInput) locationInput.value = '';
            if (noteInput) noteInput.value = '';

            // Validation Reset
            nameInput.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500');

            selectedColor = 'blue';
        };

        // Open Modal (New)
        const openModal = () => {
            editingCourseId = null;
            if (modalTitle) modalTitle.textContent = t('new_course_setup');
            if (finishBtn) finishBtn.textContent = t('create_course');

            resetWizard();
            modal.classList.remove('invisible', 'opacity-0');
            modal.classList.add('visible', 'opacity-100');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
            setTimeout(() => nameInput.focus(), 100);
        };

        // Open Modal (Edit)
        const openEditModal = (id) => {
            const course = data.courses.find(c => c.id === id);
            if (!course) return;

            editingCourseId = id;
            if (modalTitle) modalTitle.textContent = t('edit_course_setup');
            if (finishBtn) finishBtn.textContent = t('save');

            resetWizard();

            // Pre-fill
            nameInput.value = course.name;
            if (codeInput) codeInput.value = course.code || '';
            if (instructorInput) instructorInput.value = course.instructor || '';
            if (emailInput) emailInput.value = course.email || '';
            if (scheduleInput) scheduleInput.value = course.schedule || '';
            if (locationInput) locationInput.value = course.location || '';
            if (noteInput) noteInput.value = course.note || '';
            selectedColor = course.color || 'blue';

            modal.classList.remove('invisible', 'opacity-0');
            modal.classList.add('visible', 'opacity-100');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        };

        // Close Modal
        const closeModal = () => {
            modal.classList.add('invisible', 'opacity-0');
            modal.classList.remove('visible', 'opacity-100');
            modalContent.classList.add('scale-95');
            modalContent.classList.remove('scale-100');
        };

        addBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

        // Wizard Navigation
        nextBtn.addEventListener('click', () => {
            // Validate Step 1
            if (!nameInput.value.trim()) {
                nameInput.classList.add('ring-2', 'ring-red-500/50', 'border-red-500');
                nameInput.focus();
                return;
            }
            nameInput.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500');

            // Go to Step 2
            step1.classList.add('hidden');
            step2.classList.remove('hidden');

            prevBtn.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');

            stepIndicator.textContent = t('step_2_logistics');
            progressBar.style.width = '100%';
        });

        prevBtn.addEventListener('click', () => {
            // Go back to Step 1
            step1.classList.remove('hidden');
            step2.classList.add('hidden');

            prevBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');

            stepIndicator.textContent = t('step_1_basic');
            progressBar.style.width = '50%';
        });

        // Finish / Save Course
        finishBtn.addEventListener('click', () => {
            const name = nameInput.value.trim();
            const code = codeInput ? codeInput.value.trim() : '';
            const instructor = instructorInput ? instructorInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const schedule = scheduleInput ? scheduleInput.value.trim() : '';
            const location = locationInput ? locationInput.value.trim() : '';
            const note = noteInput ? noteInput.value.trim() : '';

            if (editingCourseId) {
                // Update Existing
                const course = data.courses.find(c => c.id === editingCourseId);
                if (course) {
                    course.name = name;
                    course.code = code;
                    course.instructor = instructor;
                    course.email = email;
                    course.schedule = schedule;
                    course.location = location;
                    course.note = note;
                    course.color = selectedColor;
                }
            } else {
                // Create New
                const newCourse = {
                    id: Date.now(),
                    name,
                    code,
                    color: selectedColor,
                    instructor,
                    email,
                    schedule,
                    location,
                    note,
                    resources: [],
                    aiSessions: []
                };

                // Initialize default AI session
                newCourse.aiSessions.push({
                    id: Date.now(),
                    title: 'General Chat',
                    messages: [
                        { sender: 'ai', text: t('studyai_intro').replace('{name}', name) }
                    ],
                    timestamp: Date.now()
                });
                newCourse.currentSessionId = newCourse.aiSessions[0].id;

                data.courses.push(newCourse);
                // Update stats total
                data.stats.courses.total = data.courses.length;
            }

            saveData();
            closeModal();
            render(); // Re-render grid
        });

        // Delete Course Listener
        // Delete Course Logic
        const deleteModal = element.querySelector('#delete-course-modal');
        const deleteModalContent = deleteModal.querySelector('div');
        const cancelDeleteBtn = element.querySelector('#cancel-delete-btn');
        const confirmDeleteBtn = element.querySelector('#confirm-delete-btn');
        let courseIdToDelete = null;

        const closeDeleteModal = () => {
            deleteModal.classList.add('invisible', 'opacity-0');
            deleteModal.classList.remove('visible', 'opacity-100');
            deleteModalContent.classList.add('scale-95');
            deleteModalContent.classList.remove('scale-100');
            courseIdToDelete = null;
        };

        const openDeleteModal = (id) => {
            courseIdToDelete = id;
            deleteModal.classList.remove('invisible', 'opacity-0');
            deleteModal.classList.add('visible', 'opacity-100');
            deleteModalContent.classList.remove('scale-95');
            deleteModalContent.classList.add('scale-100');
        }

        element.querySelectorAll('.delete-course-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openDeleteModal(parseInt(btn.dataset.id));
            });
        });

        element.querySelectorAll('.edit-course-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openEditModal(parseInt(btn.dataset.id));
            });
        });

        cancelDeleteBtn.addEventListener('click', closeDeleteModal);

        confirmDeleteBtn.addEventListener('click', () => {
            if (courseIdToDelete) {
                // Filter out the deleted course
                data.courses = data.courses.filter(c => c.id !== courseIdToDelete);
                data.stats.courses.total = data.courses.length;
                saveData();

                // Update layout storage to remove the deleted ID
                const savedLayout = localStorage.getItem('coursesLayout');
                if (savedLayout) {
                    let layoutIds = JSON.parse(savedLayout);
                    layoutIds = layoutIds.filter(id => parseInt(id) !== courseIdToDelete);
                    localStorage.setItem('coursesLayout', JSON.stringify(layoutIds));
                }

                closeDeleteModal();
                render();
            }
        });

        // Input error reset
        nameInput.addEventListener('input', () => {
            nameInput.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500');
        });
    };

    render();
}
