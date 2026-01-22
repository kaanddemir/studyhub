import { t } from '../translations.js';

export function renderPomodoro(element) {
    let timeLeft = 25 * 60; // 25 minutes in seconds
    let totalTime = 25 * 60;
    let isRunning = false;
    let mode = 'work'; // 'work' or 'break'
    let timerId = null;

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const updateTimerDisplay = () => {
        const timeDisplay = element.querySelector('#pomodoro-time');
        const progressRing = element.querySelector('#progress-ring-circle');

        if (timeDisplay) timeDisplay.textContent = formatTime(timeLeft);

        if (progressRing) {
            // Recalculate radius based on current render if needed, but fixed logic works too
            const radius = 56; // Fixed radius from SVG
            const circumference = radius * 2 * Math.PI;
            const offset = circumference - (timeLeft / totalTime) * circumference;
            // Ensure no negative offset visual glitches
            progressRing.style.strokeDashoffset = offset;
        }
    };

    const adjustTime = (amount) => {
        if (isRunning) return;

        let newTime = timeLeft + (amount * 60);
        // Limits: Min 1 min, Max 60 mins
        if (newTime < 60) newTime = 60;
        if (newTime > 60 * 60) newTime = 60 * 60;

        timeLeft = newTime;
        totalTime = newTime;
        updateTimerDisplay();
    };

    const toggleTimer = () => {
        const btn = element.querySelector('#pomodoro-toggle-btn');
        const icon = btn.querySelector('div'); // The icon container
        const controls = element.querySelectorAll('.time-control-btn');

        if (isRunning) {
            clearInterval(timerId);
            isRunning = false;
            // Show Play Icon
            icon.innerHTML = `<svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
            btn.classList.remove('bg-primary', 'hover:opacity-90', 'text-white');
            btn.classList.add('bg-primary', 'hover:opacity-90', 'text-white');
            // Mode adaptation removed to keep uniform color

            // Show adjustment controls
            controls.forEach(c => c.classList.remove('opacity-0', 'pointer-events-none'));
        } else {
            isRunning = true;
            // Show Pause Icon
            icon.innerHTML = `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

            // Mode specific colors
            if (mode === 'work') {
                btn.classList.remove('bg-primary', 'hover:opacity-90');
                btn.classList.add('bg-primary', 'hover:opacity-90');
            }

            // Hide adjustment controls
            controls.forEach(c => c.classList.add('opacity-0', 'pointer-events-none'));

            timerId = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateTimerDisplay();
                } else {
                    // Timer finished
                    clearInterval(timerId);
                    isRunning = false;
                    new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg').play().catch(() => { });

                    // Custom Web Notification
                    const msg = mode === 'work' ? t('time_break_msg') : t('break_over_msg');
                    showNotification(msg);

                    toggleTimer(); // Reset UI state
                }
            }, 1000);
        }
    };

    const showNotification = (msg) => {
        const div = document.createElement('div');
        div.className = 'fixed top-6 right-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-[9999] flex items-center gap-4 animate-fade-in-down transition-all duration-500';
        div.innerHTML = `
            <div class="w-12 h-12 bg-green-100 text-primary rounded-full flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
                 <h4 class="font-bold text-dark text-sm">${t('timer_complete')}</h4>
                 <p class="text-xs text-gray-500">${msg}</p>
            </div>
            <button class="text-gray-300 hover:text-dark ml-2" onclick="this.parentElement.remove()">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        `;
        document.body.appendChild(div);

        // Auto remove
        setTimeout(() => {
            if (div.parentElement) {
                div.style.opacity = '0';
                div.style.transform = 'translateY(-20px)';
                setTimeout(() => div.remove(), 500);
            }
        }, 5000);
    };

    const resetTimer = () => {
        clearInterval(timerId);
        isRunning = false;
        timeLeft = mode === 'work' ? 25 * 60 : 5 * 60;
        totalTime = timeLeft;
        updateTimerDisplay();

        const btn = element.querySelector('#pomodoro-toggle-btn');
        const icon = btn.querySelector('div');
        icon.innerHTML = `<svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
        btn.classList.remove('bg-primary', 'hover:opacity-90');
        btn.classList.add('bg-primary', 'hover:opacity-90');

        // Show adjustment controls
        const controls = element.querySelectorAll('.time-control-btn');
        controls.forEach(c => c.classList.remove('opacity-0', 'pointer-events-none'));
    };

    const switchMode = (newMode) => {
        mode = newMode;
        timeLeft = mode === 'work' ? 25 * 60 : 5 * 60;
        totalTime = timeLeft;

        // Ring Color stays primary
        element.querySelector('#progress-ring-circle').classList.add('text-primary');

        resetTimer();
    };

    element.innerHTML = `
        <div class="bg-white p-5 rounded-3xl shadow-sm hover:shadow-md transition-shadow draggable-item relative group h-full flex flex-col items-center" draggable="true">
            <div class="w-full flex justify-between items-center shrink-0 mb-4">
                 <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     ${t('focus_timer')}
                </h3>
                
                <!-- Single Toggle Button -->
                <button id="pomodoro-mode-toggle" class="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors shrink-0 border border-transparent hover:border-gray-200">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>${t('work')}</span>
                </button>
            </div>

            <!-- Content Container - Centered Vertically -->
            <div class="flex-1 w-full flex flex-col items-center justify-center gap-3">

            <!-- Circular Timer Area with Side Controls -->
            <div class="flex items-center justify-center gap-4 w-full my-2">
                
                <!-- Decrease Button (Left of Ring) -->
                <button id="decrease-time" class="time-control-btn w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-primary flex items-center justify-center transition-all shrink-0">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
                </button>

                <!-- Ring Container -->
                <div class="relative w-32 h-32 flex items-center justify-center shrink-0">
                   <svg class="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="56" stroke="currentColor" stroke-width="6" fill="transparent" class="text-gray-100" />
                        <circle id="progress-ring-circle" cx="64" cy="64" r="56" stroke="currentColor" stroke-width="6" fill="transparent" 
                                stroke-dasharray="351.86" stroke-dashoffset="0" stroke-linecap="round" 
                                class="text-primary transition-all duration-1000 ease-linear" />
                    </svg>
                    <!-- Time Display (Absolute Center of Ring) -->
                    <span id="pomodoro-time" class="absolute text-2xl font-bold text-primary font-mono tracking-tighter cursor-default select-none">25:00</span>
                </div>

                <!-- Increase Button (Right of Ring) -->
                <button id="increase-time" class="time-control-btn w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-primary flex items-center justify-center transition-all shrink-0">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>

                <!-- Controls -->
                <div class="flex items-center gap-4 justify-center shrink-0">
                     <button id="pomodoro-reset-btn" class="w-12 h-12 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </button>
                    
                    <button id="pomodoro-toggle-btn" class="w-12 h-12 rounded-full bg-primary text-white hover:opacity-90 flex items-center justify-center transition-all shadow-lg shadow-primary/30 hover:shadow-xl active:scale-95 group-hover:scale-105">
                        <div class="flex items-center justify-center">
                             <svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Listeners
    element.querySelector('#pomodoro-toggle-btn').addEventListener('click', toggleTimer);
    element.querySelector('#pomodoro-reset-btn').addEventListener('click', resetTimer);

    // Toggle Mode Logic
    const modeBtn = element.querySelector('#pomodoro-mode-toggle');

    // Initial State
    modeBtn.innerHTML = `
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        <span>${t('work')}</span>
    `;

    modeBtn.addEventListener('click', () => {
        if (mode === 'work') {
            switchMode('break');
            modeBtn.innerHTML = `
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                <span>${t('break')}</span>
            `;
            // Removed color change logic, keeping it default gray
        } else {
            switchMode('work');
            modeBtn.innerHTML = `
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>${t('work')}</span>
            `;
        }
    });

    element.querySelector('#decrease-time').addEventListener('click', () => adjustTime(-1));
    element.querySelector('#increase-time').addEventListener('click', () => adjustTime(1));

    // Initial render state
    updateTimerDisplay();
}
