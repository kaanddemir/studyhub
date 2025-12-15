export function renderCalendar(element, todos, exams = []) {
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let selectedDate = null;
    let selectedDateStr = null;

    const render = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sun
        const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Prepare events map
        const eventsMap = {};

        // Add Todos
        todos.forEach(todo => {
            if (todo.date) {
                if (!eventsMap[todo.date]) eventsMap[todo.date] = [];
                eventsMap[todo.date].push({ ...todo, isExam: false });
            }
        });

        // Add Exams
        exams.forEach(exam => {
            if (exam.date) {
                // exam.date is ISO string, need YYYY-MM-DD
                const d = new Date(exam.date);
                const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

                if (!eventsMap[dateStr]) eventsMap[dateStr] = [];
                eventsMap[dateStr].push({ ...exam, isExam: true });
            }
        });

        // Generate grid
        let daysHtml = '';
        for (let i = 0; i < firstDay; i++) {
            daysHtml += `<div class="h-8"></div>`;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

            const events = eventsMap[dateStr] || [];
            const hasEvents = events.length > 0;
            const hasExam = events.some(e => e.isExam);

            const isSelected = selectedDateStr === dateStr;

            const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            const isToday = dateStr === todayStr;

            // Dot color logic: Red if exam, White if selected, Primary if just todo
            const dotColor = hasExam ? 'bg-red-500' : (isSelected ? 'bg-white' : 'bg-primary');

            daysHtml += `
                <div class="h-9 w-9 mx-auto flex items-center justify-center rounded-full cursor-pointer transition-all text-xs font-medium relative group
                    ${isSelected ? 'bg-primary text-white shadow-lg scale-110' : isToday ? 'bg-primary/20 text-primary' : 'hover:bg-gray-50 text-gray-500'}
                    ${hasEvents && !isSelected ? 'font-bold text-dark' : ''}
                " onclick="selectDate('${dateStr}')">
                    ${day}
                    ${hasEvents ? `<div class="absolute bottom-1 w-1 h-1 rounded-full ${dotColor}"></div>` : ''}
                </div>
            `;
        }

        // Details View for Selected Date
        let detailsHtml = '';
        if (selectedDateStr) {
            const dayEvents = eventsMap[selectedDateStr] || [];
            detailsHtml = `
                <div class="mt-6 border-t border-gray-100 pt-4 animate-fade-in">
                    <div class="flex justify-between items-center mb-3">
                        <h4 class="text-sm font-bold text-dark">Events on ${selectedDateStr.split('-').reverse().join('/')}</h4>
                    </div>
                    ${dayEvents.length === 0 ? '<p class="text-xs text-gray-400 italic">No events scheduled.</p>' : `
                        <div class="space-y-2">
                             ${dayEvents.map(event => {
                if (event.isExam) {
                    // Exam Card
                    return `
                                        <div class="bg-red-50 p-2.5 rounded-lg flex items-center justify-between border border-red-100">
                                            <div>
                                                <div class="text-xs font-bold text-red-600 flex items-center gap-1.5 mb-0.5">
                                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                                                    ${event.code} <span class="text-[10px] opacity-75 font-medium uppercase border border-red-200 px-1 rounded">${event.type}</span>
                                                </div>
                                                <div class="text-[10px] text-red-400 font-medium pl-5">${event.location || 'TBD'} • ${new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                            </div>
                                        </div>
                                     `;
                } else {
                    // Todo Card
                    return `
                                        <div class="bg-gray-50 p-2 rounded-lg flex items-center justify-between group">
                                            <div class="flex-1">
                                                <div class="text-xs font-bold text-gray-700 ${event.completed ? 'line-through opacity-50' : ''}">${event.title}</div>
                                                ${event.subject ? `<div class="text-[10px] text-gray-400">${event.subject}</div>` : ''}
                                            </div>
                                             <button class="text-gray-300 hover:text-primary p-1 opacity-0 group-hover:opacity-100 transition-opacity" onclick="removeEvent('${event.title}')">
                                                &times;
                                             </button>
                                        </div>
                                     `;
                }
            }).join('')}
                        </div>
                    `}
                </div>
            `;
        }

        element.innerHTML = `
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col relative">
           <div class="flex justify-between items-center mb-4 shrink-0">
            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Calendar
            </h3>
            <div class="flex items-center gap-2">
                <button class="p-1 hover:bg-gray-50 rounded-full" onclick="changeMonth(-1)">
                    <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span class="text-xs font-bold text-dark w-24 text-center select-none">${monthNames[currentMonth]} ${currentYear}</span>
                <button class="p-1 hover:bg-gray-50 rounded-full" onclick="changeMonth(1)">
                    <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
           </div>
           
           <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-wider shrink-0">
             ${dayHeaders.map(d => `<span>${d}</span>`).join('')}
           </div>
           
           <!-- Scrollable Area for Grid and Details -->
           <div class="flex-1 overflow-y-auto no-scrollbar -mx-2 px-2 scroll-smooth">
               <div class="grid grid-cols-7 gap-y-2">
                    ${daysHtml}
               </div>

               ${detailsHtml}
           </div>
        </div>
        `;

        element.selectDate = (date) => {
            selectedDateStr = date;
            render();
        };

        element.changeMonth = (delta) => {
            currentMonth += delta;
            if (currentMonth > 11) { currentMonth = 0; currentYear++; }
            if (currentMonth < 0) { currentMonth = 11; currentYear--; }
            render();
        };

        element.addEvent = (date) => {
            const formattedDate = date.split('-').reverse().join('/');
            const title = prompt(`Add Task for ${formattedDate}:`);
            if (title) {
                todos.push({
                    title,
                    subject: 'Personal',
                    time: 'All Day',
                    completed: false,
                    date: date
                });
                render();
                document.dispatchEvent(new Event('dataChanged'));
            }
        };

        element.removeEvent = (title) => {
            const idx = todos.findIndex(t => t.title === title);
            if (idx > -1) {
                todos.splice(idx, 1);
                render();
                document.dispatchEvent(new Event('dataChanged'));
            }
        };
    };

    window.selectDate = (d) => element.selectDate(d);
    window.changeMonth = (d) => element.changeMonth(d);
    window.addEvent = (d) => element.addEvent(d);
    window.removeEvent = (t) => element.removeEvent(t);

    render();
}

