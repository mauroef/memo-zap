import MemoListView from '@/views/memos/MemoListView.vue';

export default [
  {
    path: '/memos',
    name: 'memo-list',
    component: MemoListView,
  },
  {
    path: '/memos/:id',
    name: 'memo-detail',
    component: () => import('@/views/memos/MemoDetail.vue'),
    props: true,
  },
  {
    path: '/memos/new',
    name: 'memo-new',
    component: () => import('@/views/memos/MemoNewView.vue'),
  },
  {
    path: '/memos/:id/edit',
    name: 'memo-edit',
    component: () => import('@/views/memos/MemoEditView.vue'),
    props: true,
  },
];
