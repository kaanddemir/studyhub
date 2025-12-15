
import { data, saveData } from '../data.js';

export function renderExamsPage(container) {
    if (!container) return;

    const render = () => {


        // Sort exams by date and time (earliest first)
        const exams = [...(data.exams || [])].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        container.innerHTML = `
            <div class="p-8 h-full flex flex-col relative">
                <header class="flex justify-between items-center mb-8 shrink-0">
                    <div class="flex items-center gap-4">
                        <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <h1 class="text-3xl font-bold text-dark">Exams</h1>
                    </div>
                    <button id="add-exam-btn" class="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                         <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                        Add Exam
                    </button>
                </header>

                <div class="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    ${exams.length === 0 ? `
                        <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl">
                            <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                <svg class="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h2 class="text-xl font-bold text-gray-400 mb-2">No Exams Yet</h2>
                            <p class="text-gray-400 text-sm max-w-xs text-center">Relax! You have no upcoming exams scheduled. Add one to start tracking.</p>
                        </div>
                    ` : `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 content-start pb-10">
                        ${exams.map((exam) => {
            const examDate = new Date(exam.date);
            const today = new Date();
            const timeDiff = examDate - today;
            const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            let statusColor = "bg-primary/10 text-primary";
            if (daysLeft < 3) statusColor += " animate-pulse";

            const month = examDate.toLocaleString('default', { month: 'short' }).toUpperCase();
            const day = examDate.getDate();
            const time = examDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            return `
                            <div class="relative bg-white rounded-3xl drop-shadow-sm hover:drop-shadow-md transition-all group overflow-hidden flex h-32" 
                                 style="-webkit-mask-image: radial-gradient(circle at 6rem 0, transparent 0.75rem, black 0.85rem), radial-gradient(circle at 6rem 100%, transparent 0.75rem, black 0.85rem); mask-image: radial-gradient(circle at 6rem 0, transparent 0.75rem, black 0.85rem), radial-gradient(circle at 6rem 100%, transparent 0.75rem, black 0.85rem); -webkit-mask-composite: source-in; mask-composite: intersect;">
                                <!-- Left Stub -->
                                <div class="w-24 bg-primary/15 flex flex-col items-center justify-center p-3 border-r-2 border-dashed border-primary/30 shrink-0">
                                    <span class="text-xs font-bold text-primary/80 mb-0.5">${month}</span>
                                    <span class="text-3xl font-black text-primary leading-none">${day}</span>
                                    <span class="text-[10px] text-primary/70 mt-1.5 font-medium">${time}</span>
                                </div>

                                <!-- Main Ticket Content -->
                                <div class="flex-1 p-4 flex flex-col h-full relative">
                                    <!-- Actions (Top Right Absolute) -->
                                    <div class="absolute top-2 right-2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button class="text-gray-300 hover:text-primary transition-colors p-1 rounded-md hover:bg-primary/10 edit-exam-btn" data-id="${exam.id}" title="Edit Exam">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </button>
                                        <button class="text-gray-300 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 delete-exam-btn" data-id="${exam.id}" title="Delete Exam">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>

                                    <!-- Center Info -->
                                    <div class="flex-1 flex flex-col items-center justify-center text-center -mt-1">
                                        <h3 class="text-2xl font-black text-dark tracking-tight leading-none mb-1">${exam.code}</h3>
                                        <p class="text-sm text-gray-500 font-medium truncate max-w-[180px]">${exam.name}</p>
                                    </div>

                                    <!-- Footer -->
                                    <div class="mt-auto pt-2 border-t border-dashed border-primary/20 flex items-center justify-between w-full">
                                        <div class="flex items-center gap-2">
                                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 uppercase tracking-wide border border-gray-100">${exam.type}</span>
                                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColor}">${daysLeft > 0 ? `${daysLeft} DAYS LEFT` : (daysLeft === 0 ? 'TODAY' : 'PASSED')}</span>
                                        </div>
                                        <div class="flex items-center gap-1 text-gray-400 text-xs">
                                            <svg class="w-3.5 h-3.5 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            <span class="font-medium text-gray-500">${exam.location}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        `;
        }).join('')}
                    </div>
                    `}

            <!-- Exam Wizard Modal -->
            <div id="add-exam-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xl transform scale-95 transition-all duration-300 overflow-hidden flex flex-col">
                    <!-- Wizard Header -->
                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h3 class="text-lg font-bold text-dark" id="modal-title">New Exam Setup</h3>
                            <p class="text-xs text-gray-400" id="wizard-step-indicator">Step 1 of 2: Basic Info</p>
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
                    <div class="p-6">
                        <!-- Step 1: Basic Details -->
                        <div id="step-1" class="wizard-step space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Course Name <span class="text-red-400">*</span></label>
                                <input type="text" id="ex-name" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Calculus I">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Course Code <span class="text-red-400">*</span></label>
                                    <input type="text" id="ex-code" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. MATH 101">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Exam Type</label>
                                    <select id="ex-type" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium outline-none">
                                        <option value="Midterm">Midterm</option>
                                        <option value="Final">Final</option>
                                        <option value="Quiz">Quiz</option>
                                        <option value="Project">Project</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Step 2: Logistics -->
                        <div id="step-2" class="wizard-step hidden space-y-4">
                             <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Date <span class="text-red-400">*</span></label>
                                    <input type="date" id="ex-date" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Time <span class="text-red-400">*</span></label>
                                    <input type="time" id="ex-time" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm">
                                </div>
                            </div>
                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Location / Platform</label>
                                <input type="text" id="ex-loc" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Room 204 or Online">
                            </div>
                        </div>
                    </div>

                    <!-- Footer Buttons -->
                    <div class="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-between">
                         <button id="prev-step-btn" class="px-4 py-2 text-gray-400 hover:text-dark font-bold text-sm transition-colors hidden">Back</button>
                         <button id="next-step-btn" class="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm ml-auto">
                            Next Step
                        </button>
                        <button id="finish-step-btn" class="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm ml-auto hidden">
                            Add Exam
                        </button>
                    </div>
                </div>
            </div>

            <!-- Delete Confirmation Modal -->
             <div id="delete-exam-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">Delete Exam?</h3>
                    <p class="text-sm text-gray-400 mb-6">This action cannot be undone.</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">Cancel</button>
                         <button id="confirm-delete-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">Delete</button>
                    </div>
                </div>
            </div>
        `;

        attachListeners();
    };


    const attachListeners = () => {
        const modal = container.querySelector('#add-exam-modal');
        const modalContent = modal.querySelector('div');
        const addBtn = container.querySelector('#add-exam-btn');
        const closeBtn = container.querySelector('#close-modal-btn');

        // Wizard Elements
        const step1 = container.querySelector('#step-1');
        const step2 = container.querySelector('#step-2');
        const nextBtn = container.querySelector('#next-step-btn');
        const prevBtn = container.querySelector('#prev-step-btn');
        const finishBtn = container.querySelector('#finish-step-btn');
        const stepIndicator = container.querySelector('#wizard-step-indicator');
        const progressBar = container.querySelector('#wizard-progress');

        // Inputs
        const nameInput = container.querySelector('#ex-name');
        const codeInput = container.querySelector('#ex-code');
        const typeInput = container.querySelector('#ex-type');
        const dateInput = container.querySelector('#ex-date');
        const timeInput = container.querySelector('#ex-time');
        const locInput = container.querySelector('#ex-loc');

        let editingExamId = null;
        const modalTitle = container.querySelector('#modal-title');

        const resetWizard = () => {
            step1.classList.remove('hidden');
            step2.classList.add('hidden');
            prevBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
            stepIndicator.textContent = 'Step 1 of 2: Basic Info';
            progressBar.style.width = '50%';

            // Clear inputs
            nameInput.value = '';
            codeInput.value = '';
            dateInput.value = '';
            timeInput.value = '';
            locInput.value = '';
            typeInput.value = 'Midterm';

            // Validation Reset
            [nameInput, codeInput, dateInput, timeInput].forEach(inp =>
                inp.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500')
            );
        };

        const openModal = () => {
            editingExamId = null;
            if (modalTitle) modalTitle.textContent = "New Exam Setup";
            if (finishBtn) finishBtn.textContent = "Add Exam";

            resetWizard();
            modal.classList.remove('invisible', 'opacity-0');
            modal.classList.add('visible', 'opacity-100');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        };

        const openEditModal = (id) => {
            const exam = data.exams.find(e => e.id === id);
            if (!exam) return;

            editingExamId = id;
            if (modalTitle) modalTitle.textContent = "Edit Exam";
            if (finishBtn) finishBtn.textContent = "Save Changes";

            resetWizard();

            // Pre-fill
            nameInput.value = exam.name;
            codeInput.value = exam.code;
            typeInput.value = exam.type;
            locInput.value = exam.location || '';

            const dt = new Date(exam.date);
            // Format YYYY-MM-DD
            if (!isNaN(dt.getTime())) {
                const yyyy = dt.getFullYear();
                const mm = String(dt.getMonth() + 1).padStart(2, '0');
                const dd = String(dt.getDate()).padStart(2, '0');
                dateInput.value = `${yyyy}-${mm}-${dd}`;

                // Format HH:MM
                const hh = String(dt.getHours()).padStart(2, '0');
                const min = String(dt.getMinutes()).padStart(2, '0');
                timeInput.value = `${hh}:${min}`;
            }

            modal.classList.remove('invisible', 'opacity-0');
            modal.classList.add('visible', 'opacity-100');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        };

        const closeModal = () => {
            modal.classList.add('invisible', 'opacity-0');
            modal.classList.remove('visible', 'opacity-100');
            modalContent.classList.add('scale-95');
            modalContent.classList.remove('scale-100');
        };

        addBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

        // Navigation
        nextBtn.addEventListener('click', () => {
            if (!nameInput.value.trim() || !codeInput.value.trim()) {
                if (!nameInput.value.trim()) nameInput.classList.add('ring-2', 'ring-red-500/50', 'border-red-500');
                if (!codeInput.value.trim()) codeInput.classList.add('ring-2', 'ring-red-500/50', 'border-red-500');
                return;
            }
            nameInput.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500');
            codeInput.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500');

            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            prevBtn.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');
            stepIndicator.textContent = 'Step 2 of 2: Logistics';
            progressBar.style.width = '100%';
        });

        prevBtn.addEventListener('click', () => {
            step1.classList.remove('hidden');
            step2.classList.add('hidden');
            prevBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
            stepIndicator.textContent = 'Step 1 of 2: Basic Info';
            progressBar.style.width = '50%';
        });

        finishBtn.addEventListener('click', () => {
            if (!dateInput.value || !timeInput.value) {
                if (!dateInput.value) dateInput.classList.add('ring-2', 'ring-red-500/50', 'border-red-500');
                if (!timeInput.value) timeInput.classList.add('ring-2', 'ring-red-500/50', 'border-red-500');
                return;
            }

            const dateTime = new Date(`${dateInput.value}T${timeInput.value}`);

            if (editingExamId) {
                // Update Existing
                const exam = data.exams.find(e => e.id === editingExamId);
                if (exam) {
                    exam.code = codeInput.value.trim();
                    exam.name = nameInput.value.trim();
                    exam.type = typeInput.value;
                    exam.location = locInput.value.trim() || 'TBD';
                    exam.date = dateTime.toISOString();
                }
            } else {
                // Create New
                const newExam = {
                    id: Date.now(),
                    code: codeInput.value.trim(),
                    name: nameInput.value.trim(),
                    type: typeInput.value,
                    location: locInput.value.trim() || 'TBD',
                    date: dateTime.toISOString()
                };
                if (!data.exams) data.exams = [];
                data.exams.push(newExam);
            }

            saveData();
            closeModal();
            render();
        });

        // Delete Exam Logic
        const deleteModal = container.querySelector('#delete-exam-modal');
        const deleteModalContent = deleteModal.querySelector('div');
        const cancelDeleteBtn = container.querySelector('#cancel-delete-btn');
        const confirmDeleteBtn = container.querySelector('#confirm-delete-btn');
        let examIdToDelete = null;

        const closeDeleteModal = () => {
            deleteModal.classList.add('invisible', 'opacity-0');
            deleteModal.classList.remove('visible', 'opacity-100');
            deleteModalContent.classList.add('scale-95');
            deleteModalContent.classList.remove('scale-100');
            examIdToDelete = null;
        };

        const openDeleteModal = (id) => {
            examIdToDelete = id;
            deleteModal.classList.remove('invisible', 'opacity-0');
            deleteModal.classList.add('visible', 'opacity-100');
            deleteModalContent.classList.remove('scale-95');
            deleteModalContent.classList.add('scale-100');
        }

        // Event delegation for delete buttons
        container.addEventListener('click', (e) => {
            if (e.target.closest('.delete-exam-btn')) {
                const btn = e.target.closest('.delete-exam-btn');
                openDeleteModal(parseInt(btn.dataset.id));
            }
            if (e.target.closest('.edit-exam-btn')) {
                const btn = e.target.closest('.edit-exam-btn');
                openEditModal(parseInt(btn.dataset.id));
            }
        });

        cancelDeleteBtn.addEventListener('click', closeDeleteModal);

        confirmDeleteBtn.addEventListener('click', () => {
            if (examIdToDelete) {
                const idx = data.exams.findIndex(e => e.id === examIdToDelete);
                if (idx !== -1) {
                    data.exams.splice(idx, 1);
                    saveData();
                    closeDeleteModal();
                    render();
                }
            }
        });

        // Input cleanup
        [nameInput, codeInput, dateInput, timeInput].forEach(inp => {
            inp.addEventListener('input', () => {
                inp.classList.remove('ring-2', 'ring-red-500/50', 'border-red-500');
            });
        });
    };

    render();
}
