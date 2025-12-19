
import { t } from '../translations.js';

export function renderGames(container) {
    if (!container) return;

    let activeGame = 'menu'; // 'menu', 'yesno', 'picker'
    let pickerItems = [];

    const render = () => {
        if (activeGame === 'menu') {
            container.innerHTML = `
                <div class="h-full flex flex-col p-5">
                    <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
                        <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                            <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            ${t('mini_games')}
                        </h3>
                    </div>
                    <div class="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center gap-3 pr-2">
                        <!-- Yes / No -->
                        <button id="btn-yesno" class="w-full py-4 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all flex items-center px-4 gap-4 group shrink-0">
                             <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </div>
                             <div class="text-left">
                                <span class="block font-bold text-dark text-sm">${t('yes_no')}</span>
                                <span class="block text-xs text-gray-400">${t('decision_maker')}</span>
                             </div>
                             <svg class="w-4 h-4 text-gray-300 ml-auto group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                        </button>

                        <!-- Random Picker -->
                        <button id="btn-picker" class="w-full py-4 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all flex items-center px-4 gap-4 group shrink-0">
                             <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                             </div>
                             <div class="text-left">
                                <span class="block font-bold text-dark text-sm">${t('random_picker')}</span>
                                <span class="block text-xs text-gray-400">${t('choice_generator')}</span>
                             </div>
                             <svg class="w-4 h-4 text-gray-300 ml-auto group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            `;

            container.querySelector('#btn-yesno').onclick = () => { activeGame = 'yesno'; render(); };
            container.querySelector('#btn-picker').onclick = () => { activeGame = 'picker'; render(); };
        }
        else if (activeGame === 'yesno') {
            container.innerHTML = `
                <div class="h-full flex flex-col p-5">
                    <div class="flex items-center gap-3 mb-4 shrink-0">
                        <button id="btn-back" class="text-gray-400 hover:text-dark transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </button>
                        <h3 class="text-lg font-bold text-dark">${t('yes_no')}</h3>
                    </div>
                    
                    <div class="flex-1 flex flex-col items-center justify-center text-center">
                        <div id="yn-result" class="text-4xl font-bold text-gray-300 mb-4 min-h-[3rem] tracking-widest">???</div>
                        
                        <button id="yn-decide" class="px-6 py-2 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-sm w-32 text-sm">
                            ${t('decide')}
                        </button>
                    </div>
                </div>
            `;

            container.querySelector('#btn-back').onclick = () => { activeGame = 'menu'; render(); };

            const resultEl = container.querySelector('#yn-result');
            container.querySelector('#yn-decide').onclick = () => {
                resultEl.innerText = "...";
                container.querySelector('#yn-decide').disabled = true;

                setTimeout(() => {
                    const answers = [t('ans_yes'), t('ans_no'), t('maybe'), t('ans_no'), t('ans_yes')];
                    const choice = answers[Math.floor(Math.random() * answers.length)];

                    resultEl.innerText = choice;

                    if (choice === t('ans_yes')) resultEl.className = "text-5xl font-bold text-primary mb-4 min-h-[3rem] tracking-wider";
                    else if (choice === t('ans_no')) resultEl.className = "text-5xl font-bold text-red-500 mb-4 min-h-[3rem] tracking-wider";
                    else resultEl.className = "text-5xl font-bold text-gray-500 mb-4 min-h-[3rem] tracking-wider";

                    container.querySelector('#yn-decide').disabled = false;
                }, 400);
            };
        }
        else if (activeGame === 'picker') {
            if (pickerItems.length === 0) pickerItems = [t('option_a'), t('option_b')];

            container.innerHTML = `
                <div class="h-full flex flex-col p-5">
                    <div class="flex items-center gap-3 mb-2 shrink-0">
                        <button id="btn-back" class="text-gray-400 hover:text-dark transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </button>
                        <h3 class="text-lg font-bold text-dark">${t('random_picker')}</h3>
                    </div>
                    
                    <div class="flex gap-2 mb-3 mt-2">
                        <input type="text" id="rp-input" class="flex-1 bg-gray-50 border-none rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-gray-200" placeholder="${t('add_option_placeholder')}">
                        <button id="rp-add" class="bg-gray-100 hover:bg-gray-200 text-dark px-3 rounded-lg text-xs font-bold">+</button>
                    </div>

                    <div id="rp-list" class="flex-1 overflow-y-auto flex flex-wrap gap-2 content-start min-h-0 custom-scrollbar mb-3">
                        ${pickerItems.map((item, idx) => `
                            <div class="bg-white border border-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs flex items-center gap-2 shadow-sm">
                                ${item}
                                <span class="text-gray-300 hover:text-red-400 cursor-pointer pointer-events-auto" data-idx="${idx}">
                                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </span>
                            </div>
                        `).join('')}
                    </div>

                    <button id="rp-spin" class="w-full py-2 bg-primary text-white font-bold rounded-xl shadow-sm hover:opacity-90 transition-colors text-sm">
                        ${t('pick_random')}
                    </button>
                    
                    <div id="rp-result-overlay" class="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-20 hidden rounded-3xl">
                        <div class="text-2xl font-bold text-dark mb-4" id="rp-winner">${t('winner')}</div>
                        <button id="rp-close-result" class="px-6 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-200">${t('again')}</button>
                    </div>
                </div>
            `;

            container.querySelector('#btn-back').onclick = () => { activeGame = 'menu'; render(); };

            const input = container.querySelector('#rp-input');
            const addBtn = container.querySelector('#rp-add');

            const addItem = () => {
                if (input.value.trim()) {
                    pickerItems.push(input.value.trim());
                    render();
                }
            };
            addBtn.onclick = addItem;
            input.onkeypress = (e) => { if (e.key === 'Enter') addItem(); };

            container.querySelectorAll('[data-idx]').forEach(el => {
                el.onclick = () => {
                    const idx = parseInt(el.dataset.idx);
                    pickerItems.splice(idx, 1);
                    render();
                };
            });

            container.querySelector('#rp-spin').onclick = () => {
                if (pickerItems.length < 2) return;

                const overlay = container.querySelector('#rp-result-overlay');
                const winnerEl = container.querySelector('#rp-winner');

                overlay.classList.remove('hidden');
                winnerEl.innerText = "...";

                let i = 0;
                const interval = setInterval(() => {
                    winnerEl.innerText = pickerItems[i % pickerItems.length];
                    i++;
                }, 80);

                setTimeout(() => {
                    clearInterval(interval);
                    const winner = pickerItems[Math.floor(Math.random() * pickerItems.length)];
                    winnerEl.innerText = winner;
                }, 1000);

                container.querySelector('#rp-close-result').onclick = () => {
                    overlay.classList.add('hidden');
                };
            };
        }
    };

    render();
}
