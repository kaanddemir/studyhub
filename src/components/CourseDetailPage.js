import { data, saveData } from '../data.js';

// Simple markdown parser helper
const parseMarkdown = (text) => {
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return text;
};

export function renderCourseDetailPage(element, courseId) {
    const course = data.courses.find(c => c.id === courseId);

    if (!course) {
        element.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full">
                <h2 class="text-2xl font-bold text-gray-400">Course not found</h2>
                <button onclick="window.navigateTo('courses')" class="mt-4 text-primary hover:underline">Back to Courses</button>
            </div>
        `;
        return;
    }

    // Ensure resources exist
    if (!course.resources) {
        course.resources = [];
        saveData();
    }

    // Ensure course info fields exist
    if (course.instructor === undefined) course.instructor = '';
    if (course.email === undefined) course.email = '';
    if (course.location === undefined) course.location = '';
    if (course.schedule === undefined) course.schedule = '';

    // Data Migration & Initialization for AI Sessions
    if (!course.aiSessions) {
        // Migrate old single chatHistory if exists
        const initialMessages = course.chatHistory || [
            { sender: 'ai', text: `Hi! I'm StudyAl, your personal AI assistant for **${course.name}**. Ask me anything about the course materials, exams, or topics!` }
        ];

        course.aiSessions = [{
            id: Date.now(),
            title: 'General Chat',
            messages: initialMessages,
            timestamp: Date.now()
        }];
        course.currentSessionId = course.aiSessions[0].id;

        // Remove old key to clean up
        delete course.chatHistory;
        saveData();
    }

    const render = () => {
        // Get Active Session
        const activeSession = course.aiSessions.find(s => s.id === course.currentSessionId) || course.aiSessions[0];

        // Safety check if session is missing
        if (!activeSession) {
            course.currentSessionId = course.aiSessions[0].id;
            saveData();
            render(); // Rerender
            return;
        }
        element.innerHTML = `
        <div class="p-8 h-full flex flex-col relative">
            <header class="flex justify-between items-center mb-8">
                 <div class="flex items-center gap-4">
                    <button onclick="window.navigateTo('courses')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors shadow-sm border border-gray-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div class="flex items-center gap-3">
                         <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                             ${course.name.charAt(0).toUpperCase()}
                        </div>
                        <h1 class="text-3xl font-bold text-dark truncate max-w-lg" title="${course.name}">${course.name}</h1>
                    </div>
                <div class="flex items-center gap-3">
                     <button id="delete-course-detail-btn" class="p-2 text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors" title="Delete Course">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                 </div>
            </header>
            
            <div class="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 overflow-y-auto remove-scrollbar">
                <style>
                    .remove-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .remove-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                </style>
                
                <!-- Course Info Cards (3 Columns) -->
                <div class="mb-8">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Course Info</h3>
                        <button id="edit-info-btn" class="text-xs font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            Edit
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Instructor Card -->
                        <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                             <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                             </div>
                             <div class="min-w-0">
                                <p class="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Instructor</p>
                                <p class="text-dark font-bold text-sm truncate" title="${course.instructor || ''}">${course.instructor || '<span class="text-gray-300 font-normal italic">Not set</span>'}</p>
                                ${course.email ? `<a href="mailto:${course.email}" class="text-xs text-blue-500 hover:underline cursor-pointer truncate block" title="${course.email}">${course.email}</a>` : ''}
                             </div>
                        </div>
                        
                        <!-- Schedule Card -->
                         <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                             <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </div>
                             <div class="min-w-0">
                                <p class="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Schedule</p>
                                <p class="text-dark font-bold text-sm truncate" title="${course.schedule || ''}">${course.schedule || '<span class="text-gray-300 font-normal italic">Not set</span>'}</p>
                             </div>
                        </div>

                        <!-- Location Card -->
                         <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                             <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                             </div>
                             <div class="min-w-0">
                                 <p class="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Location</p>
                                 <p class="text-dark font-bold text-sm truncate" title="${course.location || ''}">${course.location || '<span class="text-gray-300 font-normal italic">Not set</span>'}</p>
                             </div>
                        </div>
                    </div>
                </div>

                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Resources -->
                    <div class="border border-gray-100 rounded-2xl p-6 flex flex-col h-full">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                                <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                Resources
                            </h3>
                            <button id="add-resource-btn" class="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Add File">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            </button>
                            <input type="file" id="file-upload-input" class="hidden" accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png">
                        </div>

                        <div class="flex-1 overflow-y-auto custom-scrollbar max-h-60">
                             ${course.resources.length === 0 ? `
                                <div class="flex flex-col items-center justify-center py-8 text-gray-400 text-sm h-full">
                                    No resources yet
                                </div>
                             ` : `
                                <ul class="space-y-2">
                                    ${course.resources.map(res => `
                                        <li class="flex items-center justify-between p-3 bg-gray-50 rounded-xl group hover:bg-gray-100 transition-colors">
                                            <div class="flex items-center gap-3 min-w-0 flex-1">
                                                <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                </div>
                                                <div class="truncate">
                                                    <p class="text-sm font-bold text-dark truncate">${res.name}</p>
                                                    <p class="text-xs text-gray-400 truncate">${res.type || 'File'}</p>
                                                </div>
                                            </div>
                                             <button class="delete-resource-btn text-gray-300 hover:text-primary p-1 transition-colors opacity-0 group-hover:opacity-100" data-id="${res.id}">
                                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </li>
                                    `).join('')}
                                </ul>
                             `}
                        </div>
                    </div>

                    <!-- StudyAl AI Assistant -->
                     <div class="border border-gray-100 rounded-2xl p-6 flex flex-col h-[500px] bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
                         <!-- Header -->
                         <div class="flex justify-between items-start mb-4 z-10">
                             <div class="flex items-center gap-3">
                                 <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                     <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                 </div>
                                 <div class="flex flex-col">
                                     <h3 class="text-lg font-bold text-dark flex items-center gap-2">StudyAl</h3>
                                     <div class="flex items-center gap-1.5">
                                         <span class="text-xs font-medium text-gray-500">Gemini Powered</span>
                                     </div>
                                 </div>
                             </div>
                             <div class="flex gap-2">
                                <button id="history-toggle-btn" class="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" title="Chat History">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </button>
                                <button id="new-chat-btn" class="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="New Chat">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                                </button>
                             </div>
                         </div>

                         <!-- Chat Area -->
                         <div id="chat-messages" class="flex-1 overflow-y-auto custom-scrollbar space-y-4 mb-4 pr-2 z-10 transition-all">
                             ${activeSession.messages.map(msg => `
                                 <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
                                     <div class="max-w-[85%] ${msg.sender === 'user' ? 'bg-primary text-white rounded-t-2xl rounded-bl-2xl shadow-lg shadow-primary/20' : 'bg-white border border-gray-100 text-gray-700 rounded-t-2xl rounded-br-2xl shadow-sm'} px-4 py-3 text-sm leading-relaxed">
                                         ${msg.sender === 'ai' ? parseMarkdown(msg.text) : msg.text}
                                     </div>
                                 </div>
                             `).join('')}
                         </div>

                         <!-- Input Area -->
                         <div class="relative z-10 mt-auto">
                             <form id="chat-form" class="relative items-end gap-2 flex">
                                 <input type="text" id="chat-input" 
                                     class="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm placeholder-gray-400" 
                                     placeholder="Ask a question about ${course.name}..."
                                     autocomplete="off">
                                 
                                 <button type="submit" class="absolute right-2 top-1.5 p-1.5 bg-primary text-white rounded-lg hover:opacity-90 transition-colors shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed">
                                     <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                 </button>
                             </form>
                             <div class="text-center mt-2">
                                 <p class="text-[10px] text-gray-400">AI can make mistakes. Verify important info.</p>
                             </div>
                         </div>

                         <!-- Decorative Background Elements -->
                         <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                         <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                        <!-- History Sidebar (Slide In) -->
                        <div id="history-sidebar" class="absolute inset-y-0 left-0 w-64 bg-white shadow-xl border-r border-gray-100 transform -translate-x-full transition-transform duration-300 z-40 p-4 flex flex-col">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="font-bold text-dark text-sm">Chat History</h3>
                                <button id="close-history-btn" class="p-1 text-gray-400 hover:text-dark transition-colors">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div class="flex-1 overflow-y-auto custom-scrollbar space-y-2">
                                ${course.aiSessions.sort((a, b) => b.timestamp - a.timestamp).map(session => `
                                    <button class="history-item-btn w-full text-left p-3 rounded-xl text-xs transition-colors group relative ${session.id === course.currentSessionId ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-gray-50 text-gray-500'}" data-id="${session.id}">
                                        <p class="truncate pr-6">${session.title}</p>
                                        <span class="text-[10px] opacity-60 block mt-1">${new Date(session.timestamp).toLocaleDateString()}</span>
                                        ${course.aiSessions.length > 1 ? `
                                            <div class="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                 <span class="delete-session-btn block p-1 hover:text-primary cursor-pointer" data-id="${session.id}">
                                                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </span>
                                            </div>
                                        ` : ''}
                                    </button>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Clear Chat Confirmation Modal (Scoped to Card) -->

                        <!-- Clear Chat Confirmation Modal (Scoped to Card) -->
                        <div id="clear-chat-modal" class="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                            <div class="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 w-[90%] max-w-[280px] transform scale-95 transition-all duration-300 text-center">
                                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </div>
                                <h3 class="text-base font-bold text-dark mb-1">Clear History?</h3>
                                <p class="text-xs text-gray-400 mb-5">Chats will be permanently lost.</p>
                                
                                <div class="flex gap-2">
                                    <button id="cancel-clear-chat-btn" class="flex-1 py-2 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-xs">Cancel</button>
                                    <button id="confirm-clear-chat-btn" class="flex-1 py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-xs">Clear</button>
                                </div>
                            </div>
                        </div>
                         <!-- Delete Session Confirmation Modal (Scoped to Card) -->
                        <div id="delete-session-modal" class="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                            <div class="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 w-[90%] max-w-[280px] transform scale-95 transition-all duration-300 text-center">
                                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </div>
                                <h3 class="text-base font-bold text-dark mb-1">Delete Chat?</h3>
                                <p class="text-xs text-gray-400 mb-5">This chat session will be deleted.</p>
                                
                                <div class="flex gap-2">
                                    <button id="cancel-delete-session-btn" class="flex-1 py-2 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-xs">Cancel</button>
                                    <button id="confirm-delete-session-btn" class="flex-1 py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-xs">Delete</button>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
            <!-- Delete Resource Confirmation Modal -->
            <div id="delete-resource-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                     <h3 class="text-lg font-bold text-dark mb-1">Delete Resource?</h3>
                     <p class="text-sm text-gray-400 mb-6">This action cannot be undone.</p>
                     
                     <div class="flex gap-3">
                        <button id="cancel-delete-res-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">
                            Cancel
                        </button>
                        <button id="confirm-delete-res-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">
                            Delete
                        </button>
                     </div>
                </div>
            </div>
            <!-- Delete Course Confirmation Modal -->
            <div id="delete-course-detail-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">Delete Course?</h3>
                    <p class="text-sm text-gray-400 mb-6">This action cannot be undone.</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-course-detail-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">Cancel</button>
                         <button id="confirm-delete-course-detail-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">Delete</button>
                    </div>
                </div>
            </div>

            <!-- Edit Info Modal -->
            <div id="edit-info-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-sm transform scale-95 transition-all duration-300">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-dark">Edit Course Info</h3>
                        <button id="close-edit-info-btn" class="p-1 rounded-full hover:bg-gray-100 text-gray-400 transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Instructor Name</label>
                            <input type="text" id="info-instructor" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Dr. Jane Smith" value="${course.instructor || ''}">
                        </div>
                         <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Email</label>
                            <input type="email" id="info-email" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. jane.smith@uni.edu" value="${course.email || ''}">
                        </div>
                         <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Schedule</label>
                                <input type="text" id="info-schedule" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Mon 10:30" value="${course.schedule || ''}">
                            </div>
                            <div>
                                 <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Location</label>
                                <input type="text" id="info-location" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Room 301" value="${course.location || ''}">
                            </div>
                         </div>
                        
                        <button id="save-info-btn" class="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm mt-2">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>


        </div>
        `;

        attachListeners();
    };

    const attachListeners = () => {
        const chatForm = element.querySelector('#chat-form');
        const chatInput = element.querySelector('#chat-input');
        const chatMessages = element.querySelector('#chat-messages');

        // Info Modal
        const infoModal = element.querySelector('#edit-info-modal');
        if (infoModal) {
            const infoModalContent = infoModal.querySelector('div');
            const editInfoBtn = element.querySelector('#edit-info-btn');
            const closeInfoBtn = element.querySelector('#close-edit-info-btn');
            const saveInfoBtn = element.querySelector('#save-info-btn');

            const iName = element.querySelector('#info-instructor');
            const iEmail = element.querySelector('#info-email');
            const iSchedule = element.querySelector('#info-schedule');
            const iLocation = element.querySelector('#info-location');

            if (editInfoBtn) {
                editInfoBtn.addEventListener('click', () => {
                    infoModal.classList.remove('invisible', 'opacity-0');
                    infoModal.classList.add('visible', 'opacity-100');
                    infoModalContent.classList.remove('scale-95');
                    infoModalContent.classList.add('scale-100');
                });
            }

            const closeInfoModal = () => {
                infoModal.classList.add('invisible', 'opacity-0');
                infoModal.classList.remove('visible', 'opacity-100');
                infoModalContent.classList.add('scale-95');
                infoModalContent.classList.remove('scale-100');
            };

            if (closeInfoBtn) closeInfoBtn.addEventListener('click', closeInfoModal);

            if (saveInfoBtn) {
                saveInfoBtn.addEventListener('click', () => {
                    course.instructor = iName.value.trim();
                    course.email = iEmail.value.trim();
                    course.schedule = iSchedule.value.trim();
                    course.location = iLocation.value.trim();
                    saveData();
                    closeInfoModal();
                    render();
                });
            }
        }

        // Scroll to bottom of chat
        if (chatMessages) {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        if (chatForm) {
            chatForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const text = chatInput.value.trim();
                if (!text) return;

                const currentSession = course.aiSessions.find(s => s.id === course.currentSessionId);
                if (!currentSession) return;

                // Add user message
                currentSession.messages.push({ sender: 'user', text });

                // Update Title if it's the first real message (after welcome)
                if (currentSession.messages.length === 2) {
                    currentSession.title = text.length > 25 ? text.substring(0, 25) + '...' : text;
                }

                currentSession.timestamp = Date.now();
                saveData();
                render(); // Re-render to show new message ASAP while AI thinks

                // Simulate AI Thinking/Typing (Mock Gemini)
                setTimeout(() => {
                    const mockResponses = [
                        "That's a great question! Based on typical course structures, you should focus on the core principles first.",
                        "I can certainly help with that. Could you provide a bit more context from your lecture notes?",
                        "Interesting point. This topic often relates to the previous module about fundamentals.",
                        "Here's a quick summary: The concept basically explains the relationship between variables in this context.",
                        `Since this is **${course.name}**, remember to review the recommended readings for this week.`
                    ];
                    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];

                    currentSession.messages.push({ sender: 'ai', text: randomResponse });
                    currentSession.timestamp = Date.now();
                    saveData();
                    render();
                }, 1500);
            });

            // New Chat Button Logic
            const newChatBtn = element.querySelector('#new-chat-btn');
            if (newChatBtn) {
                newChatBtn.addEventListener('click', () => {
                    const newSession = {
                        id: Date.now(),
                        title: 'New Conversation',
                        messages: [
                            { sender: 'ai', text: `Hi! I'm StudyAl. Start a new topic for **${course.name}**!` }
                        ],
                        timestamp: Date.now()
                    };
                    course.aiSessions.push(newSession);
                    course.currentSessionId = newSession.id;
                    saveData();
                    render();
                });
            }

            // History Sidebar Logic
            const historyToggleBtn = element.querySelector('#history-toggle-btn');
            const historySidebar = element.querySelector('#history-sidebar');
            const closeHistoryBtn = element.querySelector('#close-history-btn');

            if (historyToggleBtn && historySidebar) {
                historyToggleBtn.addEventListener('click', () => {
                    historySidebar.classList.remove('-translate-x-full');
                });
            }

            if (closeHistoryBtn && historySidebar) {
                closeHistoryBtn.addEventListener('click', () => {
                    historySidebar.classList.add('-translate-x-full');
                });
            }

            // Delete Session Logic with Custom Modal
            const deleteSessionModal = element.querySelector('#delete-session-modal');
            const deleteSessionContent = deleteSessionModal.querySelector('div');
            const cancelDeleteSessionBtn = element.querySelector('#cancel-delete-session-btn');
            const confirmDeleteSessionBtn = element.querySelector('#confirm-delete-session-btn');
            let sessionIdToDelete = null;

            const openDeleteSessionModal = (id) => {
                sessionIdToDelete = id;
                deleteSessionModal.classList.remove('invisible', 'opacity-0');
                deleteSessionModal.classList.add('visible', 'opacity-100');
                deleteSessionContent.classList.remove('scale-95');
                deleteSessionContent.classList.add('scale-100');
            };

            const closeDeleteSessionModal = () => {
                sessionIdToDelete = null;
                deleteSessionModal.classList.add('invisible', 'opacity-0');
                deleteSessionModal.classList.remove('visible', 'opacity-100');
                deleteSessionContent.classList.add('scale-95');
                deleteSessionContent.classList.remove('scale-100');
            };

            // Event Delegated delete listening is already in the 'Switch Session Logic' block technically,
            // but we need to ensure the delegated listener calls openDeleteSessionModal now.

            // Let's refactor the history delegation for clarity
            if (historySidebar) {
                // Remove any existing click listener by not re-adding if we did... 
                // actually element.innerHTML replaced so fresh listeners needed.
                historySidebar.addEventListener('click', (e) => {
                    // Delete Click
                    const deleteBtn = e.target.closest('.delete-session-btn');
                    if (deleteBtn) {
                        e.stopPropagation();
                        const id = parseInt(deleteBtn.dataset.id);
                        openDeleteSessionModal(id);
                        return;
                    }
                    // Session Switch Click
                    const sessionItem = e.target.closest('.history-item-btn');
                    if (sessionItem) {
                        const id = parseInt(sessionItem.dataset.id);
                        if (id !== course.currentSessionId) {
                            course.currentSessionId = id;
                            saveData();
                            render();
                        } else {
                            historySidebar.classList.add('-translate-x-full');
                        }
                    }
                });
            }

            if (cancelDeleteSessionBtn) {
                cancelDeleteSessionBtn.addEventListener('click', closeDeleteSessionModal);
            }

            if (confirmDeleteSessionBtn) {
                confirmDeleteSessionBtn.addEventListener('click', () => {
                    if (sessionIdToDelete) {
                        course.aiSessions = course.aiSessions.filter(s => s.id !== sessionIdToDelete);

                        // If we deleted the current one, switch to another
                        if (sessionIdToDelete === course.currentSessionId) {
                            course.currentSessionId = course.aiSessions[0]?.id || null;
                            // If no sessions left, create a default one
                            if (!course.aiSessions.length) {
                                const initialMessages = [
                                    { sender: 'ai', text: `Hi! I'm StudyAl, your personal AI assistant for **${course.name}**. Ask me anything about the course materials, exams, or topics!` }
                                ];

                                const newDefaultInfo = {
                                    id: Date.now(),
                                    title: 'General Chat',
                                    messages: initialMessages,
                                    timestamp: Date.now()
                                };
                                course.aiSessions.push(newDefaultInfo);
                                course.currentSessionId = newDefaultInfo.id;
                            }
                        }

                        saveData();
                        closeDeleteSessionModal();
                        render();
                    }
                });
            }

            // Re-attach clear chat to delete CURRENT session only? 
            // The modal is still there, let's wire it to delete the CURRENT session for consistency.
            const clearChatModal = element.querySelector('#clear-chat-modal');
            // ... (keeping existing modal logic separate or refactoring it? 
            // The user didn't ask to remove the clear button, but New Chat + History makes Clear redundant or different)
            // I removed the "Clear Chat" button from UI in previous chunk, but kept the Modal HTML.
            // Let's repurpose that modal for "Delete Session" if we wanted, but standard Confirm is easier for list items.
            // For now, I have removed the "Clear Chat" button from the header in the previous ReplacementChunk.

        }

        const addBtn = element.querySelector('#add-resource-btn');
        const fileInput = element.querySelector('#file-upload-input');

        // Modal Elements
        const deleteModal = element.querySelector('#delete-resource-modal');
        const deleteModalContent = deleteModal.querySelector('div');
        const cancelDeleteBtn = element.querySelector('#cancel-delete-res-btn');
        const confirmDeleteBtn = element.querySelector('#confirm-delete-res-btn');

        let resourceToDeleteId = null;

        const openDeleteModal = (id) => {
            resourceToDeleteId = id;
            deleteModal.classList.remove('invisible', 'opacity-0');
            deleteModal.classList.add('visible', 'opacity-100');
            deleteModalContent.classList.remove('scale-95');
            deleteModalContent.classList.add('scale-100');
        };

        const closeDeleteModal = () => {
            resourceToDeleteId = null;
            deleteModal.classList.add('invisible', 'opacity-0');
            deleteModal.classList.remove('visible', 'opacity-100');
            deleteModalContent.classList.add('scale-95');
            deleteModalContent.classList.remove('scale-100');
        };

        if (addBtn) {
            addBtn.addEventListener('click', () => {
                fileInput.click();
            });
        }

        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                // In a real app, you would upload the file to a server here.
                // Since this is a local-storage demo, we will simulate it by storing 
                // the name and a fake 'ref' or 'blob'. 
                // Warning: Storing full base64 in localStorage is bad for performance/limits.
                // We will just store metadata to simulate the LISTING UI.

                // NOTE: We cannot persist the actual file content in typical localStorage cleanly for large files.
                // We'll mimic the "uploaded" state.

                course.resources.push({
                    id: Date.now(),
                    name: file.name,
                    type: file.type || 'Unknown Type',
                    size: (file.size / 1024).toFixed(1) + ' KB'
                });
                saveData();
                render();
            });
        }

        element.querySelectorAll('.delete-resource-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openDeleteModal(parseInt(btn.dataset.id));
            });
        });

        if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', closeDeleteModal);

        if (confirmDeleteBtn) {
            confirmDeleteBtn.addEventListener('click', () => {
                if (resourceToDeleteId) {
                    course.resources = course.resources.filter(r => r.id !== resourceToDeleteId);
                    saveData();
                    render(); // This will re-render and remove the modal from DOM, effectively "closing" it
                }
            });
        }
        // Delete Course Detail Logic
        const deleteCourseBtn = element.querySelector('#delete-course-detail-btn');
        const deleteCourseModal = element.querySelector('#delete-course-detail-modal');
        if (deleteCourseModal) { // Check if exists to be safe
            const deleteCourseModalContent = deleteCourseModal.querySelector('div');
            const cancelDeleteCourseBtn = element.querySelector('#cancel-delete-course-detail-btn');
            const confirmDeleteCourseBtn = element.querySelector('#confirm-delete-course-detail-btn');

            if (deleteCourseBtn) {
                deleteCourseBtn.addEventListener('click', () => {
                    deleteCourseModal.classList.remove('invisible', 'opacity-0');
                    deleteCourseModal.classList.add('visible', 'opacity-100');
                    deleteCourseModalContent.classList.remove('scale-95');
                    deleteCourseModalContent.classList.add('scale-100');
                });
            }

            const closeDeleteCourseModal = () => {
                deleteCourseModal.classList.add('invisible', 'opacity-0');
                deleteCourseModal.classList.remove('visible', 'opacity-100');
                deleteCourseModalContent.classList.add('scale-95');
                deleteCourseModalContent.classList.remove('scale-100');
            };

            if (cancelDeleteCourseBtn) cancelDeleteCourseBtn.addEventListener('click', closeDeleteCourseModal);

            if (confirmDeleteCourseBtn) {
                confirmDeleteCourseBtn.addEventListener('click', () => {
                    // Delete the course
                    data.courses = data.courses.filter(c => c.id !== course.id);
                    data.stats.courses.total = data.courses.length;
                    saveData();

                    // Navigate back to courses list
                    window.navigateTo('courses');
                });
            }
        }
    };

    render();
}
