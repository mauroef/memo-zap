import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import NewView from '@/views/NewView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/new',
      name: 'new',
      component: NewView,
    },
    {
      path: '/:pathMatch(.*)*', // Comodín para capturar cualquier ruta no definida
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});

export default router;
