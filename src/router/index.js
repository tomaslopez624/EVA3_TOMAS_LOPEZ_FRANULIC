import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacto',
      name: 'contacto',
      // Esto carga la vista de contacto solo cuando el usuario hace clic (optimización)
      component: () => import('../views/ContactoView.vue')
    }
  ]
})

export default router
