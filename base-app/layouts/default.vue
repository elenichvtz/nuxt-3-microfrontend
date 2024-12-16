<template>
  <div class="app-container">
    <nav class="sidebar">
      <!-- Base Sidebar Content -->
      <p>Base Sidebar</p>
      <button @click="goToHome">Home</button>
      <button @click="logout">Logout</button>

      <hr />

      <!-- Dynamically Render Microfrontend Sidebar -->
      <div v-if="RemoteSidebar">
        <component :is="RemoteSidebar" :router="router" v-if="RemoteSidebar" />
      </div>

      <hr />

      <!-- Navigation Buttons -->
      <button class="green-button" @click="goToMicro1">Go to Micro App 1</button>
      <button class="green-button" @click="goToMicro2">Go to Micro App 2</button>
    </nav>

    <div class="content">
      <main class="main-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, watch, markRaw } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useAuthStore } from '~/stores/authStore';

  const router = useRouter();
  const route = useRoute();
  const authStore = useAuthStore();
  const RemoteSidebar = ref(null);

  const goToHome = () => {
    router.push('/');
  };

  const goToMicro1 = () => {
    router.push('/micro1');
  };

  const goToMicro2 = () => {
    router.push('/micro2');
  };

  const logout = () => {
    authStore.logout();
    window.location.href = '/login';
  };

  // Dynamically Load Sidebar for Specific Microfrontend Routes
  const loadMicroSidebar = async () => {

    if (route.path.startsWith('/micro1')) {
      const { default: sidebarmodule } = await import('microfrontend/Sidebar');
      RemoteSidebar.value = markRaw(sidebarmodule); // Prevent Vue from making this reactive
    } 
    else if (route.path.startsWith('/micro2')) {
      const { default: sidebarmodule2 } = await import('secondMicrofrontend/Sidebar');
      RemoteSidebar.value = markRaw(sidebarmodule2); // Prevent Vue from making this reactive
    }
    else {
      RemoteSidebar.value = null;
    }
  };

  watch(() => route.path, loadMicroSidebar);
  onMounted(loadMicroSidebar);
</script>

<style scoped>
  /* Styles for the layout */
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
