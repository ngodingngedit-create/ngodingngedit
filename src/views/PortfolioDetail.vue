<template>
  <main class="pd-page">
    <!-- ==================== LOADING SKELETON ==================== -->
    <template v-if="isLoading">
      <div class="pd-skeleton">
        <div class="container">
          <div class="pd-skeleton__hero">
            <div class="skeleton skeleton--breadcrumb"></div>
            <div class="skeleton skeleton--badge"></div>
            <div class="skeleton skeleton--title"></div>
            <div class="skeleton skeleton--desc"></div>
            <div class="skeleton skeleton--tags">
              <div class="skeleton skeleton--tag"></div>
              <div class="skeleton skeleton--tag"></div>
              <div class="skeleton skeleton--tag"></div>
            </div>
          </div>
          <div class="pd-skeleton__content">
            <div class="skeleton skeleton--block"></div>
            <div class="skeleton skeleton--block"></div>
          </div>
        </div>
      </div>
    </template>

    <!-- ==================== ERROR / NOT FOUND ==================== -->
    <template v-else-if="error">
      <div class="pd-error">
        <div class="container pd-error__inner">
          <div class="pd-error__card reveal">
            <svg class="pd-error__icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h1 class="pd-error__title">{{ $t('portfolioDetail.projectNotFound') }}</h1>
            <p class="pd-error__desc">{{ $t('portfolioDetail.projectNotFoundDesc') }}</p>
            <div class="pd-error__actions">
              <router-link to="/portfolio" class="btn btn-outline-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                {{ $t('portfolioDetail.backToPortfolio') }}
              </router-link>
              <router-link to="/" class="btn btn-primary">
                {{ $t('portfolioDetail.backToHome') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- ==================== MAIN CONTENT ==================== -->
    <template v-else-if="portfolio">
      <!-- HERO -->
      <header class="pd-hero">
        <div class="pd-hero__bg" aria-hidden="true">
          <svg class="pd-hero__pattern pd-hero__pattern--dots" width="100" height="100" fill="none">
            <pattern id="detail-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(37, 99, 235, 0.08)" />
            </pattern>
            <rect width="100" height="100" fill="url(#detail-dots)" />
          </svg>
          <svg class="pd-hero__pattern pd-hero__pattern--curves" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="100" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.5"/>
            <circle cx="200" cy="200" r="150" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.5"/>
            <circle cx="200" cy="200" r="200" stroke="rgba(37, 99, 235, 0.04)" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="container pd-hero__container">
          <div class="pd-hero__left reveal">
            <!-- Breadcrumb -->
            <nav class="pd-breadcrumbs" aria-label="Breadcrumb">
              <router-link to="/">{{ $t('pd.home') }}</router-link>
              <span class="divider">/</span>
              <router-link to="/portfolio">{{ $t('pd.portfolio') }}</router-link>
              <span class="divider">/</span>
              <span class="current">{{ portfolio.title }}</span>
            </nav>

            <!-- Category Badge -->
            <span class="pd-badge">
              <span class="pd-badge__dot">●</span>
              {{ portfolio.category }}
            </span>

            <!-- Title -->
            <h1 class="pd-hero__title">{{ portfolio.title }}</h1>

            <!-- Hero Meta Card -->
            <div class="pd-hero__meta">
              <!-- Category & Description row -->
              <div class="pd-hero__meta-row">
                <span class="pd-hero__badge">
                  <span class="pd-hero__badge-dot"></span>
                  {{ portfolio.category }}
                </span>
              </div>

              <p v-if="portfolio.description" class="pd-hero__desc">
                {{ portfolio.description }}
              </p>

              <!-- Actions -->
              <div class="pd-hero__actions">
                <a
                  v-if="hasWebsite"
                  :href="websiteUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="pd-btn-visit"
                  aria-label="Open project website"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>{{ $t('portfolioDetail.visitWebsite') }}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pd-btn-visit__arrow">
                    <path d="M7 17l9.2-9.2M17 17V7H7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Hero Cover Image -->
          <div v-if="portfolio.image" class="pd-hero__right reveal delay-200">
            <div class="pd-hero__cover-wrap">
              <img :src="portfolio.image" :alt="portfolio.title" class="pd-hero__cover" />
            </div>
          </div>
        </div>
      </header>

      <!-- ==================== GALLERY ==================== -->
      <section v-if="images.length > 0" class="pd-section pd-gallery-section">
        <div class="container">
          <h2 class="section-title reveal">{{ $t('portfolioDetail.gallery') }}</h2>
          <div class="reveal delay-100">
            <PortfolioGallery :images="images" />
          </div>
        </div>
      </section>

      <!-- ==================== PROJECT INFO ==================== -->
      <section class="pd-section pd-info-section">
        <div class="container">
          <PortfolioInfo :details="details" />
        </div>
      </section>

      <!-- ==================== DESCRIPTION ==================== -->
      <section v-if="portfolio.description" class="pd-section pd-desc-section">
        <div class="container">
          <h2 class="section-title reveal">{{ $t('portfolioDetail.description') }}</h2>
          <p class="pd-desc__text reveal delay-100">
            {{ portfolio.description }}
          </p>
        </div>
      </section>

      <!-- ==================== TECHNOLOGIES ==================== -->
      <section v-if="technologies.length > 0" class="pd-section pd-tech-section">
        <div class="container">
          <h2 class="section-title reveal">{{ $t('portfolioDetail.technologies') }}</h2>
          <div class="pd-tech__badges reveal delay-100">
            <TechnologyBadge :technologies="technologies" />
          </div>
        </div>
      </section>

      <!-- ==================== PREV / NEXT NAVIGATION ==================== -->
      <section class="pd-section pd-nav-section">
        <div class="container">
          <nav class="pd-nav" aria-label="Project navigation">
            <router-link
              v-if="prevProject"
              :to="`/portfolio/${prevProject.id}`"
              class="pd-nav__link pd-nav__link--prev"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span class="pd-nav__label">{{ $t('portfolioDetail.previousProject') }}</span>
              <span class="pd-nav__title">{{ prevProject.title }}</span>
            </router-link>

            <router-link
              to="/portfolio"
              class="pd-nav__link pd-nav__link--all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>{{ $t('portfolioDetail.backToPortfolio') }}</span>
            </router-link>

            <router-link
              v-if="nextProject"
              :to="`/portfolio/${nextProject.id}`"
              class="pd-nav__link pd-nav__link--next"
            >
              <span class="pd-nav__label">{{ $t('portfolioDetail.nextProject') }}</span>
              <span class="pd-nav__title">{{ nextProject.title }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </router-link>
          </nav>
        </div>
      </section>
    </template>
  </main>
</template>

<script setup>
import { onMounted, watch, nextTick, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePortfolioDetail } from '@/composables/usePortfolioDetail'
import PortfolioGallery from '@/components/ui/PortfolioGallery.vue'
import PortfolioInfo from '@/components/ui/PortfolioInfo.vue'
import TechnologyBadge from '@/components/ui/TechnologyBadge.vue'

const route = useRoute()
const router = useRouter()

const {
  portfolio,
  details,
  images,
  technologies,
  prevProject,
  nextProject,
  isLoading,
  error,
  fetchPortfolioDetail,
} = usePortfolioDetail()

// ── Visit Website ──────────────────────────────────────────
const websiteUrl = computed(() => portfolio.value?.website_url || '')

const hasWebsite = computed(() => {
  const url = websiteUrl.value
  if (!url || !url.trim()) return false
  try {
    new URL(url)
    return true
  } catch {
    console.warn(`Invalid website_url for project "${portfolio.value?.title || 'unknown'}":`, url)
    return false
  }
})

// Fetch data when route param changes
const loadData = async (id) => {
  if (!id) return
  await fetchPortfolioDetail(id)
}

// Scroll to top on data load
watch(() => portfolio.value, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Watch route param changes
watch(() => route.params.id, (newId) => {
  if (newId) loadData(newId)
})

// Intersection Observer for reveal animations
let io = null
const observeElements = () => {
  if (io) io.disconnect()
  io = new IntersectionObserver(
    e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
    { threshold: 0.05 }
  )
  document.querySelectorAll('.pd-page .reveal').forEach(el => io.observe(el))
}

onMounted(() => {
  loadData(route.params.id)
  nextTick(() => observeElements())
})

watch(isLoading, () => {
  nextTick(() => observeElements())
})
</script>

<style scoped>
/* ══════════════════════════════════════════════════════════
   PAGE BASE
   ══════════════════════════════════════════════════════════ */
.pd-page {
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  overflow-x: hidden;
  padding-top: var(--navbar-height, 72px);
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: var(--container-max, 1200px);
  margin: 0 auto;
  padding: 0 var(--space-xl);
}

/* ══════════════════════════════════════════════════════════
   SKELETON LOADING
   ══════════════════════════════════════════════════════════ */
.pd-skeleton {
  padding: 6rem 0;
}

.pd-skeleton__hero {
  max-width: 680px;
}

.pd-skeleton__content {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}

.skeleton--breadcrumb {
  width: 200px;
  height: 16px;
  margin-bottom: 1.5rem;
}

.skeleton--badge {
  width: 120px;
  height: 28px;
  border-radius: var(--radius-pill);
  margin-bottom: 1.5rem;
}

.skeleton--title {
  width: 80%;
  height: 40px;
  margin-bottom: 1.5rem;
}

.skeleton--desc {
  width: 100%;
  height: 60px;
  margin-bottom: 2rem;
}

.skeleton--tags {
  display: flex;
  gap: 0.75rem;
}

.skeleton--tag {
  width: 80px;
  height: 32px;
  border-radius: var(--radius-pill);
}

.skeleton--block {
  width: 100%;
  height: 180px;
  border-radius: var(--radius-card);
}

/* ══════════════════════════════════════════════════════════
   ERROR STATE
   ══════════════════════════════════════════════════════════ */
.pd-error {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pd-error__inner {
  display: flex;
  justify-content: center;
}

.pd-error__card {
  text-align: center;
  max-width: 480px;
  padding: 3rem;
  background: white;
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
}

.pd-error__icon {
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.pd-error__title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 0.75rem;
}

.pd-error__desc {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin: 0 0 2rem;
}

.pd-error__actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ══════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════ */
.pd-hero {
  position: relative;
  background: #f8fafc;
  padding: 5rem 0 7rem;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
  overflow: hidden;
}

.pd-hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pd-hero__pattern {
  position: absolute;
}

.pd-hero__pattern--dots {
  top: 30px;
  left: 30px;
  opacity: 0.6;
}

.pd-hero__pattern--curves {
  top: -50px;
  right: -50px;
  width: 400px;
  height: 400px;
  opacity: 0.5;
}

.pd-hero__container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

.pd-hero__left {
  min-width: 0;
}

.pd-hero__right {
  min-width: 0;
}

.pd-hero__cover-wrap {
  position: relative;
  width: 100%;
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.12);
  background: var(--color-surface-2);
  aspect-ratio: 16 / 10;
}

.pd-hero__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pd-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
}

.pd-breadcrumbs a {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.pd-breadcrumbs a:hover {
  color: var(--color-primary);
}

.pd-breadcrumbs .divider {
  color: #cbd5e1;
}

.pd-breadcrumbs .current {
  color: var(--color-text-primary);
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pd-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--color-primary);
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.45rem 1rem;
  border-radius: var(--radius-pill);
  margin-bottom: 1.5rem;
}

.pd-badge__dot {
  font-size: 0.6rem;
  margin-right: 2px;
}

.pd-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  color: var(--color-bg-dark);
  line-height: 1.1;
  margin: 0 0 1.5rem;
}

/* ── Hero Meta Card ─────────────────────────────── */
.pd-hero__meta {
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 1.75rem 2rem;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04);
}

.pd-hero__meta-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.pd-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(37, 99, 235, 0.06);
  color: var(--color-primary);
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-pill);
}

