import MilestoneListView from '@/views/milestones/MilestoneListView.vue';
import MilestoneDetailView from '@/views/milestones/MilestoneDetail.vue';
import MilestoneNewView from '@/views/milestones/MilestoneNewView.vue';
import MilestoneEditView from '@/views/milestones/MilestoneEditView.vue';

export default [
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
    path: '/milestones/:id/edit',
    name: 'milestone-edit',
    component: MilestoneEditView,
    props: true,
  },
];
