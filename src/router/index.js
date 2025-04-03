import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import authRoutes from './auth';
import MemoRoutes from './memos';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
    ...authRoutes,
    ...MemoRoutes,
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
