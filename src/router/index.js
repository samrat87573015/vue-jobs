import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobsView from '../views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobDetailsView from '@/views/JobDetailsView.vue';
import AddJobView from '@/views/AddJobView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/jobs/:id',
      name: 'jobDetails',
      component:JobDetailsView,
    },
    {
      path: '/add-job',
      name: 'addJob',
      component: AddJobView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
