<template>
  <div v-if="technologies.length > 0" class="tech-badges">
    <span
      v-for="tech in technologies"
      :key="tech.id"
      class="tech-badge"
    >
      {{ tech.name }}
    </span>
    <span v-if="technologies.length === 0" class="tech-badge tech-badge--empty">
      {{ $t('portfolioDetail.noTech') }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  technologies: { type: Array, default: () => [] },
})
</script>

<style scoped>
.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-pill);
  background: rgba(37, 99, 235, 0.08);
  color: var(--color-primary);
  font-size: 0.8125rem;
  font-weight: 600;
  transition: all var(--transition-base);
  border: 1px solid rgba(37, 99, 235, 0.12);
}

.tech-badge:hover {
  background: rgba(37, 99, 235, 0.15);
  transform: translateY(-1px);
}

.tech-badge--empty {
  color: var(--color-text-muted);
  background: transparent;
  border-color: var(--color-border);
  font-style: italic;
}
</style>
