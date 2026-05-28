<template>
  <section class="partner-section" :class="variant === 'dark' ? 'partner-section--light' : ''">
    <div class="container">
      <p class="partner-section__label reveal">{{ $t('partner.label') }}</p>
      <!-- Marquee Track -->
      <div class="partner-section__track-wrapper">
        <div class="partner-section__track">
          <PartnerLogo
            v-for="partner in [...partners, ...partners]"
            :key="partner.name + Math.random()"
            :name="partner.name"
            :image="partner.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PartnerLogo from '@/components/ui/PartnerLogo.vue'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  variant: { type: String, default: 'light' },
})

const partners = [
  { name: 'BCA', image: '/partner/bca.png' },
  { name: 'BNI', image: '/partner/bni.png' },
  { name: 'CIMB Niaga', image: '/partner/cimb.png' },
  { name: 'KOMDIGI', image: '/partner/komdigi.png' },
  { name: 'Mandiri', image: '/partner/mandiri.png' },
  { name: 'NASA', image: '/partner/nasa.png' },
  { name: 'Telkom Indonesia', image: '/partner/telkom.png' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(el => el.isIntersecting && el.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.partner-section .reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.partner-section {
  padding: var(--space-4xl) 0;
  background: var(--color-surface);
  overflow: hidden;
}

.partner-section--light {
  background: var(--color-surface-2);
}

.partner-section__label {
  text-align: center;
  font-family: var(--font-heading);
  font-size: 1.75rem; /* Large title size */
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-text-primary); /* Darker color */
  margin-bottom: var(--space-3xl);
  text-transform: uppercase;
}

/* Marquee */
.partner-section__track-wrapper {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%);
}

.partner-section__track {
  display: flex;
  gap: 10rem; /* Increased gap for 150px logos */
  width: max-content;
  animation: marquee 40s linear infinite; /* Even slower for huge logos */
}

.partner-section__track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
