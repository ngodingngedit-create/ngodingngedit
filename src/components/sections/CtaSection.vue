<template>
  <section class="cta-section" id="contact">
    <div class="cta-section__bg" aria-hidden="true">
      <div class="cta-section__orb cta-section__orb--1"></div>
      <div class="cta-section__orb cta-section__orb--2"></div>
      <div class="cta-section__grid"></div>
    </div>

    <div class="container cta-section__content">
      <div class="cta-section__text">
        <div class="badge badge-primary reveal" style="margin-bottom: var(--space-lg);">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="4"/></svg>
          MULAI SEKARANG
        </div>
        <h2 class="cta-section__title reveal delay-100">
          Siap Memulai Revolusi<br/>Digital Anda?
        </h2>
        <p class="cta-section__subtitle reveal delay-200">
          Mari diskusikan bagaimana kami dapat membantu mewujudkan visi dan teknologi Anda menjadi nilai yang luar biasa.
        </p>
      </div>

      <div class="cta-section__action reveal delay-300">
        <a href="mailto:hello@ngodingngedit.id" class="btn cta-section__btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Hubungi Kami Sekarang
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
        <p class="cta-section__note">Respons dalam &lt; 24 jam · Konsultasi gratis</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(el => el.isIntersecting && el.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.cta-section .reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.cta-section {
  position: relative;
  background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #2563eb 70%, #1e40af 100%);
  padding: var(--space-4xl) 0;
  overflow: hidden;
}

/* Background elements */
.cta-section__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-section__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.cta-section__orb--1 {
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.08);
  top: -100px;
  right: -80px;
}

.cta-section__orb--2 {
  width: 300px;
  height: 300px;
  background: rgba(96, 165, 250, 0.12);
  bottom: -60px;
  left: -40px;
}

.cta-section__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* Content */
.cta-section__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3xl);
}

.cta-section__text {
  flex: 1;
}

.cta-section__title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  margin-bottom: var(--space-lg);
}

.cta-section__subtitle {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.0625rem;
  line-height: 1.7;
  max-width: 480px;
}

/* Action */
.cta-section__action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
}

.cta-section__btn {
  background: white;
  color: var(--color-primary-dark);
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: var(--radius-btn);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  transition: all var(--transition-base);
}

.cta-section__btn:hover {
  background: var(--color-bg-dark);
  color: white;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  transform: translateY(-2px);
}

.cta-section__note {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.8125rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .cta-section__content {
    flex-direction: column;
    text-align: center;
    gap: var(--space-2xl);
  }

  .cta-section__subtitle {
    max-width: 100%;
  }

  .cta-section__btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
