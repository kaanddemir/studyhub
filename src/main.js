import './style.css'
import { data, saveData } from './data.js'
import { t } from './translations.js'
import { renderSidebar, renderMobileNav } from './components/Sidebar.js'
import { renderDashboard } from './components/Dashboard.js'
import { renderOnboarding } from './components/Onboarding.js'
import { renderCoursesPage } from './components/CoursesPage.js'
import { renderCourseDetailPage } from './components/CourseDetailPage.js'
import { renderExamsPage } from './components/ExamsPage.js'
import { renderCheatsheetsPage } from './components/CheatsheetsPage.js'
import { renderCheatsheetDetailPage } from './components/CheatsheetDetailPage.js'
import { renderNotebookPage } from './components/NotebookPage.js'

document.querySelector('#app').innerHTML = `
  <nav id="sidebar" class="hidden lg:flex w-16 h-full bg-white border-r border-gray-200 flex-col items-center py-6 shrink-0 transition-all duration-300"></nav>
  <main id="dashboard" class="flex-1 h-full overflow-y-auto relative pb-20 lg:pb-0 pt-[env(safe-area-inset-top)]"></main> <!-- pb-20 for bottom nav space -->
  <nav id="mobile-nav" class="lg:hidden fixed bottom-6 left-0 right-0 z-50 h-[4.5rem] w-full pointer-events-none flex justify-center px-4"></nav>
  <div id="modal-container"></div>
`

// Restore Theme
if (data.user) {
  if (data.user.customThemeRgb) {
    document.documentElement.style.setProperty('--color-primary-rgb', data.user.customThemeRgb);
  } else if (data.user.themePreference) {
    const themes = {
      blue: '37 99 235',
      purple: '147 51 234',
      pink: '236 72 153',
      emerald: '5 150 105',
      orange: '234 88 12',
      rose: '225 29 72',
      lila: '178 106 251'
    };
    if (themes[data.user.themePreference]) {
      document.documentElement.style.setProperty('--color-primary-rgb', themes[data.user.themePreference]);
    }
  }

  // Restore Background Preference
  if (data.user.bgPreference === 'theme') {
    document.body.style.backgroundColor = 'rgb(var(--color-primary-rgb) / 0.04)';
  } else {
    document.body.style.backgroundColor = '';
  }
}

// Simple Router
const container = document.querySelector('#dashboard');
let currentPage = 'dashboard';

window.navigateTo = (page, params = {}) => {
  currentPage = page;

  // Update Sidebar Active State
  const sidebarPage = (page === 'course-detail') ? 'courses' : page;

  // Render Desktop Sidebar
  renderSidebar(document.querySelector('#sidebar'), sidebarPage);

  // Render Mobile Nav
  const mobileNav = document.querySelector('#mobile-nav');
  if (mobileNav) {
    mobileNav.innerHTML = ''; // clear
    renderMobileNav(mobileNav, sidebarPage);

    // Ensure pointer events are correct for interaction
    const wrapper = mobileNav.querySelector('.glass');
    if (wrapper) wrapper.classList.add('pointer-events-auto');
  }

  container.innerHTML = ''; // Clear current view

  if (page === 'dashboard') {
    renderDashboard(container);
  } else if (page === 'courses') {
    renderCoursesPage(container);
  } else if (page === 'course-detail') {
    renderCourseDetailPage(container, params.id);
  } else if (page === 'exams') {
    renderExamsPage(container);
  } else if (page === 'cheatsheets') {
    renderCheatsheetsPage(container);
  } else if (page === 'cheatsheet-detail') {
    renderCheatsheetDetailPage(container, params.id);
  } else if (page === 'notebook') {
    renderNotebookPage(container);
  } else {
    // Placeholder for other pages
    container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full p-10 text-center">
                <div class="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                     <svg class="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark mb-2">Coming Soon</h2>
                <p class="text-gray-400 max-w-sm">The <b>${page}</b> page is currently under construction. Stay tuned for updates!</p>
                <button onclick="window.navigateTo('dashboard')" class="mt-8 px-6 py-2.5 bg-primary text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-0.5">
                    Go to Dashboard
                </button>
            </div>
        `;
  }

};

// Logout Function
window.logout = () => {
  // Custom Modal Implementation
  const modalHtml = `
        <div id="logout-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-dark/50 backdrop-blur-sm transition-opacity opacity-0" id="logout-backdrop"></div>
            <div class="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 transform scale-95 opacity-0 transition-all" id="logout-card">
                <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </div>
                <h3 class="text-xl font-bold text-dark text-center mb-2">${t('logout_confirmation_title')}</h3>
                <p class="text-gray-500 text-center text-sm mb-6">${t('logout_confirmation_desc')}</p>
                
                <div class="flex gap-3">
                    <button id="btn-cancel-logout" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${t('cancel')}</button>
                    <button id="btn-confirm-logout" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${t('logout')}</button>
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Animation In
  requestAnimationFrame(() => {
    document.getElementById('logout-backdrop').classList.remove('opacity-0');
    const card = document.getElementById('logout-card');
    card.classList.remove('scale-95', 'opacity-0');
    card.classList.add('scale-100', 'opacity-100');
  });

  // Handlers
  const closeModal = () => {
    const modal = document.getElementById('logout-modal');
    const backdrop = document.getElementById('logout-backdrop');
    const card = document.getElementById('logout-card');

    backdrop.classList.add('opacity-0');
    card.classList.remove('scale-100', 'opacity-100');
    card.classList.add('scale-95', 'opacity-0');

    setTimeout(() => modal.remove(), 300);
  };

  document.getElementById('btn-cancel-logout').addEventListener('click', closeModal);
  document.getElementById('logout-backdrop').addEventListener('click', closeModal);

  document.getElementById('btn-confirm-logout').addEventListener('click', () => {
    // Factory Reset
    localStorage.removeItem('studyhub_data');
    localStorage.removeItem('dashboardLayout');
    localStorage.removeItem('coursesLayout');
    localStorage.removeItem('cheatsheetsLayout');
    localStorage.removeItem('grade_calc_data');
    localStorage.removeItem('habit_tracker_data_v3');
    localStorage.removeItem('pomodoro_settings');
    localStorage.removeItem('dashboard_notes_list');
    localStorage.removeItem('scratchpad_current');
    localStorage.removeItem('scratchpad_gallery');
    localStorage.removeItem('photo_widget_image');
    localStorage.removeItem('photo_widget_zoom');

    // Reload page to trigger onboarding with fresh default data
    location.reload();
  });
};

// Initial Render
window.navigateTo('dashboard');

// Check if user is set up
if (!data.user.isSetup) {
  renderOnboarding(document.querySelector('#modal-container'), () => {
    // On complete, re-render dashboard to show new data
    window.navigateTo('dashboard');
  });
}
