import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ImageProcessingView from '../views/ImageProcessingView.vue'
import readImageView from '../views/readImageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/imageprocessing',
      name: 'imageprocessing',
      component: ImageProcessingView
    },
    {
      path: '/readimage',
      name: 'readimage',
      component: readImageView
    }
  ]
})

export default router
