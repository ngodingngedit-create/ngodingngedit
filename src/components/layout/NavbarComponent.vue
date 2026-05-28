<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--light': isLightTheme }">
    <div class="container">
      <div class="navbar__inner">
        <!-- Logo -->
        <RouterLink to="/" class="navbar__logo">
          <img 
            src="/logo/logo blue.png" 
            alt="NgodingNgedit Logo" 
            class="navbar__logo-img" 
          />
        </RouterLink>

        <!-- Navigation -->
        <nav class="navbar__nav">
          <template v-for="item in navItems" :key="item.path">


            <RouterLink
              v-if="item.isRoute"
              :to="item.path"
              class="navbar__link"
              active-class=""
              :class="{ 'navbar__link--active': isRouteActive(item) }"
            >
              {{ item.label }}
              <span class="navbar__link-indicator"></span>
            </RouterLink>
            <!-- Hash anchors get <a> with smooth scroll -->
            <a
              v-else
              :href="item.path"
              class="navbar__link"
              @click.prevent="scrollToHash(item.path)"
            >
              {{ item.label }}
              <span class="navbar__link-indicator"></span>
            </a>
          </template>
        </nav>

        <!-- Actions -->
        <div class="navbar__actions">
          <!-- Language Dropdown -->
          <div class="navbar__lang">
            <button class="navbar__lang-trigger" @click="toggleLangDropdown" v-click-outside="closeLangDropdown">
              <img :src="currentFlag" :alt="lang" class="navbar__lang-flag" />
            </button>
            
            <Transition name="slide-up">
              <div v-if="showLangDropdown" class="navbar__lang-dropdown">
                <div class="navbar__lang-list">
                  <button 
                    v-for="l in languages" 
                    :key="l.code"
                    class="navbar__lang-item"
                    :class="{ 'navbar__lang-item--active': lang === l.code }"
                    @click="setLanguage(l.code)"
                  >
                    <img :src="l.flag" :alt="l.label" class="navbar__lang-item-flag" />
                    <span class="navbar__lang-item-label">{{ l.label }}</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>

          <a href="#" class="navbar__cta" @click.prevent="scrollToHash('#contact')">
            {{ $t('navbar.contactUs') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <button class="navbar__mobile-btn" @click="toggleMenu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Simple Mobile Menu -->
    <Transition name="fade">
      <div v-if="menuOpen" class="navbar__mobile-menu" @click.self="closeMenu">
        <nav class="navbar__mobile-nav">
          <template v-for="item in navItems" :key="item.path">


            <RouterLink
              v-if="item.isRoute"
              :to="item.path"
              class="navbar__mobile-link"
              active-class=""
              :class="{ 'navbar__mobile-link--active': isRouteActive(item) }"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
            <a
              v-else
              :href="item.path"
              class="navbar__mobile-link"
              @click.prevent="scrollToHash(item.path); closeMenu()"
            >
              {{ item.label }}
            </a>
          </template>
          
          <!-- Mobile Language Switcher -->
          <div class="navbar__mobile-lang">
            <button 
              v-for="l in languages" 
              :key="l.code"
              class="navbar__mobile-lang-item"
              :class="{ active: lang === l.code }"
              @click="setLanguage(l.code); closeMenu()"
            >
              <img :src="l.flag" :alt="l.label" />
              <span>{{ l.label }}</span>
            </button>
          </div>

          <a href="#" class="navbar__mobile-cta" @click.prevent="scrollToHash('#contact'); closeMenu()">{{ $t('navbar.contactUs') }}</a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { globalLang as lang } from '@/store.js'

const { t, tm } = useI18n()

// Click outside directive (simplified inline version)
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

const route = useRoute()
const router = useRouter()

const scrolled = ref(false)
const menuOpen = ref(false)
const showLangDropdown = ref(false)
const showSolusiDropdown = ref(false)
const mobileAccordionOpen = ref(false)

const languages = [
  { label: 'Indonesia', code: 'id', flag: '/leaguage/indo.png' },
  { label: 'English', code: 'en', flag: '/leaguage/english.png' }
]

const currentFlag = computed(() => {
  const current = languages.find(l => l.code === lang.value)
  return current ? current.flag : '/leaguage/indo.png'
})

const isLightTheme = computed(() => route.path === '/services' || route.path === '/' || route.path === '/how-to' || route.path === '/portfolio' || route.path === '/help-center' || route.path === '/about')

const navItems = computed(() => [
  { label: t('navbar.home'), path: '/', isRoute: true },
  { label: t('footer.aboutUs'), path: '/about', isRoute: true },
  { label: t('navbar.portfolio'), path: '/portfolio', isRoute: true },
  { label: t('navbar.services'), path: '/services', isRoute: true },
  { label: t('navbar.howTo'), path: '/how-to', isRoute: true },
])



function isRouteActive(item) {
  if (item.path === '/') return route.path === '/'
  return route.path.startsWith(item.path)
}

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

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function toggleLangDropdown() {
  showLangDropdown.value = !showLangDropdown.value
}

function closeLangDropdown() {
  showLangDropdown.value = false
}

function setLanguage(code) {
  lang.value = code
  showLangDropdown.value = false
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
}

.navbar--scrolled {
  padding: 1rem 0;
  background: rgba(17, 45, 78, 0.85);
  backdrop-filter: blur(20px);
}

/* Light Theme Overrides */
.navbar--light:not(.navbar--scrolled) .navbar__logo-text,
.navbar--light:not(.navbar--scrolled) .navbar__link,
.navbar--light.navbar--scrolled .navbar__logo-text,
.navbar--light.navbar--scrolled .navbar__link {
  color: #0f172a;
}

.navbar--light:not(.navbar--scrolled) .navbar__mobile-btn svg,
.navbar--light.navbar--scrolled .navbar__mobile-btn svg {
  stroke: #0f172a;
}

.navbar--light.navbar--scrolled {
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
}

.navbar__logo-img {
  height: 60px;
  width: auto;
  transition: all 0.3s ease;
}

.navbar--scrolled .navbar__logo-img {
  height: 48px;
}

/* Nav links */
.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.navbar__link {
  position: relative;
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.navbar__link:hover,
.navbar__link--active {
  color: white;
}

.navbar__link-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.navbar__link:hover .navbar__link-indicator,
.navbar__link--active .navbar__link-indicator {
  width: 100%;
}

/* Actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

/* Language Dropdown */
.navbar__lang {
  position: relative;
}

.navbar__lang-trigger {
  width: auto;
  height: 32px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar--light .navbar__lang-trigger {
  background: #f8fafc;
  border-color: rgba(0, 0, 0, 0.05);
}

.navbar__lang-trigger:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

.navbar__lang-flag {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.navbar__lang-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  right: -40px;
  width: 180px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  z-index: 100;
}

.navbar__lang-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.navbar__lang-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  background: transparent;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.navbar__lang-item:hover {
  background: rgba(37, 99, 235, 0.05);
}

.navbar__lang-item--active {
  background: rgba(37, 99, 235, 0.1);
}

.navbar__lang-item-flag {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  object-fit: cover;
}

.navbar__lang-item-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
}

/* Animations */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.navbar__cta {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #004cff;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.3s ease;
}

.navbar__cta:hover {
  background: #0038cc;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 76, 255, 0.2);
}

.navbar__mobile-btn {
  display: none;
}

/* Mobile Menu */
.navbar__mobile-menu {
  position: fixed;
  inset: 0;
  background: #004cff;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar__mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
}

.navbar__mobile-link {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.navbar__mobile-lang {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.navbar__mobile-lang-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: white;
  opacity: 0.5;
  cursor: pointer;
}

.navbar__mobile-lang-item.active {
  opacity: 1;
}

.navbar__mobile-lang-item img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
}

.navbar__mobile-lang-item.active img {
  border-color: var(--color-primary);
}

.navbar__mobile-cta {
  margin-top: var(--space-md);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.25rem;
}

/* ── Dropdown wrap ────────────────────────────────────── */
.navbar__dropdown-wrap {
  position: relative;
}

/* Arrow chevron next to label */
.navbar__link--has-arrow {
  display: flex;
  align-items: center;
  gap: 4px;
}
.navbar__link-arrow {
  opacity: 0.6;
  transition: transform 0.25s ease, opacity 0.25s ease;
  margin-top: 1px;
}
.navbar__link-arrow--open,
.navbar__dropdown-wrap:hover .navbar__link-arrow {
  transform: rotate(180deg);
  opacity: 1;
}

/* ── Mega-dropdown panel ──────────────────────────────── */
.navbar__mega {
  position: absolute;
  top: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
  width: 740px;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(24px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(0,0,0,0.07);
  box-shadow: 0 20px 60px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.06);
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* Transition */
.mega-drop-enter-active, .mega-drop-leave-active {
  transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.mega-drop-enter-from, .mega-drop-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px) scale(0.97);
}

/* Header row */
.navbar__mega-head {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.navbar__mega-title {
  font-size: 0.8125rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0f172a;
}
.navbar__mega-sub {
  font-size: 0.8125rem;
  color: #64748b;
}

/* Cards grid */
.navbar__mega-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.875rem;
}

.navbar__mega-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.06);
  background: #f8fafc;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}
.navbar__mega-card:hover {
  border-color: rgba(37,99,235,0.2);
  background: rgba(37,99,235,0.03);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37,99,235,0.08);
}
.navbar__mega-card--purple:hover {
  border-color: rgba(168,85,247,0.2);
  background: rgba(168,85,247,0.03);
  box-shadow: 0 8px 24px rgba(168,85,247,0.08);
}
.navbar__mega-card--emerald:hover {
  border-color: rgba(16,185,129,0.2);
  background: rgba(16,185,129,0.03);
  box-shadow: 0 8px 24px rgba(16,185,129,0.08);
}

.navbar__mega-card__icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}
.navbar__mega-card:hover .navbar__mega-card__icon {
  transform: scale(1.1) rotate(-5deg);
}
.navbar__mega-card__icon--blue   { background: rgba(37,99,235,0.1);  color: #2563eb; }
.navbar__mega-card__icon--purple { background: rgba(168,85,247,0.1); color: #a855f7; }
.navbar__mega-card__icon--emerald{ background: rgba(16,185,129,0.1); color: #10b981; }

.navbar__mega-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.navbar__mega-card__name {
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
}
.navbar__mega-card__desc {
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}
.navbar__mega-card__benefits {
  list-style: none;
  padding: 0;
  margin: 0.35rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.navbar__mega-card__benefits li {
  font-size: 0.6875rem;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 6px;
}
.navbar__mega-card__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
.navbar__mega-card__dot--blue   { background: #2563eb; }
.navbar__mega-card__dot--purple { background: #a855f7; }
.navbar__mega-card__dot--emerald{ background: #10b981; }

/* Footer row */
.navbar__mega-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.06);
  font-size: 0.8125rem;
  color: #94a3b8;
}
.navbar__mega-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  transition: gap 0.2s ease;
}
.navbar__mega-cta:hover {
  gap: 10px;
  text-decoration: underline;
}

/* ── Mobile accordion ─────────────────────────────────── */
.navbar__mobile-dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 100%;
}

.navbar__mobile-link--accordion {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
}
.navbar__mobile-link--accordion svg {
  transition: transform 0.25s ease;
}
.navbar__mobile-link--accordion svg.rotated {
  transform: rotate(180deg);
}

/* Accordion transition */
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.35s ease, opacity 0.3s ease;
  overflow: hidden;
  max-height: 400px;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.navbar__mobile-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90vw;
  max-width: 340px;
  padding: 0.75rem;
  background: rgba(255,255,255,0.1);
  border-radius: 14px;
  margin-top: 0.5rem;
}

.navbar__mobile-sol-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.2s;
}
.navbar__mobile-sol-item:hover, .navbar__mobile-sol-item:active {
  background: rgba(0,0,0,0.03);
}
.navbar__mobile-sol-all {
  display: block;
  text-align: center;
  padding: 12px;
  margin: 8px 16px 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.05);
  border-radius: 8px;
  text-decoration: none;
}
.navbar__mobile-sol-all:active {
  background: rgba(37, 99, 235, 0.1);
}
.navbar__mobile-sol-item span:last-child {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.navbar__mobile-sol-item strong {
  color: white;
  font-size: 0.9375rem;
  font-weight: 700;
}
.navbar__mobile-sol-item small {
  color: rgba(255,255,255,0.65);
  font-size: 0.75rem;
  line-height: 1.4;
}
.navbar__mobile-sol-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 6px;
}
.navbar__mobile-sol-dot--blue   { background: #93c5fd; }
.navbar__mobile-sol-dot--purple { background: #d8b4fe; }
.navbar__mobile-sol-dot--emerald{ background: #6ee7b7; }

/* Responsive */
@media (max-width: 768px) {
  .navbar__nav {
    display: none;
  }
  .navbar__mobile-btn {
    display: block;
  }
}
</style>
