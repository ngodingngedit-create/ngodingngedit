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
            <!-- Real routes get RouterLink -->
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

          <a href="#contact" class="navbar__cta">
            Hubungi Kami
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

          <a href="#contact" class="navbar__mobile-cta" @click="closeMenu">Hubungi Kami</a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { globalLang as lang } from '@/store.js'

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

const languages = [
  { label: 'Indonesia', code: 'id', flag: '/leaguage/indo.png' },
  { label: 'English', code: 'en', flag: '/leaguage/english.png' }
]

const currentFlag = computed(() => {
  const current = languages.find(l => l.code === lang.value)
  return current ? current.flag : '/leaguage/indo.png'
})

const isLightTheme = computed(() => route.path === '/services' || route.path === '/')

const navItems = [
  { label: 'Beranda', path: '/', isRoute: true },
  { label: 'Portfolio', path: '/#portfolio', isRoute: false },
  { label: 'Layanan', path: '/services', isRoute: true },
]

function isRouteActive(item) {
  if (item.path === '/') return route.path === '/'
  return route.path === item.path
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
