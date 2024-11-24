import { TOAST } from '@/constants';

export const useToastActions = (state) => {
  const showToast = (
    message,
    type = TOAST.TYPE.INFO,
    duration = TOAST.AUTO_HIDE_TIME
  ) => {
    state.message.value = message;
    state.type.value = type;
    state.isVisible.value = true;

    setTimeout(() => {
      state.isVisible.value = false;
    }, duration);
  };

  return {
    showToast,
  };
};
