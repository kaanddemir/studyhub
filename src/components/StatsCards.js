import { data } from '../data.js';
import { t } from '../translations.js';

export function getStatsCardsHTML(stats) {
  const completedTodos = data.todos ? data.todos.filter(t => t.completed).length : 0;
  const habitData = JSON.parse(localStorage.getItem('habit_tracker_data_v3') || '{}');
  const completedHabits = habitData.habits ? habitData.habits.filter(h => h.completed).length : 0;

  const cards = [
    {
      title: t('total_courses'),
      value: stats.courses.total,
      icon: `<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
    },
    {
      title: t('completed'),
      value: completedTodos + completedHabits,
      icon: `<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`,
    },
    {
      title: t('studyai'),
      value: "",
      icon: `<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`,
    },
    {
      title: t('total_streak'),
      value: `${stats.streak.total} ${t('days_l')}`,
      icon: `<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>`,
    },
  ];

  const cardsHTML = cards.slice(0, 3).map((card, index) => `
    <div id="stats-card-${index}" class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow draggable-item relative group flex flex-col justify-between" draggable="true">
      <div class="flex justify-between items-center mb-4 cursor-move">
         <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            ${card.icon}
            ${card.title}
         </h3>
         ${index === 0 ? `
         <button onclick="window.navigateTo('courses')" class="text-gray-400 hover:text-primary transition-colors p-1" title="${t('view_details')}">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
         </button>
         ` : ''}
      </div>
      <div class="flex flex-col h-full">
         <div class="text-3xl font-bold text-dark mb-2 flex items-center gap-2">
            ${card.value}
         </div>
         
         ${index === 0 && data.courses && data.courses.length > 0 ? `
         <div class="mt-2 flex flex-col gap-2 overflow-y-auto max-h-40 custom-scrollbar pr-1">
            ${data.courses.map(course => `
                <div onclick="window.navigateTo('course-detail', { id: ${course.id} })" class="flex items-center gap-2 p-2 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors group/course">
                    <div class="w-6 h-6 rounded-lg bg-white text-primary flex items-center justify-center font-bold text-xs shadow-sm border border-gray-100">
                        ${course.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xs font-medium text-gray-600 truncate flex-1 block" title="${course.name}">${course.name}</span>
                    <svg class="w-3 h-3 text-gray-300 group-hover/course:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            `).join('')}
         </div>
         ` : ''}

         ${index === 1 ? `
         <div class="mt-4 flex flex-col gap-2">
             <div class="flex justify-between items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
                 <div class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30"></span>
                     <span class="text-xs font-medium text-gray-600">${t('todos')}</span>
                 </div>
                 <span id="stat-todo-count" class="text-xs font-bold text-dark">${completedTodos}</span>
             </div>
             <div class="flex justify-between items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
                 <div class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30"></span>
                     <span class="text-xs font-medium text-gray-600">${t('habits')}</span>
                 </div>
                 <span id="stat-habit-count" class="text-xs font-bold text-dark">${completedHabits}</span>
             </div>
         </div>
         ` : ''}

         ${index === 2 ? `
         <div class="flex-1 flex flex-col items-center justify-center -mt-4 mb-2 icon-float">
            <!-- Cute Robot Vector -->
            <svg class="w-40 h-40 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
            </svg>
         </div>

         <div class="mt-auto">
             <p class="text-[11px] text-gray-400 leading-tight mb-3 text-center">${t('stuck_msg')}</p>
             <button onclick="window.openAiCoach()" class="w-full py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-xs flex items-center justify-center gap-2">
                 <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                 ${t('ask_studyai')}
             </button>
         </div>
         ` : ''}
      </div>
    </div>
  `).join('');

  const calculatorHTML = `
    <div class="bg-white p-5 rounded-3xl shadow-sm hover:shadow-md transition-shadow draggable-item relative group flex flex-col h-80" draggable="true" id="calculator-card">
        <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                ${t('calculator')}
            </h3>
        </div>
        <div class="flex-1 flex flex-col min-h-0">
            <input type="text" id="calc-display" class="w-full bg-gray-50 text-right text-xl font-mono p-2 rounded-xl mb-3 text-dark focus:outline-none" readonly value="0">
            <div class="grid grid-cols-4 gap-2 flex-1 min-h-0">
                <button class="calc-btn text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="C">C</button>
                <button class="calc-btn text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="(">(</button>
                <button class="calc-btn text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val=")">)</button>
                <button class="calc-btn text-primary hover:bg-primary/10 rounded-lg transition-colors text-sm" data-val="/">÷</button>

                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="7">7</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="8">8</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="9">9</button>
                <button class="calc-btn text-primary hover:bg-primary/10 rounded-lg transition-colors text-sm" data-val="*">×</button>

                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="4">4</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="5">5</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="6">6</button>
                <button class="calc-btn text-primary hover:bg-primary/10 rounded-lg transition-colors text-sm" data-val="-">-</button>

                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="1">1</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="2">2</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="3">3</button>
                <button class="calc-btn text-primary hover:bg-primary/10 rounded-lg transition-colors text-sm" data-val="+">+</button>

                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm col-span-2" data-val="0">0</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val=".">.</button>
                <button class="calc-btn bg-primary text-white hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30 text-sm" data-val="=">=</button>
            </div>
        </div>
    </div>
  `;

  return cardsHTML + calculatorHTML;
}
