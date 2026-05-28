<template>
  <main class="help-center">
    <section class="help-hero">
      <div class="help-hero__bg" aria-hidden="true">
        <div class="help-hero__grid"></div>
        <div class="help-hero__orb"></div>
      </div>
      <div class="container help-hero__inner">
        <h1 class="help-hero__title animate-fade-in-up">{{ $t('helpCenter.title') }}</h1>
        <p class="help-hero__subtitle animate-fade-in-up delay-100">{{ $t('helpCenter.subtitle') }}</p>
        
        <div class="help-hero__search animate-fade-in-up delay-200">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" :placeholder="$t('helpCenter.search')" class="search-input" />
        </div>
      </div>
    </section>

    <section class="help-grid-section container">
      <div class="help-grid">
        <div v-for="cat in categories" :key="cat.id" class="help-card reveal">
          <div :class="['help-card__icon', `help-card__icon--${cat.color}`]" v-html="cat.icon"></div>
          <h3 class="help-card__title">{{ $t(`helpCenter.categories.${cat.id}`) }}</h3>
        </div>
      </div>
    </section>

    <section class="help-cta container reveal delay-200">
      <div class="help-cta__inner">
        <h2>{{ $t('hero.freeConsultation') }}</h2>
        <a href="#" class="help-cta__btn" @click.prevent="scrollToHash('#contact')">
          {{ $t('navbar.contactUs') }}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const categories = [
  { id: 'account', color: 'blue', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>` },
  { id: 'billing', color: 'purple', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>` },
  { id: 'technical', color: 'emerald', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>` },
  { id: 'services', color: 'blue', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>` },
  { id: 'security', color: 'purple', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>` },
  { id: 'faq', color: 'emerald', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>` },
]

const router = useRouter()
const route = useRoute()
function scrollToHash(path) {
  const hash = path.split('#')[1]
  if (!hash) return
  if (route.path === '/') {
    const el = document.getElementById(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    router.push({ path: '/', hash: `#${hash}` })
  }
}

onMounted(() => {
  const io = new IntersectionObserver(
    e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.help-center {
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* HERO */
.help-hero {
  position: relative;
  padding: calc(var(--navbar-height, 72px) + 5rem) 2rem 4rem;
  text-align: center;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.help-hero__bg {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
}
.help-hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 75%);
}
.help-hero__orb {
  position: absolute; width: 400px; height: 400px;
  background: rgba(37,99,235,0.08); border-radius: 50%;
  filter: blur(100px); top: -100px; left: 50%; transform: translateX(-50%);
}
.help-hero__inner {
  position: relative; z-index: 1;
  max-width: 800px; margin: 0 auto;
}
.help-hero__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800; color: #0f172a;
  letter-spacing: -0.03em; margin: 0 0 1rem;
}
.help-hero__subtitle {
  font-size: 1.125rem; color: #64748b; line-height: 1.7;
}

.help-hero__search {
  margin-top: 2.5rem;
  position: relative;
  max-width: 600px;
  margin-left: auto; margin-right: auto;
}
.search-input {
  width: 100%;
  padding: 1.25rem 1.25rem 1.25rem 3.5rem;
  font-size: 1.125rem;
  border: 2px solid rgba(37,99,235,0.1);
  border-radius: 100px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.search-input:focus {
  border-color: #2563eb;
  box-shadow: 0 10px 40px rgba(37,99,235,0.15);
}
.search-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}

/* GRID */
.help-grid-section {
  padding: 5rem 1rem;
  max-width: 1000px; margin: 0 auto;
}
.help-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.help-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.05);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0; transform: translateY(30px);
}
.help-card.visible {
  opacity: 1; transform: translateY(0);
}
.help-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  border-color: rgba(37,99,235,0.2);
}
.help-card__icon {
  width: 64px; height: 64px;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem;
}
.help-card__icon--blue { background: rgba(37,99,235,0.1); color: #2563eb; }
.help-card__icon--purple { background: rgba(168,85,247,0.1); color: #a855f7; }
.help-card__icon--emerald { background: rgba(16,185,129,0.1); color: #10b981; }

.help-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
}

/* CTA */
.help-cta {
  margin-top: 2rem;
}
.help-cta__inner {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 24px; padding: 4rem 2rem; text-align: center;
  color: white;
}
.help-cta__inner h2 {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 2rem; font-weight: 800; margin-bottom: 2rem;
}
.help-cta__btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: #2563eb; color: white;
  padding: 1rem 2.5rem; border-radius: 12px;
  font-weight: 700; text-decoration: none;
  transition: all 0.3s ease;
}
.help-cta__btn:hover {
  background: #1d4ed8; transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37,99,235,0.3);
}

@media (max-width: 768px) {
  .help-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .help-grid { grid-template-columns: 1fr; }
}
</style>
