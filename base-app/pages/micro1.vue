<template>
  <div>
    <header>
      <h1>Microfrontend 1 App</h1>
    </header>
    <div v-if="RemoteComponent">
      <component :is="RemoteComponent" :router="router"/>
    </div>
    <div v-else>
      <p>Loading microfrontend...</p>
    </div>
  </div>
</template>
  
<script setup>
  import { ref, onMounted, markRaw } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const RemoteComponent = ref(null);

  onMounted(async () => {
    const { default: module } = await import('microfrontend/App');
    RemoteComponent.value = markRaw(module);  // Prevent Vue from making this reactive
  });
</script>
  