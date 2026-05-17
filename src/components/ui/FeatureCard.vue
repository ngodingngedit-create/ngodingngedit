<template>
  <div class="feature-card reveal" :style="{ animationDelay: `${delay}s` }" @mousemove="onMouseMove" @mouseleave="onMouseLeave" ref="cardRef">
    <!-- Aceternity-style dynamic border glow -->
    <div class="feature-card__border-glow"></div>
    
    <!-- Aceternity-style dynamic background glow -->
    <div class="feature-card__bg-glow"></div>

    <div class="feature-card__content">
      <div class="feature-card__icon-wrap">
        <div class="feature-card__icon" v-html="icon"></div>
      </div>
      <h3 class="feature-card__title">{{ title }}</h3>
      <p class="feature-card__desc">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  delay: { type: Number, default: 0 },
})

const cardRef = ref(null)

function onMouseMove(e) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  cardRef.value.style.setProperty('--mouse-x', `${x}px`)
  cardRef.value.style.setProperty('--mouse-y', `${y}px`)
}

function onMouseLeave() {
  if (!cardRef.value) return
  // Reset or just let opacity handle it
}
</script>

<style scoped>
.feature-card {
  position: relative;
  background: rgba(255, 255, 255, 0.01);
  border-radius: var(--radius-card);
  transition: all var(--transition-base);
  cursor: default;
  padding: 1px; /* Space for the border glow */
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -8px rgba(37, 99, 235, 0.1);
}

/* Magic Border Glow (follows mouse) */
.feature-card__border-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    400px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(63, 114, 175, 0.8),
    rgba(219, 226, 239, 0.4),
    transparent 40%
  );
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .feature-card__border-glow {
  opacity: 1;
}

/* Magic Background Glow (follows mouse inside card) */
.feature-card__bg-glow {
  position: absolute;
  inset: 1px;
  border-radius: calc(var(--radius-card) - 1px);
  background: radial-gradient(
    800px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(37, 99, 235, 0.04),
    transparent 40%
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.feature-card:hover .feature-card__bg-glow {
  opacity: 1;
}

/* Inner Content Area */
.feature-card__content {
  position: relative;
  z-index: 2;
  background: #ffffff;
  border-radius: calc(var(--radius-card) - 1px);
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  height: 100%;
}

.feature-card__icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, rgba(63, 114, 175, 0.08), rgba(219, 226, 239, 0.15));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.feature-card:hover .feature-card__icon-wrap {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 10px 20px rgba(63, 114, 175, 0.2);
}

.feature-card__title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.feature-card__desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
}
</style>
