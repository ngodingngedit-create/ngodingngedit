<template>
  <main class="howto">
    <section class="howto-hero">
      <div class="howto-hero__bg" aria-hidden="true">
        <div class="howto-hero__grid"></div>
        <div class="howto-hero__orb"></div>
      </div>
      <div class="container howto-hero__inner">
        <h1 class="howto-hero__title animate-fade-in-up">{{ $t('howTo.title') }}</h1>
        <p class="howto-hero__subtitle animate-fade-in-up delay-100">{{ $t('howTo.subtitle') }}</p>
      </div>
    </section>

    <section class="howto-timeline container">
      <div class="timeline-wrap">
        <div class="timeline-line"></div>
        <div 
          v-for="(step, i) in steps" 
          :key="i"
          class="timeline-item reveal"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-num">{{ step.num }}</span>
            <h3 class="timeline-title">{{ step.title }}</h3>
            <p class="timeline-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="howto-cta container reveal delay-200">
      <div class="howto-cta__inner">
        <h2>{{ $t('hero.freeConsultation') }}</h2>
        <a href="#" class="howto-cta__btn" @click.prevent="scrollToHash('#contact')">
          {{ $t('navbar.contactUs') }}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue'
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

onMounted(() => {
  const io = new IntersectionObserver(
    e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.howto {
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* HERO */
.howto-hero {
  position: relative;
  padding: calc(var(--navbar-height, 72px) + 5rem) 2rem 4rem;
  text-align: center;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
@media (max-width: 768px) {
  .howto-hero {
    padding: calc(var(--navbar-height, 64px) + 2.5rem) 1.25rem 2.5rem;
  }
}
.howto-hero__bg {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
}
.howto-hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 75%);
}
.howto-hero__orb {
  position: absolute; width: 400px; height: 400px;
  background: rgba(37,99,235,0.08); border-radius: 50%;
  filter: blur(100px); top: -100px; left: 50%; transform: translateX(-50%);
}
.howto-hero__inner {
  position: relative; z-index: 1;
  max-width: 800px; margin: 0 auto;
}
.howto-hero__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800; color: #0f172a;
  letter-spacing: -0.03em; margin: 0 0 1rem;
}
.howto-hero__subtitle {
  font-size: 1.125rem; color: #64748b; line-height: 1.7;
}

/* TIMELINE */
.howto-timeline {
  padding: 5rem 1rem;
  max-width: 900px; margin: 0 auto;
}
@media (max-width: 768px) {
  .howto-timeline {
    padding: 3rem 1rem;
  }
}
.timeline-wrap {
  position: relative;
}
.timeline-line {
  position: absolute; top: 0; bottom: 0; left: 24px;
  width: 2px; background: rgba(37,99,235,0.15);
}

.timeline-item {
  position: relative;
  display: flex; gap: 2rem;
  margin-bottom: 4rem;
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.timeline-item.visible { opacity: 1; transform: translateY(0); }
.timeline-item:last-child { margin-bottom: 0; }

.timeline-marker {
  position: relative; z-index: 2; flex-shrink: 0;
  width: 50px; height: 50px; border-radius: 50%;
  background: #ffffff; border: 4px solid #2563eb;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
}

.timeline-content {
  background: #ffffff; padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.05);
  flex: 1;
}

.timeline-num {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 3rem; font-weight: 800; color: #2563eb;
  line-height: 1; margin-bottom: 1rem; display: block;
}

.timeline-title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.5rem; font-weight: 700; color: #0f172a;
  margin: 0 0 0.75rem;
}

.timeline-desc {
  font-size: 1rem; color: #475569; line-height: 1.6; margin: 0;
}

/* CTA */
.howto-cta {
  margin-top: 4rem;
}
.howto-cta__inner {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 24px; padding: 4rem 2rem; text-align: center;
  color: white;
}
.howto-cta__inner h2 {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2rem; font-weight: 800; margin-bottom: 2rem;
}
.howto-cta__btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: #2563eb; color: white;
  padding: 1rem 2.5rem; border-radius: 12px;
  font-weight: 700; text-decoration: none;
  transition: all 0.3s ease;
}
.howto-cta__btn:hover {
  background: #1d4ed8; transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37,99,235,0.3);
}

@media (max-width: 768px) {
  .timeline-line { left: 18px; }
  .timeline-marker {
    width: 36px; height: 36px;
    flex-shrink: 0;
  }
  .timeline-item { gap: 1rem; margin-bottom: 2.5rem; }
  .timeline-content { padding: 1.25rem; border-radius: 16px; }
  .timeline-num { font-size: 2rem; margin-bottom: 0.5rem; }
  .timeline-title { font-size: 1.125rem; }
  .timeline-desc { font-size: 0.9375rem; }
  .howto-cta__inner { padding: 2.5rem 1.5rem; border-radius: 18px; }
  .howto-cta__inner h2 { font-size: 1.5rem; margin-bottom: 1.5rem; }
  .howto-cta__btn { width: 100%; justify-content: center; }
}
</style>
