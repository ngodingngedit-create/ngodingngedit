<template>
  <article class="portfolio-card reveal-scale" :style="{ animationDelay: `${delay}s` }">
    <!-- Image -->
    <div class="portfolio-card__img-wrap">
      <img :src="image" :alt="title" class="portfolio-card__img" loading="lazy" />
      <span class="portfolio-card__category">{{ category }}</span>
    </div>

    <!-- Info -->
    <div class="portfolio-card__info">
      <div class="portfolio-card__text-content">
        <h3 class="portfolio-card__title">{{ title }}</h3>
        <p class="portfolio-card__desc">{{ description }}</p>
      </div>
      
      <div class="portfolio-card__footer-content">
        <div class="portfolio-card__tags">
          <span
            v-for="tag in tags"
            :key="tag"
            class="portfolio-card__tag"
          >{{ tag }}</span>
        </div>

        <!-- Action Button (Lihat Detail) -->
        <div class="portfolio-card__action">
          <router-link to="/portofoliodetail" class="portfolio-card__btn-detail">
            View Details
          </router-link>
        </div>
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
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px; /* Fixed to 8px rounded corners */
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all var(--transition-base);
  height: 100%;
  box-shadow: var(--shadow-sm);
}

.portfolio-card:hover {
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(63, 114, 175, 0.15);
  transform: translateY(-6px);
}

/* Image Wrapper */
.portfolio-card__img-wrap {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background-color: var(--color-surface);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.portfolio-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.portfolio-card:hover .portfolio-card__img {
  transform: scale(1.04);
}

/* Category Badge (Floating top-left corner) */
.portfolio-card__category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #2563EB; /* Vivid Blue */
  color: white;
  font-size: 0.65rem; /* Shrunk for compact card */
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem; /* Compact padding */
  border-radius: 8px; /* Fixed to 8px rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  transition: background-color var(--transition-fast);
}

.portfolio-card:hover .portfolio-card__category {
  background: #1D4ED8;
}

/* Card Info Box */
.portfolio-card__info {
  flex-grow: 1;
  padding: 1.15rem 1.25rem; /* Shrunk padding for compact alignment */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Perfect vertical alignment */
  gap: 0.75rem;
  text-align: left;
}

.portfolio-card__text-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.portfolio-card__title {
  font-family: var(--font-heading);
  font-size: 1.125rem; /* Compact title size */
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
  line-height: 1.35;
}

.portfolio-card__desc {
  font-size: 0.825rem; /* Compact description size */
  color: var(--color-text-muted);
  line-height: 1.5;
  margin: 0;
}

.portfolio-card__footer-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto; /* Pushes the card footer to the bottom */
}

/* Tech Tags */
.portfolio-card__tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.portfolio-card__tag {
  display: inline-block;
  padding: 0.25rem 0.65rem; /* Compact tags */
  border-radius: 8px; /* Fixed to 8px rounded corners */
  background: rgba(37, 99, 235, 0.08); /* Soft Light Blue */
  color: #2563EB; /* Bold Blue */
  font-size: 0.7rem; /* Shrunk font */
  font-weight: 600;
  transition: all var(--transition-fast);
}

.portfolio-card__tag:hover {
  background: rgba(37, 99, 235, 0.15);
  color: #1D4ED8;
}

/* Centered Lihat Detail Button */
.portfolio-card__action {
  width: 100%;
}

.portfolio-card__btn-detail {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* Spans full width */
  padding: 0.55rem 1.25rem; /* Shrunk padding */
  border: 1.5px solid #2563EB; /* Blue Border */
  border-radius: 8px; /* Fixed to 8px rounded corners */
  color: #2563EB; /* Vivid Blue color */
  font-size: 0.825rem; /* Compact button size */
  font-weight: 700;
  transition: all var(--transition-base);
  background: transparent;
  text-decoration: none;
}

.portfolio-card__btn-detail:hover {
  background: #2563EB;
  color: white;
  box-shadow: var(--shadow-btn);
  transform: translateY(-2px);
}

/* Responsive Overrides */
@media (max-width: 768px) {
  .portfolio-card__info {
    padding: 1.25rem;
    gap: 0.75rem;
  }
  
  .portfolio-card__title {
    font-size: 1.2rem;
  }

  .portfolio-card__btn-detail {
    padding: 0.65rem 1.5rem;
  }
}
</style>

