import { computed } from 'vue';

export const useToastGetters = (state) => {
  const getMessage = computed(() => state.message);
  const getType = computed(() => state.type);

  return {
    getMessage,
    getType,
  };
};