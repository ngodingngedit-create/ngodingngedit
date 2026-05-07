<template>
  <section class="hero" id="beranda">
    <!-- Animated Grid Background -->
    <div class="hero__bg" aria-hidden="true">
      <video autoplay muted loop playsinline class="hero__video">
        <source src="/kantor/kantor.mp4" type="video/mp4" />
      </video>
      <div class="hero__overlay"></div>
      <div class="hero__grid"></div>
    </div>

    <div class="container hero__content">
      <!-- Headline -->
      <h1 class="hero__title animate-fade-in-up" style="animation-delay:0.25s">
        Bangun Ekosistem Digital<br class="br-desktop"/>
        Masa Depan dengan<br/>
        <span class="hero__title-highlight">Presisi Teknikal</span>
      </h1>

      <!-- Subtitle -->
      <p class="hero__subtitle animate-fade-in-up" style="animation-delay:0.4s">
        Kami menghadirkan solusi perangkat lunak dan desain kreatif yang dirancang khusus untuk menjaga level pertumbuhan bisnis Anda di era digital.
      </p>

      <!-- CTA Buttons -->
      <div class="hero__actions animate-fade-in-up" style="animation-delay:0.55s">
        <a href="#contact" class="btn btn-primary hero__btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.71 16.92z"/>
          </svg>
          Konsultasi Gratis
        </a>
        <a href="#portfolio" class="btn btn-outline">
          Lihat Portfolio
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

      <!-- Stats Row -->
      <div class="hero__stats animate-fade-in-up" style="animation-delay:0.7s">
        <div class="hero__stat" v-for="stat in stats" :key="stat.label">
          <span class="hero__stat-value">{{ stat.value }}</span>
          <span class="hero__stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '150+', label: 'Proyek Selesai' },
  { value: '98%', label: 'Klien Puas' },
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '24/7', label: 'Dukungan Aktif' },
]

</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, var(--color-bg-dark) 0%, #0d1b36 50%, #0A1628 100%);
  overflow: hidden;
  padding-top: var(--navbar-height);
}

/* Background */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 22, 40, 0.9),
    rgba(10, 22, 40, 0.7) 50%,
    rgba(10, 22, 40, 0.9)
  );
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(37, 99, 235, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 75%);
}



/* Content */
.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  padding-top: var(--space-4xl);
  padding-bottom: var(--space-4xl);
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 6vw, 4rem);
  font-weight: 800;
  color: white;
  line-height: 1.12;
  letter-spacing: -0.02em;
  max-width: 820px;
}

.hero__title-highlight {
  background: linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.br-desktop { display: block; }

.hero__subtitle {
  color: var(--color-text-light-muted);
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.75;
  max-width: 580px;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
  justify-content: center;
}

.hero__btn-primary {
  padding: 0.875rem 2rem;
  font-size: 1rem;
  border-radius: var(--radius-btn);
  animation: pulse-glow 2.5s ease-in-out infinite;
}

/* Stats */
.hero__stats {
  display: flex;
  align-items: center;
  gap: var(--space-3xl);
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
  justify-content: center;
}

.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.hero__stat-value {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.03em;
}

.hero__stat-label {
  font-size: 0.8125rem;
  color: var(--color-text-light-muted);
  font-weight: 500;
}


/* Responsive */
@media (max-width: 768px) {
  .hero__title { font-size: clamp(2rem, 8vw, 2.75rem); }
  .br-desktop { display: none; }
  .hero__stats { gap: var(--space-xl); }
  .hero__stat-value { font-size: 1.5rem; }
}

@media (max-width: 480px) {
  .hero__actions { flex-direction: column; width: 100%; }
  .hero__actions .btn { width: 100%; justify-content: center; }
  .hero__stats { gap: var(--space-lg); }
}
</style>
