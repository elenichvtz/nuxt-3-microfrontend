<template>
    <MyComponent/>
    <button @click="goToPageOne">Go to Page One</button>
  </template>
  
  <script setup>
  import MyComponent from './components/MyComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
  router: Object,
});

const goToPageOne = () => {
  if (props.router) {
    props.router.push('/pageone');
  } else {
    console.error('Router is not available');
  }
};
</script>
