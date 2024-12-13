<template>
    <div>
      <p>Microfrontend 1 App Loaded Below:</p>
      <div v-if="RemoteComponent">
        <component :is="RemoteComponent" :router="router" />
      </div>
      <div v-else>
        <p>Loading microfrontend...</p>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const RemoteComponent = ref(null);

  onMounted(async () => {
    const { default: module } = await import('microfrontend/App');
    RemoteComponent.value = module;

  });
  </script>
  