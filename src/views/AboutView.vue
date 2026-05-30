<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-hero__bg" aria-hidden="true">
        <div class="about-hero__grid"></div>
        <div class="about-hero__orb"></div>
      </div>
      <div class="container about-hero__inner">
        <h1 class="about-hero__title gradient-text animate-fade-in-up">{{ $t('aboutPage.title') }}</h1>
        <p class="about-hero__subtitle animate-fade-in-up delay-100">{{ $t('aboutPage.subtitle') }}</p>
      </div>
    </section>

    <!-- CORE VALUES SECTION -->
    <section class="core-values container">
      <div class="core-values__header reveal">
        <h2>{{ $t('aboutPage.valuesTitle') }}</h2>
      </div>
      <div class="core-values__grid">
        <div v-for="(val, idx) in $tm('aboutPage.values')" :key="idx" class="value-card reveal" :style="{ transitionDelay: `${idx * 150}ms` }">
          <div class="value-card__icon">
            <svg v-if="idx===0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
            <svg v-else-if="idx===1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>{{ val.title }}</h3>
          <p>{{ val.desc }}</p>
        </div>
      </div>
    </section>

    <section class="founders-section" id="team-section">
      <div class="founders-section__inner container">
        <div class="founders-header reveal">
          <h2 class="founders-section-title">{{ $t('aboutPage.foundersTitle') }}</h2>
        </div>

        <div class="founders-list">
          <div
            v-for="(founder, index) in founders"
            :key="index"
            :id="`founder-${index}`"
            class="founder-row reveal-row"
            :class="{ 'founder-row--reverse': index % 2 !== 0 }"
          >
            <!-- Image Side -->
            <div class="founder-row__img-col">
              <div class="founder-row__img-wrap">
                <img
                  :src="founder.imageCandid"
                  :alt="founder.name"
                  class="founder-card__img founder-card__img--candid fade-mask"
                  @error="handleImageError($event, founder.fallback)"
                />
                <img
                  :src="founder.imageLook"
                  :alt="`${founder.name} looking`"
                  class="founder-card__img founder-card__img--look fade-mask"
                  @error="handleImageError($event, founder.fallback)"
                />
              </div>
            </div>

            <!-- Text Side -->
            <div class="founder-row__text-col">

              <!-- NAME is now the most prominent -->
              <h3 class="founder-card__name">{{ founder.name }}</h3>
              <p class="founder-card__role">{{ founder.role }}</p>
              
              <div class="founder-card__divider"></div>
              
              <!-- The heading is now a smaller quote/subtitle -->
              <h4 class="founder-card__heading">"{{ founder.heading }}"</h4>
              <p class="founder-card__desc">{{ founder.desc }}</p>
              
              <div class="founder-card__info">
                <div class="founder-card__socials">
                  <a :href="founder.instagram || '#'" class="founder-card__social" target="_blank" rel="noopener" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a :href="founder.linkedin || '#'" class="founder-card__social" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

// Utility to get image url dynamically
const getImageUrl = (name) => {
  return new URL(`../assets/images/founders/${name}`, import.meta.url).href
}

// Use Farhan's photos as dummy for all founders, except Hanif's which are now available
const founders = computed(() => {
  const data = tm('aboutPage.founders')
  if (!Array.isArray(data)) return []
  return data.map((f, i) => {
    let candidImg = 'farhan.png';
    let lookImg = 'farhan2.png';

    if (f.name && f.name.includes('Hanif')) {
      candidImg = 'hanif.png';
      lookImg = 'hanif2.png';
    }

    return {
      ...f,
      imageCandid: getImageUrl(candidImg),
      imageLook: getImageUrl(lookImg),
      fallback: `https://picsum.photos/seed/${f.name}/400/500`,
      instagram: '#',
      linkedin: '#'
    };
  })
})

const handleImageError = (e, fallback) => {
  if (e.target.src !== fallback) e.target.src = fallback
}

// ── Scroll Reveal ──────────────────────────────────────────────

