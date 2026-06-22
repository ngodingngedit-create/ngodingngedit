<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-hero__bg" aria-hidden="true">
        <div class="about-hero__grid"></div>
        <div class="about-hero__orb"></div>
      </div>
      <div class="container about-hero__inner">
        <!-- 2-Column layout for About Us mockup -->
        <div class="hero-layout">
          <!-- Left Content Col -->
          <div class="hero-content animate-fade-in-up">
            <span class="section-subtitle-pill">{{ $t('aboutPage.title') === 'About Us' ? 'WHO WE ARE' : 'SIAPA KAMI' }}</span>
            <h1 class="about-hero__title gradient-text">{{ $t('aboutPage.title') }}</h1>
            <div class="title-underline"></div>
            <p class="about-hero__desc">{{ $t('aboutPage.subtitle') }}</p>
            
            <!-- Stats Grid -->
            <div class="stats-grid">
              <!-- Stats Card 1 -->
              <div class="stat-card">
                <div class="stat-card__icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="stat-card__text">
                  <span class="stat-card__number">100+</span>
                  <span class="stat-card__label">{{ $t('aboutPage.stats.clients') }}</span>
                </div>
              </div>
              <!-- Stats Card 2 -->
              <div class="stat-card">
                <div class="stat-card__icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div class="stat-card__text">
                  <span class="stat-card__number">150+</span>
                  <span class="stat-card__label">{{ $t('aboutPage.stats.projects') }}</span>
                </div>
              </div>
              <!-- Stats Card 3 -->
              <div class="stat-card">
                <div class="stat-card__icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><path d="M12 2v2M12 14v2m-6-8h2m8 0h2"/></svg>
                </div>
                <div class="stat-card__text">
                  <span class="stat-card__number">4+</span>
                  <span class="stat-card__label">{{ $t('aboutPage.stats.experience') }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Image Col -->
          <div class="hero-image-col animate-fade-in-up delay-100">
            <!-- Decorative Elements -->
            <div class="decor-dot-grid"></div>
            <div class="decor-l-shape"></div>
            
            <div class="office-image-container">
              <img
                src="/leaguage/f38fa80f-2f91-4655-80bf-4117730fa888.jpg"
                alt="Ngoding Ngedit Office Interior"
                class="office-image"
              />
              
              <!-- Quote Overlay Box -->
              <div class="quote-overlay-box">
                <div class="quote-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.361l.412.893c-3.003 1.157-5 3.845-5 7.159h5v9.7h-9.412zm-14 0v-7.391c0-5.704 3.748-9.762 9-10.361l.412.893c-3.003 1.157-5 3.845-5 7.159h5v9.7h-9.412z"/></svg>
                </div>
                <p class="quote-text">{{ $t('aboutPage.quote') }}</p>
                <div class="quote-underline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE VALUES SECTION -->
    <section class="core-values container">
      <div class="core-values__header reveal">
        <span class="section-subtitle-pill section-subtitle-pill--centered">{{ $t('aboutPage.title') === 'About Us' ? 'WHAT WE BELIEVE' : 'APA YANG KAMI YAKINI' }}</span>
        <h2 class="section-center-title">{{ $t('aboutPage.valuesTitle') }}</h2>
      </div>
      <div class="core-values__grid">
        <div v-for="(val, idx) in $tm('aboutPage.values')" :key="idx" class="value-card reveal" :style="{ transitionDelay: `${idx * 150}ms` }">
          <div class="value-card__icon-wrap">
            <div class="value-card__icon">
              <!-- Lightbulb icon -->
              <svg v-if="idx===0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6m-5 4h4"/></svg>
              <!-- Shield icon -->
              <svg v-else-if="idx===1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <!-- Team/users icon -->
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
          </div>
          <h3 class="value-card__title">{{ val.title }}</h3>
          <p class="value-card__desc">{{ val.desc }}</p>
          <div class="value-card__underline"></div>
        </div>
      </div>
    </section>

    <section class="founders-section" id="team-section">
      <div class="founders-section__inner container">
        <div class="founders-header reveal">
          <span class="section-subtitle-pill section-subtitle-pill--centered">{{ $t('aboutPage.title') === 'About Us' ? 'MEET THE TEAM' : 'TEMUI TIM KAMI' }}</span>
          <h2 class="founders-section-title">{{ $t('aboutPage.foundersTitle') }}</h2>
        </div>

        <div class="founders-grid">
          <div
            v-for="(founder, index) in founders"
            :key="index"
            :id="`founder-${index}`"
            class="founder-card reveal"
            :class="{ 'is-flipped': flippedCards.has(index) }"
            :style="{ transitionDelay: `${index * 150}ms` }"
            @click="toggleFlip(index)"
          >
            <div class="founder-card__inner">

              <!-- ░░ FRONT FACE ░░ -->
              <div class="founder-card__front">
                <div class="founder-card__img-container">
                  <div class="founder-card__img-bg-shape"></div>
                  <img
                    :src="founder.imageLook"
                    :alt="founder.name"
                    class="founder-card__portrait"
                    @error="handleImageError($event, founder.fallback)"
                  />
                </div>
                <div class="founder-card__body">
                  <h3 class="founder-card__name-text">{{ founder.name }}</h3>
                  <div class="founder-card__role-tag"><span>{{ founder.role }}</span></div>
                  <div class="founder-card__socials-row">
                    <a :href="founder.instagram || '#'" class="founder-card__social-link" target="_blank" rel="noopener" aria-label="Instagram" @click.stop>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a :href="founder.linkedin || '#'" class="founder-card__social-link" target="_blank" rel="noopener" aria-label="LinkedIn" @click.stop>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="mailto:info@ngodingngedit.com" class="founder-card__social-link" aria-label="Email" @click.stop>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </a>
                  </div>
                  <!-- Flip hint -->
                  <div class="founder-card__flip-hint">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                    <span>{{ $t('aboutPage.title') === 'About Us' ? 'See Skills' : 'Lihat Skill' }}</span>
                  </div>
                </div>
              </div>

              <!-- ░░ BACK FACE ░░ -->
              <div
                class="founder-card__back"
                :style="{ backgroundImage: `url(${founder.imageLook})` }"
              >
                <div class="founder-card__back-overlay">
                  <div class="founder-card__back-content">
                    <h3 class="founder-back__name">{{ founder.name }}</h3>
                    <div class="founder-back__role-tag"><span>{{ founder.role }}</span></div>
                    <div class="founder-back__divider"></div>
                    <p class="founder-back__skill-label">{{ $t('aboutPage.title') === 'About Us' ? '✦ Skills' : '✦ Keahlian' }}</p>
                    <div class="founder-back__skill-tags">
                      <span v-for="(skill, si) in founder.skills" :key="si" class="skill-tag">{{ skill }}</span>
                    </div>
                    <div class="founder-back__socials">
                      <a :href="founder.instagram || '#'" class="founder-card__social-link founder-card__social-link--back" target="_blank" rel="noopener" aria-label="Instagram" @click.stop>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      </a>
                      <a :href="founder.linkedin || '#'" class="founder-card__social-link founder-card__social-link--back" target="_blank" rel="noopener" aria-label="LinkedIn" @click.stop>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      <a href="mailto:info@ngodingngedit.com" class="founder-card__social-link founder-card__social-link--back" aria-label="Email" @click.stop>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </a>
                    </div>
                    <button class="founder-back__flip-back" @click.stop="toggleFlip(index)">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                      {{ $t('aboutPage.title') === 'About Us' ? 'Flip Back' : 'Balik' }}
                    </button>
                  </div>
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
// ── Flip Card State ────────────────────────────────────────────
const flippedCards = ref(new Set())
const toggleFlip = (index) => {
  const next = new Set(flippedCards.value)
  if (next.has(index)) next.delete(index)
  else next.add(index)
  flippedCards.value = next
}
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

/* HERO SECTION */
.about-hero {
  position: relative;
  padding: calc(var(--navbar-height, 72px) + 3.5rem) 2rem 3.5rem;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.about-hero__bg {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
}

.about-hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.4) 0%, transparent 75%);
}

