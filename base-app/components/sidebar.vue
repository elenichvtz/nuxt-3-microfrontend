<template>
    <div class="app-container">
      <nav class="sidebar">
        <MicrofrontendLoader />
      </nav>
      <div class="content">
        <slot name="main"></slot>
      </div>
    </div>
</template>
  
<script setup>
import MicrofrontendLoader from './MicrofrontendLoader.vue';
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
