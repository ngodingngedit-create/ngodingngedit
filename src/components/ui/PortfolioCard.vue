<template>
  <article class="portfolio-card reveal-scale" :style="{ animationDelay: `${delay}s` }">
    <!-- Image -->
    <div class="portfolio-card__img-wrap">
      <img :src="image" :alt="title" class="portfolio-card__img" loading="lazy" />
      <div class="portfolio-card__overlay">
        <a href="#" class="portfolio-card__view-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Lihat Proyek
        </a>
      </div>
      <span class="portfolio-card__category">{{ category }}</span>
    </div>

    <!-- Info -->
    <div class="portfolio-card__info">
      <h3 class="portfolio-card__title">{{ title }}</h3>
      <p class="portfolio-card__desc">{{ description }}</p>
      <div class="portfolio-card__tags">
        <span
          v-for="tag in tags"
          :key="tag"
          class="portfolio-card__tag"
        >{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, default: () => [] },
  delay: { type: Number, default: 0 },
})
</script>

<style scoped>
.portfolio-card {
  background: white;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all var(--transition-base);
}

.portfolio-card:hover {
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(37, 99, 235, 0.12);
  transform: translateY(-6px);
}

/* Image */
.portfolio-card__img-wrap {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.portfolio-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.portfolio-card:hover .portfolio-card__img {
  transform: scale(1.06);
}

/* Overlay */
.portfolio-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 22, 40, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
  backdrop-filter: blur(4px);
}

.portfolio-card:hover .portfolio-card__overlay {
  opacity: 1;
}

.portfolio-card__view-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.625rem 1.25rem;
  background: white;
  color: var(--color-text-primary);
  border-radius: var(--radius-btn);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all var(--transition-fast);
  transform: translateY(8px);
  opacity: 0;
}

.portfolio-card:hover .portfolio-card__view-btn {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 0.05s;
}

.portfolio-card__view-btn:hover {
  background: var(--color-primary);
  color: white;
}

/* Category badge */
.portfolio-card__category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--color-primary);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-full);
}

/* Info */
.portfolio-card__info {
  padding: var(--space-lg) var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.portfolio-card__title {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.portfolio-card__desc {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
}

.portfolio-card__tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.portfolio-card__tag {
  display: inline-block;
  padding: 0.2rem 0.625rem;
  border-radius: var(--radius-full);
  background: var(--color-surface-3);
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.portfolio-card__tag:hover {
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
}
</style>
