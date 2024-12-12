import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('global', () => {
  const sharedData = ref({});

  function setSharedData(key, value) {
    sharedData.value[key] = value;
  }

  return {
    sharedData,
    setSharedData,
  };
});
