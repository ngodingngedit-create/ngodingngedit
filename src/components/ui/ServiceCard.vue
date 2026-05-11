<template>
  <article class="service-card" :style="{ '--delay': `${delay}s` }">
    <!-- Top accent bar animated on hover -->
    <div class="service-card__accent" aria-hidden="true"></div>

    <!-- Icon -->
    <div class="service-card__icon-wrap" aria-hidden="true">
      <span class="service-card__icon" v-html="icon"></span>
    </div>

    <!-- Body -->
    <div class="service-card__body">
      <h3 class="service-card__title">{{ title }}</h3>
      <p class="service-card__desc">{{ description }}</p>
    </div>

    <!-- Footer -->
    <footer class="service-card__footer">
      <!-- Price badge -->
      <div class="service-card__price-wrap">
        <span class="service-card__price-label">Mulai dari</span>
        <strong class="service-card__price">{{ price }}</strong>
      </div>

      <!-- CTA arrow -->
      <a :href="ctaHref" class="service-card__cta" :aria-label="`Pesan ${title}`">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  /** SVG markup string for the service icon */
  icon:        { type: String,  required: true },
  title:       { type: String,  required: true },
  description: { type: String,  required: true },
  /** Display price string, e.g. "Rp 1.500.000" */
  price:       { type: String,  required: true },
  /** Where the CTA arrow links to (default: contact anchor) */
  ctaHref:     { type: String,  default:  '#contact' },
  /** Stagger delay index (seconds) */
  delay:       { type: Number,  default:  0 },
})
</script>

<style scoped>
/* ─── Card shell ──────────────────────────────────────────── */
.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg, 1.25rem);
  background: white;
  border: 1px solid var(--color-border, #e2e8f0);
  border-radius: var(--radius-card, 1rem);
  padding: 2rem;
  overflow: hidden;
  cursor: default;
  height: 100%;

  /* Entrance animation */
  opacity: 0;
  transform: translateY(24px);
  animation: card-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s) forwards;

  /* Smooth hover transitions */
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

@keyframes card-in {
  to { opacity: 1; transform: translateY(0); }
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: rgba(37, 99, 235, 0.2);
  box-shadow:
    0 4px 6px -1px rgba(0,0,0,0.05),
    0 20px 40px -8px rgba(37, 99, 235, 0.15);
}

/* ─── Top accent bar ─────────────────────────────────────── */
.service-card__accent {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary, #2563eb), var(--color-accent, #818cf8));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.service-card:hover .service-card__accent {
  transform: scaleX(1);
}

/* ─── Icon ───────────────────────────────────────────────── */
.service-card__icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md, 0.75rem);
  background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(129,140,248,0.12));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary, #2563eb);
  flex-shrink: 0;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.service-card:hover .service-card__icon-wrap {
  background: linear-gradient(135deg, var(--color-primary, #2563eb), #818cf8);
  color: white;
  transform: scale(1.08) rotate(-3deg);
}

.service-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── Body ───────────────────────────────────────────────── */
.service-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm, 0.5rem);
}

.service-card__title {
  font-family: var(--font-heading, 'Inter', system-ui, sans-serif);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary, #0f172a);
  line-height: 1.3;
  margin: 0;
  letter-spacing: -0.01em;
}

.service-card__desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--color-text-secondary, #64748b);
  margin: 0;
}

/* ─── Footer ─────────────────────────────────────────────── */
.service-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-md, 1rem);
  border-top: 1px solid var(--color-border, #e2e8f0);
  gap: 1rem;
}

.service-card__price-wrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.service-card__price-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-secondary, #64748b);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.service-card__price {
  font-family: var(--font-heading, 'Inter', system-ui, sans-serif);
  font-size: 1.1875rem;
  font-weight: 800;
  color: var(--color-primary, #2563eb);
  letter-spacing: -0.02em;
}

/* ─── CTA arrow button ───────────────────────────────────── */
.service-card__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.08);
  color: var(--color-primary, #2563eb);
  text-decoration: none;
  flex-shrink: 0;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.service-card__cta:hover {
  background: var(--color-primary, #2563eb);
  color: white;
  transform: translateX(3px);
}
</style>
