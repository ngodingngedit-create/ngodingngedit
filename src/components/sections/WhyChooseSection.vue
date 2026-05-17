<template>
  <section class="why-section section-padding" id="services">
    <div class="container">
      <!-- Header -->
      <div class="why-section__header">
        <h2 class="section-title reveal">Mengapa Memilih Kami?</h2>
        <div class="section-underline reveal delay-100"></div>
        <p class="section-subtitle reveal delay-200">
          Kami menghadirkan keunggulan teknikal dan desain yang mendorong pertumbuhan nyata untuk bisnis Anda.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="why-section__grid">
        <FeatureCard
          v-for="(feature, i) in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          :delay="i * 0.1"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from '@/components/ui/FeatureCard.vue'
import { onMounted } from 'vue'

const features = [
  {
    title: 'Kode Berkualitas',
    description: 'Arsitektur kode yang bersih, terstruktur, dan mudah untuk dikembangkan kembali di masa depan.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>`,
  },
  {
    title: 'Performa Tinggi',
    description: 'Optimisasi kecepatan dan performa penuh sehingga pengguna Anda terlayani tanpa hambatan.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>`,
  },
  {
    title: 'Keamanan Ketat',
    description: 'Implementasi standar keamanan tertinggi untuk melindungi data dan privasi pengguna Anda.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>`,
  },
  {
    title: 'Dukungan 24/7',
    description: 'Tim kami selalu siap membantu Anda mengatasi tantangan teknikal kapanpun Anda membutuhkan.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>`,
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(el => el.isIntersecting && el.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.why-section .reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.why-section {
  background: rgb(243, 243, 243);
}

.why-section__header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.why-section__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

@media (max-width: 1024px) {
  .why-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .why-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
