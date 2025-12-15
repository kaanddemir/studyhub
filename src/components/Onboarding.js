import { data, saveData } from '../data.js';

export function renderOnboarding(element, onComplete) {
    let currentStep = 1;
    let selectedAvatar = '🎓';
    let selectedTheme = 'emerald';
    let bgPreference = 'default'; // 'default' or 'theme'

    // Toggle state for customization panel
    let isCustomizing = false;

    // State for Custom sliders
    // Default to Emerald HSL
    let currentHue = 160;
    let currentSat = 84;
    let currentLight = 39;

    // Helper to sync state from theme string
    const syncStateFromTheme = (themeName) => {
        const rgbStr = themes[themeName];
        if (rgbStr) {
            const [r, g, b] = rgbStr.split(' ').map(Number);
            const [h, s, l] = rgbToHsl(r, g, b);
            currentHue = h;
            currentSat = s;
            currentLight = l;
        }
    };

    const themes = {
        emerald: '5 150 105', // Emerald
        blue: '37 99 235',   // Blue
        pink: '236 72 153',   // Pink
        orange: '234 88 12',  // Orange
        rose: '225 29 72',    // Rose-600
        lila: '178 106 251'   // Lila (Purple Bright)
    };

    // Initialize state
    syncStateFromTheme(selectedTheme);
    document.documentElement.style.setProperty('--color-primary-rgb', themes[selectedTheme]);

    const render = () => {
        element.innerHTML = `
        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-white bg-gradient-to-br from-primary/40 via-gray-50 to-primary/20 backdrop-blur-md transition-all duration-500">
            
            <div class="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all transform duration-500 border border-white/50">
                
                <!-- Decorative Header Background -->
                <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 to-primary/5 -z-10"></div>
                <div class="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <!-- Header -->
                <div class="px-10 pt-10 pb-4 flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-600 tracking-tight">StudyHub</h1>
                        <p class="text-gray-400 text-sm font-medium mt-1">Your personal academic dashboard</p>
                    </div>
                    
                    <div class="flex items-center gap-2 whitespace-nowrap">
                        <div class="h-2 w-20 bg-gray-100 rounded-full overflow-hidden shrink-0">
                            <div class="h-full bg-primary transition-all duration-500 ease-out" style="width: ${(currentStep / 3) * 100}%"></div>
                        </div>
                        <span class="text-xs font-bold text-gray-400 w-12 text-right">Step ${currentStep}/3</span>
                    </div>
                </div>

                <!-- Content Body -->
                <div class="flex-1 px-10 py-6 overflow-y-auto custom-scrollbar">
                    
                    <!-- Step 1: Profile -->
                    <div class="step-content ${currentStep === 1 ? 'block animate-fade-in-right' : 'hidden'}">
                        <h2 class="text-2xl font-bold text-dark mb-2">Let's get to know you</h2>
                        <p class="text-gray-500 mb-8">Tell us what to call you.</p>
                        
                        <div class="space-y-6">
                            <!-- Name Input -->
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                                <input type="text" id="input-name" value="${data.user.name || ''}" class="w-full text-lg px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder-gray-300 font-bold text-dark" placeholder="e.g. Alex Student">
                            </div>
                        </div>
                    </div>

                    <!-- Step 2: Academics -->
                    <div class="step-content ${currentStep === 2 ? 'block animate-fade-in-right' : 'hidden'}">
                         <h2 class="text-2xl font-bold text-dark mb-2">Academic Profile</h2>
                        <p class="text-gray-500 mb-8">This helps us personalize your dashboard.</p>

                        <div class="space-y-5">
                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">University / School</label>
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-300 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </div>
                                    <input type="text" id="input-university" value="${data.user.university || ''}" class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark placeholder-gray-300" placeholder="e.g. Stanford University">
                                </div>
                            </div>

                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Department / Major</label>
                                <div class="relative group">
                                     <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-300 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <input type="text" id="input-dept" value="${data.user.department || ''}" class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark placeholder-gray-300" placeholder="e.g. Computer Science">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3: Customization -->
                    <div class="step-content ${currentStep === 3 ? 'block animate-fade-in-right' : 'hidden'}">
                         <h2 class="text-2xl font-bold text-dark mb-1">Make it yours</h2>
                        <p class="text-gray-500 mb-4">Choose a base color and tweak it.</p>

                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Base Color</label>
                            <div class="grid grid-cols-6 gap-3">
                                ${Object.keys(themes).map(theme => {
            const rgbVal = themes[theme].split(' ').join(',');
            const isSelected = selectedTheme === theme;
            return `
                                    <button class="theme-btn group relative h-12 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 ring-2 ring-offset-2 w-full ${isSelected ? '' : 'ring-transparent hover:ring-gray-200'} bg-gray-50 border border-gray-100 overflow-hidden" 
                                            style="${isSelected ? `--tw-ring-color: rgb(${rgbVal});` : ''}"
                                            data-theme="${theme}">
                                        <div class="w-6 h-6 rounded-full shadow-sm relative z-10" style="background-color: rgb(${rgbVal})"></div>
                                        ${isSelected ? `
                                            <div class="absolute inset-0" style="background-color: rgba(${rgbVal}, 0.1)"></div>
                                            <div class="absolute bottom-1 w-1.5 h-1.5 rounded-full" style="background-color: rgb(${rgbVal})"></div>
                                        ` : ''}
                                    </button>
                                    `;
        }).join('')}
                            </div>

                             <!-- Background Preference -->
                            <div class="mt-4">
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Background Style</label>
                                <div class="grid grid-cols-2 gap-4">
                                    <button class="bg-pref-btn group relative p-3 rounded-2xl border-2 transition-all text-left flex flex-col gap-2 ${bgPreference === 'default' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-100 bg-white hover:border-gray-200'}" data-bg="default">
                                        <div class="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 mb-1"></div>
                                        <div>
                                            <span class="block text-sm font-bold text-dark">Default</span>
                                            <span class="text-[10px] text-gray-400 font-medium">Clean Gray/White</span>
                                        </div>
                                        ${bgPreference === 'default' ? '<div class="absolute top-3 right-3 text-primary"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>' : ''}
                                    </button>

                                    <button class="bg-pref-btn group relative p-3 rounded-2xl border-2 transition-all text-left flex flex-col gap-2 ${bgPreference === 'theme' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-100 bg-white hover:border-gray-200'}" data-bg="theme">
                                        <div class="w-8 h-8 rounded-full border border-primary/20 mb-1 bg-primary/20"></div>
                                        <div>
                                            <span class="block text-sm font-bold text-dark">Theme Tint</span>
                                            <span class="text-[10px] text-gray-400 font-medium">Pastel Look</span>
                                        </div>
                                        ${bgPreference === 'theme' ? '<div class="absolute top-3 right-3 text-primary"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>' : ''}
                                    </button>
                                </div>
                            </div>
                            
                            <div class="mt-4 p-3 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4 items-center">
                                <div class="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark text-sm">Preview Mode</h4>
                                    <p class="text-xs text-gray-500">The entire app adapts to your adjustments immediately.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Footer / Navigation -->
                <div class="px-10 py-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                    <button id="btn-back" class="px-6 py-2.5 rounded-xl font-bold text-gray-400 hover:text-dark hover:bg-white transition-all ${currentStep === 1 ? 'invisible' : ''}">
                        Back
                    </button>
                    
                    <button id="btn-next" class="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
                        ${currentStep === 3 ? 'Get Started' : 'Next Step'}
                        ${currentStep !== 3 ? '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>' : ''}
                    </button>
                </div>

            </div>
        </div>
        `;

        attachListeners();
    };

    const attachListeners = () => {


        // Avatar Selection
        element.querySelectorAll('.avatar-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selectedAvatar = btn.dataset.avatar;
                render();
                if (currentStep === 1) setTimeout(() => document.getElementById('input-name').focus(), 50);
            });
        });

        // Theme Selection
        element.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selectedTheme = btn.dataset.theme;
                syncStateFromTheme(selectedTheme);
                const rgb = hslToRgb(currentHue, currentSat, currentLight).join(' ');
                document.documentElement.style.setProperty('--color-primary-rgb', rgb);

                // If bg pref is active, update it too
                // No need to manually set BG color if we use CSS variable in bg-pref logic,
                // BUT we need to ensure the variable is set (it is above).
                // Since 'render' re-renders the buttons, their state is preserved in 'bgPreference'.
                // If bgPreference is 'theme', the background is 'rgb(var(--color-primary-rgb) / 0.08)'.
                // Changing the variable above AUTOMATICALLY updates the background!
                // So we can remove the manual body update here.

                render();
            });
        });

        // Background Preference Selection
        element.querySelectorAll('.bg-pref-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                bgPreference = btn.dataset.bg;

                if (bgPreference === 'theme') {
                    // Apply Tint using CSS Variable so it auto-updates
                    document.body.style.backgroundColor = 'rgb(var(--color-primary-rgb) / 0.04)';
                } else {
                    // Revert to Default
                    document.body.style.backgroundColor = '';
                }

                render();
            });
        });



        // Navigation
        const nextBtn = element.querySelector('#btn-next');
        const backBtn = element.querySelector('#btn-back');

        // Input References (save current values before re-rendering or changing step)
        const nameInput = document.getElementById('input-name');
        const uniInput = document.getElementById('input-university');
        const deptInput = document.getElementById('input-dept');

        // Sync inputs with local scope on typing so they persist if we re-render
        if (nameInput) nameInput.addEventListener('input', e => data.user.name = e.target.value);
        if (uniInput) uniInput.addEventListener('input', e => data.user.university = e.target.value);
        if (deptInput) deptInput.addEventListener('input', e => data.user.department = e.target.value);


        nextBtn.addEventListener('click', () => {
            // Validation
            if (currentStep === 1) {
                if (!data.user.name || !data.user.name.trim()) {
                    document.getElementById('input-name').classList.add('ring-2', 'ring-red-500', 'border-red-500');
                    return;
                }
            }
            if (currentStep === 2) {
                if (!data.user.university || !data.user.university.trim()) {
                    document.getElementById('input-university').classList.add('ring-2', 'ring-red-500', 'border-red-500');
                    return;
                }
                if (!data.user.department || !data.user.department.trim()) {
                    document.getElementById('input-dept').classList.add('ring-2', 'ring-red-500', 'border-red-500');
                    return;
                }
            }

            if (currentStep < 3) {
                currentStep++;
                render();
            } else {
                finishSetup();
            }
        });

        backBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                render();
            }
        });
    };

    const finishSetup = () => {
        data.user.avatar = selectedAvatar;
        data.user.isSetup = true;
        // Ideally save theme too if we added a field, but for now it's just runtime.
        // We can save it to localStorage separate or add to data object in future.
        // For persistence within this session logic:
        // We really should save the Theme to data so it loads on next refresh.
        // Let's hack it into data.user for now as there is no config object.
        data.user.themePreference = selectedTheme;

        // Save the custom RGB final value
        const [r, g, b] = hslToRgb(currentHue, currentSat, currentLight);
        data.user.customThemeRgb = `${r} ${g} ${b}`;
        data.user.bgPreference = bgPreference;

        saveData();

        // Animate Out
        const container = element.querySelector('.fixed');
        const card = element.querySelector('.relative');
        card.classList.add('scale-95', 'opacity-0', '-translate-y-4');
        container.classList.add('opacity-0');

        setTimeout(() => {
            element.innerHTML = '';
            onComplete();
        }, 500);
    };

    render();
}

// Color Helpers appended at the end of the file
function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h * 360, s * 100, l * 100];
}

function hslToRgb(h, s, l) {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
