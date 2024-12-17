<template>
  <div class="app-container">
    <nav class="sidebar">
      <!-- Base Sidebar Content -->
      
      <div class="column sidebar-main-nav">
        <div class="row sidebar-main-top">
          <img class="logo" src="https://picsum.photos/200" alt="Logo">
          <h3>Microfrontend Integration</h3>
        </div>

        <div class="column sidebar-apps-nav">
          <button class="button--nav" @click="goToHome">
            <img class="icon--nav" :src="homeIcon" alt="Home" >
            Home
          </button>
      
          <!-- Dynamically Render Microfrontend Sidebar -->
          <div v-if="RemoteSidebar">
            <component :is="RemoteSidebar" :router="router" v-if="RemoteSidebar" />
          </div>

          <!-- Navigation Buttons -->
        
          <button class="button--nav" @click="goToMicro1">
            <img class="icon--nav" :src="diagramIcon" alt="One" >
            Micro App 1
          </button>
          <button class="button--nav" @click="goToMicro2">
            <img class="icon--nav" :src="bellIcon" alt="Two" >
            Micro App 2
          </button>
        </div>
      </div>
      
      <div class="column sidebar-bottom">
        <button class="button--nav" @click="logout">
          <img class="icon--nav" :src="logoutIcon" alt="Logout" >
          Logout
        </button>

        <div class="row profile">
          <img :src="user?.pfp" alt="Profile Picture" class="pfp" v-if="user" />
          <div class="colum">
            <b>{{ user?.name }}</b>
            <div class="email">{{ user?.email }}</div>
          </div>
        </div>
      </div>

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
  import '~/assets/scss/styles.scss';

  const router = useRouter();
  const route = useRoute();
  const authStore = useAuthStore();
  const RemoteSidebar = ref(null);
  const logoutIcon = "/icons/logout.svg";
  const homeIcon = "/icons/home.svg";
  const diagramIcon = "/icons/diagram.svg";
  const bellIcon = "/icons/bell.svg";

  const goToHome = () => {
    router.push('/');
  };

  const goToMicro1 = () => {
    router.push('/micro1');
  };

  const goToMicro2 = () => {
    router.push('/micro2');
  };

  const user = computed(() => authStore.user);

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