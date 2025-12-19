
import { t } from '../translations.js';

export function renderScratchpad(container) {
    if (!container) return;

    // Load State
    let isDrawing = false;
    let brushColor = '#3F6F68'; // Primary
    let brushSize = 2;
    let viewMode = 'canvas'; // 'canvas' or 'gallery'
    let gallery = JSON.parse(localStorage.getItem('scratchpad_gallery') || '[]');

    // HTML Structure
    container.innerHTML = `
        <div class="flex flex-col h-full relative overflow-hidden group rounded-3xl">
             <!-- Header -->
            <div class="flex flex-col px-5 pt-5 pb-2 z-10 bg-white border-b border-gray-50 h-auto shrink-0">
                <div class="flex items-center justify-between mb-2">
                     <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        ${t('scratchpad')}
                    </h3>
                    
                    <!-- View Toggle -->
                    <button id="sp-btn-browse" class="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors flex items-center gap-1 border border-transparent hover:border-gray-200 shrink-0">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        <span>${t('scratchpad_browse')}</span>
                    </button>
                </div>

                <!-- Tools Row (Only visible in Canvas Mode) -->
                <div id="sp-tools-header" class="flex items-center gap-3 transition-all duration-300 pl-1">
                    <div class="flex gap-2">
                        <button class="w-5 h-5 rounded-full bg-gray-800 border-2 border-transparent hover:scale-110 transition-transform sp-color-btn ring-2 ring-offset-1 ring-gray-800" data-color="#1F2937"></button>
                        <button class="w-5 h-5 rounded-full bg-red-500 border-2 border-transparent hover:scale-110 transition-transform sp-color-btn" data-color="#EF4444"></button>
                        <button class="w-5 h-5 rounded-full bg-blue-500 border-2 border-transparent hover:scale-110 transition-transform sp-color-btn" data-color="#3B82F6"></button>
                        <button class="w-5 h-5 rounded-full bg-green-500 border-2 border-transparent hover:scale-110 transition-transform sp-color-btn" data-color="#10B981"></button>
                    </div>
                    <div class="w-px h-5 bg-gray-200 mx-1"></div>
                    <div class="flex gap-1">
                            <button id="sp-save-gallery" class="p-1.5 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors" title="${t('scratchpad_save_gallery')}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                            </button>
                            <button id="sp-clear-canvas" class="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="${t('scratchpad_clear')}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Content Area -->
            <div class="flex-1 relative overflow-hidden bg-white">
                
                <!-- 1. CANVAS VIEW -->
                <div id="sp-view-canvas" class="absolute inset-0 flex flex-col transition-transform duration-300 transform translate-x-0">
                    <div class="relative flex-1 cursor-crosshair bg-white">
                        <canvas id="sp-canvas" class="block w-full h-full" style="touch-action: none;"></canvas>
                    </div>
                </div>

                <!-- 2. GALLERY VIEW -->
                <div id="sp-view-gallery" class="absolute inset-0 flex flex-col bg-white transition-transform duration-300 transform translate-x-full z-20">
                    <div id="sp-gallery-list" class="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-3 custom-scrollbar">
                        <!-- Items populated by JS -->
                    </div>
                    <div class="p-2 border-t border-gray-100 flex justify-center text-xs text-gray-400">
                        ${t('scratchpad_select_image')}
                    </div>
                </div>

            </div>
        </div>
    `;

    // References
    const btnBrowse = container.querySelector('#sp-btn-browse');
    const viewCanvas = container.querySelector('#sp-view-canvas');
    const viewGallery = container.querySelector('#sp-view-gallery');

    const canvas = container.querySelector('#sp-canvas');
    const ctx = canvas.getContext('2d');
    const colorBtns = container.querySelectorAll('.sp-color-btn');
    const btnClear = container.querySelector('#sp-clear-canvas');
    const btnSaveGallery = container.querySelector('#sp-save-gallery');
    const galleryList = container.querySelector('#sp-gallery-list');

    // --- VIEW SWITCHING ---
    const toggleView = () => {
        if (viewMode === 'canvas') {
            viewMode = 'gallery';
            renderGallery();
            viewGallery.classList.remove('translate-x-full');
            viewGallery.classList.add('translate-x-0');
            viewCanvas.classList.remove('translate-x-0');
            viewCanvas.classList.add('-translate-x-full'); // Move left
            btnBrowse.innerHTML = `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg><span>${t('scratchpad_draw')}</span>`;

            // Hide Tools
            const tools = container.querySelector('#sp-tools-header');
            if (tools) tools.classList.add('opacity-0', 'pointer-events-none');

        } else {
            viewMode = 'canvas';
            viewCanvas.classList.remove('-translate-x-full');
            viewCanvas.classList.add('translate-x-0');
            viewGallery.classList.remove('translate-x-0');
            viewGallery.classList.add('translate-x-full'); // Move right
            btnBrowse.innerHTML = `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg><span>${t('scratchpad_browse')}</span>`;

            // Show Tools
            const tools = container.querySelector('#sp-tools-header');
            if (tools) tools.classList.remove('opacity-0', 'pointer-events-none');

            setTimeout(resizeCanvas, 300); // Fix canvas size if changed
        }
    };
    btnBrowse.onclick = toggleView;


    // --- CANVAS LOGIC ---
    // --- CANVAS LOGIC ---
    function resizeCanvas() {
        const rect = canvas.parentElement.getBoundingClientRect();
        if (rect.width === 0) return; // Hidden

        // Check if size changed significantly
        if (canvas.width !== rect.width || canvas.height !== rect.height) {
            // 1. Save Content (Full Image)
            // We use toDataURL to get the full bitmap. 
            // When we draw it back, we draw at 0,0 with original width/height.
            // This prevents "stretching". New area is transparent.
            // However, this is async-ish if we use Image buffer which might flicker.
            // Better: Use getImageData for synchronous pixel transfer if size is manageable.

            let oldData = null;
            try {
                if (canvas.width > 0 && canvas.height > 0) {
                    oldData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                }
            } catch (e) { }

            // 2. Resize
            canvas.width = rect.width;
            canvas.height = rect.height;

            // 3. Restore
            if (oldData) {
                ctx.putImageData(oldData, 0, 0);
            }
        }
    }

    // Auto-save current state for persistence
    function saveCurrentState() {
        localStorage.setItem('scratchpad_current', canvas.toDataURL());
    }

    function restoreCurrentState() {
        const dataURL = localStorage.getItem('scratchpad_current');
        if (dataURL) {
            const img = new Image();
            img.onload = () => ctx.drawImage(img, 0, 0);
            img.src = dataURL;
        }
    }

    // Drawing Events
    const startPosition = (e) => {
        isDrawing = true;
        draw(e);
    };
    const finishedPosition = () => {
        isDrawing = false;
        ctx.beginPath();
        saveCurrentState();
    };
    const getMousePos = (e) => {
        const rect = canvas.getBoundingClientRect();
        return {
            x: (e.clientX || e.touches[0].clientX) - rect.left,
            y: (e.clientY || e.touches[0].clientY) - rect.top
        };
    };
    const draw = (e) => {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getMousePos(e);
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = brushColor;
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    };

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchstart', startPosition);
    canvas.addEventListener('touchend', finishedPosition);
    canvas.addEventListener('touchmove', draw);

    // Tools
    colorBtns.forEach(btn => {
        btn.onclick = () => {
            colorBtns.forEach(b => b.classList.remove('ring-2', 'ring-offset-1', 'ring-gray-800'));
            btn.classList.add('ring-2', 'ring-offset-1', 'ring-gray-800');
            brushColor = btn.dataset.color;
        };
    });

    btnClear.onclick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        localStorage.removeItem('scratchpad_current');
    };

    // --- GALLERY LOGIC ---
    btnSaveGallery.onclick = () => {
        const dataURL = canvas.toDataURL();
        const date = new Date().toLocaleString();

        // Add to front
        gallery.unshift({
            id: Date.now(),
            date: date,
            data: dataURL
        });

        localStorage.setItem('scratchpad_gallery', JSON.stringify(gallery));

        // Visual Feedback
        const originalIcon = btnSaveGallery.innerHTML;
        btnSaveGallery.innerHTML = `<svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`;
        setTimeout(() => btnSaveGallery.innerHTML = originalIcon, 1500);
    };

    const deleteItem = (id, e) => {
        e.stopPropagation();
        gallery = gallery.filter(item => item.id !== id);
        localStorage.setItem('scratchpad_gallery', JSON.stringify(gallery));
        renderGallery();
    };

    const loadItem = (item) => {
        const img = new Image();
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            saveCurrentState();
            toggleView(); // Go back to draw
        };
        img.src = item.data;
    };

    function renderGallery() {
        galleryList.innerHTML = '';
        if (gallery.length === 0) {
            galleryList.innerHTML = `
                <div class="col-span-2 flex flex-col items-center justify-center text-gray-300 h-full w-full absolute top-0 left-0 pointer-events-none">
                     <div class="flex flex-col items-center justify-center h-full pb-8">
                        <svg class="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p class="text-xs">${t('scratchpad_no_sketches')}</p>
                    </div>
                </div>
            `;
            return;
        }

        gallery.forEach(item => {
            const card = document.createElement('div');
            card.className = 'group relative aspect-square bg-gray-50 rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all';
            card.innerHTML = `
                <img src="${item.data}" class="w-full h-full object-contain pointer-events-none opacity-80 group-hover:opacity-100 mix-blend-multiply" />
                <div class="absolute bottom-0 left-0 right-0 bg-white/90 p-1 text-[10px] text-center text-gray-500 truncate">
                    ${item.date.split(',')[0]}
                </div>
                <button class="absolute top-1 right-1 p-1 bg-white rounded-full text-red-400 hover:text-red-500 hover:bg-red-50 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity" title="Delete">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            `;

            // Load click
            card.onclick = () => loadItem(item);
            // Delete click
            card.querySelector('button').onclick = (e) => deleteItem(item.id, e);

            galleryList.appendChild(card);
        });
    }

    // Initialize
    setTimeout(() => {
        resizeCanvas();
        restoreCurrentState();

        // Observe resize to fix stretching
        if (window.ResizeObserver) {
            const resizeObserver = new ResizeObserver(() => {
                resizeCanvas();
            });
            resizeObserver.observe(container);
        }

    }, 500);
}
