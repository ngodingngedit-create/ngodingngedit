<template>
  <div class="feature-card reveal" :style="{ animationDelay: `${delay}s` }">
    <div class="feature-card__icon-wrap">
      <div class="feature-card__icon" v-html="icon"></div>
    </div>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__desc">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  delay: { type: Number, default: 0 },
})
</script>

<style scoped>
.feature-card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  transition: all var(--transition-base);
  cursor: default;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.feature-card:hover {
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(37, 99, 235, 0.15);
  transform: translateY(-4px);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card__icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(96, 165, 250, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all var(--transition-base);
}

.feature-card:hover .feature-card__icon-wrap {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  transform: scale(1.05);
}

.feature-card__title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.feature-card__desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}
</style>