.pd-hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary);
}

.pd-hero__desc {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin: 0 0 1.5rem;
}

.pd-hero__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

/* ── Visit Button ───────────────────────────────── */
.pd-btn-visit {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem 0.75rem 1.25rem;
  border-radius: var(--radius-pill);
  background: var(--color-bg-dark);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.1);
}

.pd-btn-visit:hover {
  background: #1e293b;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);
  color: #fff;
}

.pd-btn-visit:active {
  transform: translateY(0);
}

.pd-btn-visit__arrow {
  opacity: 0.6;
  transition: opacity 0.2s;
}

.pd-btn-visit:hover .pd-btn-visit__arrow {
  opacity: 1;
}

/* ── Deprecated (removed ─────────────────────────) */

/* ══════════════════════════════════════════════════════════
   SECTION GLOBAL
   ══════════════════════════════════════════════════════════ */
.pd-section {
  padding: 6rem 0;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 2rem;
}

/* ══════════════════════════════════════════════════════════
   GALLERY SECTION
   ══════════════════════════════════════════════════════════ */
.pd-gallery-section {
  background: #ffffff;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-gallery-section .section-title {
  text-align: center;
}

/* ══════════════════════════════════════════════════════════
   INFO SECTION
   ══════════════════════════════════════════════════════════ */
