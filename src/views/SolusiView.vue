<template>
  <main class="sol">
    <!-- ═══════════════════════════════════════════════ HERO -->
    <section class="sol-hero">
      <div class="sol-hero__bg" aria-hidden="true">
        <div class="sol-hero__grid"></div>
        <div class="sol-hero__orb sol-hero__orb--1"></div>
        <div class="sol-hero__orb sol-hero__orb--2"></div>
        <div class="sol-hero__orb sol-hero__orb--3"></div>
      </div>

      <div class="container sol-hero__inner">
        <div class="sol-hero__heading reveal">
          <span class="sol-badge">
            <svg width="8" height="8" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="4"/></svg>
            {{ t.badge }}
          </span>
          <h1 class="sol-hero__title">
            {{ t.heroTitle1 }}<br/>
            <span class="sol-hero__title-hl">{{ t.heroTitle2 }}</span>
          </h1>
          <p class="sol-hero__sub">{{ t.heroSub }}</p>
        </div>

        <!-- Stats row -->
        <div class="sol-hero__stats reveal delay-100">
          <div v-for="stat in t.stats" :key="stat.value" class="sol-stat">
            <strong class="sol-stat__value">{{ stat.value }}</strong>
            <span class="sol-stat__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════ SOLUTIONS -->
    <section class="sol-solutions" id="solusi">
      <div class="container">
        <!-- Section label -->
        <div class="sol-section-head reveal">
          <h2 class="sol-section-head__title">{{ t.solutionsTitle }}</h2>
          <p class="sol-section-head__sub">{{ t.solutionsSub }}</p>
        </div>

        <!-- Solution cards -->
        <div class="sol-cards">
          <article
            v-for="(sol, i) in solutions"
            :key="sol.id"
            class="sol-card"
            :class="{ 'sol-card--accent': i % 2 !== 0 }"
            @mousemove="handleMove($event, i)"
            @mouseleave="handleLeave(i)"
            :ref="el => setRef(el, i)"
          >
            <div class="sol-card__glow"></div>

            <div class="sol-card__inner">
              <!-- Left: identity -->
              <div class="sol-card__left">
                <div class="sol-card__icon" :class="`sol-card__icon--${sol.color}`">
                  <div v-html="sol.icon"></div>
                </div>
                <span class="sol-badge sol-badge--sm" :class="`sol-badge--${sol.color}`">{{ sol.badge }}</span>
                <h3 class="sol-card__name">{{ sol.name }}</h3>
                <p class="sol-card__desc">{{ sol.desc }}</p>
                <a href="#contact" class="sol-card__cta">
                  {{ t.ctaLabel }}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>

              <!-- Right: process + benefits -->
              <div class="sol-card__right">
                <!-- Process -->
                <div class="sol-card__block">
                  <h4 class="sol-card__block-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {{ t.processLabel }}
                  </h4>
                  <ol class="sol-process">
                    <li v-for="(step, si) in sol.process" :key="si" class="sol-process__step">
                      <span class="sol-process__num">{{ si + 1 }}</span>
                      <span class="sol-process__text">{{ step }}</span>
                    </li>
                  </ol>
                </div>

                <!-- Benefits -->
                <div class="sol-card__block">
                  <h4 class="sol-card__block-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ t.benefitsLabel }}
                  </h4>
                  <ul class="sol-benefits">
                    <li v-for="benefit in sol.benefits" :key="benefit" class="sol-benefit">
                      <span class="sol-benefit__dot" :class="`sol-benefit__dot--${sol.color}`"></span>
                      {{ benefit }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════ CTA BANNER -->
    <section class="sol-cta">
      <div class="container sol-cta__inner">
        <div class="sol-cta__orb sol-cta__orb--1"></div>
        <div class="sol-cta__orb sol-cta__orb--2"></div>
        <div class="sol-cta__content">
          <h2 class="sol-cta__title">{{ t.ctaBannerTitle }}</h2>
          <p class="sol-cta__sub">{{ t.ctaBannerSub }}</p>
        </div>
        <a href="#contact" class="sol-cta__btn">
          {{ t.ctaBannerBtn }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { globalLang as lang } from '@/store.js'

const cardRefs = ref([])

function setRef(el, i) {
  if (el) cardRefs.value[i] = el
}

function handleMove(e, i) {
  const card = cardRefs.value[i]
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

function handleLeave(i) {
  const card = cardRefs.value[i]
  if (!card) return
  card.style.removeProperty('--mouse-x')
  card.style.removeProperty('--mouse-y')
}

const t = computed(() => lang.value === 'id' ? {
  badge: 'Solusi Kami',
  heroTitle1: 'Solusi Digital',
  heroTitle2: 'untuk Bisnis Modern',
  heroSub: 'Dari konsultasi awal hingga peluncuran — kami hadir di setiap langkah untuk memastikan pertumbuhan bisnis Anda.',
  stats: [
    { value: '50+', label: 'Proyek Selesai' },
    { value: '98%', label: 'Kepuasan Klien' },
    { value: '3x', label: 'Lebih Cepat Launch' },
    { value: '24/7', label: 'Dukungan Teknis' },
  ],
  solutionsTitle: 'Tiga Pilar Solusi Kami',
  solutionsSub: 'Setiap solusi dirancang untuk memberikan dampak nyata — dari presence digital hingga konten yang mengkonversi.',
  processLabel: 'Proses Kerja',
  benefitsLabel: 'Manfaat Klien',
  ctaLabel: 'Konsultasi Gratis',
  ctaBannerTitle: 'Siap Memulai Transformasi Digital Anda?',
  ctaBannerSub: 'Ceritakan kebutuhan bisnis Anda. Tim kami siap merancang solusi yang tepat dalam 24 jam.',
  ctaBannerBtn: 'Hubungi Kami Sekarang',
} : {
  badge: 'Our Solutions',
  heroTitle1: 'Digital Solutions',
  heroTitle2: 'for Modern Business',
  heroSub: 'From the first consultation to launch day — we are with you at every step to ensure your business growth.',
  stats: [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '3x', label: 'Faster to Launch' },
    { value: '24/7', label: 'Technical Support' },
  ],
  solutionsTitle: 'Three Pillars of Our Solutions',
  solutionsSub: 'Each solution is designed to create real impact — from digital presence to content that converts.',
  processLabel: 'Our Process',
  benefitsLabel: 'Client Benefits',
  ctaLabel: 'Free Consultation',
  ctaBannerTitle: 'Ready to Start Your Digital Transformation?',
  ctaBannerSub: 'Tell us your business needs. Our team will craft the right solution within 24 hours.',
  ctaBannerBtn: 'Contact Us Now',
})

const solutions = computed(() => lang.value === 'id' ? [
  {
    id: 'web-dev',
    badge: 'NGODING',
    color: 'blue',
    name: 'Pengembangan Website & Aplikasi',
    desc: 'Kami merancang dan membangun website serta aplikasi web yang cepat, responsif, dan skalabel — disesuaikan penuh dengan kebutuhan bisnis Anda.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    process: [
      'Konsultasi & analisis kebutuhan bisnis',
      'Perancangan desain UI/UX & wireframe',
      'Pengembangan & integrasi backend',
      'Quality assurance & testing menyeluruh',
      'Deployment, hosting & serah terima proyek',
    ],
    benefits: [
      'Kehadiran online profesional yang meningkatkan kredibilitas',
      'Website cepat & SEO-friendly untuk traffic organik',
      'Sistem yang skalabel sesuai pertumbuhan bisnis',
      'Maintenance & dukungan teknis pasca-launch',
      'Integrasi WhatsApp, payment gateway & CRM',
    ],
  },
  {
    id: 'content-prod',
    badge: 'NGEDIT',
    color: 'purple',
    name: 'Produksi Konten Kreatif',
    desc: 'Video promosi, motion graphics, dan konten sosial media yang dirancang untuk menarik perhatian, membangun brand, dan mendorong konversi.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
    process: [
      'Brief kreatif & riset target audiens',
      'Konsep visual & storyboard / moodboard',
      'Produksi & editing dengan standar sinematik',
      'Revisi iteratif berdasarkan feedback klien',
      'Pengiriman file dalam format platform-ready',
    ],
    benefits: [
      'Konten yang stand-out di feed dan meningkatkan engagement',
      'Brand identity yang konsisten di semua platform',
      'Video berkualitas tinggi tanpa biaya produksi mahal',
      'Konten siap unggah untuk semua platform sosial media',
      'Peningkatan reach & konversi dari audiens yang tepat',
    ],
  },
  {
    id: 'digital-strategy',
    badge: 'STRATEGI',
    color: 'emerald',
    name: 'Strategi & Infrastruktur Digital',
    desc: 'Lebih dari sekadar produk — kami membantu Anda merancang ekosistem digital yang solid: dari infrastruktur server hingga strategi pertumbuhan jangka panjang.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
    process: [
      'Audit & assessment ekosistem digital saat ini',
      'Perencanaan arsitektur & roadmap teknologi',
      'Setup server, domain, SSL & pipeline CI/CD',
      'Optimasi performa & keamanan sistem',
      'Pelatihan tim & handover dokumentasi lengkap',
    ],
    benefits: [
      'Infrastruktur yang aman, andal & siap skalabel',
      'Pengurangan downtime & risiko keamanan siber',
      'Efisiensi operasional dengan otomatisasi proses',
      'Roadmap teknologi yang selaras dengan tujuan bisnis',
      'Tim internal yang berdaya dengan knowledge transfer',
    ],
  },
] : [
  {
    id: 'web-dev',
    badge: 'CODING',
    color: 'blue',
    name: 'Website & App Development',
    desc: 'We design and build fast, responsive, and scalable websites and web apps — fully tailored to your business requirements.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    process: [
      'Consultation & business needs analysis',
      'UI/UX design & wireframing',
      'Development & backend integration',
      'Comprehensive QA & testing',
      'Deployment, hosting & project handover',
    ],
    benefits: [
      'Professional online presence that builds credibility',
      'Fast & SEO-friendly websites for organic traffic',
      'Scalable systems that grow with your business',
      'Post-launch maintenance & technical support',
      'WhatsApp, payment gateway & CRM integrations',
    ],
  },
  {
    id: 'content-prod',
    badge: 'EDITING',
    color: 'purple',
    name: 'Creative Content Production',
    desc: 'Promo videos, motion graphics, and social media content engineered to grab attention, build your brand, and drive conversions.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
    process: [
      'Creative brief & target audience research',
      'Visual concept & storyboard / moodboard',
      'Production & editing to cinematic standards',
      'Iterative revisions based on client feedback',
      'Delivery in platform-ready formats',
    ],
    benefits: [
      'Feed-stopping content that boosts engagement',
      'Consistent brand identity across all platforms',
      'High-quality video without expensive production costs',
      'Upload-ready content for every social platform',
      'Greater reach & conversions from the right audience',
    ],
  },
  {
    id: 'digital-strategy',
    badge: 'STRATEGY',
    color: 'emerald',
    name: 'Digital Strategy & Infrastructure',
    desc: 'More than a product — we help you architect a solid digital ecosystem: from server infrastructure to long-term growth strategy.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
    process: [
      'Audit & assessment of your current digital ecosystem',
      'Architecture planning & technology roadmap',
      'Server, domain, SSL & CI/CD pipeline setup',
      'Performance optimization & system security hardening',
      'Team training & full documentation handover',
    ],
    benefits: [
      'Secure, reliable & scalable infrastructure',
      'Reduced downtime & cybersecurity risk',
      'Operational efficiency through process automation',
      'Technology roadmap aligned to business goals',
      'An empowered internal team through knowledge transfer',
    ],
  },
])

