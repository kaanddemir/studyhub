
import { t } from '../translations.js';

export function renderTimeWidget(element) {
    if (!element) return;

    // State
    let isDigital = true; // Default to Digital
    let timerId = null;

    // Render Basic Structure
    element.innerHTML = `
        <div class="flex flex-col h-full bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow relative group">
            <div class="flex justify-between items-center p-6 pb-2 cursor-move">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </svg>
                    ${t('time_title')}
                </h3>
                <button id="toggle-clock-mode" class="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100" title="${t('switch_mode')}">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </button>
            </div>
            
            <div class="flex-1 flex items-center justify-center p-6 pt-0 min-h-0">
                <!-- Digital Clock -->
                <div id="digital-clock" class="text-center w-full">
                    <div class="text-5xl font-bold text-dark font-mono tracking-wider" id="digital-time">00:00:00</div>
                    <div class="text-gray-400 text-sm mt-2 font-medium" id="digital-date">Mon, 01 Jan</div>
                </div>

                <!-- Analog Clock -->
                <div id="analog-clock" class="hidden relative w-48 h-48 rounded-full border-4 border-gray-100 shadow-inner bg-gray-50">
                    <!-- Markers -->
                    <div class="absolute inset-0">
                         ${[...Array(12)].map((_, i) => `
                            <div class="absolute w-1 h-3 bg-gray-300 left-1/2 top-1 origin-[50%_92px] -ml-0.5" style="transform: rotate(${i * 30}deg)"></div>
                         `).join('')}
                    </div>
                    
                    <!-- Hands -->
                    <div id="hour-hand" class="absolute w-1.5 h-12 bg-dark rounded-full left-1/2 top-1/2 -ml-[3px] -mt-12 origin-bottom transition-transform duration-75 ease-linear shadow-sm"></div>
                    <div id="min-hand" class="absolute w-1 h-16 bg-gray-500 rounded-full left-1/2 top-1/2 -ml-0.5 -mt-16 origin-bottom transition-transform duration-75 ease-linear opacity-80"></div>
                    <div id="sec-hand" class="absolute w-0.5 h-20 bg-red-500 rounded-full left-1/2 top-1/2 -ml-[1px] -mt-20 origin-bottom transition-transform duration-75 ease-linear"></div>
                    
                    <!-- Center Dot -->
                    <div class="absolute w-3 h-3 bg-primary rounded-full left-1/2 top-1/2 -ml-1.5 -mt-1.5 shadow-md z-10"></div>
                </div>
            </div>
        </div>
    `;

    // Elements
    const toggleBtn = element.querySelector('#toggle-clock-mode');
    const digitalEl = element.querySelector('#digital-clock');
    const analogEl = element.querySelector('#analog-clock');

    // Digital elements
    const dTime = element.querySelector('#digital-time');
    const dDate = element.querySelector('#digital-date');

    // Analog elements
    const hHand = element.querySelector('#hour-hand');
    const mHand = element.querySelector('#min-hand');
    const sHand = element.querySelector('#sec-hand');

    // Toggle Logic
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault(); // ensure no drag start if accidental
        e.stopPropagation();
        isDigital = !isDigital;
        updateView();
    });

    // Prevents drag on button
    toggleBtn.addEventListener('mousedown', (e) => e.stopPropagation());
    toggleBtn.addEventListener('dragstart', (e) => { e.preventDefault(); e.stopPropagation(); });

    function updateView() {
        if (isDigital) {
            digitalEl.classList.remove('hidden');
            analogEl.classList.add('hidden');
        } else {
            digitalEl.classList.add('hidden');
            analogEl.classList.remove('hidden');
        }
    }

    function updateTime() {
        const now = new Date();

        if (isDigital) {
            // Digital Update
            const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
            const dateStr = now.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' });

            dTime.innerText = timeStr;
            dDate.innerText = dateStr;
        } else {
            // Analog Update
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours();

            const secDeg = ((seconds / 60) * 360);
            const minDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
            const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30);

            sHand.style.transform = `rotate(${secDeg}deg)`;
            mHand.style.transform = `rotate(${minDeg}deg)`;
            hHand.style.transform = `rotate(${hourDeg}deg)`;
        }
    }

    // Init
    updateView();
    updateTime();
    timerId = setInterval(updateTime, 1000);

    // Cleanup if re-rendered?
    // In this simple app, we don't have a standardized unmount lifecycle, 
    // but usually renderDashboard is called once or on full reload.
}
