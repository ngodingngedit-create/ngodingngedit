<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--light': isLightTheme }">
    <div class="container">
      <div class="navbar__inner">
        <!-- Logo -->
        <RouterLink to="/" class="navbar__logo">
          <svg class="navbar__logo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--color-primary)"/>
            <path d="M2 17L12 22L22 17" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="navbar__logo-text">Ngoding<span>Ngedit</span></span>
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

        <!-- CTA -->
        <div class="navbar__actions">
          <!-- Language Toggle -->
          <div class="navbar__lang-toggle">
            <button :class="{ active: lang === 'id' }" @click="lang = 'id'">ID</button>
            <button :class="{ active: lang === 'en' }" @click="lang = 'en'">EN</button>
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

const route = useRoute()
const router = useRouter()

const scrolled = ref(false)
const menuOpen = ref(false)

const isLightTheme = computed(() => route.path === '/services')

const navItems = [
  { label: 'Beranda', path: '/', isRoute: true },
  { label: 'Layanan', path: '/services', isRoute: true },
  { label: 'Solusi', path: '/#solutions', isRoute: false },
  { label: 'Portfolio', path: '/#portfolio', isRoute: false },
  { label: 'Tentang Kami', path: '/#about', isRoute: false },
]

function isRouteActive(item) {
  if (item.path === '/') return route.path === '/'
  return route.path === item.path
}

function scrollToHash(path) {
  // If on the home page, scroll directly; otherwise navigate to home first
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
  background: rgba(10, 22, 40, 0.85);
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
  gap: 10px;
}

.navbar__logo-text {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
}

.navbar__logo-text span {
  color: var(--color-primary);
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

.navbar__lang-toggle {
  display: flex;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  border-radius: 99px;
  padding: 4px;
  border: 1px solid rgba(255,255,255,0.1);
}

.navbar--light .navbar__lang-toggle {
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.05);
}

.navbar--light.navbar--scrolled .navbar__lang-toggle {
  background: rgba(0,0,0,0.05);
}

.navbar__lang-toggle button {
  background: transparent;
  border: none;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(255,255,255,0.7);
  padding: 0.4rem 0.8rem;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s;
}

.navbar--light .navbar__lang-toggle button {
  color: #64748b;
}

.navbar__lang-toggle button.active {
  background: var(--color-primary);
  color: #fff;
  box-shadow: 0 2px 8px rgba(37,99,235,0.2);
}

.navbar__cta {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-primary);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.3s ease;
}

.navbar__cta:hover {
  background: white;
  color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.navbar__mobile-btn {
  display: none;
}

/* Mobile Menu */
.navbar__mobile-menu {
  position: fixed;
  inset: 0;
  background: rgba(10, 22, 40, 0.98);
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