.about-hero__orb {
  position: absolute; width: 400px; height: 400px;
  background: rgba(37,99,235,0.06); border-radius: 50%;
  filter: blur(100px); top: -100px; left: 50%; transform: translateX(-50%);
}

.about-hero__inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-layout {
  display: flex;
  align-items: center;
  gap: 5rem;
}

.hero-content {
  flex: 1.2;
  text-align: left;
}

.section-subtitle-pill {
  display: inline-block;
  padding: 0.35rem 1rem;
  background: rgba(37, 99, 235, 0.08);
  color: #2563eb;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 1rem;
}

.section-subtitle-pill--centered {
  margin: 0 auto 1.25rem;
  display: table;
}

.about-hero__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.1;
}

.about-hero__title.gradient-text {
  background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-underline {
  width: 60px;
  height: 4px;
  background: #2563eb;
  margin: 0.75rem 0 1.5rem;
  border-radius: 2px;
}

.about-hero__desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.7;
  margin: 0 0 2.5rem;
}

/* STATS */
.stats-grid {
  display: flex;
  gap: 1.25rem;
  margin-top: 2rem;
}

.stat-card {
  flex: 1;
  min-width: 140px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #ffffff;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

.stat-card__icon-wrapper {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.08);
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-card__icon-wrapper svg {
  width: 20px;
  height: 20px;
}

.stat-card__text {
  display: flex;
  flex-direction: column;
}

.stat-card__number {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
}

.stat-card__label {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
  line-height: 1.2;
}

/* HERO IMAGE COL */
.hero-image-col {
  flex: 1;
  position: relative;
}

.decor-dot-grid {
  position: absolute;
  top: -1.75rem;
  left: -1.75rem;
  width: 90px;
  height: 90px;
  z-index: 0;
  background-image: radial-gradient(#2563eb 2px, transparent 2px);
  background-size: 10px 10px;
  opacity: 0.35;
}

.decor-l-shape {
  position: absolute;
  top: -1.25rem;
  right: -1.25rem;
  width: 100px;
  height: 100px;
  background: #2563eb;
  border-radius: 20px;
  z-index: 0;
}

.office-image-container {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 1.1 / 1;
}

.office-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.quote-overlay-box {
  position: absolute;
  bottom: -2rem;
  right: -1rem;
  width: calc(100% - 2rem);
  max-width: 280px;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.04);
  text-align: left;
  z-index: 2;
}

.quote-icon-wrapper {
  color: #2563eb;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.quote-icon-wrapper svg {
  width: 20px;
  height: 20px;
}

.quote-text {
  font-size: 0.82rem;
  color: #334155;
  line-height: 1.6;
  font-weight: 500;
  margin: 0;
}

.quote-underline {
  width: 30px;
  height: 3px;
  background: #2563eb;
  margin-top: 0.75rem;
  border-radius: 1.5px;
}

/* CORE VALUES */
.core-values {
  padding: 3.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-center-title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 0.75rem;
}

.section-center-desc {
  font-size: 1.05rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 3.5rem;
  line-height: 1.6;
}

.section-center-desc--dark {
  color: rgba(255, 255, 255, 0.6);
}

.core-values__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.value-card {
  background: #ffffff;
  padding: 3rem 2rem 2.5rem;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.04);
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  text-align: center;
}

