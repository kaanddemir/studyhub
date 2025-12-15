
import { data, saveData } from '../data.js';

export function renderCheatsheetDetailPage(element, id) {
    // Ensure id is a number (it comes from params)
    const sheetId = parseInt(id);
    let sheet = data.cheatsheets.find(s => s.id === sheetId);

    if (!sheet) {
        element.innerHTML = `<div class="p-10 text-center text-gray-500">Sheet not found!</div>`;
        return;
    }

    // Default structure for images if missing
    if (!sheet.images) sheet.images = [];

    const render = () => {
        element.innerHTML = `
        <div class="h-full flex flex-col relative bg-white overflow-hidden">
            <!-- Header -->
            <!-- Header -->
            <header class="flex items-center justify-start gap-6 px-8 py-6 border-b border-gray-100 bg-white z-10 shrink-0">
                <button id="back-btn" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shrink-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                
                <div class="flex items-center gap-2">
                    <!-- Title Display -->
                    <h1 id="display-title" class="text-3xl font-bold text-dark truncate max-w-xl cursor-default">${sheet.title}</h1>
                    
                    <!-- Title Input (Hidden by default) -->
                    <input type="text" id="title-input" value="${sheet.title}" class="hidden text-3xl font-bold text-dark bg-transparent border-b-2 border-primary outline-none focus:ring-0 placeholder-gray-300 min-w-[200px]" placeholder="Untitled Note">
                    


                    <!-- Delete Button -->
                    <button id="delete-btn" class="p-2 text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors ml-2" title="Delete Note">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                </div>
            </header>

            <!-- Main Split Content -->
            <div id="split-container" class="flex-1 flex overflow-hidden relative">
                
                <!-- LEFT PANE: Editor -->
                <div id="left-pane" class="w-1/2 flex flex-col p-8 bg-white" style="min-width: 300px;">
                    <div class="flex justify-between items-center mb-4 shrink-0">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Markdown Editor</span>
                        <span class="text-xs text-gray-300">Supports MD</span>
                    </div>
                    <textarea id="content-editor" class="flex-1 w-full resize-none text-lg text-gray-700 leading-relaxed focus:outline-none placeholder-gray-300 font-medium bg-transparent custom-scrollbar" placeholder="Start typing your notes here...">${sheet.content || ''}</textarea>
                </div>

                <!-- RESIZER -->
                <div id="resizer" class="w-1.5 bg-gray-100 hover:bg-primary/50 cursor-col-resize transition-colors z-20 flex items-center justify-center group shrink-0 relative">
                     <div class="w-0.5 h-8 bg-gray-300 group-hover:bg-white rounded-full pointer-events-none"></div>
                </div>

                <!-- RIGHT PANE: Attachments -->
                <div id="right-pane" class="flex-1 flex flex-col p-8 bg-gray-50 overflow-y-auto custom-scrollbar" style="min-width: 280px;">
                    <div class="flex justify-between items-center mb-6 shrink-0 whitespace-nowrap gap-4">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider overflow-hidden text-ellipsis">Attachments</h3>
                         <button id="add-img-btn" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-all text-xs font-bold shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            Add Image
                        </button>
                    </div>

                    ${sheet.images.length > 0 ? `
                        <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                            ${sheet.images.map((img, idx) => `
                                <div class="relative group rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white aspect-video cursor-zoom-in" onclick="openImageViewer(${idx})">
                                    <img src="${img}" class="w-full h-full object-cover">
                                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                    <button class="absolute top-2 right-2 p-1.5 bg-white/90 text-primary rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-primary hover:text-white transform hover:scale-110" onclick="event.stopPropagation(); deleteImage(${idx})">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="flex-1 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-3xl m-4 pb-20">
                            <svg class="w-12 h-12 mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <p class="text-sm font-medium opacity-50">No images yet</p>
                        </div>
                    `}
                </div>
            </div>

            <!-- Delete Confirmation Modal -->
             <div id="delete-note-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">Delete Note?</h3>
                    <p class="text-sm text-gray-400 mb-6">This action cannot be undone.</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-modal-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">Cancel</button>
                         <button id="confirm-delete-modal-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">Delete</button>
                    </div>
                </div>
            </div>

            <!-- Image Viewer Modal -->
            <div id="image-viewer-modal" class="fixed inset-0 z-[100] bg-black/90 hidden flex items-center justify-center opacity-0 transition-opacity duration-300" onclick="closeImageViewer()">
                 <img id="image-viewer-img" src="" class="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl scale-95 transition-transform duration-300" onclick="event.stopPropagation()">
                 <button class="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors">
                    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
            </div>

            <!-- Delete Image Confirmation Modal -->
             <div id="delete-image-modal" class="fixed inset-0 bg-white/10 backdrop-blur-sm z-[110] flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">Delete Image?</h3>
                    <p class="text-sm text-gray-400 mb-6">This cannot be undone.</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-img-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">Cancel</button>
                         <button id="confirm-delete-img-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">Delete</button>
                    </div>
                </div>
            </div>

            <!-- Hidden File Input -->
            <input type="file" id="file-input" accept="image/*" class="hidden">
        </div>
        `;

        attachListeners();
    };

    const attachListeners = () => {
        const titleInput = element.querySelector('#title-input');
        const displayTitle = element.querySelector('#display-title');
        const editTitleBtn = element.querySelector('#edit-title-btn');
        const contentEditor = element.querySelector('#content-editor');
        const backBtn = element.querySelector('#back-btn');
        const deleteBtn = element.querySelector('#delete-btn');
        const addImgBtn = element.querySelector('#add-img-btn');
        const fileInput = element.querySelector('#file-input');

        // Split Resizer Elements
        const resizer = element.querySelector('#resizer');
        const leftPane = element.querySelector('#left-pane');
        const splitContainer = element.querySelector('#split-container');

        // Note Delete Modal Elements
        const deleteModal = element.querySelector('#delete-note-modal');
        const deleteModalContent = deleteModal.querySelector('div');
        const cancelDeleteBtn = element.querySelector('#cancel-delete-modal-btn');
        const confirmDeleteBtn = element.querySelector('#confirm-delete-modal-btn');

        // Image Delete Modal Elements
        const deleteImgModal = element.querySelector('#delete-image-modal');
        const deleteImgModalContent = deleteImgModal.querySelector('div');
        const cancelDeleteImgBtn = element.querySelector('#cancel-delete-img-btn');
        const confirmDeleteImgBtn = element.querySelector('#confirm-delete-img-btn');

        // Nav Back
        backBtn.onclick = () => window.navigateTo('cheatsheets');

        // Auto-save function
        const save = () => {
            sheet.title = titleInput.value.trim() || 'Untitled Note';
            sheet.content = contentEditor.value;
            displayTitle.textContent = sheet.title;
            saveData();
        };

        // Title Editing Logic
        const enableEdit = () => {
            displayTitle.classList.add('hidden');
            titleInput.classList.remove('hidden');
            titleInput.focus();
        };

        const disableEdit = () => {
            displayTitle.classList.remove('hidden');
            titleInput.classList.add('hidden');
            save();
        };

        if (editTitleBtn) editTitleBtn.onclick = enableEdit;

        titleInput.onblur = disableEdit;
        titleInput.onkeydown = (e) => {
            if (e.key === 'Enter') disableEdit();
        };

        // Textarea auto-save on blur
        contentEditor.onblur = save;

        // --- SPLIT PANE RESIZE LOGIC ---
        let isResizing = false;

        resizer.addEventListener('pointerdown', (e) => {
            isResizing = true;
            resizer.setPointerCapture(e.pointerId);
            splitContainer.classList.add('select-none'); // Prevent text selection
            resizer.classList.add('bg-primary/50');
        });

        resizer.addEventListener('pointermove', (e) => {
            if (!isResizing) return;

            const containerRect = splitContainer.getBoundingClientRect();
            // Calculate relative X position within the container
            const relativeX = e.clientX - containerRect.left;

            // Constrain width (min 200px for left pane, min 200px for right pane)
            const minWidth = 200;
            const maxWidth = containerRect.width - 200;

            let newWidth = Math.max(minWidth, Math.min(relativeX, maxWidth));

            // Convert to percentage for responsiveness
            const percentage = (newWidth / containerRect.width) * 100;
            leftPane.style.width = `${percentage}%`;
        });

        resizer.addEventListener('pointerup', (e) => {
            isResizing = false;
            resizer.releasePointerCapture(e.pointerId);
            splitContainer.classList.remove('select-none');
            resizer.classList.remove('bg-primary/50');
        });


        // Delete Logic (Modal)
        const closeDeleteModal = () => {
            deleteModal.classList.add('invisible', 'opacity-0');
            deleteModal.classList.remove('visible', 'opacity-100');
            deleteModalContent.classList.add('scale-95');
            deleteModalContent.classList.remove('scale-100');
        };

        deleteBtn.onclick = () => {
            deleteModal.classList.remove('invisible', 'opacity-0');
            deleteModal.classList.add('visible', 'opacity-100');
            deleteModalContent.classList.remove('scale-95');
            deleteModalContent.classList.add('scale-100');
        };

        cancelDeleteBtn.onclick = closeDeleteModal;

        confirmDeleteBtn.onclick = () => {
            const idx = data.cheatsheets.findIndex(s => s.id === sheetId);
            if (idx > -1) {
                data.cheatsheets.splice(idx, 1);

                // Update layout storage to remove the deleted ID
                const savedLayout = localStorage.getItem('cheatsheetsLayout');
                if (savedLayout) {
                    let layoutIds = JSON.parse(savedLayout);
                    layoutIds = layoutIds.filter(id => parseInt(id) !== sheetId);
                    localStorage.setItem('cheatsheetsLayout', JSON.stringify(layoutIds));
                }

                saveData();
                window.navigateTo('cheatsheets');
            }
        };

        // Image Upload
        addImgBtn.onclick = () => fileInput.click();

        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    sheet.images.push(event.target.result); // Base64
                    saveData();
                    render(); // Re-render to show image
                };
                reader.readAsDataURL(file);
            }
        };

        // --- IMAGE DELETE LOGIC ---
        let imageToDeleteIdx = null;

        const closeDeleteImgModal = () => {
            deleteImgModal.classList.add('invisible', 'opacity-0');
            deleteImgModal.classList.remove('visible', 'opacity-100');
            deleteImgModalContent.classList.add('scale-95');
            deleteImgModalContent.classList.remove('scale-100');
            imageToDeleteIdx = null;
        };

        window.deleteImage = (idx) => {
            imageToDeleteIdx = idx;
            deleteImgModal.classList.remove('invisible', 'opacity-0');
            deleteImgModal.classList.add('visible', 'opacity-100');
            deleteImgModalContent.classList.remove('scale-95');
            deleteImgModalContent.classList.add('scale-100');
        };

        cancelDeleteImgBtn.onclick = closeDeleteImgModal;

        confirmDeleteImgBtn.onclick = () => {
            if (imageToDeleteIdx !== null) {
                sheet.images.splice(imageToDeleteIdx, 1);
                saveData();
                render();
                closeDeleteImgModal();
            }
        };

        // --- IMAGE VIEWER LOGIC ---
        window.openImageViewer = (idx) => {
            const modal = document.getElementById('image-viewer-modal');
            const img = document.getElementById('image-viewer-img');
            img.src = sheet.images[idx];

            modal.classList.remove('hidden');
            // Small timeout to allow display:block to apply before opacity transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                img.classList.remove('scale-95');
                img.classList.add('scale-100');
            }, 10);
        };

        window.closeImageViewer = () => {
            const modal = document.getElementById('image-viewer-modal');
            const img = document.getElementById('image-viewer-img');

            modal.classList.add('opacity-0');
            img.classList.remove('scale-100');
            img.classList.add('scale-95');

            setTimeout(() => {
                modal.classList.add('hidden');
                img.src = '';
            }, 300);
        };
    };

    render();
}