export function renderTodoList(element, todos, editingIndex = null, deletingIndex = null) {
    element.innerHTML = `
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col">
            <div class="flex justify-between items-center mb-4 shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    Todo list
                </h3>
                <span class="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">${todos.length} Tasks</span>
            </div>
            
            <!-- Inline Add Todo -->
            <div class="flex gap-2 mb-4 shrink-0">
                <input type="text" id="new-todo-input" placeholder="Add a new task..." 
                    class="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    onkeydown="if(event.key === 'Enter') addTodoFromInput()">
                <button onclick="addTodoFromInput()" class="bg-primary text-white p-2 rounded-xl hover:opacity-90 transition-colors shadow-lg shadow-primary/30 active:scale-95">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
            
            <div class="overflow-y-auto flex-1 pr-1 custom-scrollbar">
                <ul class="space-y-4 h-full">
                    ${todos.length === 0 ? `
                        <div class="h-full flex flex-col items-center justify-center text-gray-400 min-h-[150px]">
                            <div class="mb-3 flex items-center justify-center">
                                <svg class="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <p class="text-sm font-bold text-gray-500">No tasks yet</p>
                            <p class="text-xs text-gray-400 mt-1">Add one above to get started</p>
                        </div>
                    ` : ''}
                    ${todos.map((todo, index) => {
        if (index === deletingIndex) {
            // Delete Confirmation Mode
            return `
                                <li class="flex flex-col gap-2 bg-primary/5 p-3 rounded-xl border border-primary/20 animate-fade-in text-center" data-index="${index}">
                                    <p class="text-sm font-bold text-primary mb-2">Delete this task?</p>
                                    <div class="flex justify-center gap-2">
                                         <button onclick="cancelDeleteTodo()" class="px-3 py-1 text-xs font-bold text-gray-500 hover:bg-gray-200 rounded-lg transition-colors">Cancel</button>
                                         <button onclick="confirmDeleteTodo(${index})" class="px-3 py-1 text-xs font-bold text-white bg-primary hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30">Delete</button>
                                    </div>
                                </li>
                            `;
        } else if (index === editingIndex) {
            // Edit Mode
            return `
                                <li class="flex flex-col gap-2 bg-gray-50 p-3 rounded-xl border border-primary/20 animate-fade-in" data-index="${index}">
                                    <input type="text" id="edit-title-${index}" value="${todo.title}" class="w-full bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm font-bold text-dark focus:border-primary outline-none" placeholder="Task Name">
                                    <div class="flex gap-2">
                                        <input type="date" id="edit-date-${index}" value="${todo.date || ''}" class="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500 focus:border-primary outline-none">
                                        <input id="edit-time-${index}" value="${todo.time || ''}" class="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500 focus:border-primary outline-none" type="time">
                                    </div>
                                    <div class="flex justify-end gap-2 mt-1">
                                        <button onclick="cancelEditTodo()" class="px-3 py-1 text-xs font-bold text-gray-500 hover:bg-gray-200 rounded-lg transition-colors">Cancel</button>
                                        <button onclick="saveEditTodo(${index})" class="px-3 py-1 text-xs font-bold text-white bg-primary hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30">Save</button>
                                    </div>
                                </li>
                            `;
        } else {
            // View Mode
            return `
                                <li class="flex items-start gap-3 group justify-between animate-fade-in" data-index="${index}">
                                    <div class="flex items-start gap-3 flex-1">
                                        <div class="mt-1 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:border-primary transition-colors toggle-btn shrink-0" onclick="event.stopPropagation(); toggleTodo(${index})">
                                            ${todo.completed ? '<div class="w-3 h-3 bg-primary rounded-full"></div>' : ''}
                                        </div>
                                        <div class="min-w-0">
                                            <div class="text-sm font-bold text-dark group-hover:text-primary transition-colors cursor-pointer toggle-text truncate ${todo.completed ? 'line-through text-gray-400' : ''}" onclick="editTodo(${index})">${todo.title}</div>
                                            <div class="flex flex-wrap gap-2 text-xs text-gray-400 mt-1">
                                                ${todo.date ? `<span class="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium shrink-0">${todo.date.split('-').reverse().join('/')}</span>` : ''}
                                                ${todo.time ? `<span class="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium shrink-0">${todo.time}</span>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                        <button class="p-1.5 text-gray-400 hover:text-primary rounded-lg hover:bg-primary/10 transition-colors edit-btn" onclick="event.stopPropagation(); editTodo(${index})">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                        </button>
                                        <button class="p-1.5 text-gray-400 hover:text-primary rounded-lg hover:bg-primary/10 transition-colors delete-btn" onclick="event.stopPropagation(); deleteTodo(${index})">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </li>
                            `;
        }
    }).join('')}
                </ul>
            </div>
        </div>
    `
    // We need to attach the handler dynamically or use global window
    if (!window.addTodoFromInput) {
        window.addTodoFromInput = () => {
            const input = document.getElementById('new-todo-input');
            if (input && input.value.trim()) {
                // Call the main logic based on prompt previously, but now direct push
                // We need access to 'data' or 'push' logic. 
                // Since renderTodoList doesn't have data access directly in scope effectively for logic re-use?
                // Actually, renderTodoList is just view. 
                // We should assume a global 'addNewTodoItem(title)' exists or reuse 'addNewTodo' but with args.

                // Let's create a specific global handler in Dashboard.js to accept title.
                // For now, dispatch event with detail? 
                // Simplest: Call a global function 'addSpecificTodo(title)'

                if (window.addSpecificTodo) {
                    window.addSpecificTodo(input.value.trim());
                    input.value = ''; // Clear
                }
            }
        };
    }
}