.value-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(37,99,235,0.05);
  border-color: rgba(37,99,235,0.15);
}

.value-card__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.value-card__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.06);
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-card__icon svg {
  width: 32px;
  height: 32px;
}

.value-card__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.75rem;
}

.value-card__desc {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.9rem;
  margin: 0;
}

.value-card__underline {
  width: 40px;
  height: 3px;
  background: #2563eb;
  margin: 1.75rem auto 0;
  border-radius: 1.5px;
}

/* OUR TEAM */
.founders-section {
  background: #f8fafc;
  position: relative;
  padding: 3.5rem 0 3rem;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.founders-section__inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 1.5rem;
}

.founders-header {
  margin-bottom: 2rem;
  text-align: center;
}

.founders-section-title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 0.75rem;
}

.founders-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;
}

/* ╔══════════════════════════════════════════════════════╗
   ║           3D FLIP CARD SYSTEM                        ║
   ╚══════════════════════════════════════════════════════╝ */

/* Outer shell — handles reveal animation & perspective */
.founder-card {
  perspective: 1200px;
  height: 430px;
  border-radius: 20px;
  cursor: pointer;
  /* Reveal animation (opacity + translateY) */
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.founder-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Rotating inner layer */
.founder-card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  border-radius: 20px;
}

/* Flip triggers */
.founder-card:hover .founder-card__inner,
.founder-card.is-flipped .founder-card__inner {
  transform: rotateY(180deg);
}

/* Both faces share these base styles */
.founder-card__front,
.founder-card__back {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* ── FRONT FACE ─────────────────────────────────────── */
.founder-card__front {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.founder-card__img-container {
  position: relative;
  width: 100%;
  height: 260px;
  background: radial-gradient(circle at center, #1e3a8a 0%, #0f172a 80%);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;
}

.founder-card__img-bg-shape {
  position: absolute;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  bottom: -20px;
  border-radius: 50%;
}

.founder-card__portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 10%;
  z-index: 1;
  transition: transform 0.5s ease;
}

.founder-card:hover .founder-card__portrait {
  transform: scale(1.05);
}

/* Card body on front face */
.founder-card__body {
  padding: 1.1rem 1.4rem 1.25rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  background: #ffffff;
}

.founder-card__name-text {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.4rem;
  word-break: break-word;
  line-height: 1.3;
}

.founder-card__role-tag {
  display: inline-block;
  font-size: 0.58rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.2);
  padding: 0.2rem 0.65rem;
  border-radius: 99px;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.founder-card__socials-row {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  margin-bottom: 0.6rem;
}

.founder-card__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.03);
  color: #64748b;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  text-decoration: none;
}

