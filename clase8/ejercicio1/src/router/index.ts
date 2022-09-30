import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sistema from '../views/Sistema.vue'
import NotFound from '../views/NotFound.vue'
import Cliente from '../views/Cliente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sistema',
      name: 'sistema',
      component: Sistema
    },
    {
      path: '/cliente',  // :id
      name: 'cliente',
      component: Cliente
    },
    { path: '/:pathMatch(.*)*', 
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
