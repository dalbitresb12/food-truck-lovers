import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../public/views/home-view.component.vue';
import PostView from '../publishing/views/post-view.component.vue';
import NotFoundView from '../public/views/not-found-view.component.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: HomeView,
    },
    {
      path: '/posts/:id',
      component: PostView,
      props: true,
    },
    // Debe ser la última ruta
    // https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    }
  ]
})

export default router
