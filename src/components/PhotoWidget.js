
import { t } from '../translations.js';

export function renderPhotoWidget(element) {
    const render = () => {
        const currentImage = localStorage.getItem('photo_widget_image');
        // Initial Zoom State
        let currentZoom = parseFloat(localStorage.getItem('photo_widget_zoom') || '1');

        if (currentImage) {
            element.innerHTML = `
                <div class="w-full h-full relative group overflow-hidden rounded-3xl bg-gray-100 flex items-center justify-center">
                    <img id="dashboard-photo-img" src="${currentImage}" class="w-full h-full object-cover pointer-events-none transition-transform duration-100 origin-center" style="transform: scale(${currentZoom})" alt="${t('dashboard_photo_alt')}">
                    
                    <!-- Controls (Hidden by default, shown on hover) -->
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-10 transition-all duration-300">
                        <!-- Change Photo -->
                        <button id="btn-change-photo" class="p-3 bg-white text-dark hover:text-primary rounded-full hover:scale-110 transition-transform shadow-lg cursor-pointer" title="${t('change_photo')}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </button>

                        <!-- Zoom Toggle -->
                        <button id="btn-toggle-zoom" class="p-3 bg-white text-dark hover:text-primary rounded-full hover:scale-110 transition-transform shadow-lg cursor-pointer" title="${t('zoom_image')}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                        </button>

                        <!-- Delete Photo -->
                         <button id="btn-delete-photo" class="p-3 bg-white text-dark hover:text-primary rounded-full hover:scale-110 transition-transform shadow-lg cursor-pointer" title="${t('remove_photo')}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>

                    <!-- Zoom Slider Popup -->
                    <div id="zoom-controls" class="absolute bottom-6 bg-white px-4 py-2 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 opacity-0 invisible translate-y-4 z-20">
                         <button id="btn-zoom-out" class="text-gray-400 hover:text-dark font-bold">-</button>
                         <input type="range" id="zoom-slider" min="1" max="3" step="0.1" value="${currentZoom}" class="w-32 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary">
                         <button id="btn-zoom-in" class="text-gray-400 hover:text-dark font-bold">+</button>
                    </div>

                    <!-- Custom Delete Confirmation Modal -->
                    <div id="photo-delete-modal" class="absolute inset-0 bg-white/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center opacity-0 invisible transition-all duration-200">
                        <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </div>
                        <h4 class="font-bold text-dark text-lg mb-1">${t('delete_photo_confirm')}</h4>
                        <p class="text-xs text-gray-500 mb-4">${t('action_undone')}</p>
                        <div class="flex gap-2">
                             <button id="cancel-delete-photo" class="px-4 py-2 rounded-xl bg-gray-100 text-gray-500 font-bold text-xs hover:bg-gray-200 transition-colors">${t('cancel')}</button>
                             <button id="confirm-delete-photo" class="px-4 py-2 rounded-xl bg-primary text-white font-bold text-xs hover:opacity-90 shadow-lg shadow-primary/30 transition-all">${t('delete')}</button>
                        </div>
                    </div>
                </div>
                <input type="file" id="photo-input" class="hidden" accept="image/*">
            `;
        } else {
            element.innerHTML = `
                <div class="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors group rounded-3xl border-2 border-dashed border-gray-200 hover:border-primary/50" id="photo-placeholder">
                    <div class="p-4 bg-primary/10 text-primary rounded-full mb-3 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <p class="text-sm font-bold text-gray-500 group-hover:text-primary transition-colors">${t('add_photo')}</p>
                </div>
                <input type="file" id="photo-input" class="hidden" accept="image/*">
            `;
        }

        const input = element.querySelector('#photo-input');

        const attachInputListener = () => {
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const base64 = event.target.result;
                        if (base64.length > 5 * 1024 * 1024) {
                            alert(t('image_too_large'));
                            return;
                        }
                        try {
                            localStorage.setItem('photo_widget_image', base64);
                            // Reset zoom on new photo
                            localStorage.setItem('photo_widget_zoom', '1');
                            render();
                        } catch (e) {
                            alert(t('storage_full'));
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });
        };

        if (currentImage) {
            const changeBtn = element.querySelector('#btn-change-photo');
            const zoomBtn = element.querySelector('#btn-toggle-zoom');
            const deleteBtn = element.querySelector('#btn-delete-photo');

            const zoomControls = element.querySelector('#zoom-controls');
            const zoomSlider = element.querySelector('#zoom-slider');
            const zoomOutBtn = element.querySelector('#btn-zoom-out');
            const zoomInBtn = element.querySelector('#btn-zoom-in');
            const img = element.querySelector('#dashboard-photo-img');

            const deleteModal = element.querySelector('#photo-delete-modal');
            const cancelBtn = element.querySelector('#cancel-delete-photo');
            const confirmBtn = element.querySelector('#confirm-delete-photo');

            changeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                input.click();
            });

            // Toggle Zoom Slider
            zoomBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (zoomControls.classList.contains('invisible')) {
                    zoomControls.classList.remove('invisible', 'opacity-0', 'translate-y-4');
                    zoomControls.classList.add('visible', 'opacity-100', 'translate-y-0');
                } else {
                    zoomControls.classList.add('invisible', 'opacity-0', 'translate-y-4');
                    zoomControls.classList.remove('visible', 'opacity-100', 'translate-y-0');
                }
            });

            // Slider Logic
            const updateZoom = (val) => {
                img.style.transform = `scale(${val})`;
                zoomSlider.value = val;
                localStorage.setItem('photo_widget_zoom', val);
            };

            zoomSlider.addEventListener('input', (e) => {
                updateZoom(e.target.value);
            });

            zoomInBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                let val = parseFloat(zoomSlider.value);
                val = Math.min(val + 0.1, 3);
                updateZoom(val);
            });

            zoomOutBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                let val = parseFloat(zoomSlider.value);
                val = Math.max(val - 0.1, 1);
                updateZoom(val);
            });

            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteModal.classList.remove('invisible', 'opacity-0');
                deleteModal.classList.add('visible', 'opacity-100');
            });

            cancelBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteModal.classList.add('invisible', 'opacity-0');
                deleteModal.classList.remove('visible', 'opacity-100');
            });

            confirmBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                localStorage.removeItem('photo_widget_image');
                localStorage.removeItem('photo_widget_zoom');
                render();
            });

            attachInputListener();

        } else {
            const placeholder = element.querySelector('#photo-placeholder');
            placeholder.addEventListener('click', () => {
                input.click();
            });
            attachInputListener();
        }
    };

    render();
}
