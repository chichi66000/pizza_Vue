import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Pizza from '../views/Pizza.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pizza.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
