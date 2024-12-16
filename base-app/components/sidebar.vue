<template>
    <div class="app-container">
      <nav class="sidebar">
        <button class="green-button" @click="goToHome">Go to Home</button>
        <br><br>
        <sidebarFromMicro :router="router" />
        <sidebarContent />
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

  const router = useRouter();

  const props = defineProps({
    sidebarFromMicro: Object,
  });

  // Method to navigate to the '/' route
  const goToHome = () => {
    router.push('/');
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
