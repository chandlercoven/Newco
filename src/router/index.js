import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import GetAppointed from '../views/GetAppointed.vue'
import About from '../views/About.vue'
import LeadSubmission from '../views/LeadSubmission.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/lead-submission',
      component: LeadSubmission
    },
    {
      path: '/get-appointed',
      component: GetAppointed
    }
  ]
})

export default router