.pd-info-section {
  background: var(--color-surface);
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

/* ══════════════════════════════════════════════════════════
   DESCRIPTION SECTION
   ══════════════════════════════════════════════════════════ */
.pd-desc-section {
  background: #ffffff;
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-desc-section .section-title {
  text-align: center;
}

.pd-desc__text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  text-align: center;
}

/* ══════════════════════════════════════════════════════════
   TECHNOLOGIES SECTION
   ══════════════════════════════════════════════════════════ */
.pd-tech-section {
  background: var(--color-surface);
  border-bottom: 1px solid rgba(17, 45, 78, 0.04);
}

.pd-tech-section .section-title {
  text-align: center;
  margin-bottom: 2rem;
}

.pd-tech__badges {
  display: flex;
  justify-content: center;
}

/* ══════════════════════════════════════════════════════════
   PREV / NEXT NAVIGATION
   ══════════════════════════════════════════════════════════ */
.pd-nav-section {
  background: #ffffff;
}

.pd-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pd-nav__link {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition: all var(--transition-base);
  background: var(--color-surface);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.pd-nav__link:hover {
  border-color: var(--color-primary-light);
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
  color: var(--color-primary);
}

.pd-nav__link--prev {
  margin-right: auto;
}

.pd-nav__link--next {
  margin-left: auto;
}

.pd-nav__link--all {
  color: var(--color-primary);
  border-color: rgba(37, 99, 235, 0.12);
  background: rgba(37, 99, 235, 0.04);
}

.pd-nav__link--all:hover {
  border-color: var(--color-primary);
  background: rgba(37, 99, 235, 0.08);
  transform: translateY(-1px);
}

.pd-nav__label {
  display: none;
}

.pd-nav__title {
  font-size: 0.85rem;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pd-nav__link svg {
  flex-shrink: 0;
  color: var(--color-text-muted);
}

.pd-nav__link:hover svg {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .pd-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .pd-nav__link--prev,
  .pd-nav__link--next {
    margin: 0;
    flex: 1;
    min-width: 0;
    justify-content: center;
  }

  .pd-nav__link--all {
    width: 100%;
    order: -1;
    justify-content: center;
  }

  .pd-nav__title {
    display: none;
  }

  .pd-nav__label {
    display: inline;
  }
}

/* ♻️ end nav */

/* ══════════════════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════════════════ */
@media (max-width: 992px) {
  .pd-hero__container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .pd-hero__left {
    text-align: center;
  }

  .pd-hero__meta {
    text-align: left;
  }

  .pd-breadcrumbs {
    justify-content: center;
  }

  .pd-hero__desc {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .pd-hero {
    padding: 3rem 0 5rem;
  }

  .pd-section {
    padding: 4rem 0;
  }
}

/* Shimmer keyframe */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>
