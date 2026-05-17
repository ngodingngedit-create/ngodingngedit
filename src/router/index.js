import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import PortfolioDetail from '@/views/PortfolioDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
  },
  {
    path: '/portofoliodetail',
    name: 'portfolio-detail',
    component: PortfolioDetail,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
