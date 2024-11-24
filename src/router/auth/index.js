import AuthView from '@/views/auth/AuthView.vue';
import { useAuthStore, useToastStore } from '@/store';
import { TOAST } from '@/constants';

export default [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    beforeEnter: async (_, _2, next) => {
      const authStore = useAuthStore();
      const toastStore = useToastStore();

      await authStore.initAuthListener();

      if (authStore.isAuthenticated) {
        toastStore.showToast('You are already logged in!', TOAST.TYPE.WARNING);
        next('/milestones');
      } else {
        next();
      }
    },
  },
];
