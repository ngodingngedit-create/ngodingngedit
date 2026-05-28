<template>
  <section class="portfolio-section section-padding" id="portfolio">
    <!-- Scattered Faint Dot Grid Background Pattern -->
    <div class="portfolio-section__dot-grid"></div>

    <div class="container portfolio-section__container">
      <!-- Header Section -->
      <div class="portfolio-section__header reveal">
        <div class="portfolio-section__header-text">

          <h2 class="portfolio-section__title">
            Portfolio <span class="highlight"></span>
          </h2>
          <p class="portfolio-section__subtitle">
            {{ $t('portfolio.subtitle') }}
          </p>
        </div>
        <div class="portfolio-section__header-action">
          <RouterLink to="/portfolio" class="portfolio-section__see-all">
            {{ $t('portfolio.seeAll') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </RouterLink>
        </div>
      </div>

      <!-- Cards Flex Swiper -->
      <div class="portfolio-section__grid" ref="gridRef" @scroll="handleScroll">
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

      <!-- Interactive Dynamic Pagination Dots -->
      <div class="portfolio-section__pagination reveal delay-200">
        <span
          v-for="i in projects.length"
          :key="i"
          class="pagination-dot"
          :class="{ active: activeIndex === i - 1 }"
          @click="scrollToPage(i - 1)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import PortfolioCard from '@/components/ui/PortfolioCard.vue'
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import { usePortfolio } from '@/composables/usePortfolio'

const { projects: allProjects } = usePortfolio()
const projects = computed(() => allProjects.value.slice(0, 4))

const activeIndex = ref(0)
const gridRef = ref(null)

const handleScroll = () => {
  if (!gridRef.value) return
  const scrollLeft = gridRef.value.scrollLeft
  const scrollWidth = gridRef.value.scrollWidth - gridRef.value.clientWidth
  if (scrollWidth <= 0) {
    activeIndex.value = 0
    return
  }
  const percentage = scrollLeft / scrollWidth
  activeIndex.value = Math.min(Math.round(percentage * (projects.length - 1)), projects.length - 1)
}

const scrollToPage = (index) => {
  if (!gridRef.value) return
  const scrollWidth = gridRef.value.scrollWidth - gridRef.value.clientWidth
  const targetScroll = (index / (projects.length - 1)) * scrollWidth
  gridRef.value.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  })
}

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
  position: relative;
  background: radial-gradient(circle at 50% 50%, #ffffff 0%, rgba(249, 247, 247, 0.8) 100%);
  overflow: hidden;
}

/* Faint Scattered Grey Dot Grid */
.portfolio-section__dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(100, 116, 139, 0.1) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  mask-image: radial-gradient(circle at center, black 60%, transparent 95%);
  -webkit-mask-image: radial-gradient(circle at center, black 60%, transparent 95%);
  pointer-events: none;
  z-index: 1;
}

.portfolio-section__container {
  position: relative;
  z-index: 2;
}

/* Header styling */
.portfolio-section__header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
  text-align: left;
}

.portfolio-section__header-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 650px;
}

.portfolio-section__label {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: 0.15em;
  margin-bottom: var(--space-xs);
  text-transform: uppercase;
}

.portfolio-section__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4.5vw, 2.75rem);
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.15;
  margin-top: 0;
  margin-bottom: var(--space-md);
}

.portfolio-section__title .highlight {
  color: var(--color-primary);
}

.portfolio-section__subtitle {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.portfolio-section__header-action {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.portfolio-section__see-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-primary);
  padding: 0.6rem 1.35rem;
  border: 2px solid rgba(63, 114, 175, 0.15);
  border-radius: var(--radius-pill);
  white-space: nowrap;
  transition: all var(--transition-fast);
  background: white;
  text-decoration: none;
}

.portfolio-section__see-all:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  box-shadow: var(--shadow-btn);
  transform: translateY(-2px);
}

.portfolio-section__see-all svg {
  transition: transform var(--transition-fast);
}

.portfolio-section__see-all:hover svg {
  transform: translateX(4px);
}

/* Horizontal Swiper Layout */
.portfolio-section__grid {
  display: flex;
  flex-direction: row;
  align-items: stretch; /* Aligns all cards same height and parallel */
  gap: var(--space-lg); /* Sleek gap for compact layout */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: var(--space-md); /* space for thin scrollbar */
  margin-bottom: var(--space-md);
  scrollbar-width: thin;
  scrollbar-color: #2563EB transparent;
  -webkit-overflow-scrolling: touch;
}

/* Custom Scrollbar - Super Thin & Blue */
.portfolio-section__grid::-webkit-scrollbar {
  height: 4px; /* Thinner scrollbar */
}

.portfolio-section__grid::-webkit-scrollbar-track {
  background: rgba(37, 99, 235, 0.05); /* Very soft blue track background */
  border-radius: var(--radius-full);
}

.portfolio-section__grid::-webkit-scrollbar-thumb {
  background: #2563EB; /* Vibrant Blue Thumb */
  border-radius: var(--radius-full);
  transition: background-color var(--transition-fast);
}

.portfolio-section__grid::-webkit-scrollbar-thumb:hover {
  background: #1D4ED8;
}

/* Card Width on Desktop: exactly 4 cards fit by default */
.portfolio-section__grid > * {
  flex: 0 0 calc(25% - (3 * var(--space-lg) / 4));
  scroll-snap-align: start;
}

/* Pagination Dots - Thinner & Blue */
.portfolio-section__pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: var(--space-xl);
}

.pagination-dot {
  display: block;
  width: 6px; /* Super thin, compact dots */
  height: 6px;
  border-radius: var(--radius-full);
  background: rgba(37, 99, 235, 0.2); /* Soft Blue inactive dots */
  transition: all var(--transition-base);
  cursor: pointer;
}

.pagination-dot.active {
  background: #2563EB; /* Vivid Blue active dot */
  width: 16px; /* Thinner active pill */
  border-radius: var(--radius-pill);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  /* Tablet layout: exactly 3 cards fit in view */
  .portfolio-section__grid > * {
    flex: 0 0 calc(33.333% - (2 * var(--space-lg) / 3));
  }
}

@media (max-width: 768px) {
  .portfolio-section__header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: var(--space-2xl);
    gap: var(--space-md);
  }

  .portfolio-section__header-text {
    align-items: center;
  }

  .portfolio-section__header-action {
    width: 100%;
    justify-content: center;
    margin-top: var(--space-xs);
  }

  .portfolio-section__see-all {
    width: auto;
  }

  .portfolio-section__grid {
    gap: var(--space-md);
    padding-bottom: var(--space-sm);
  }

  /* Mobile Layout: 1.2 cards peek horizontally */
  .portfolio-section__grid > * {
    flex: 0 0 80%;
  }

  .portfolio-section__pagination {
    gap: 12px;
  }

  .pagination-dot {
    width: 8px; /* Slightly larger on mobile for easy touch tap */
    height: 8px;
  }

  .pagination-dot.active {
    width: 20px;
  }
}
</style>


