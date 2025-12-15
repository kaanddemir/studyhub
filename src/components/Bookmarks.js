
export function renderBookmarks(container) {
  container.innerHTML = `
      <div class="h-full flex flex-col p-5">
        <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
          <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Bookmarks
          </h3>
        </div>
        <div class="flex-1 flex flex-col gap-3 overflow-y-auto custom-scrollbar min-h-0">
          
          <!-- Gemini -->
          <a href="https://gemini.google.com" target="_blank" class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all group">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <!-- Sparkles Icon for AI -->
               <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
               </svg>
            </div>
            <div>
              <h4 class="font-bold text-dark text-sm">Gemini</h4>
              <p class="text-xs text-gray-500">Google AI Assistant</p>
            </div>
            <svg class="w-4 h-4 text-gray-300 group-hover:text-primary ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <!-- ChatGPT -->
          <a href="https://chatgpt.com" target="_blank" class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all group">
            <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <!-- Chat Bubble Icon -->
               <svg class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
               </svg>
            </div>
            <div>
              <h4 class="font-bold text-dark text-sm">ChatGPT</h4>
              <p class="text-xs text-gray-500">OpenAI Chat</p>
            </div>
             <svg class="w-4 h-4 text-gray-300 group-hover:text-primary ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <!-- YouTube Education -->
          <a href="https://www.youtube.com" target="_blank" class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all group">
            <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <!-- Play Icon -->
               <svg class="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <div>
              <h4 class="font-bold text-dark text-sm">Learning</h4>
              <p class="text-xs text-gray-500">YouTube</p>
            </div>
             <svg class="w-4 h-4 text-gray-300 group-hover:text-primary ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

        </div>
      </div>
    `;
}
