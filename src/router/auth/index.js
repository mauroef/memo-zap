import AuthView from '@/views/auth/AuthView.vue';
import { useToastStore } from '@/store';
import { TOAST } from '@/constants';

export default [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    beforeEnter: (_, _2, next) => {
      const toastStore = useToastStore();
      const userFromLocalStorage = localStorage.getItem('auth');

      if (userFromLocalStorage) {
        toastStore.showToast('You are already logged in!', TOAST.TYPE.WARNING);
        next('/memos');
      } else {
        next();
      }
    },
  },
];
