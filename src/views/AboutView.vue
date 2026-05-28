<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-hero__bg" aria-hidden="true">
        <div class="about-hero__grid"></div>
        <div class="about-hero__orb"></div>
      </div>
      <div class="container about-hero__inner">
        <h1 class="about-hero__title animate-fade-in-up">{{ $t('aboutPage.title') }}</h1>
        <p class="about-hero__subtitle animate-fade-in-up delay-100">{{ $t('aboutPage.subtitle') }}</p>
      </div>
    </section>

    <section class="founders-section container">
      <h2 class="founders-title reveal">{{ $t('aboutPage.foundersTitle') }}</h2>
      <div class="founders-grid">
        <div v-for="(founder, index) in founders" :key="index" class="founder-card reveal">
          <div class="founder-card__img-wrap">
            <img :src="founder.image" :alt="founder.name" class="founder-card__img" />
          </div>
          <h3 class="founder-card__name">{{ founder.name }}</h3>
          <p class="founder-card__role">{{ founder.role }}</p>
          <p class="founder-card__desc">{{ founder.desc }}</p>
        </div>
      </div>
    </section>

    <section class="about-cta container reveal delay-200">
      <div class="about-cta__inner">
        <h2>{{ $t('hero.freeConsultation') }}</h2>
        <a href="#" class="about-cta__btn" @click.prevent="scrollToHash('#contact')">
          {{ $t('navbar.contactUs') }}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

// Use Picsum for dummy rectangular images
const placeholderImg = (seed) => `https://picsum.photos/seed/${seed}/400/500`

const founders = computed(() => {
  const data = tm('aboutPage.founders')
  if (!Array.isArray(data)) return []
  return data.map((f, i) => ({
    ...f,
    image: placeholderImg(f.name)
  }))
})

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

onMounted(() => {
  const io = new IntersectionObserver(
    e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.about-page {
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* HERO */
.about-hero {
  position: relative;
  padding: calc(var(--navbar-height, 72px) + 5rem) 2rem 4rem;
  text-align: center;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.about-hero__bg {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
}
.about-hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 75%);
}
.about-hero__orb {
  position: absolute; width: 400px; height: 400px;
  background: rgba(37,99,235,0.08); border-radius: 50%;
  filter: blur(100px); top: -100px; left: 50%; transform: translateX(-50%);
}
.about-hero__inner {
  position: relative; z-index: 1;
  max-width: 800px; margin: 0 auto;
}
.about-hero__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800; color: #0f172a;
  letter-spacing: -0.03em; margin: 0 0 1rem;
}
.about-hero__subtitle {
  font-size: 1.125rem; color: #64748b; line-height: 1.7;
}

/* FOUNDERS GRID */
.founders-section {
  padding: 5rem 1rem;
  max-width: 1200px; margin: 0 auto;
}
.founders-title {
  text-align: center;
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2.25rem; font-weight: 800; color: #0f172a;
  margin-bottom: 3rem;
}
.founders-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.founder-card {
  background: white;
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.05);
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0; transform: translateY(30px);
}
.founder-card.visible {
  opacity: 1; transform: translateY(0);
}
.founder-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  border-color: rgba(37,99,235,0.2);
}
.founder-card__img-wrap {
  width: 100%; height: 260px;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
.founder-card__img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.founder-card__name {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.5rem;
}
.founder-card__role {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.founder-card__desc {
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.5;
}

/* CTA */
.about-cta {
  margin-top: 2rem;
}
.about-cta__inner {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 24px; padding: 4rem 2rem; text-align: center;
  color: white;
}
.about-cta__inner h2 {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2rem; font-weight: 800; margin-bottom: 2rem;
}
.about-cta__btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: #2563eb; color: white;
  padding: 1rem 2.5rem; border-radius: 12px;
  font-weight: 700; text-decoration: none;
  transition: all 0.3s ease;
}
.about-cta__btn:hover {
  background: #1d4ed8; transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37,99,235,0.3);
}

@media (max-width: 1024px) {
  .founders-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .founders-grid { grid-template-columns: 1fr; }
}
</style>
