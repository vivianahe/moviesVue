import { createRouter, createWebHistory } from 'vue-router'
import InitialView from '../views/InitialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'inicio',
      component:InitialView
    },
  ]
})

export default router
