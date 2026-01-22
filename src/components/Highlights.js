

import { saveData } from '../data.js';
import { t } from '../translations.js';

export function renderProfile(element, user) {
    // Default values if missing
    if (!user.university) user.university = t('uni_name_placeholder');
    if (!user.department) user.department = t('department_label');

    element.innerHTML = `
        <div class="h-full bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-3xl shadow-sm relative overflow-hidden group p-8 flex flex-col items-center justify-center text-center isolate transition-all hover:shadow-md">
            <!-- Decorative Modern Gradient Backgrounds Removed -->
            
            <!-- Edit Button -->
            <button class="edit-profile-btn absolute top-4 right-4 p-2 text-gray-400 hover:text-primary transition-all z-20 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:shadow-md hover:scale-105" title="${t('edit_profile')}">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </button>
            
            <!-- Avatar Section -->
            <div class="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                <!-- Glow removed -->
                <div class="w-28 h-28 rounded-full p-6 bg-white relative z-10 shadow-xl ring-1 ring-gray-100 flex items-center justify-center overflow-hidden">
                    ${user.avatar ? `<div class="text-6xl">${user.avatar}</div>` :
            `<svg class="w-full h-full text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`}
                </div>
            </div>
            
            <!-- Info Section -->
            <div class="relative z-10 flex flex-col items-center">
                <h3 class="text-2xl font-black text-dark mb-2 tracking-tight">${user.name}</h3>
                
                <div class="flex flex-col items-center gap-2 mt-4 w-full">
                    <div class="flex items-center justify-center gap-2 text-xs font-medium text-gray-600 w-full">
                         <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        <span class="truncate tracking-wide">${user.university}</span>
                    </div>
                    
                    <div class="w-16 h-px bg-green-900/10 rounded-full"></div>

                    <div class="flex items-center justify-center gap-2 text-xs font-medium text-gray-600 w-full">
                         <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        <span class="truncate tracking-wide">${user.department}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Handle Edit
    // Handle Edit
    element.querySelector('.edit-profile-btn').onclick = () => {
        showEditProfileModal(user, (updatedUser) => {
            user.name = updatedUser.name;
            user.university = updatedUser.university;
            user.department = updatedUser.department;

            saveData();
            renderProfile(element, user);
            document.dispatchEvent(new Event('profileUpdated'));
        });
    };
}

function showEditProfileModal(currentUser, onSave) {
    // Remove existing if any
    const existing = document.getElementById('edit-profile-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'edit-profile-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-dark/50 backdrop-blur-sm opacity-0 transition-opacity duration-300';

    modal.innerHTML = `
        <div class="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl transform scale-95 transition-transform duration-300">
            <h3 class="text-xl font-bold text-dark mb-6 text-center">${t('edit_profile')}</h3>
            
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${t('name_label')}</label>
                    <input type="text" id="edit-name" value="${currentUser.name}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${t('university_label')}</label>
                    <input type="text" id="edit-university" value="${currentUser.university}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${t('department_label')}</label>
                    <input type="text" id="edit-department" value="${currentUser.department}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
            </div>

            <div class="flex gap-3 mt-8">
                <button id="cancel-edit-profile" class="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">${t('cancel')}</button>
                <button id="save-edit-profile" class="flex-1 py-3 rounded-xl font-bold text-white bg-primary hover:bg-[#2C5F58] shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">${t('save_changes')}</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Animation In
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('div').classList.remove('scale-95');
        modal.querySelector('div').classList.add('scale-100');
    });

    // Handlers
    const close = () => {
        modal.classList.add('opacity-0');
        modal.querySelector('div').classList.remove('scale-100');
        modal.querySelector('div').classList.add('scale-95');
        setTimeout(() => modal.remove(), 300);
    };

    modal.querySelector('#cancel-edit-profile').onclick = close;
    modal.onclick = (e) => {
        if (e.target === modal) close();
    };

    modal.querySelector('#save-edit-profile').onclick = () => {
        const name = document.getElementById('edit-name').value;
        const university = document.getElementById('edit-university').value;
        const department = document.getElementById('edit-department').value;

        if (name && university && department) {
            onSave({ name, university, department });
            close();
        } else {
            alert(t('fill_all_fields'));
        }
    };

}
