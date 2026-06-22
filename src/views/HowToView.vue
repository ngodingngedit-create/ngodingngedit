<template>
  <main class="howto-page">
    <!-- HERO HEADER -->
    <section class="howto-hero">
      <div class="howto-hero__bg" aria-hidden="true">
        <div class="howto-hero__grid"></div>
        <div class="howto-hero__orb"></div>
      </div>
      <div class="container howto-hero__inner">
        <span class="section-subtitle-pill animate-fade-in-up">
          {{ $t('howTo.title') === 'How We Work' ? 'OUR WORKFLOW' : 'ALUR KERJA KAMI' }}
        </span>
        <h1 class="howto-hero__title gradient-text animate-fade-in-up delay-100">
          {{ $t('howTo.title') }}
        </h1>
        <p class="howto-hero__subtitle animate-fade-in-up delay-200">
          {{ $t('howTo.subtitle') }}
        </p>
      </div>
    </section>

    <!-- CONTENT GRID SECTION -->
    <section class="howto-content container">
      <div class="howto-grid">
        <div 
          v-for="(step, i) in steps" 
          :key="i"
          class="step-card reveal"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="step-card__top">
            <span class="step-number">{{ step.num }}</span>
            <div class="step-icon-wrapper">
              <!-- Step 01: Consultation -->
              <svg v-if="i === 0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="step-icon">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="8" y1="10" x2="16" y2="10"></line>
                <line x1="8" y1="14" x2="12" y2="14"></line>
              </svg>
              <!-- Step 02: UI/UX Design -->
              <svg v-else-if="i === 1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="step-icon">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 5.5 16 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"></path>
                <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"></circle>
                <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"></circle>
                <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"></circle>
                <path d="M6 16c2-3 6-3 8 0"></path>
              </svg>
              <!-- Step 03: Development -->
              <svg v-else-if="i === 2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="step-icon">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                <line x1="14" y1="4" x2="10" y2="20"></line>
              </svg>
              <!-- Step 04: QA -->
              <svg v-else-if="i === 3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="step-icon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 11 11 13 15 9"></polyline>
              </svg>
              <!-- Step 05: Launch -->
              <svg v-else-if="i === 4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="step-icon">
                <path d="M22 2l-7 4-9 9 3 3 9-9 4-7z"></path>
                <path d="M22 2a11.9 11.9 0 0 0-6 6"></path>
                <path d="M9 15l-4 3-2-2 3-4L9 15z"></path>
                <path d="M15 9l-4 3 2 2 3-4-1-1z"></path>
                <path d="M3 21l2-2m-2 2h4m-4 0v-4"></path>
              </svg>
            </div>
          </div>
          <div class="step-card__body">
            <h3 class="step-card__title">{{ step.title }}</h3>
            <p class="step-card__desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="howto-cta container reveal">
      <div class="howto-cta__inner">
        <h2 class="howto-cta__title">{{ $t('hero.freeConsultation') }}</h2>
        <p class="howto-cta__desc">
          {{ $t('howTo.title') === 'How We Work' 
            ? 'Ready to bring your digital vision to life? Let’s schedule a brief consultation call to discuss your goals.'
            : 'Siap untuk mewujudkan visi digital Anda? Mari jadwalkan sesi konsultasi singkat untuk mendiskusikan tujuan Anda.'
          }}
        </p>
        <a href="#" class="howto-cta__btn" @click.prevent="scrollToHash('#contact')">
          {{ $t('navbar.contactUs') }}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cta-btn-icon"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { tm } = useI18n()
const steps = computed(() => tm('howTo.steps'))

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

let revealObserver = null

onMounted(() => {
  // Intersection Observer for scroll animation reveal
  revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
})

onUnmounted(() => {
  if (revealObserver) {
    revealObserver.disconnect()
  }
})
</script>

<style scoped>
.howto-page {
  background: var(--color-surface, #f8fafc);
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* HERO SECTION */
.howto-hero {
  position: relative;
  padding: calc(var(--navbar-height, 72px) + 5rem) 2rem 5rem;
  text-align: center;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.howto-hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.howto-hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(37, 99, 235, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 75%);
}

.howto-hero__orb {
  position: absolute;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(37, 99, 235, 0) 70%);
  border-radius: 50%;
  filter: blur(80px);
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
}

.howto-hero__inner {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-subtitle-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 1.2rem;
  border-radius: var(--radius-full, 9999px);
  background: rgba(37, 99, 235, 0.08);
  color: var(--color-primary, #2563eb);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid rgba(37, 99, 235, 0.15);
  margin-bottom: 1.5rem;
  font-family: var(--font-sans, sans-serif);
}

.howto-hero__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.25rem, 5.5vw, 3.5rem);
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.03em;
  margin: 0 0 1.25rem;
  line-height: 1.15;
}

