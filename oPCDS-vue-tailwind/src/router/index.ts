import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormBuilder from '../views/FormBuilder.vue'
import pcdsHome from '../views/pcdsHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: pcdsHome
    },
    {
      path: '/defaulthome',
      name: 'default-home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/formbuilder',
      name: 'formbuilder',
      component: FormBuilder
    }
  ]
})

export default router
