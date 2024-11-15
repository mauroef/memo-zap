import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import MilestoneListView from '@/views/milestones/MilestoneListView.vue';
import MilestoneDetailView from '@/views/milestones/MilestoneDetail.vue';
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
      path: '/milestones',
      name: 'milestone-list',
      component: MilestoneListView,
    },
    {
      path: '/milestones/:id',
      name: 'milestone-detail',
      component: MilestoneDetailView,
      props: true,
    },
    {
      path: '/milestones/new',
      name: 'milestone-new',
      component: MilestoneNewView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
