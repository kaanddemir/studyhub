export function renderNotes(element) {
    // Load notes list
    let notes = JSON.parse(localStorage.getItem('dashboard_notes_list') || '[]');
    let currentNoteIndex = -1; // -1 means new note
    let showingList = false;

    const refreshRender = () => {
        const savedListHtml = notes.map((note, index) => `
            <div class="group flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border-b border-gray-50 last:border-0" data-index="${index}">
                <div class="flex-1 truncate text-sm text-gray-600 font-medium pr-2" onclick="loadNote(${index})">
                    ${note.split('\n')[0] || 'Untitled Note'}
                    <div class="text-xs text-gray-400 font-normal truncate mt-0.5">${note.substring(0, 40)}...</div>
                </div>
                <button class="text-gray-300 hover:text-primary transition-colors p-2" onclick="deleteNote(${index}, event)">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
            </div>
        `).join('');

        const emptyStateHtml = `
            <div class="flex flex-col items-center justify-center h-full text-gray-400 py-8">
                <svg class="w-12 h-12 mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <p class="text-xs">No saved notes yet</p>
                <button id="create-first-note" class="mt-4 text-xs font-bold text-primary hover:underline">Create one</button>
            </div>
        `;

        element.innerHTML = `
            <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col relative overflow-hidden">
                <div class="flex justify-between items-center mb-4 shrink-0">
                    <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        Quick Notes
                    </h3>
                    
                    <!-- Toggle Button -->
                    <button id="notes-mode-toggle" class="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors shrink-0 border border-transparent hover:border-gray-200">
                        ${!showingList ? `
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            <span>Browse</span>
                        ` : `
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            <span>New</span>
                        `}
                    </button>
                </div>
                
                <div class="relative flex-1 min-h-0">
                    <!-- Editor View -->
                    <div class="absolute inset-0 flex flex-col transition-all duration-300 ${showingList ? 'opacity-0 pointer-events-none translate-x-full' : 'opacity-100 translate-x-0'}">
                         <textarea id="note-area" class="w-full flex-1 bg-gray-50 rounded-xl p-4 text-sm text-gray-600 outline-none border border-transparent focus:border-primary/20 focus:bg-white transition-all resize-none placeholder-gray-400" placeholder="Type your ideas here...">${currentNoteIndex !== -1 ? notes[currentNoteIndex] : ''}</textarea>
                         <div class="flex justify-between items-center mt-4">
                            <span id="note-status" class="text-xs text-gray-400 font-medium h-4"></span>
                            <button id="save-note" class="px-6 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:opacity-90 transition-colors shadow-lg shadow-primary/30 active:scale-95 transform">
                                ${currentNoteIndex === -1 ? 'Add Note' : 'Update Note'}
                            </button>
                        </div>
                    </div>

                    <!-- List View -->
                    <div class="absolute inset-0 flex flex-col bg-white transition-all duration-300 ${!showingList ? 'opacity-0 pointer-events-none -translate-x-full' : 'opacity-100 translate-x-0'} z-10">
                         <div class="flex-1 overflow-y-auto custom-scrollbar">
                           ${notes.length ? savedListHtml : emptyStateHtml}
                         </div>
                    </div>
                </div>
            </div>
        `;

        // Re-attach listeners
        const textarea = element.querySelector('#note-area');
        const saveBtn = element.querySelector('#save-note');
        const toggleBtn = element.querySelector('#notes-mode-toggle');
        const firstNoteBtn = element.querySelector('#create-first-note');
        const status = element.querySelector('#note-status');

        if (saveBtn) {
            saveBtn.onclick = () => {
                const content = textarea.value.trim();
                if (!content) return;

                if (currentNoteIndex === -1) {
                    notes.push(content);
                    currentNoteIndex = notes.length - 1;
                } else {
                    notes[currentNoteIndex] = content;
                }

                localStorage.setItem('dashboard_notes_list', JSON.stringify(notes));
                status.textContent = 'Saved!';
                status.classList.add('text-primary');

                // Keep editor open
                setTimeout(() => {
                    if (status) {
                        status.textContent = '';
                        status.classList.remove('text-primary');
                    }
                }, 2000);
            };
        }

        toggleBtn.onclick = () => {
            if (!showingList) {
                // Determine logic: Switch to Browse List
                showingList = true;
            } else {
                // Determine logic: Switch to New Note Editor
                showingList = false;
                currentNoteIndex = -1;
            }
            refreshRender();
        };

        if (firstNoteBtn) {
            firstNoteBtn.onclick = () => {
                showingList = false;
                currentNoteIndex = -1;
                refreshRender();
            }
        }

        element.querySelectorAll('button[onclick^="deleteNote"]').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.parentElement.dataset.index);
                // Delete immediately
                notes.splice(idx, 1);
                localStorage.setItem('dashboard_notes_list', JSON.stringify(notes));
                if (currentNoteIndex === idx) currentNoteIndex = -1;
                else if (currentNoteIndex > idx) currentNoteIndex--;
                refreshRender();
            }
        });

        element.querySelectorAll('div[onclick^="loadNote"]').forEach(div => {
            div.onclick = () => {
                const idx = parseInt(div.parentElement.dataset.index);
                currentNoteIndex = idx;
                showingList = false;
                refreshRender();
            }
        });
    };

    refreshRender();
}

export function renderMood(element) {
    const moods = ['😍', '🙂', '😐', '☹️', '😔'];
    // Assuming first is active for demo
    element.innerHTML = `
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col">
            <h3 class="text-sm font-bold text-dark mb-4">Mode now</h3>
            <div class="flex-1 flex flex-col justify-between items-center gap-2">
                ${moods.map((emoji, i) => `
                    <button class="w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-gray-50 transition-colors ${i === 1 ? 'bg-yellow-50 border border-yellow-200 shadow-sm scale-110' : 'grayscale opacity-50 hover:opacity-100 hover:grayscale-0'}">
                        ${emoji}
                    </button>
                `).join('')}
            </div>
        </div>
    `
}
