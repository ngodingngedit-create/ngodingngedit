import { createRouter, createWebHistory } from 'vue-router'

// HomeView loaded eagerly (it's the first page users see)
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
  },
  {
    path: '/portofoliodetail',
    name: 'portfolio-detail',
    component: () => import('../views/PortfolioDetail.vue'),
  },
  {
    path: '/how-to',
    name: 'how-to',
    component: () => import('../views/HowToView.vue'),
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-and-conditions',
    component: () => import('../views/TermsAndConditionsView.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/views/PrivacyPolicyView.vue'),
  },
  {
    path: '/help-center',
    name: 'help-center',
    component: () => import('@/views/HelpCenterView.vue'),
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
