import MilestoneListView from '@/views/milestones/MilestoneListView.vue';

export default [
  {
    path: '/milestones',
    name: 'milestone-list',
    component: MilestoneListView,
  },
  {
    path: '/milestones/:id',
    name: 'milestone-detail',
    component: () => import('@/views/milestones/MilestoneDetail.vue'),
    props: true,
  },
  {
    path: '/milestones/new',
    name: 'milestone-new',
    component: () => import('@/views/milestones/MilestoneNewView.vue'),
  },
  {
    path: '/milestones/:id/edit',
    name: 'milestone-edit',
    component: () => import('@/views/milestones/MilestoneEditView.vue'),
    props: true,
  },
];
