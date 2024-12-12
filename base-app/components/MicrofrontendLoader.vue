<!-- <script setup>
import { ref, onMounted } from 'vue';
import '~/assets/scss/styles.scss';

const RemoteComponent = ref(null);
const RemoteComponent2 = ref(null);

onMounted(async () => {
  try {
    // Dynamically import the exposed module from the remote
    const module = await import(/* @vite-ignore */ 'microfrontend/Component');
    
    RemoteComponent.value = module.default;
  } 
  catch (err) {
    RemoteComponent.value = {
      template: `<div>Microfrontend not available.</div>`,
    };
  }

  //second
  try {
    // Dynamically import the exposed module from the remote
    const module2 = await import(/* @vite-ignore */ 'secondMicrofrontend/Component');
    
    RemoteComponent2.value = module2.default;
  } 
  catch (err) {
    RemoteComponent2.value = {
      template: `<div>Second microfrontend not available.</div>`,
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
    <br>
    <div v-if="RemoteComponent2">
      <component :is="RemoteComponent2" />
    </div>
    <div v-else>
      <p>Loading second microfrontend...</p>
    </div>
  </div>
</template> -->

<template>
  <div>
    <h1>Base App</h1>
    <RemoteComponent :router="router" />
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

