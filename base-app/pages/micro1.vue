<template>
    <div>
      <sidebar :sidebarFromMicro="RemoteSidebar">
        <template v-slot:main>
          <p>Microfrontend 1 App Loaded Below:</p>
          <div v-if="RemoteComponent">
            <component :is="RemoteComponent" :router="router" />
          </div>
          <div v-else>
            <p>Loading microfrontend...</p>
          </div>
        </template>
      </sidebar>
    </div>
  </template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import sidebar from '../components/sidebar.vue';

  const router = useRouter();
  const RemoteComponent = ref(null);

  const RemoteSidebar = ref(null);

  onMounted(async () => {
    const { default: module } = await import('microfrontend/App');
    RemoteComponent.value = module;

    const { default: sidebarmodule } = await import('microfrontend/Sidebar');
    RemoteSidebar.value = sidebarmodule;
  });
</script>
  