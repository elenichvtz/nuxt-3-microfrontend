<template>
    <div>
      <sidebar>
        <template v-slot:main>
          <p>Microfrontend 2 App Loaded Below:</p>
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
  import { ref, onMounted, markRaw } from 'vue';
  import { useRouter } from 'vue-router';
  import sidebar from '../components/sidebar.vue';

  const router = useRouter();
  const RemoteComponent = ref(null);

  onMounted(async () => {
    const { default: module } = await import('secondMicrofrontend/App');
    RemoteComponent.value = markRaw(module);  // Prevent Vue from making this reactive

  });
</script>