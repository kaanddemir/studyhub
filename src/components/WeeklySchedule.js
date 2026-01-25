import { data, saveData } from '../data.js';
import { t } from '../translations.js';
import { escapeHTML } from '../security.js';

export function renderWeeklySchedule(element) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

    // Ensure data structure exists
    if (!data.weeklySchedule) {
        data.weeklySchedule = { events: {} };
    }

    element.innerHTML = `
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col overflow-hidden relative group">
            <div class="flex justify-between items-center mb-4 shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    ${t('weekly_schedule')}
                </h3>
                <div class="flex items-center gap-1">
                    <button id="reset-schedule-btn" class="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="${t('clear_schedule')}">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                </div>
            </div>
            
            <!-- TABLE VIEW -->
            <style>
                .hover-scrollbar::-webkit-scrollbar {
                    width: 0px;
                    background: transparent;
                }
                .group:hover .hover-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .group:hover .hover-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(0,0,0,0.1);
                    border-radius: 20px;
                }
                .hover-scrollbar {
                    scrollbar-width: none; /* Firefox */
                }
                .group:hover .hover-scrollbar {
                    scrollbar-width: thin;
                }
            </style>
            <div id="ws-view-table" class="flex-1 overflow-y-auto overflow-x-hidden hover-scrollbar relative">
                <table class="w-full border-collapse sticky-table">
                    <thead>
                        <tr>
                            <th class="p-2 border-b border-gray-100 text-[10px] text-gray-400 font-bold uppercase w-12 sticky left-0 bg-white z-20">${t('time')}</th>
                            ${days.map(d => `<th class="p-2 border-b border-gray-100 text-[10px] text-gray-400 font-bold uppercase text-center">${d}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${times.map((time, timeIdx) => `
                            <tr>
                                <td class="p-2 border-b border-gray-50 text-[10px] text-gray-500 font-medium sticky left-0 bg-white z-10 text-center">${time}</td>
                                ${days.map((_, dayIdx) => {
        const key = `${dayIdx}-${timeIdx}`;
        const val = data.weeklySchedule.events[key] || "";
        return `
                                        <td class="p-1 border-b border-gray-50 border-r border-gray-50 last:border-r-0 relative group hover:bg-gray-50 transition-colors">
                                            <input 
                                                type="text" 
                                                class="w-full bg-transparent text-xs text-dark font-medium focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/50 rounded px-1 py-1 text-center truncate placeholder-gray-200 transition-all schedule-input" 
                                                value="${escapeHTML(val)}" 
                                                data-key="${key}"
                                                placeholder="..."
                                            >
                                        </td>
                                    `;
    }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Custom Reset Confirmation Modal -->
            <div id="schedule-reset-modal" class="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-200 rounded-3xl">
                <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform scale-95 transition-all text-center w-48">
                     <div class="mb-3 text-primary bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                     </div>
                     <h4 class="text-sm font-bold text-dark mb-1">${t('clear_all_q')}</h4>
                     <p class="text-[10px] text-gray-400 mb-4 leading-tight">${t('clear_all_desc')}</p>
                     <div class="flex gap-2 justify-center">
                         <button id="cancel-schedule-reset" class="px-3 py-1.5 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">${t('no')}</button>
                          <button id="confirm-schedule-reset" class="px-3 py-1.5 text-xs font-bold text-white bg-primary hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30">${t('yes')}</button>
                     </div>
                </div>
            </div>
        </div>
    `;

    // --- LOGIC ---

    // 1. Data Binding
    element.querySelectorAll('.schedule-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const key = e.target.dataset.key;
            const value = e.target.value;
            data.weeklySchedule.events[key] = value;
            saveData();
        });

        input.addEventListener('focus', function () {
            this.select();
        });
    });

    // 2. Reset & Modal Logic
    const resetBtn = element.querySelector('#reset-schedule-btn');
    const modal = element.querySelector('#schedule-reset-modal');
    const confirmBtn = element.querySelector('#confirm-schedule-reset');
    const cancelBtn = element.querySelector('#cancel-schedule-reset');

    if (resetBtn && modal) {
        resetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.classList.remove('invisible', 'opacity-0');
            modal.classList.add('visible', 'opacity-100');
            modal.querySelector('div').classList.remove('scale-95');
            modal.querySelector('div').classList.add('scale-100');
        });

        cancelBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.classList.add('invisible', 'opacity-0');
            modal.classList.remove('visible', 'opacity-100');
            modal.querySelector('div').classList.add('scale-95');
            modal.querySelector('div').classList.remove('scale-100');
        });

        confirmBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            data.weeklySchedule.events = {};
            saveData();
            // Re-render to clear
            renderWeeklySchedule(element);
        });
    }
}
