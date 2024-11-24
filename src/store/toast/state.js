import { ref } from 'vue';
import { TOAST } from '@/constants';

export const useToastState = () => {
  const isVisible = ref(false);
  const message = ref('');
  const type = ref(TOAST.TYPE.INFO);

  return {
    isVisible,
    message,
    type,
  };
};
