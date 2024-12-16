// stores/authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // User object: { id, name, email, pfp }
    token: null, // Auth token for API calls
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    logout() {
      this.user = null;
      this.token = null;
      // Clear local storage or session
      localStorage.removeItem('authToken');
    },
  },
});