onMounted(() => {
  const io = new IntersectionObserver(
    e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
/* ══ PAGE BASE ═══════════════════════════════════════════ */
.sol {
  background: #f1f5f9;
  min-height: 100vh;
}

/* ══ BADGE ════════════════════════════════════════════════ */
.sol-badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 0.35rem 1.25rem;
  border-radius: 999px;
  font-size: 0.6875rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--color-primary, #2563eb);
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.2);
}
.sol-badge--sm { font-size: 0.625rem; padding: 0.2rem 0.9rem; }
.sol-badge--blue  { color: #2563eb; background: rgba(37,99,235,0.1);  border-color: rgba(37,99,235,0.2); }
.sol-badge--purple{ color: #a855f7; background: rgba(168,85,247,0.1); border-color: rgba(168,85,247,0.2); }
.sol-badge--emerald{ color: #10b981; background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.2); }

/* ══ HERO ═════════════════════════════════════════════════ */
.sol-hero {
  position: relative;
  min-height: 72vh;
  display: flex; align-items: center;
  padding: calc(var(--navbar-height, 72px) + 3rem) 2rem 5rem;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.sol-hero__bg {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
}
.sol-hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 75%);
}
.sol-hero__orb {
  position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none;
}
.sol-hero__orb--1 { width: 600px; height: 600px; background: rgba(37,99,235,0.08); top: -120px; right: 0; }
.sol-hero__orb--2 { width: 400px; height: 400px; background: rgba(168,85,247,0.07); bottom: -80px; left: 5%; }
.sol-hero__orb--3 { width: 300px; height: 300px; background: rgba(16,185,129,0.05); top: 40%; right: 15%; }

.sol-hero__inner {
  position: relative; z-index: 1;
  display: flex; flex-direction: column; align-items: center;
  gap: 4rem; width: 100%;
}

.sol-hero__heading {
  text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.sol-hero__heading.visible { opacity: 1; transform: translateY(0); }

.sol-hero__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800; color: #0f172a;
  letter-spacing: -0.03em; line-height: 1.08; margin: 0;
}
.sol-hero__title-hl {
  background: linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a855f7 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.sol-hero__sub {
  color: #64748b; font-size: 1.0625rem; line-height: 1.7;
  max-width: 600px; margin: 0 auto;
}

/* Stats */
.sol-hero__stats {
  display: flex; gap: 3rem; justify-content: center; flex-wrap: wrap;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
}
.sol-hero__stats.visible { opacity: 1; transform: translateY(0); }

.sol-stat {
  display: flex; flex-direction: column; align-items: center; gap: 0.25rem;
  padding: 1.25rem 2rem;
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  min-width: 120px;
}
.sol-stat__value {
  font-size: 2rem; font-weight: 800; color: #0f172a;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #2563eb, #a855f7);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.sol-stat__label { font-size: 0.8125rem; color: #64748b; font-weight: 500; text-align: center; }

/* ══ SECTION HEADING ══════════════════════════════════════ */
.sol-section-head {
  text-align: center; margin-bottom: 3.5rem;
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.sol-section-head.visible { opacity: 1; transform: translateY(0); }

.sol-section-head__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800; color: #0f172a;
  letter-spacing: -0.03em; margin: 0 0 0.75rem;
}
.sol-section-head__sub { color: #64748b; font-size: 1rem; line-height: 1.7; margin: 0; }

/* ══ SOLUTIONS SECTION ════════════════════════════════════ */
.sol-solutions {
  padding: 6rem 0;
}

.sol-cards {
  display: flex; flex-direction: column; gap: 2.5rem;
}

.sol-card {
  position: relative;
  border-radius: 24px;
  background: rgba(0,0,0,0.1);
  padding: 1.5px;
  overflow: hidden;
  cursor: default;
  transition: box-shadow 0.4s ease;
}
.sol-card:hover {
  box-shadow: 0 30px 70px rgba(37, 99, 235, 0.1);
}
.sol-card--accent:hover {
  box-shadow: 0 30px 70px rgba(168, 85, 247, 0.1);
}

.sol-card__glow {
  position: absolute; inset: 0; border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--mouse-x, -100px) var(--mouse-y, -100px),
    rgba(37,99,235,0.6),
    rgba(168,85,247,0.3),
    transparent 50%
  );
  opacity: 0; z-index: 0;
  transition: opacity 0.35s;
  pointer-events: none;
}
.sol-card--accent .sol-card__glow {
  background: radial-gradient(
    600px circle at var(--mouse-x, -100px) var(--mouse-y, -100px),
    rgba(168,85,247,0.7),
    rgba(37,99,235,0.3),
    transparent 50%
  );
}
.sol-card:hover .sol-card__glow { opacity: 1; }

.sol-card__inner {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 320px 1fr;
  gap: 3rem;
  padding: 3rem;
  background: #ffffff;
  border-radius: calc(24px - 1.5px);
}

/* Left column */
.sol-card__left {
  display: flex; flex-direction: column; gap: 1.25rem;
  border-right: 1px solid rgba(0,0,0,0.06);
  padding-right: 3rem;
}

.sol-card__icon {
  width: 72px; height: 72px; border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
}
.sol-card__icon--blue   { background: rgba(37,99,235,0.1);  color: #2563eb; }
.sol-card__icon--purple { background: rgba(168,85,247,0.1); color: #a855f7; }
.sol-card__icon--emerald{ background: rgba(16,185,129,0.1); color: #10b981; }
.sol-card:hover .sol-card__icon { transform: scale(1.1) rotate(-5deg); }
.sol-card:not(.sol-card--accent):hover .sol-card__icon--blue   { background: linear-gradient(135deg,#2563eb,#60a5fa); color:#fff; }
.sol-card--accent:hover .sol-card__icon--purple { background: linear-gradient(135deg,#a855f7,#d946ef); color:#fff; }
.sol-card:last-child:hover .sol-card__icon--emerald { background: linear-gradient(135deg,#10b981,#34d399); color:#fff; }

.sol-card__name {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.5rem; font-weight: 800; color: #0f172a;
  letter-spacing: -0.02em; margin: 0; line-height: 1.2;
}
.sol-card__desc {
  color: #64748b; font-size: 0.9375rem; line-height: 1.65; margin: 0;
  flex: 1;
}

.sol-card__cta {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.875rem; font-weight: 700;
  color: #2563eb; text-decoration: none;
  transition: gap 0.2s ease;
}
.sol-card--accent .sol-card__cta { color: #a855f7; }
.sol-card:last-child .sol-card__cta { color: #10b981; }
.sol-card__cta:hover { gap: 10px; text-decoration: underline; }

/* Right column */
.sol-card__right {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem;
}

.sol-card__block { display: flex; flex-direction: column; gap: 1rem; }

.sol-card__block-title {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: #475569; margin: 0;
}

/* Process list */
.sol-process {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 0.75rem;
  counter-reset: steps;
}
.sol-process__step {
  display: flex; align-items: flex-start; gap: 0.75rem;
}
.sol-process__num {
  flex-shrink: 0;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(37,99,235,0.1); color: #2563eb;
  font-size: 0.6875rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  margin-top: 1px;
}
.sol-card--accent .sol-process__num { background: rgba(168,85,247,0.1); color: #a855f7; }
.sol-card:last-child .sol-process__num { background: rgba(16,185,129,0.1); color: #10b981; }

.sol-process__text {
  font-size: 0.875rem; color: #475569; line-height: 1.55;
}

/* Benefits list */
.sol-benefits {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 0.7rem;
}
.sol-benefit {
  display: flex; align-items: flex-start; gap: 0.75rem;
  font-size: 0.875rem; color: #334155; line-height: 1.5;
}
.sol-benefit__dot {
  flex-shrink: 0;
  width: 6px; height: 6px; border-radius: 50%;
  margin-top: 6px;
}
.sol-benefit__dot--blue   { background: #2563eb; }
.sol-benefit__dot--purple { background: #a855f7; }
.sol-benefit__dot--emerald{ background: #10b981; }

/* ══ CTA BANNER ═══════════════════════════════════════════ */
.sol-cta {
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #112d4e 60%, #1a1440 100%);
  padding: 6rem 2rem;
  overflow: hidden;
}

.sol-cta__orb {
  position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none;
}
.sol-cta__orb--1 { width: 500px; height: 500px; background: rgba(37,99,235,0.2); top: -100px; right: 5%; }
.sol-cta__orb--2 { width: 350px; height: 350px; background: rgba(168,85,247,0.15); bottom: -80px; left: 10%; }

.sol-cta__inner {
  position: relative; z-index: 1;
  display: flex; flex-direction: column; align-items: center;
  gap: 2rem; text-align: center;
}

.sol-cta__content { display: flex; flex-direction: column; gap: 0.75rem; }

.sol-cta__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800; color: white;
  letter-spacing: -0.03em; margin: 0;
}
.sol-cta__sub { color: rgba(255,255,255,0.65); font-size: 1rem; line-height: 1.7; margin: 0; }

.sol-cta__btn {
  display: inline-flex; align-items: center; gap: 10px;
  background: #004cff; color: white;
  padding: 1rem 2.5rem; border-radius: 10px;
  font-size: 1rem; font-weight: 700; text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,76,255,0.35);
}
.sol-cta__btn:hover {
  background: #0038cc;
  transform: translateY(-3px);
  box-shadow: 0 18px 40px rgba(0,76,255,0.4);
}

/* ══ RESPONSIVE ═══════════════════════════════════════════ */
@media (max-width: 1024px) {
  .sol-card__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .sol-card__left {
    border-right: none;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    padding-right: 0; padding-bottom: 2rem;
  }
  .sol-card__right {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .sol-hero__stats { gap: 1rem; }
  .sol-stat { min-width: 100px; padding: 1rem; }
  .sol-card__inner { padding: 2rem; }
  .sol-hero {
    padding-left: 1rem; padding-right: 1rem;
  }
}

@media (max-width: 480px) {
  .sol-hero__stats { flex-direction: column; align-items: center; }
  .sol-stat { width: 100%; max-width: 280px; flex-direction: row; justify-content: space-between; }
}
</style>
