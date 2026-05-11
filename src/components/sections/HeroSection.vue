<template>
  <section class="hero" id="beranda">
    <!-- Aceternity-style Spotlight & Grid Background -->
    <div class="hero__bg" aria-hidden="true">
      <video autoplay muted loop playsinline class="hero__video">
        <source src="/kantor/kantor.mp4" type="video/mp4" />
      </video>
      <div class="hero__overlay"></div>
      
      <!-- Animated Spotlight -->
      <div class="hero__spotlight"></div>
      
      <div class="hero__grid"></div>
    </div>

    <div class="container hero__content">
      <!-- Headline with Text Reveal Effect -->
      <h1 class="hero__title">
        <span class="reveal-text" style="--delay: 0.1s">Bangun Ekosistem Digital</span><br class="br-desktop"/>
        <span class="reveal-text" style="--delay: 0.25s">Masa Depan dengan</span><br/>
        <span class="hero__title-highlight reveal-text" style="--delay: 0.4s">Presisi Teknikal</span>
      </h1>

      <!-- Subtitle -->
      <p class="hero__subtitle animate-fade-in-up" style="animation-delay:0.6s">
        Kami menghadirkan solusi perangkat lunak dan desain kreatif yang dirancang khusus untuk menjaga level pertumbuhan bisnis Anda di era digital.
      </p>

      <!-- CTA Buttons with Aceternity-style Shimmer -->
      <div class="hero__actions animate-fade-in-up" style="animation-delay:0.75s">
        
        <!-- Magic Shimmer Button -->
        <a href="#contact" class="magic-btn">
          <span class="magic-btn__glow"></span>
          <span class="magic-btn__content">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.71 16.92z"/>
            </svg>
            Konsultasi Gratis
          </span>
        </a>

        <!-- Minimal Outline Button -->
        <a href="#portfolio" class="outline-btn">
          Lihat Portfolio
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

      <!-- Stats Row -->
      <div class="hero__stats animate-fade-in-up" style="animation-delay:0.9s">
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
  background: #0A1628;
  overflow: hidden;
  padding-top: var(--navbar-height);
}

/* ── BACKGROUND & SPOTLIGHT ────────────────────────────── */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero__video {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.4;
}

.hero__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(10, 22, 40, 0.95), rgba(10, 22, 40, 0.8) 50%, rgba(10, 22, 40, 0.95));
}

.hero__spotlight {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 80vh;
  background: radial-gradient(ellipse at top, rgba(37, 99, 235, 0.35) 0%, rgba(168, 85, 247, 0.15) 30%, transparent 70%);
  animation: spotlight-breathe 8s ease-in-out infinite alternate;
  z-index: 1;
}

@keyframes spotlight-breathe {
  0% { opacity: 0.6; transform: translateX(-50%) scale(1); }
  100% { opacity: 1; transform: translateX(-50%) scale(1.1) translateY(20px); }
}

.hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, transparent 80%);
  z-index: 2;
}

/* ── CONTENT ───────────────────────────────────────────── */
.hero__content {
  position: relative;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  padding-top: var(--space-4xl);
  padding-bottom: var(--space-4xl);
}

/* ── TEXT REVEAL ANIMATION ─────────────────────────────── */
.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 6vw, 4.25rem);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  letter-spacing: -0.02em;
  max-width: 860px;
  margin: 0;
}

.reveal-text {
  display: inline-block;
  opacity: 0;
  transform: translateY(40px) rotateX(-20deg);
  animation: text-reveal-anim 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes text-reveal-anim {
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

.hero__title-highlight {
  background: linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.br-desktop { display: block; }

.hero__subtitle {
  color: #94a3b8;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.75;
  max-width: 600px;
  margin: 0;
}

/* ── BUTTONS (ACETERNITY STYLE) ───────────────────────── */
.hero__actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
}

/* Shimmer / Magic Button */
.magic-btn {
  position: relative;
  display: inline-flex;
  border-radius: 9999px;
  padding: 2px;
  overflow: hidden;
  text-decoration: none;
  background: rgba(15, 23, 42, 0.5);
  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.magic-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 99, 235, 0.4);
}

/* Spinning gradient border */
.magic-btn__glow {
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, transparent 0%, transparent 60%, #60a5fa 80%, #a855f7 100%);
  animation: spin 3s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.magic-btn__content {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0A1628;
  padding: 0.875rem 2rem;
  border-radius: 9999px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
}

/* Minimal Outline Button */
.outline-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.875rem 2rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.03);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.outline-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* ── STATS ────────────────────────────────────────────── */
.hero__stats {
  display: flex;
  align-items: center;
  gap: var(--space-3xl);
  padding-top: var(--space-2xl);
  margin-top: var(--space-md);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
  justify-content: center;
}

.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.hero__stat-value {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
}

.hero__stat-label {
  font-size: 0.8125rem;
  color: #94a3b8;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 768px) {
  .hero__title { font-size: clamp(2.25rem, 8vw, 3rem); }
  .br-desktop { display: none; }
  .hero__stats { gap: var(--space-xl); }
}

@media (max-width: 480px) {
  .hero__actions { flex-direction: column; width: 100%; gap: 1rem; }
  .magic-btn, .outline-btn { width: 100%; }
  .magic-btn__content, .outline-btn { width: 100%; justify-content: center; }
  .hero__stats { gap: var(--space-lg); }
}
</style>
