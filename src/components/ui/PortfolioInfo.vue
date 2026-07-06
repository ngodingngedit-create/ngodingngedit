<template>
  <div v-if="details" class="portfolio-info">
    <h2 class="info-title">{{ $t('portfolioDetail.projectInfo') }}</h2>
    <div class="info-grid">
      <div v-if="details.client_name" class="info-item">
        <span class="info-label">{{ $t('portfolioDetail.clientName') }}</span>
        <span class="info-value">{{ details.client_name }}</span>
      </div>
      <div v-if="details.project_date" class="info-item">
        <span class="info-label">{{ $t('portfolioDetail.projectDate') }}</span>
        <span class="info-value">{{ formatDate(details.project_date) }}</span>
      </div>
    </div>

    <div v-if="details.challenge" class="info-block">
      <h3 class="info-block-title challenge">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 9v2m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg>
        {{ $t('portfolioDetail.challenge') }}
      </h3>
      <p class="info-block-text">{{ details.challenge }}</p>
    </div>

    <div v-if="details.solution" class="info-block">
      <h3 class="info-block-title solution">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z"></path>
        </svg>
        {{ $t('portfolioDetail.solution') }}
      </h3>
      <p class="info-block-text">{{ details.solution }}</p>
    </div>

    <div v-if="details.result" class="info-block">
      <h3 class="info-block-title result">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        {{ $t('portfolioDetail.result') }}
      </h3>
      <p class="info-block-text">{{ details.result }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  details: { type: Object, default: null },
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.portfolio-info {
  width: 100%;
}

.info-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 1.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.25rem;
  background: var(--color-surface-2);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.info-label {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.info-value {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.info-block {
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  background: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.info-block:hover {
  border-color: var(--color-primary-light);
  box-shadow: var(--shadow-sm);
}

.info-block-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: var(--color-text-primary);
}

.info-block-title.challenge svg { color: #ef4444; }
.info-block-title.solution svg { color: #22c55e; }
.info-block-title.result svg { color: var(--color-primary); }

.info-block-text {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
