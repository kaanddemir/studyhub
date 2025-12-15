import { data, saveData } from '../data.js';

export function renderNotebookPage(element) {
    // Ensure notebook data exists
    if (!data.notebook) {
        data.notebook = {
            notes: [
                {
                    id: 1,
                    title: 'Welcome to Notebook',
                    content: '<h3>Welcome!</h3><p>This is your new digital notebook.</p>',
                    date: new Date().toISOString(),
                    paperStyle: 'lined' // 'lined' or 'grid'
                }
            ]
        };
        saveData();
    }

    // Current Active Note State (local to this render)
    let activeNoteId = data.notebook.notes.length > 0 ? data.notebook.notes[0].id : null;
    let activePageIndex = 0;

    // Helper to ensure note has pages structure
    const ensureNotePages = (note) => {
        if (!note) return;
        if (!note.pages) {
            note.pages = [note.content || ''];
            delete note.content; // Optional: cleanup old field, or keep for backward compat
        }
    };

    const getActiveNote = () => data.notebook.notes.find(n => n.id === activeNoteId);

    const render = () => {
        const activeNote = getActiveNote();
        ensureNotePages(activeNote);
        const currentPageContent = activeNote ? activeNote.pages[activePageIndex] : '';

        element.innerHTML = `
        <div class="p-8 h-full flex flex-col relative bg-transparent overflow-hidden">
            <!-- Header (Courses Template Style) -->
            <header class="flex justify-between items-center mb-8 shrink-0">
                 <div class="flex items-center gap-4">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-3xl font-bold text-dark font-handwriting">Digital Notebook</h1>
                    
                    <!-- Editor Toolbar -->
                    <div class="ml-6 pl-6 border-l border-gray-300/50 flex items-center ${activeNote ? '' : 'opacity-50 pointer-events-none'} transition-opacity relative">
                         <!-- Unified Toolbar Container -->
                         <div class="flex items-center bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden divide-x divide-gray-100">
                             <!-- Style Buttons -->
                             <button class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" data-cmd="bold" title="Bold"><b class="font-serif">B</b></button>
                             <button class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all italic" data-cmd="italic" title="Italic"><i class="font-serif">I</i></button>
                             <button class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all underline" data-cmd="underline" title="Underline"><u class="font-serif">U</u></button>
                             
                             <!-- Color Picker -->
                             <button id="btn-color-picker" class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" title="Text Color">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                             </button>
                             
                             <!-- Highlight Picker -->
                             <button id="btn-highlight-picker" class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" title="Highlight Color">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                             </button>
                             
                             <!-- Align Button -->
                             <button class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" data-cmd="cycleAlign" data-state="left" title="Align Text">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h16" /></svg>
                             </button>
                         </div>

                         <!-- Formatting Dropdowns (Placed absolutely relative to toolbar wrapper) -->
                         <div id="color-dropdown" class="absolute top-full left-6 mt-2 p-2 bg-white rounded-xl shadow-xl border border-gray-100 grid grid-cols-4 gap-1 w-32 hidden z-50">
                            <button class="w-6 h-6 rounded-full bg-black border border-gray-200 hover:scale-110 transition-transform" data-color="#000000"></button>
                            <button class="w-6 h-6 rounded-full bg-gray-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#6B7280"></button>
                            <button class="w-6 h-6 rounded-full bg-red-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#EF4444"></button>
                            <button class="w-6 h-6 rounded-full bg-orange-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#F97316"></button>
                            <button class="w-6 h-6 rounded-full bg-yellow-400 border border-gray-200 hover:scale-110 transition-transform" data-color="#FACC15"></button>
                            <button class="w-6 h-6 rounded-full bg-green-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#10B981"></button>
                            <button class="w-6 h-6 rounded-full bg-blue-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#3B82F6"></button>
                            <button class="w-6 h-6 rounded-full bg-purple-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#8B5CF6"></button>
                         </div>

                         <div id="highlight-dropdown" class="absolute top-full left-24 mt-2 p-2 bg-white rounded-xl shadow-xl border border-gray-100 grid grid-cols-4 gap-1 w-32 hidden z-50">
                            <button class="w-6 h-6 rounded-full bg-yellow-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#fef08a"></button>
                            <button class="w-6 h-6 rounded-full bg-green-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#bbf7d0"></button>
                            <button class="w-6 h-6 rounded-full bg-blue-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#bfdbfe"></button>
                            <button class="w-6 h-6 rounded-full bg-pink-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#fbcfe8"></button>
                            <button class="w-6 h-6 rounded-full bg-purple-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#e9d5ff"></button>
                            <button class="w-6 h-6 rounded-full bg-orange-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#fed7aa"></button>
                            <button class="w-6 h-6 rounded-full bg-gray-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#e5e7eb"></button>
                            <button class="w-6 h-6 rounded-full bg-white border border-gray-200 hover:scale-110 transition-transform flex items-center justify-center" data-color="transparent">
                                <svg class="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                         </div>
                    </div>
                 </div>
                 
                 <div class="flex items-center gap-3">
                     <!-- Paper Style Toggle -->
                     <button id="btn-paper-style" class="p-2 bg-white rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" title="Toggle Paper Style (Lined/Grid)">
                        ${activeNote && activeNote.paperStyle === 'grid' ?
                `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z M9 3v18 M15 3v18 M3 9h18 M3 15h18" /></svg>` :
                `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>`
            }           </button>
                     
                     <!-- Page Navigation -->
                     <div class="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 p-1">
                        <button id="btn-prev-page" class="p-1.5 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors ${activePageIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}" ${activePageIndex === 0 ? 'disabled' : ''} title="Previous Page">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <span class="text-xs font-bold text-gray-500 w-16 text-center select-none uppercase tracking-wider">Page ${activePageIndex + 1}</span>
                        <button id="btn-next-page" class="p-1.5 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors" title="Next Page">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                     </div>

                     <button id="btn-add-note" class="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                        New Notebook
                    </button>
                 </div>
            </header>

            <!-- Notebook Content -->
            <div class="flex-1 w-full max-w-7xl mx-auto min-h-0 bg-white rounded-3xl shadow-2xl flex overflow-hidden relative border border-gray-200">
                
                <!-- Left Sidebar (Index) -->
                <div class="w-80 bg-gray-50 flex-none flex flex-col border-r border-gray-200 z-10 shrink-0">
                    <div class="p-6 border-b border-gray-200/50 bg-gray-50">
                        <h2 class="text-xl font-bold text-dark flex items-center gap-2">
                            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            Index
                        </h2>
                    </div>

                    <div class="flex-1 overflow-hidden p-3 space-y-2" style="scrollbar-width: none;">
                        ${data.notebook.notes.map(note => `
                            <div class="note-item p-4 rounded-xl cursor-pointer transition-all border border-transparent ${note.id === activeNoteId ? 'bg-white shadow-md border-gray-100' : 'hover:bg-white/60 hover:border-gray-100 text-gray-500'}" data-id="${note.id}">
                                <h4 class="font-bold text-dark truncate mb-1">${note.title || 'Untitled Note'}</h4>
                                <p class="text-xs text-gray-400 truncate">${stripHtml(note.pages ? note.pages[0] : (note.content || '')).substring(0, 40) || 'Empty note...'}</p>
                                <div class="mt-2 text-[10px] text-gray-300 font-medium tracking-wide flex justify-between items-center">
                                   <span>${new Date(note.date).toLocaleDateString()}</span>
                                   ${note.id === activeNoteId ? `
                                   <button class="btn-delete-note p-1 text-gray-300 hover:text-primary transition-colors" title="Delete Page">
                                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                   </button>
                                   ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- SPIRAL BINDING (The "Wire" Effect) -->
                <div class="w-12 h-full bg-[#e5e7eb] relative shrink-0 flex flex-col items-center justify-start py-4 gap-6 shadow-inner z-20 border-r border-[#d1d5db]" style="background-image: radial-gradient(circle at 0% 50%, rgba(255,255,255,0.5), transparent), radial-gradient(circle at 100% 50%, rgba(0,0,0,0.05), transparent);">
                     ${Array(40).fill(0).map(() => `
                        <div class="relative w-full h-8 group-spiral">
                            <!-- Hole Left -->
                            <div class="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#333] rounded-full shadow-inner opacity-80"></div>
                            <!-- Hole Right -->
                            <div class="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#333] rounded-full shadow-inner opacity-80"></div>
                            <!-- Wire Ring (3D effect) -->
                            <div class="absolute left-2.5 right-2.5 top-1/2 -translate-y-[60%] h-4 bg-gradient-to-b from-gray-400 via-gray-100 to-gray-500 rounded-lg transform -rotate-6 shadow-md border border-gray-400"></div>
                        </div>
                     `).join('')}
                </div>

                <!-- Right Page (Content) -->
                <div class="flex-1 bg-white h-full flex flex-col relative z-0">
                    ${activeNote ? `
                        <!-- Toolbar Removed (Moved to Header) -->

                        <!-- Paper Content -->
                        <div class="flex-1 overflow-hidden relative bg-white">
                             <!-- Paper Lines Overlay -->
                             <div class="absolute inset-0 pointer-events-none z-0" 
                                  style="${activeNote && activeNote.paperStyle === 'grid' ?
                    'background-image: linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px); background-size: 2.5rem 2.5rem; margin-top: 3.5rem;' :
                    'background-image: linear-gradient(#e5e7eb 1px, transparent 1px); background-size: 100% 2.5rem; margin-top: 3.5rem;'}">
                             </div>
                             
                             <!-- Red Margin Line -->
                             <div class="absolute top-0 bottom-0 left-10 w-px bg-red-100/50 z-0 pointer-events-none border-r border-red-200 h-full"></div>

                             <div class="relative z-10 px-16 pt-14 pb-12 min-h-full">
                                  <!-- Title Input -->
                                  <input type="text" id="note-title-input" class="w-full text-4xl font-bold text-dark bg-transparent border-none focus:ring-0 placeholder-gray-300 mb-10 h-10 p-0 font-display leading-[2.5rem]" value="${activeNote.title}" placeholder="Page Title...">
                                  
                                  <!-- Editor contenteditable -->
                                  <div id="note-editor" 
                                       class="w-full min-h-[60vh] text-lg text-gray-700 leading-10 focus:outline-none empty:before:content-[attr(placeholder)] empty:before:text-gray-300"
                                       contenteditable="true" 
                                       placeholder="Start writing here..."
                                  >
                                    ${currentPageContent}
                                  </div>
                             </div>
                        </div>
                    ` : `
                        <!-- Empty State -->
                        <div class="flex-1 flex flex-col items-center justify-center text-gray-300">
                             <div class="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                             </div>
                             <h3 class="text-xl font-bold text-gray-400">Select a page or create new</h3>
                        </div>
                    `}
                </div>
            </div>

            <!-- Tear Out Confirmation Modal -->
             <div id="delete-note-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                         <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">Tear Out Page?</h3>
                    <p class="text-sm text-gray-400 mb-6">This note will be permanently removed.</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-note" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">Cancel</button>
                         <button id="confirm-delete-note" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">Tear Out</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        attachListeners(activeNote);
    };

    const attachListeners = (activeNote) => {
        // 1. Sidebar Note Selection
        element.querySelectorAll('.note-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.closest('.btn-delete-note')) return; // handled by delete
                activeNoteId = parseInt(item.dataset.id);
                activePageIndex = 0; // Reset to first page
                render();
            });
        });

        // 2. Add Note
        const btnAdd = element.querySelector('#btn-add-note');
        if (btnAdd) {
            btnAdd.addEventListener('click', () => {
                const newNote = {
                    id: Date.now(),
                    title: 'New Notebook',
                    pages: [''],
                    date: new Date().toISOString(),
                    category: 'General',
                    paperStyle: 'lined'
                };
                data.notebook.notes.push(newNote);
                activeNoteId = newNote.id;
                saveData();
                render();
            });
        }

        // 3. Delete Note Logic (Custom Modal)
        const deleteModal = element.querySelector('#delete-note-modal');
        const deleteModalContent = deleteModal.querySelector('div');
        const cancelDeleteBtn = element.querySelector('#cancel-delete-note');
        const confirmDeleteBtn = element.querySelector('#confirm-delete-note');
        let noteIdToDelete = null;

        const closeDeleteModal = () => {
            deleteModal.classList.add('invisible', 'opacity-0');
            deleteModal.classList.remove('visible', 'opacity-100');
            deleteModalContent.classList.add('scale-95');
            deleteModalContent.classList.remove('scale-100');
            noteIdToDelete = null;
        };

        const openDeleteModal = (id) => {
            noteIdToDelete = id;
            deleteModal.classList.remove('invisible', 'opacity-0');
            deleteModal.classList.add('visible', 'opacity-100');
            deleteModalContent.classList.remove('scale-95');
            deleteModalContent.classList.add('scale-100');
        };

        element.querySelectorAll('.btn-delete-note').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openDeleteModal(parseInt(btn.closest('.note-item').dataset.id));
            });
        });

        cancelDeleteBtn.addEventListener('click', closeDeleteModal);

        confirmDeleteBtn.addEventListener('click', () => {
            if (noteIdToDelete) {
                data.notebook.notes = data.notebook.notes.filter(n => n.id !== noteIdToDelete);
                if (activeNoteId === noteIdToDelete) {
                    activeNoteId = data.notebook.notes.length > 0 ? data.notebook.notes[0].id : null;
                }
                saveData();
                render();
            }
        });

        if (activeNote) {
            // 4. Title Input
            const titleInput = element.querySelector('#note-title-input');
            titleInput.addEventListener('input', (e) => {
                const note = data.notebook.notes.find(n => n.id === activeNoteId);
                if (note) {
                    note.title = e.target.value;
                    saveData();
                }
            });
            // Update sidebar on title blur
            titleInput.addEventListener('blur', render);

            // 5. Editor Content
            const editor = element.querySelector('#note-editor');
            editor.addEventListener('input', () => {
                const note = data.notebook.notes.find(n => n.id === activeNoteId);
                if (note) {
                    if (!note.pages) note.pages = [''];
                    note.pages[activePageIndex] = editor.innerHTML;
                    saveData();
                }
            });

            // 6. Toolbar
            element.querySelectorAll('.toolbar-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const cmd = btn.dataset.cmd;

                    if (cmd === 'cycleAlign') {
                        const states = ['left', 'center', 'right'];
                        const currentState = btn.dataset.state || 'left';
                        const currentIndex = states.indexOf(currentState);
                        const nextIndex = (currentIndex + 1) % states.length;
                        const nextState = states[nextIndex];

                        // Apply command
                        const commandMap = {
                            'left': 'justifyLeft',
                            'center': 'justifyCenter',
                            'right': 'justifyRight'
                        };
                        document.execCommand(commandMap[nextState], false, null);

                        // Update State & Icon
                        btn.dataset.state = nextState;
                        const iconPath = btn.querySelector('path');
                        if (iconPath) {
                            const paths = {
                                'left': 'M4 6h16M4 12h10M4 18h16',
                                'center': 'M4 6h16M7 12h10M4 18h16',
                                'right': 'M4 6h16M10 12h10M4 18h16'
                            };
                            iconPath.setAttribute('d', paths[nextState]);
                        }
                    } else {
                        const val = btn.dataset.val || null;
                        document.execCommand(cmd, false, val);
                    }
                    editor.focus();
                });
            });

            // 7. Next Page Button
            const btnNext = element.querySelector('#btn-next-page');
            if (btnNext) {
                btnNext.addEventListener('click', () => {
                    const note = data.notebook.notes.find(n => n.id === activeNoteId);
                    if (!note) return;

                    // If we are not at the end, go to next page
                    if (activePageIndex < note.pages.length - 1) {
                        activePageIndex++;
                    } else {
                        // We are at the end, create new page within SAME note
                        note.pages.push('');
                        activePageIndex++;
                        saveData();
                    }
                    render();
                });
            }

            // 8. Prev Page Button
            const btnPrev = element.querySelector('#btn-prev-page');
            if (btnPrev) {
                btnPrev.addEventListener('click', () => {
                    if (activePageIndex > 0) {
                        activePageIndex--;
                        render();
                    }
                });
            }

            // 9. Color Picker Logic
            const btnColor = element.querySelector('#btn-color-picker');
            const colorDropdown = element.querySelector('#color-dropdown');

            if (btnColor && colorDropdown) {
                btnColor.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    if (colorDropdown.classList.contains('hidden')) {
                        colorDropdown.classList.remove('hidden');

                        // One-time listener to close on outside click
                        const closeIdx = (ev) => {
                            if (!colorDropdown.contains(ev.target) && ev.target !== btnColor && !btnColor.contains(ev.target)) {
                                colorDropdown.classList.add('hidden');
                                document.removeEventListener('click', closeIdx);
                            }
                        };
                        setTimeout(() => document.addEventListener('click', closeIdx), 0);
                    } else {
                        colorDropdown.classList.add('hidden');
                    }
                });

                colorDropdown.querySelectorAll('button').forEach(cBtn => {
                    cBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        const color = cBtn.dataset.color;
                        document.execCommand('foreColor', false, color);
                        colorDropdown.classList.add('hidden');
                        editor.focus();
                    });
                });
            }

            // 10. Highlight Picker Logic
            const btnHighlight = element.querySelector('#btn-highlight-picker');
            const highlightDropdown = element.querySelector('#highlight-dropdown');

            if (btnHighlight && highlightDropdown) {
                btnHighlight.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    if (highlightDropdown.classList.contains('hidden')) {
                        highlightDropdown.classList.remove('hidden');
                        // Close other dropdown if open
                        if (colorDropdown) colorDropdown.classList.add('hidden');

                        const closeHl = (ev) => {
                            if (!highlightDropdown.contains(ev.target) && ev.target !== btnHighlight && !btnHighlight.contains(ev.target)) {
                                highlightDropdown.classList.add('hidden');
                                document.removeEventListener('click', closeHl);
                            }
                        };
                        setTimeout(() => document.addEventListener('click', closeHl), 0);
                    } else {
                        highlightDropdown.classList.add('hidden');
                    }
                });

                highlightDropdown.querySelectorAll('button').forEach(hBtn => {
                    hBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        const color = hBtn.dataset.color;
                        document.execCommand('hiliteColor', false, color); // Some browsers use 'backColor' but 'hiliteColor' is often safer for this context.
                        highlightDropdown.classList.add('hidden');
                        editor.focus();
                    });
                });
            }

            // 11. Paper Style Toggle
            const btnPaperStyle = element.querySelector('#btn-paper-style');
            if (btnPaperStyle) {
                btnPaperStyle.addEventListener('click', () => {
                    const note = data.notebook.notes.find(n => n.id === activeNoteId);
                    if (note) {
                        note.paperStyle = note.paperStyle === 'grid' ? 'lined' : 'grid';
                        saveData();
                        render();
                    }
                });
            }
        }
    };

    // Helper to strip HTML for preview
    const stripHtml = (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    render();
}