.gradient-text {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e1b4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.howto-hero__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: var(--color-text-muted, #64748b);
  line-height: 1.7;
  max-width: 620px;
  margin: 0;
}

/* CONTENT GRID SECTION */
.howto-content {
  padding-top: 5rem;
  padding-bottom: 3rem;
}

.howto-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

/* CARD DESIGN */
.step-card {
  background: var(--color-surface-3, #ffffff);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  display: flex;
  flex-direction: column;
  width: calc((100% - 4rem) / 3); /* Exactly 3 columns on desktop */
  min-width: 300px;
  box-sizing: border-box;
}

.step-card:hover {
  transform: translateY(-6px);
  border-color: rgba(37, 99, 235, 0.3);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.08);
}

.step-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75rem;
}

.step-number {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2.25rem;
  font-weight: 800;
  color: rgba(37, 99, 235, 0.15);
  line-height: 1;
  transition: color 0.3s ease;
}

.step-card:hover .step-number {
  color: rgba(37, 99, 235, 0.3);
}

.step-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--color-primary, #2563eb);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.step-icon {
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease;
}

.step-card:hover .step-icon-wrapper {
  background: var(--color-primary, #2563eb);
  color: #ffffff;
}

.step-card:hover .step-icon {
  transform: scale(1.1);
}

.step-card__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.85rem;
  letter-spacing: -0.01em;
}

.step-card__desc {
  font-family: var(--font-sans, sans-serif);
  font-size: 0.98rem;
  color: #475569;
  line-height: 1.65;
  margin: 0;
}

/* CTA SECTION */
.howto-cta {
  margin-top: 5rem;
}

.howto-cta__inner {
  background: linear-gradient(135deg, var(--color-primary, #2563eb) 0%, var(--color-primary-dark, #0548d9) 100%);
  border-radius: 32px;
  padding: 5rem 3rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.howto-cta__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.howto-cta__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(1.8rem, 4.5vw, 2.5rem);
  font-weight: 800;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.howto-cta__desc {
  font-family: var(--font-sans, sans-serif);
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.65;
  max-width: 600px;
  margin: 0 auto 2.5rem;
}

.howto-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  color: var(--color-primary, #2563eb);
  padding: 1.1rem 2.8rem;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.howto-cta__btn:hover {
  background: #f8fafc;
  color: var(--color-primary-dark, #0548d9);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.cta-btn-icon {
  transition: transform 0.3s ease;
}

.howto-cta__btn:hover .cta-btn-icon {
  transform: translateX(4px);
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 1024px) {
  .howto-grid {
    gap: 1.5rem;
  }
  .step-card {
    width: calc((100% - 1.5rem) / 2); /* 2 columns on tablet */
    padding: 2.25rem;
  }
}

@media (max-width: 768px) {
  .howto-hero {
    padding: calc(var(--navbar-height, 64px) + 3rem) 1.5rem 3.5rem;
  }

  .howto-content {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  .step-card {
    width: 100%; /* 1 column on mobile */
    padding: 2rem;
    border-radius: 20px;
  }

  .howto-cta__inner {
    padding: 3.5rem 2rem;
    border-radius: 24px;
  }
  
  .howto-cta__desc {
    margin-bottom: 2rem;
  }

  .howto-cta__btn {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
  }
}

@media (max-width: 480px) {
  .howto-hero {
    padding: calc(var(--navbar-height, 64px) + 2rem) 1rem 2.5rem;
  }

  .step-card {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .step-card__top {
    margin-bottom: 1.25rem;
  }

  .step-number {
    font-size: 2rem;
  }

  .step-icon-wrapper {
    width: 42px;
    height: 42px;
    border-radius: 10px;
  }

  .step-icon {
    width: 18px;
    height: 18px;
  }

  .step-card__title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  .step-card__desc {
    font-size: 0.92rem;
  }

  .howto-cta__inner {
    padding: 3rem 1.25rem;
    border-radius: 20px;
  }
}
</style>
