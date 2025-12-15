
export function renderGradeCalculator(container) {
    if (!container) return;

    // Load state or default
    let assessments = JSON.parse(localStorage.getItem('grade_calc_data') || '[]');
    if (assessments.length === 0) {
        assessments = [
            { id: 1, name: 'Midterm', grade: '', weight: 40 },
            { id: 2, name: 'Final', grade: '', weight: 60 }
        ];
    }

    const saveState = () => {
        localStorage.setItem('grade_calc_data', JSON.stringify(assessments));
    };

    const calculate = () => {
        let totalWeight = 0;
        let weightedSum = 0;
        let currentWeight = 0;

        assessments.forEach(a => {
            const w = parseFloat(a.weight) || 0;
            const g = parseFloat(a.grade);

            totalWeight += w;

            if (!isNaN(g)) {
                weightedSum += (g * w);
                currentWeight += w;
            }
        });

        // Current Average (based on entered grades)
        const currentAvg = currentWeight > 0 ? (weightedSum / currentWeight).toFixed(1) : 0;

        let resultHTML = '';

        if (currentWeight > 0) {
            resultHTML = `<div class="text-sm">Current Avg: <span class="font-bold text-primary text-lg">${currentAvg}</span></div>`;
        } else {
            resultHTML = `<div class="text-sm text-gray-400">Enter grades to calculate</div>`;
        }

        // Calculate needed for Final (if final is empty)
        const emptyFinal = assessments.find(a => (a.name.toLowerCase().includes('final') || a.weight > 30) && (a.grade === '' || isNaN(parseFloat(a.grade))));

        if (emptyFinal && currentWeight > 0 && totalWeight > 0) {
            // Let's assume user wants to pass with 60
            const target = 60;

            // Formula: (WeightedSum + Needed * FinalWeight) / TotalWeight = Target
            // We assume TotalWeight is the sum of known weights + final weight.
            // Actually, usually totalWeight is just sum of all weights.

            // If totalWeight is effectively 100 or close to it.
            // Let's use totalWeight as the divisor base.

            const neededGrade = ((target * totalWeight - weightedSum) / emptyFinal.weight).toFixed(1);

            if (neededGrade > 0 && neededGrade <= 100) {
                resultHTML += `<div class="text-xs text-gray-500 mt-1">Need <b class="text-dark">${neededGrade}</b> on ${emptyFinal.name} for ${target}</div>`;
            } else if (neededGrade > 100) {
                resultHTML += `<div class="text-xs text-primary mt-1">Need ${neededGrade}... Impossible?</div>`;
            } else if (neededGrade <= 0) {
                resultHTML += `<div class="text-xs text-green-500 mt-1">You passed!</div>`;
            }
        }

        return resultHTML;
    };

    const renderRows = () => {
        const list = container.querySelector('#gc-list');
        list.innerHTML = '';

        assessments.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = 'flex items-center gap-2 mb-2';
            row.innerHTML = `
                <input type="text" placeholder="Name" class="w-full bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors" value="${item.name}" data-idx="${index}" data-key="name">
                <input type="number" placeholder="Gr" class="w-16 bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors text-center" value="${item.grade}" data-idx="${index}" data-key="grade">
                <input type="number" placeholder="%" class="w-12 bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors text-center" value="${item.weight}" data-idx="${index}" data-key="weight">
                <button class="text-gray-300 hover:text-primary transition-colors" data-idx="${index}">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            `;

            // Listeners
            const inputs = row.querySelectorAll('input');
            inputs.forEach(input => {
                input.oninput = (e) => {
                    const key = e.target.dataset.key;
                    assessments[index][key] = e.target.value;
                    saveState();
                    // NO updateResult() here anymore
                };
            });

            row.querySelector('button').onclick = () => {
                assessments.splice(index, 1);
                saveState();
                renderRows();
                // Optionally clear result or update it? Let's clear it to be consistent with "Calculate button required"
                container.querySelector('#gc-result').innerHTML = '';
            };

            list.appendChild(row);
        });
    };

    container.innerHTML = `
        <div class="h-full flex flex-col p-5">
            <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Grade Calculation
                </h3>
                <button id="gc-add-btn" class="p-1.5 bg-primary text-white rounded-lg hover:opacity-90 transition-colors shadow-lg shadow-primary/30">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
            
            <div class="flex text-[10px] text-gray-400 font-bold mb-1 px-1">
                <span class="flex-1">ASSESSMENT</span>
                <span class="w-16 text-center">GRADE</span>
                <span class="w-12 text-center mr-6">%</span>
            </div>
            
            <div id="gc-list" class="flex-1 overflow-y-auto custom-scrollbar min-h-0"></div>
            
            <div id="gc-result" class="mt-2 py-2 flex flex-col items-center justify-center min-h-[40px] rounded-xl text-sm">
                <!-- Result will appear here -->
            </div>

            <div class="flex gap-2 mt-auto pt-2 border-t border-gray-100">
                <button id="gc-calc-btn" class="flex-1 bg-primary text-white py-2 rounded-xl text-sm font-bold hover:opacity-90 transition-colors shadow-lg shadow-primary/30">
                    Calculate
                </button>
                <button id="gc-reset-btn" class="px-4 bg-gray-100 text-gray-500 py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors">
                    Reset
                </button>
            </div>
        </div>
    `;

    // Init Logic
    renderRows();

    // Add Button Logic
    container.querySelector('#gc-add-btn').onclick = () => {
        assessments.push({ id: Date.now(), name: 'New', grade: '', weight: 10 });
        saveState();
        renderRows();
    };

    container.querySelector('#gc-calc-btn').onclick = () => {
        container.querySelector('#gc-result').innerHTML = calculate();
    };

    container.querySelector('#gc-reset-btn').onclick = () => {
        // Reset Logic
        // Option 1: Clear values but keep rows?
        // Option 2: Reset to default 2 rows?
        // Let's clear values of existing rows for better UX, or reset to defaults if completely messed up.
        // User said "Reset", usually implies clearing input.

        assessments.forEach(a => {
            a.grade = '';
        });
        saveState();
        renderRows();
        container.querySelector('#gc-result').innerHTML = '';
    };
}
