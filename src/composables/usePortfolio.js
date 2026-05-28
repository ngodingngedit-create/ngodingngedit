import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import imgArtnaflow from '@/assets/images/portfolio_artnaflow.png'
import imgLuxemarket from '@/assets/images/portfolio_luxemarket.png'
import imgMediscan from '@/assets/images/portfolio_mediscan.png'

export function usePortfolio() {
  const { t } = useI18n()

  const projects = computed(() => [
    {
      image: imgArtnaflow,
      category: 'FINTECH',
      title: 'ArtnaFlow Dashboard',
      description: t('portfolio.artnaflow'),
      tags: ['React', 'Node.js'],
    },
    {
      image: imgLuxemarket,
      category: 'E-COMMERCE',
      title: 'LuxeMarket Mobile',
      description: t('portfolio.luxemarket'),
      tags: ['Flutter', 'Firebase'],
    },
    {
      image: imgMediscan,
      category: 'HEALTH-TECH',
      title: 'MediScan Cloud',
      description: t('portfolio.mediscan'),
      tags: ['AI', 'Python'],
    },
    {
      image: imgArtnaflow,
      category: 'FINTECH',
      title: 'PaySphere Gate',
      description: t('portfolio.paysphere'),
      tags: ['Next.js', 'Go'],
    },
    {
      image: imgLuxemarket,
      category: 'EDTECH',
      title: 'EduLearn Platform',
      description: t('portfolio.edulearn'),
      tags: ['Vue.js', 'Tailwind'],
    },
    {
      image: imgMediscan,
      category: 'TRAVEL',
      title: 'TravelEase App',
      description: t('portfolio.travelease'),
      tags: ['React Native', 'Node.js'],
    },
    {
      image: imgArtnaflow,
      category: 'AGRITECH',
      title: 'AgriGrow IoT',
      description: t('portfolio.agrigrow'),
      tags: ['Python', 'IoT'],
    },
    {
      image: imgLuxemarket,
      category: 'FINTECH',
      title: 'FinTrack Pro',
      description: t('portfolio.fintrack'),
      tags: ['React', 'Django'],
    },
  ])

  return { projects }
}
