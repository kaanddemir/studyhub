import { t } from '../translations.js';

export function renderSidebar(element, activePage = 'dashboard') {
    const menuItems = [
        { icon: 'grid', page: 'dashboard' },
        { icon: 'book', page: 'courses' },
        { icon: 'notebook', page: 'notebook' },
        { icon: 'ticket', page: 'exams' },
        { icon: 'collection', page: 'cheatsheets' }
    ];

    const icons = {
        grid: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />`,
        book: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />`,
        calendar: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />`,
        notebook: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />`,
        chart: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />`,
        folder: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />`,
        collection: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />`,
        chat: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />`,
        globe: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />`,
        ticket: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />`
    };

    const itemsHtml = menuItems.map(item => {
        const isActive = item.page === activePage;
        // Basic logic: if activePage is 'courses', only the book icon (page='courses') is active.
        // If activePage is 'dashboard', only grid is active.

        return `
        <li onclick="window.navigateTo('${item.page}')" class="cursor-pointer p-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-primary hover:bg-white/50'} flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                ${icons[item.icon]}
            </svg>
        </li>
    `}).join('');

    element.innerHTML = `
        <div class="flex flex-col h-full items-center py-4 w-full relative z-10 transition-all duration-300">
            <!-- Glass Vertical Rectangle Menu -->
            <div class="glass flex-1 w-auto rounded-full py-3 px-1.5 flex flex-col items-center gap-3 border border-white/50 shadow-xl bg-white/40 backdrop-blur-xl mb-2 transition-all duration-300 mx-2">
                <ul class="flex flex-col gap-2 w-full items-center pt-2">
                    ${itemsHtml}
                </ul>
                
                 <div class="mt-auto flex flex-col gap-3 w-full items-center pt-3 border-t border-gray-200/30">
                    <button onclick="window.logout()" class="p-2.5 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-white/50" title="${t('logout')}">
                       <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

export function renderMobileNav(element, activePage = 'dashboard') {
    const menuItems = [
        { icon: 'grid', page: 'dashboard', label: t('dashboard') },
        { icon: 'book', page: 'courses', label: t('courses') },
        { icon: 'notebook', page: 'notebook', label: t('notes') },
        { icon: 'ticket', page: 'exams', label: t('exams') },
        { icon: 'collection', page: 'cheatsheets', label: t('cheats') }
    ];

    const icons = {
        grid: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />`,
        book: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />`,
        notebook: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />`,
        collection: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />`,
        ticket: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />`
    };

    const itemsHtml = menuItems.map(item => {
        const isActive = item.page === activePage;
        return `
        <li onclick="window.navigateTo('${item.page}')" class="flex-1 cursor-pointer p-2 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 ${isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}">
            <svg class="w-6 h-6 ${isActive ? 'fill-primary/10 stroke-primary' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                ${icons[item.icon]}
            </svg>
            <span class="text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-0 h-0 hidden'} transition-all">${item.label || ''}</span>
        </li>
    `}).join('');

    element.innerHTML = `
        <div class="h-full w-full flex items-center justify-center px-4">
             <div class="glass w-full rounded-2xl py-2 px-1 flex items-center justify-between border border-white/50 shadow-xl bg-white/90 backdrop-blur-xl">
                <ul class="flex w-full items-center justify-between gap-1">
                    ${itemsHtml}
                </ul>
            </div>
        </div>
    `;
}
