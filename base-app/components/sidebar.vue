<template>
    <div class="app-container">
      <nav class="sidebar">
        <button class="green-button" @click="goToHome">Go to Home</button>
        <br><br>
        <sidebarFromMicro v-if="sidebarFromMicro" :router="router" :user="user"/>
        <sidebarContent />
        <br><br>
        <div>
          <img style="border-radius: 5rem;" :src="user?.pfp" alt="Profile Picture" class="pfp" v-if="user" />
          <br>
          <span>{{ user?.name }}</span>
          <br><br>
          <button @click="logout">Logout</button>
        </div>
      </nav>
      <div class="content">
        <slot name="main"></slot>
      </div>
    </div>
</template>
  
<script setup>
  import sidebarContent from './sidebarContent.vue';
  import { useRouter } from 'vue-router';
  import '~/assets/scss/styles.scss';
  import { useAuthStore } from '~/stores/authStore';
  
  const authStore = useAuthStore();
  const router = useRouter();

  // Props
  const props = defineProps({
    sidebarFromMicro: Object,
  });

  // Computed
  const user = computed(() => authStore.user);

  // Methods

  // Method to navigate to the '/' route
  const goToHome = () => {
    router.push('/');
  };

  const logout = () => {
    authStore.logout();
    // Redirect to login
    window.location.href = '/login';
  };
</script>
  
<style scoped>
    .app-container {
    display: flex;
    height: 100vh; /* Full height of the viewport */
    }

    .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 150px; /* Adjust width as needed */
    background-color: #f0f0f0; /* Background color for the sidebar */
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Optional shadow for visual effect */
    }

    .content {
    margin-left: 200px; /* Same as the sidebar width */
    width: calc(100% - 200px);
    overflow-y: auto; /* Make content scrollable */
    padding: 20px;
    }
</style>