.founder-card__social-link svg {
  width: 13px;
  height: 13px;
}

.founder-card__social-link:hover {
  color: #ffffff;
  background: #2563eb;
  border-color: #2563eb;
  transform: scale(1.12);
}

/* Flip hint label */
.founder-card__flip-hint {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.04em;
  margin-top: 0.2rem;
  transition: color 0.2s ease;
}

.founder-card__flip-hint svg {
  width: 11px;
  height: 11px;
  transition: transform 0.35s ease;
}

.founder-card:hover .founder-card__flip-hint {
  color: #2563eb;
}

.founder-card:hover .founder-card__flip-hint svg {
  transform: rotate(180deg);
}

/* ── BACK FACE ──────────────────────────────────────── */
.founder-card__back {
  transform: rotateY(180deg);
  background-size: cover;
  background-position: center 10%;
  background-repeat: no-repeat;
}

.founder-card__back-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(18, 18, 22, 0.45) 0%,
    rgba(18, 18, 22, 0.78) 50%,
    rgba(12, 12, 16, 0.97) 100%
  );
  display: flex;
  align-items: stretch;
}

.founder-card__back-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.75rem 1.5rem 1.5rem;
  width: 100%;
}

.founder-back__name {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.4rem;
  line-height: 1.2;
}

.founder-back__role-tag {
  display: inline-block;
  font-size: 0.58rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.65rem;
  border-radius: 99px;
  font-weight: 700;
}

.founder-back__divider {
  width: 36px;
  height: 2px;
  background: linear-gradient(90deg, #2563eb, transparent);
  margin: 0.85rem 0;
  border-radius: 1px;
}

.founder-back__skill-label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 0.6rem;
}

.founder-back__skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.skill-tag {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 99px;
  background: rgba(37, 99, 235, 0.22);
  border: 1px solid rgba(96, 165, 250, 0.35);
  color: #93c5fd;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.skill-tag:hover {
  background: rgba(37, 99, 235, 0.45);
  border-color: rgba(96, 165, 250, 0.65);
}

.founder-back__socials {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.9rem;
}

.founder-card__social-link--back {
  background: rgba(255, 255, 255, 0.08) !important;
  color: rgba(255, 255, 255, 0.7) !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
}

.founder-card__social-link--back:hover {
  background: #2563eb !important;
  color: #ffffff !important;
  border-color: #2563eb !important;
}

/* Flip-back button on the back face */
.founder-back__flip-back {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.65rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 99px;
  padding: 0.3rem 0.85rem;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.05em;
}

.founder-back__flip-back svg {
  width: 11px;
  height: 11px;
}

.founder-back__flip-back:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.08);
}
/* ══════════════════════════════════════════════════════ */

.reveal-row {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
}
.reveal-row.visible {
  opacity: 1;
  transform: translateY(0);
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 1024px) {
  .hero-layout {
    flex-direction: column;
    gap: 3.5rem;
  }
  .hero-content {
    text-align: center;
  }
  .title-underline {
    margin: 0.75rem auto 1.5rem;
  }
  .stats-grid {
    justify-content: center;
  }
  .hero-image-col {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }
  .quote-overlay-box {
    bottom: -1.5rem;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
  .founders-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .founder-card {
    height: 400px;
  }
  .founder-card__img-container {
    height: 230px;
  }
}

@media (max-width: 768px) {
  .founders-section {
    padding: 4rem 0 3.5rem;
  }
  .founders-section__inner {
    padding: 0 1rem;
  }
  .founders-section-title {
    font-size: 2rem;
  }
  .founders-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .founder-card {
    height: 380px;
  }
  .founder-card__img-container {
    height: 200px;
  }
  .founder-card__name-text {
    font-size: 0.9rem;
  }
  .core-values__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .value-card {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .founders-section {
    padding: 3rem 0 3rem;
  }
  .founders-section-title {
    font-size: 1.6rem;
    letter-spacing: 0.02em;
  }
  .founders-header {
    margin-bottom: 2rem;
  }
  .founders-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }
  /* On mobile: tap to flip (.is-flipped), disable CSS :hover flip */
  .founder-card {
    height: 420px;
    max-width: 340px;
    width: 100%;
    margin: 0 auto;
  }
  .founder-card:hover:not(.is-flipped) .founder-card__inner {
    transform: none;
  }
  .founder-card.is-flipped .founder-card__inner {
    transform: rotateY(180deg);
  }
  .founder-card__img-container {
    height: 250px;
  }
  .stats-grid {
    flex-direction: column;
    align-items: stretch;
  }
  .stat-card {
    width: 100%;
    min-width: 0;
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
