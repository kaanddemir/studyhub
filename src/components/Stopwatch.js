
export function renderStopwatch(container) {
    if (!container) return;

    let startTime = 0;
    let elapsed = 0;
    let intervalId = null;
    let isRunning = false;

    container.innerHTML = `
        <div class="h-full flex flex-col p-5">
            <div class="flex justify-between items-center mb-6 cursor-move shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Stopwatch
                </h3>
            </div>

            <div class="flex-1 flex flex-col items-center justify-center min-h-0">
                <!-- Time Display -->
                <div id="sw-display" class="text-5xl font-mono text-dark font-bold tracking-wider mb-8 tabular-nums">
                    00:00:00
                </div>

                <!-- Controls -->
                <div class="flex items-center gap-4 w-full justify-center">
                    <button id="sw-btn-reset" class="px-6 py-3 rounded-xl bg-gray-100 text-gray-500 font-bold hover:bg-gray-200 transition-colors text-sm">
                        Reset
                    </button>

                    <button id="sw-btn-toggle" class="px-8 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all text-sm min-w-[100px]">
                        Start
                    </button>
                </div>
            </div>
        </div>
    `;

    const display = container.querySelector('#sw-display');
    const btnToggle = container.querySelector('#sw-btn-toggle');
    const btnReset = container.querySelector('#sw-btn-reset');

    const formatTime = (ms) => {
        const date = new Date(ms);
        const m = String(date.getUTCMinutes()).padStart(2, '0');
        const s = String(date.getUTCSeconds()).padStart(2, '0');
        const cs = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
        return `<span class="align-top">${m}:</span>${s}<span class="text-gray-400 text-2xl align-baseline">.${cs}</span>`;
    };

    // Initial Render
    display.innerHTML = formatTime(0);

    const update = () => {
        const now = Date.now();
        elapsed = now - startTime;
        display.innerHTML = formatTime(elapsed);
    };

    btnToggle.onclick = () => {
        if (isRunning) {
            // STOP
            clearInterval(intervalId);
            isRunning = false;
            btnToggle.innerText = "Start";
            btnToggle.classList.remove('bg-primary', 'hover:opacity-90');
            btnToggle.classList.add('bg-primary', 'hover:opacity-90');
        } else {
            // START
            startTime = Date.now() - elapsed;
            intervalId = setInterval(update, 30);
            isRunning = true;
            btnToggle.innerText = "Stop";
            btnToggle.classList.remove('bg-primary', 'hover:opacity-90');
            btnToggle.classList.add('bg-primary', 'hover:opacity-90');
        }
    };

    btnReset.onclick = () => {
        if (isRunning) {
            clearInterval(intervalId);
            isRunning = false;
            btnToggle.innerText = "Start";
            btnToggle.classList.remove('bg-primary', 'hover:opacity-90');
            btnToggle.classList.add('bg-primary', 'hover:opacity-90');
        }
        elapsed = 0;
        startTime = 0;
        display.innerHTML = formatTime(0);
    };
}