onMounted(() => {
  const io = new IntersectionObserver(
    e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal, .reveal-row').forEach(el => io.observe(el))
})

// ── Router ────────────────────────────────────────────────────────
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
</script>

<style scoped>
.about-page {
  background: #f8fafc;
  min-height: 100vh;
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
@media (max-width: 768px) {
  .about-hero {
    padding: calc(var(--navbar-height, 64px) + 2.5rem) 1.25rem 2.5rem;
  }
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
  animation: floatOrb 10s ease-in-out infinite alternate;
}
@keyframes floatOrb {
  0% { transform: translate(-50%, 0) scale(1); }
  100% { transform: translate(-50%, 20px) scale(1.1); }
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
.about-hero__title.gradient-text {
  background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.about-hero__subtitle {
  font-size: 1.125rem; color: #64748b; line-height: 1.7;
}

/* CORE VALUES */
.core-values {
  padding: 5rem 1rem;
  max-width: 1200px; margin: 0 auto;
  background: #f8fafc;
}
.core-values__header {
  text-align: center; margin-bottom: 4rem;
}
.core-values__header h2 {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2.25rem; font-weight: 800; color: #0f172a;
}
.core-values__grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
}
.value-card {
  background: white; padding: 2.5rem; border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.04);
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
  transition: all 0.3s ease;
  opacity: 0; transform: translateY(30px);
}
.value-card.visible {
  opacity: 1; transform: translateY(0);
}
.value-card:hover {
  transform: translateY(-5px); box-shadow: 0 20px 40px rgba(37,99,235,0.06);
  border-color: rgba(37,99,235,0.1);
}
.value-card__icon {
  width: 56px; height: 56px; border-radius: 16px;
  background: rgba(37,99,235,0.08); color: #2563eb;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.5rem;
}
.value-card__icon svg { width: 28px; height: 28px; }
.value-card h3 {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem;
}
.value-card p {
  color: #64748b; line-height: 1.6; font-size: 0.9375rem;
}
@media (max-width: 768px) {
  .core-values__grid { grid-template-columns: 1fr; }
}

/* ═══════════════════════════════════════════════════
   FOUNDERS — ZIG-ZAG EDITORIAL SECTION
   ═══════════════════════════════════════════════════ */
.founders-section {
  background: #0a0f1e;
  position: relative;
  padding: 8rem 0 4rem;
  color: white;
  overflow: hidden;
}

/* Subtle noise texture overlay to match the navy theme */
.founders-section::before {
  content: '';
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.4;
}

/* Top fade edge removed — wave divider now handles the transition */

.founders-section__inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 1rem;
}

.founders-header {
  margin-bottom: 6rem;
  text-align: center;
}

.founders-section-title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.2) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}


.founders-list {
  display: flex;
  flex-direction: column;
}

.founder-row {
  display: flex;
  align-items: center;
  min-height: 85vh;
  gap: 4rem;
  position: relative;
}
.founder-row--reverse {
  flex-direction: row-reverse;
}

.founder-row__img-col {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
}
.founder-row__img-wrap {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 600px;
}

.founder-card__img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: contain;
  object-position: bottom center;
  transition: opacity 0.55s ease, transform 0.55s ease, filter 0.55s ease;
  will-change: opacity;
}
/* Mask image for the fade effect at the bottom */
.fade-mask {
  /* Start fading earlier (at 50%) for a more seamless blend into the navy bg */
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 95%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 95%);
}

.founder-card__img--candid { 
  opacity: 1; 
  filter: grayscale(100%);
}
.founder-card__img--look { 
  opacity: 0; 
}

.founder-row__img-wrap:hover .founder-card__img--candid { opacity: 0; }
.founder-row__img-wrap:hover .founder-card__img--look { opacity: 1; }

.founder-row__text-col {
  flex: 1;
  position: relative;
  padding: 2rem 0;
}

.founder-card__name {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  font-weight: 800;
  /* Tech gradient */
  background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  position: relative; z-index: 1;
  letter-spacing: -0.02em;
}

.founder-card__role {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #60a5fa; /* Accent blue */
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(37, 99, 235, 0.2);
  padding: 0.35rem 1rem;
  border-radius: 99px;
  margin-bottom: 2rem;
  position: relative; z-index: 1;
  font-weight: 600;
}

.founder-card__divider {
  width: 40px;
  height: 3px;
  border-radius: 2px;
  background: #2563eb;
  margin-bottom: 2rem;
  position: relative; z-index: 1;
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
}

.founder-card__heading {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  position: relative; z-index: 1;
  max-width: 450px;
  line-height: 1.4;
}

.founder-card__desc {
  font-size: 1rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.7;
  max-width: 400px;
  margin-bottom: 2.5rem;
  position: relative; z-index: 1;
}

.founder-card__info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative; z-index: 1;
}

.founder-card__socials { display: flex; gap: 0.75rem; }
.founder-card__social {
  color: rgba(255,255,255,0.4);
  transition: color 0.3s ease;
}
.founder-card__social svg { width: 20px; height: 20px; }
.founder-card__social:hover { color: white; }

.founders-footer {
  text-align: center;
  margin-top: 6rem;
  padding-top: 4rem;
  position: relative;
}
.founders-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.2);
}
.founders-footer p {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.4);
}

.reveal-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
}
.reveal-row.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 992px) {
  .founder-row {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 4rem 0;
  }
  .founder-row--reverse {
    flex-direction: column;
  }
  .founder-row__img-col {
    width: 100%;
    flex: none;
    height: 400px;
  }
  .founder-row__img-wrap {
    height: 100%;
  }
  .founder-card__desc {
    margin: 0 auto 2rem;
  }
  .founder-card__divider {
    margin: 0 auto 2rem;
  }
  .founder-card__info {
    justify-content: center;
    flex-direction: column;
  }
}

/* ═══════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════ */
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
@media (max-width: 640px) {
  .about-cta__inner { padding: 2.5rem 1.5rem; border-radius: 18px; }
  .about-cta__inner h2 { font-size: 1.5rem; margin-bottom: 1.5rem; }
  .about-cta__btn { width: 100%; justify-content: center; }
}
</style>
