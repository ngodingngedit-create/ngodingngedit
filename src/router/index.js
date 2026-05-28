import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import HowToView from '../views/HowToView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import PortfolioDetail from '../views/PortfolioDetail.vue'
import TermsAndConditionsView from '../views/TermsAndConditionsView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import HelpCenterView from '@/views/HelpCenterView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
  },
  {
    path: '/portofoliodetail',
    name: 'portfolio-detail',
    component: PortfolioDetail,
  },
  {
    path: '/how-to',
    name: 'how-to',
    component: HowToView,
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-and-conditions',
    component: TermsAndConditionsView,
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicyView,
  },
  {
    path: '/help-center',
    name: 'help-center',
    component: HelpCenterView,
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
