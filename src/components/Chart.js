import { data as globalData, saveData } from '../data.js';
import { t } from '../translations.js';

export function renderChart(element) {
  // Always use latest global data
  const chartData = globalData.chartData;

  // Find max value to normalize height (min 1 to avoid div by zero)
  const maxVal = Math.max(...chartData.map(d => d.study + d.exam)) || 5;

  const barsHtml = chartData.map(d => {
    // Prevent division by zero
    const safeMax = maxVal === 0 ? 1 : maxVal;
    const studyHeight = (d.study / safeMax) * 100;
    const examHeight = (d.exam / safeMax) * 100;

    return `
      <div class="flex flex-col items-center gap-2 flex-1 group cursor-pointer relative h-full justify-end">
        <div class="w-full flex-1 flex flex-col justify-end relative rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors">
            <!-- Tooltip -->
            <div class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-dark text-white text-[10px] font-bold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
              ${d.study}${t('hour_unit')}
            </div>
            
            ${d.exam > 0 ? `<div style="height: ${examHeight}%" class="w-full bg-primary/30 pattern-diagonal-lines"></div>` : ''}
            <div style="height: ${studyHeight}%" class="w-full bg-primary rounded-t-sm transition-all duration-500"></div>
        </div>
        <span class="text-xs text-gray-400 font-medium group-hover:text-primary transition-colors">${t('days_short')[['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(d.day)]}</span>
      </div>
    `
  }).join('');

  element.innerHTML = `
    <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col relative group/chart">
      <div class="flex justify-between items-center mb-6 shrink-0">
        <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ${t('hours_spent')} 
        </h3>
        <!-- Add Icon -->
        <button id="btn-add-hours" class="w-8 h-8 flex items-center justify-center bg-gray-50 text-gray-400 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
      
      <div class="flex-1 flex gap-3 items-end min-h-0">
         <div class="flex flex-col justify-between h-full text-xs text-gray-400 py-1 pr-2 uppercase font-bold tracking-wider text-[10px]">
             <span>${customRound(maxVal)}${t('hour_unit')}</span>
             <span>${customRound(maxVal * 0.66)}${t('hour_unit')}</span>
             <span>${customRound(maxVal * 0.33)}${t('hour_unit')}</span>
             <span>0${t('hour_unit')}</span>
         </div>
         <div class="flex-1 flex justify-between gap-2 h-full pb-1 border-b border-dashed border-gray-200">
            ${barsHtml}
         </div>
      </div>

       <!-- Modal for logging hours -->
        <div id="modal-log-hours" class="absolute inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 rounded-3xl">
            <style>
                /* Hide spin buttons */
                #input-hours::-webkit-outer-spin-button,
                #input-hours::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                #input-hours {
                    -moz-appearance: textfield;
                }
            </style>
            <div class="w-full h-full flex flex-col p-6">
                <!-- Header -->
                <div class="flex justify-between items-start shrink-0">
                     <div>
                        <h4 class="text-2xl font-bold text-dark tracking-tight">${t('log_flow')}</h4>
                        <p class="text-xs text-gray-400 font-medium mt-1">${t('record_session')}</p>
                     </div>
                     <button id="close-log-hours" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-dark hover:bg-gray-100 transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                </div>
                
                <!-- Center Input -->
                <div class="flex-1 flex flex-col items-center justify-center relative">
                     <div class="relative flex justify-center items-baseline">
                        <input type="number" id="input-hours" class="w-32 bg-transparent text-center text-7xl font-extrabold text-dark focus:outline-none placeholder-gray-200" placeholder="0" min="0" max="24">
                        <span class="absolute left-full ml-2 bottom-2 text-xl font-bold text-gray-300">${t('hour_unit')}</span>
                     </div>
                     <div class="h-1 w-24 bg-gray-100 rounded-full mt-4 mx-auto"></div>
                </div>

                <!-- Footer Action -->
                <div class="shrink-0">
                    <button id="btn-save-hours" class="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-lg flex items-center justify-center gap-2 group">
                        <span>${t('save_entry')}</span>
                        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  `;

  // Attach Listeners
  const btnAdd = element.querySelector('#btn-add-hours');
  const modal = element.querySelector('#modal-log-hours');
  const btnClose = element.querySelector('#close-log-hours');
  const btnSave = element.querySelector('#btn-save-hours');
  const input = element.querySelector('#input-hours');

  const toggleModal = (show) => {
    if (show) {
      modal.classList.remove('invisible', 'opacity-0');
      modal.querySelector('div').classList.remove('scale-95', 'opacity-0');
      modal.querySelector('div').classList.add('scale-100', 'opacity-100');
      setTimeout(() => input.focus(), 100);
    } else {
      modal.classList.add('invisible', 'opacity-0');
      modal.querySelector('div').classList.add('scale-95', 'opacity-0');
      modal.querySelector('div').classList.remove('scale-100', 'opacity-100');
      input.value = ''; // Clear
    }
  };

  if (btnAdd) btnAdd.addEventListener('click', (e) => { e.stopPropagation(); toggleModal(true); });
  if (btnClose) btnClose.addEventListener('click', (e) => { e.stopPropagation(); toggleModal(false); });

  if (btnSave) {
    btnSave.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = parseFloat(input.value);
      if (!val || val <= 0) {
        input.classList.add('animate-shake', 'border-red-500', 'bg-red-50');
        setTimeout(() => input.classList.remove('animate-shake', 'border-red-500', 'bg-red-50'), 500);
        return;
      }

      // Determine Today
      // Note: This relies on system locale matching the labels "Mon", "Tue"...
      // If mismatch, it won't work. But for this prototype assumption is US English locale or matching strings.
      const today = new Date().toLocaleDateString('en-US', { weekday: 'short' });

      const entry = globalData.chartData.find(d => d.day === today);
      if (entry) {
        entry.study += val;

        // Round to 1 decimal
        entry.study = Math.round(entry.study * 10) / 10;

        saveData();
        renderChart(element); // Re-render
      } else {
        // Fallback for demo if today not found (e.g. locale issue) - just update the last one
        const last = globalData.chartData[globalData.chartData.length - 1];
        last.study += val;
        saveData();
        renderChart(element);
      }
    });
  }

  // Enter key support
  if (input) {
    input.addEventListener('keydown', (e) => {
      // Prevent minus, e, E
      if (['-', 'e', 'E', '+'].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === 'Enter') btnSave.click();
    });

    // Value validation (0-24)
    input.addEventListener('input', (e) => {
      let val = parseFloat(input.value);

      // If valid number
      if (!isNaN(val)) {
        if (val < 0) input.value = 0;
        if (val > 24) input.value = 24;
      }

      // Secondary check for text length if somehow bypassed (e.g. paste)
      // Though 24 limitation covers most long inputs (e.g. 100 -> 24)
      // Just ensure no artifacts
    });
  }
}

function customRound(num) {
  if (num < 1) return 1;
  return Math.round(num);
}
