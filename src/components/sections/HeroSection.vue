<template>
  <section class="hero" id="beranda">
    <!-- Background Accents -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__bg-gradient"></div>
      <div class="hero__grid"></div>
      <div class="hero__geometric-1"></div>
      <div class="hero__geometric-2"></div>
    </div>

    <div class="container hero__container">
      <div class="hero__content-wrapper">
        <!-- Left Column: Text & CTA -->
        <div class="hero__text-side">
          <!-- <div class="hero__badge animate-fade-in-up" style="animation-delay: 0.1s">
            <span class="badge-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </span>
            Digital Solution for Modern Business
          </div> -->

          <h1 class="hero__title">
            <span class="reveal-text" style="--delay: 0.2s">{{ $t('hero.title1') }}</span><br/>
            <span class="reveal-text" style="--delay: 0.35s">{{ $t('hero.title2') }}</span><br/>
            <span class="reveal-text text-royal" style="--delay: 0.5s">{{ $t('hero.title3') }}</span>
          </h1>

          <p class="hero__description animate-fade-in-up" style="animation-delay: 0.7s">
            {{ $t('hero.description') }}
          </p>

          <div class="hero__actions animate-fade-in-up" style="animation-delay: 0.85s">
            <a href="#" class="btn-primary" @click.prevent="scrollToHash('#contact')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.71 16.92z"></path></svg>
              {{ $t('hero.freeConsultation') }}
            </a>
            <a href="#" class="btn-secondary" @click.prevent="scrollToHash('#portfolio')">
              {{ $t('hero.viewPortfolio') }}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Laptop & Floating Icons -->
        <div class="hero__image-side">
          <div class="laptop-wrapper">
            <img src="/hero/laptop (2).png" alt="MacBook Pro SaaS Dashboard" class="hero__laptop animate-float" />
            
            <!-- Floating Glassmorphism Icons -->
            <div class="floating-icon icon-1 animate-float-delayed" style="--delay: 0.5s">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <div class="floating-icon icon-2 animate-float-delayed" style="--delay: 1.2s">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <div class="floating-icon icon-3 animate-float-delayed" style="--delay: 2s">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div class="floating-icon icon-4 animate-float-delayed" style="--delay: 2.8s">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { t } = useI18n()
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
.hero {
  position: relative;
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 80px;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ── BACKGROUND ───────────────────────────────────────── */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.hero__bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.03) 0%, transparent 50%);
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
}

.hero__geometric-1 {
  position: absolute;
  top: 15%;
  right: 10%;
  width: 400px;
  height: 400px;
  border: 1px solid rgba(37, 99, 235, 0.05);
  border-radius: 50%;
  z-index: -1;
}

.hero__geometric-2 {
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(37, 99, 235, 0.03);
  border-radius: 40px;
  transform: rotate(15deg);
  z-index: -1;
}

/* ── CONTAINER & LAYOUT ────────────────────────────────── */
.hero__container {
  position: relative;
  z-index: 1;
}

.hero__content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  margin-bottom: 6rem;
}

/* ── LEFT SIDE ─────────────────────────────────────────── */
.hero__text-side {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: rgba(37, 99, 235, 0.05);
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #2563EB;
  width: fit-content;
}

.badge-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #2563EB;
  color: white;
  border-radius: 50%;
}

.hero__title {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 850;
  line-height: 1.1;
  color: #1E293B;
  letter-spacing: -0.03em;
}

.text-royal {
  color: #2563EB;
}

.reveal-text {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: reveal-anim 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes reveal-anim {
  to { opacity: 1; transform: translateY(0); }
}

.hero__description {
  font-size: 1.125rem;
  color: #64748B;
  max-width: 540px;
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #004cff;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px -5px rgba(0, 76, 255, 0.3);
  overflow: hidden;
  z-index: 1;
}

.btn-primary::before {
  content: "";
  position: absolute;
  top: -150%;
  left: -150%;
  width: 400%;
  height: 400%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    transparent 40%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 60%,
    transparent 100%
  );
  animation: rotate-border 4s linear infinite;
  z-index: -1;
}

.btn-primary::after {
  content: "";
  position: absolute;
  inset: 2px;
  background: #004cff;
  border-radius: 6px;
  z-index: -1;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -5px rgba(0, 76, 255, 0.4);
}

.btn-primary:hover::after {
  background: #0038cc;
}

.btn-secondary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: #1E293B;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

.btn-secondary::before {
  content: "";
  position: absolute;
  top: -150%;
  left: -150%;
  width: 400%;
  height: 400%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    transparent 40%,
    #004cff 50%,
    transparent 60%,
    transparent 100%
  );
  animation: rotate-border 4s linear infinite;
  z-index: -1;
  opacity: 0.5;
}

.btn-secondary::after {
  content: "";
  position: absolute;
  inset: 1px;
  background: white;
  border-radius: 7px;
  z-index: -1;
  transition: background 0.3s ease;
}

.btn-secondary:hover {
  background: #F8FAFC;
  transform: translateY(-2px);
}

@keyframes rotate-border {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ── RIGHT SIDE ────────────────────────────────────────── */
.hero__image-side {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.laptop-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px;
  perspective: 1000px;
}

.hero__laptop {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 30px 60px rgba(0,0,0,0.12));
  transform: rotateY(-5deg) rotateX(2deg);
}

.floating-icon {
  position: absolute;
  width: 54px;
  height: 54px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.07),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  z-index: 2;
  transition: all 0.3s ease;
}

.floating-icon:hover {
  transform: translateY(-5px) scale(1.05);
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.8);
}

.icon-1 { top: -5%; left: 10%; }
.icon-2 { top: 20%; right: -5%; }
.icon-3 { bottom: 15%; left: -8%; }
.icon-4 { bottom: -5%; right: 15%; }

/* ── FEATURE BAR ───────────────────────────────────────── */
.hero__feature-bar {
  display: flex;
  background: white;
  border-radius: 24px;
  padding: 1.5rem;
  gap: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
              0 20px 50px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid #F1F5F9;
  justify-content: space-between;
}

.feature-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 16px;
  transition: background 0.3s ease;
}

.feature-card:hover {
  background: #F8FAFC;
}

.feature-icon {
  width: 32px;
  height: 32px;
  background: #ECFDF5;
  color: #10B981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-text {
  display: flex;
  flex-direction: column;
}

.feature-label {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #1E293B;
}

.feature-status {
  font-size: 0.75rem;
  color: #64748B;
  font-weight: 500;
}

/* ── ANIMATIONS ────────────────────────────────────────── */
.animate-float {
  animation: float-laptop 6s ease-in-out infinite;
}

@keyframes float-laptop {
  0%, 100% { transform: translateY(0) rotateY(-5deg) rotateX(2deg); }
  50% { transform: translateY(-15px) rotateY(-3deg) rotateX(1deg); }
}

.animate-float-delayed {
  animation: float-icon 4s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes float-icon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero__content-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    margin-bottom: 4rem;
  }
  
  .hero__text-side {
    align-items: center;
  }
  
  .hero__description {
    margin: 0 auto;
  }
  
  .hero__actions {
    justify-content: center;
  }

  .hero__feature-bar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .hero__image-side {
    display: none;
  }

  .hero {
    padding-top: 100px;
  }
  
  .hero__title {
    font-size: 2.25rem;
  }
  
  .hero__actions {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .hero__feature-bar {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .floating-icon {
    width: 42px;
    height: 42px;
  }
}
</style>

