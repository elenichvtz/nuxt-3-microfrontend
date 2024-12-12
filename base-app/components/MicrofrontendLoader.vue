<script setup>
import { ref, onMounted } from 'vue';
import '~/assets/scss/styles.scss';

const RemoteComponent = ref(null);

onMounted(async () => {
  const name = "microfrontend"; // Remote name defined in the base app's remotes
  try {
    // Dynamically import the exposed module from the remote
    const module = await import(/* @vite-ignore */ 'microfrontend/Component');
    const p = 
    console.log("Loaded module:", module);
    RemoteComponent.value = module.default;
  } catch (err) {
    console.error(`Failed to load microfrontend: ${name}`, err);
    RemoteComponent.value = {
      template: `<div>Microfrontend ${name} not available.</div>`,
    };
  }
});

</script>

<template>
  <div>
    <div v-if="RemoteComponent">
      <component :is="RemoteComponent" />
    </div>
    <div v-else>
      <p>Loading microfrontend...</p>
    </div>
  </div>
</template>
