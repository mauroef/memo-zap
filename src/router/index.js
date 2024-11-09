import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import MilestoneListView from '@/views/milestones/MilestoneListView.vue';
import MilestoneNewView from '@/views/milestones/MilestoneNewView.vue';
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
      path: '/milestones',
      name: 'milestones',
      component: MilestoneListView,
    },
    {
      path: '/milestones/new',
      name: 'milestoneNew',
      component: MilestoneNewView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});

export default router;
