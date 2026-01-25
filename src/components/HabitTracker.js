
import { t } from '../translations.js';
import { escapeHTML } from '../security.js';

export function renderHabitTracker(container) {
    if (!container) return;

    // Load state
    const today = new Date().toLocaleDateString();
    let data;
    try {
        data = JSON.parse(localStorage.getItem('habit_tracker_data_v3') || '{}');
    } catch (e) {
        console.error('Failed to parse habit data:', e);
        data = {};
    }

    // Reset if it's a new day
    if (data.date !== today) {
        // Keep habit names but reset status
        const oldHabits = data.habits || [];

        // Reset completed status
        const resetHabits = oldHabits.map(h => ({ ...h, completed: false }));

        data = {
            date: today,
            habits: resetHabits
        };
        try {
            localStorage.setItem('habit_tracker_data_v3', JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save habit data:', e);
        }
    }

    const saveState = () => {
        data.date = new Date().toLocaleDateString(); // Ensure date is current
        try {
            localStorage.setItem('habit_tracker_data_v3', JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save habit state:', e);
        }
        updateProgress();
        // Dispatch event for other components (e.g. Stats Cards) to update
        document.dispatchEvent(new Event('dataChanged'));
    };

    const updateProgress = () => {
        const completed = data.habits.filter(h => h.completed).length;
        const total = data.habits.length;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

        const bar = container.querySelector('#hb-progress-bar');
        const text = container.querySelector('#hb-progress-text');

        if (bar) bar.style.width = `${percent}%`;
        if (text) text.innerText = `${percent}% ${t('done')}`;
    };

    const renderList = () => {
        const list = container.querySelector('#hb-list');
        list.innerHTML = '';

        if (data.habits.length === 0) {
            list.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full text-gray-400 gap-2 mt-4">
                    <svg class="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span class="text-xs">${t('no_habits_msg')}</span>
                </div>
            `;
            return;
        }

        data.habits.forEach((habit, index) => {
            const item = document.createElement('div');
            item.className = `
                flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer group mb-2
                ${habit.completed
                    ? 'bg-primary/10 border-primary/20 shadow-sm'
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'}
            `;

            item.innerHTML = `
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="text-lg shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${habit.completed ? 'bg-white' : 'bg-gray-50'}">
                        ${habit.icon}
                    </div>
                    <span class="text-sm font-bold truncate ${habit.completed ? 'text-primary line-through opacity-70' : 'text-gray-700'}">
                        ${escapeHTML(habit.name)}
                    </span>
                </div>
                
                <div class="shrink-0 flex items-center gap-2">
                     <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                        ${habit.completed ? 'border-primary bg-primary' : 'border-gray-300 group-hover:border-primary'}">
                        ${habit.completed
                    ? '<svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>'
                    : ''}
                     </div>
                     <button class="delete-btn opacity-0 group-hover:opacity-100 p-1 text-gray-300 hover:text-primary transition-all" data-idx="${index}">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                </div>
            `;

            // Toggle Completion
            item.onclick = (e) => {
                if (e.target.closest('.delete-btn')) return;
                habit.completed = !habit.completed;
                saveState();
                renderList(); // Re-render to update styles
            };

            // Delete Handler
            item.querySelector('.delete-btn').onclick = (e) => {
                e.stopPropagation();
                data.habits.splice(index, 1);
                saveState();
                renderList();
            };

            list.appendChild(item);
        });

        updateProgress();
    };

    container.innerHTML = `
        <div class="h-full flex flex-col p-5">
            <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ${t('daily_habits')}
                </h3>
                <div class="flex items-center gap-2">
                     <span id="hb-progress-text" class="text-xs font-bold text-gray-400">0% ${t('done')}</span>
                </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="w-full h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden shrink-0">
                <div id="hb-progress-bar" class="h-full bg-primary transition-all duration-500 ease-out" style="width: 0%"></div>
            </div>

            <!-- List -->
            <div id="hb-list" class="flex-1 overflow-y-auto no-scrollbar min-h-0 pr-1">
                <!-- Items injected here -->
            </div>

            <!-- Add Input -->
            <div class="mt-3 pt-3 border-t border-gray-100 flex gap-2 shrink-0">
                <input type="text" id="hb-input" class="flex-1 bg-gray-50 border-none rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-primary focus:bg-white transition-all" placeholder="${t('new_habit_placeholder')}">
                <button id="hb-add-btn" class="bg-primary text-white p-2 rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
        </div>
    `;

    renderList();

    // Add Logic
    const input = container.querySelector('#hb-input');
    const addBtn = container.querySelector('#hb-add-btn');

    const addHabit = () => {
        const val = input.value.trim();
        if (val) {
            // SVG Icons pool
            const icons = [
                '<svg class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>', // Star
                '<svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>', // Lightning
                '<svg class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', // Clock
                '<svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>' // Smile
            ];
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];

            data.habits.push({
                id: Date.now(),
                name: val,
                completed: false,
                icon: randomIcon
            });
            input.value = '';
            saveState();
            renderList();

            // Scroll to bottom
            const list = container.querySelector('#hb-list');
            list.scrollTop = list.scrollHeight;
        }
    };

    addBtn.onclick = addHabit;
    input.onkeypress = (e) => { if (e.key === 'Enter') addHabit(); };
}
