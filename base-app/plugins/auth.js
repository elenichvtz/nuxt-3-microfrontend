// plugins/auth.js
import { defineNuxtPlugin } from '#app';
import { useAuthStore } from '~/stores/authStore';
import { createPinia } from 'pinia';


export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    nuxtApp.provide('pinia', pinia); // Make Pinia accessible in the app context

    const authStore = useAuthStore();

    // const token = localStorage.getItem('authToken');
    const token = 'thisistoken';
    if (token) {
        authStore.token = token;
        // Simulate fetching user info
        authStore.setUser({ 
            id: 1, 
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            pfp: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5d/5d49a8a7de435cebab22b76479344fc16f8defb4.jpg' 
        });
    }
});
