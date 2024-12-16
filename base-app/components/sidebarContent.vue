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

<!-- <template>
  <div>
    <p>The whole Microfrontend 1 & 2 Apps are loaded below. The routing is imported dynamically from the micro apps.</p>
    <RemoteComponent :router="router" />
    <br>
    <RemoteComponent2 :router="router" />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const RemoteComponent = ref(null);
  const RemoteComponent2 = ref(null);

  onMounted(async () => {
    const { default: module } = await import('microfrontend/App');
    RemoteComponent.value = module;

    const { default: module2 } = await import('secondMicrofrontend/App');
    RemoteComponent2.value = module2;
  });
</script> -->

<template>
  <div>
    <!-- Button to navigate to the 'micro1' route -->
    <button class="green-button" @click="goToMicro1">Go to Micro App 1</button>
    <br><br>
    <!-- Button to navigate to the 'micro2' route -->
    <button class="green-button" @click="goToMicro2">Go to Micro App 2</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // Method to navigate to the 'micro1' route
  const goToMicro1 = () => {
    router.push('/micro1');
  };

  // Method to navigate to the 'micro2' route
  const goToMicro2 = () => {
    router.push('/micro2');
  };
</script>

<style scoped>
.green-button {
  border-radius: 3.75rem;
  background: #2CC6A2;
  color: #FFF;
  font-family: Commissioner;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 0;
  padding: 1.25rem;
  width: fit-content;
  cursor: pointer;
}
</style>