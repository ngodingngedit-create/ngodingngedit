<template>
  <main class="portfolio-page">
    <section class="portfolio-hero">
      <div class="portfolio-hero__bg" aria-hidden="true">
        <div class="portfolio-hero__grid"></div>
        <div class="portfolio-hero__orb"></div>
      </div>
      <div class="container portfolio-hero__inner">
        <h1 class="portfolio-hero__title animate-fade-in-up">{{ $t('portfolioPage.title') }}</h1>
        <p class="portfolio-hero__subtitle animate-fade-in-up delay-100">{{ $t('portfolioPage.subtitle') }}</p>
      </div>
    </section>

    <section class="portfolio-grid-section container">
      <div class="portfolio-grid">
        <PortfolioCard
          v-for="(project, i) in projects"
          :key="project.id"
          :id="project.id"
          :image="project.image"
          :category="project.category"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :delay="i * 0.1"
          class="portfolio-grid__item reveal"
        />
      </div>
    </section>

    <section class="portfolio-cta container reveal delay-200">
      <div class="portfolio-cta__inner">
        <h2>{{ $t('hero.freeConsultation') }}</h2>
        <a href="#" class="portfolio-cta__btn" @click.prevent="scrollToHash('#contact')">
          {{ $t('navbar.contactUs') }}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import PortfolioCard from '@/components/ui/PortfolioCard.vue'
import { usePortfolio } from '@/composables/usePortfolio'

const { projects } = usePortfolio()

const router = useRouter()
const route = useRoute()
function scrollToHash(path) {
  const hash = path.split('#')[1]
  if (!hash) return
  if (route.path === '/') {
    const el = document.getElementById(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    router.push({ path: '/', hash: `#${hash}` })
  }
}

let io = null;
const observeElements = () => {
  if (io) io.disconnect()
  io = new IntersectionObserver(
    e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
}

onMounted(() => {
  observeElements()
})

watch(projects, () => {
  nextTick(() => {
    observeElements()
  })
}, { deep: true })
</script>

<style scoped>
.portfolio-page {
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* HERO */
.portfolio-hero {
  position: relative;
  padding: calc(var(--navbar-height, 72px) + 5rem) 2rem 4rem;
  text-align: center;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
@media (max-width: 768px) {
  .portfolio-hero {
    padding: calc(var(--navbar-height, 64px) + 2.5rem) 1.25rem 2.5rem;
  }
}
.portfolio-hero__bg {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
}
.portfolio-hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 75%);
}
.portfolio-hero__orb {
  position: absolute; width: 400px; height: 400px;
  background: rgba(37,99,235,0.08); border-radius: 50%;
  filter: blur(100px); top: -100px; left: 50%; transform: translateX(-50%);
}
.portfolio-hero__inner {
  position: relative; z-index: 1;
  max-width: 800px; margin: 0 auto;
}
.portfolio-hero__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800; color: #0f172a;
  letter-spacing: -0.03em; margin: 0 0 1rem;
}
.portfolio-hero__subtitle {
  font-size: 1.125rem; color: #64748b; line-height: 1.7;
}

/* GRID SECTION */
.portfolio-grid-section {
  padding: 5rem 1rem;
  max-width: 1200px; margin: 0 auto;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.portfolio-grid__item {
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.portfolio-grid__item.visible {
  opacity: 1; transform: translateY(0);
}

/* CTA */
.portfolio-cta {
  margin-top: 2rem;
}
.portfolio-cta__inner {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 24px; padding: 4rem 2rem; text-align: center;
  color: white;
}
.portfolio-cta__inner h2 {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2rem; font-weight: 800; margin-bottom: 2rem;
  color: #ffffff; /* Explicit white — overrides global heading near-black */
}
.portfolio-cta__btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: #2563eb; color: white;
  padding: 1rem 2.5rem; border-radius: 12px;
  font-weight: 700; text-decoration: none;
  transition: all 0.3s ease;
}
.portfolio-cta__btn:hover {
  background: #1d4ed8; transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37,99,235,0.3);
}

@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .portfolio-grid-section { padding: 3rem 1rem; }
}

@media (max-width: 640px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  .portfolio-cta__inner { padding: 2.5rem 1.5rem; border-radius: 18px; }
  .portfolio-cta__inner h2 { font-size: 1.5rem; margin-bottom: 1.5rem; }
  .portfolio-cta__btn { width: 100%; justify-content: center; }
}
</style>
