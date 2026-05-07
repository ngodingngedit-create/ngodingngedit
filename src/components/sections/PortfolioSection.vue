<template>
  <section class="portfolio-section section-padding" id="portfolio">
    <div class="container">
      <!-- Header -->
      <div class="portfolio-section__header">
        <div class="portfolio-section__title-row">
          <div>
            <h2 class="section-title reveal" style="text-align:left">Portofolio Terbaru</h2>
            <div class="section-underline reveal delay-100" style="margin:var(--space-md) 0 0"></div>
          </div>
          <a href="#" class="portfolio-section__see-all reveal delay-200">
            Lihat Semua
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
        <p class="portfolio-section__subtitle reveal delay-200">
          Inilah beberapa proyek unggulan yang telah kami selesaikan dengan standar Kolektix.group.
        </p>
      </div>

      <!-- Cards -->
      <div class="portfolio-section__grid">
        <PortfolioCard
          v-for="(project, i) in projects"
          :key="project.title"
          :image="project.image"
          :category="project.category"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :delay="i * 0.12"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PortfolioCard from '@/components/ui/PortfolioCard.vue'
import { onMounted } from 'vue'

import imgArtnaflow from '@/assets/images/portfolio_artnaflow.png'
import imgLuxemarket from '@/assets/images/portfolio_luxemarket.png'
import imgMediscan from '@/assets/images/portfolio_mediscan.png'

const projects = [
  {
    image: imgArtnaflow,
    category: 'FINTECH',
    title: 'ArtnaFlow Dashboard',
    description: 'Solusi manajemen keuangan dan analitik bisnis real-time berbasis cloud yang powerful.',
    tags: ['React', 'Node.js'],
  },
  {
    image: imgLuxemarket,
    category: 'E-COMMERCE',
    title: 'LuxeMarket Mobile',
    description: 'Aplikasi belanja mobile untuk pengalaman berbelanja personal berbasis AI.',
    tags: ['Flutter', 'Firebase'],
  },
  {
    image: imgMediscan,
    category: 'HEALTH-TECH',
    title: 'MediScan Cloud',
    description: 'Sistem pencitraan medis berbasis cloud dengan kecerdasan AI untuk diagnosis personal.',
    tags: ['AI', 'Python'],
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(el => el.isIntersecting && el.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.portfolio-section .reveal, .portfolio-section .reveal-scale').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.portfolio-section {
  background: var(--color-surface);
}

.portfolio-section__header {
  margin-bottom: var(--space-3xl);
}

.portfolio-section__title-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-xl);
  margin-bottom: var(--space-lg);
}

.portfolio-section__see-all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-primary);
  padding-bottom: 4px;
  border-bottom: 2px solid rgba(37, 99, 235, 0.25);
  white-space: nowrap;
  transition: all var(--transition-fast);
  flex-shrink: 0;
  margin-bottom: 4px;
}

.portfolio-section__see-all:hover {
  border-color: var(--color-primary);
  gap: 10px;
}

.portfolio-section__subtitle {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
}

.portfolio-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

@media (max-width: 1024px) {
  .portfolio-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .portfolio-section__grid {
    grid-template-columns: 1fr;
  }

  .portfolio-section__title-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
  }
}
</style>
