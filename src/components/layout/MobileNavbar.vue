<template>
  <!-- Mobile Toggle Button -->
  <button 
    class="mobile-navbar-btn" 
    :class="{ 
      'mobile-navbar-btn--open': menuOpen, 
      'mobile-navbar-btn--scrolled': scrolled,
      'mobile-navbar-btn--light': isLightTheme 
    }" 
    @click="$emit('toggle-menu')" 
    aria-label="Toggle menu"
  >
    <div class="mobile-navbar-hamburger">
      <span class="mobile-navbar-line"></span>
      <span class="mobile-navbar-line"></span>
      <span class="mobile-navbar-line"></span>
    </div>
  </button>

  <!-- Drawer Teleported to Body -->
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="backdrop-fade">
      <div v-if="menuOpen" class="mobile-navbar-backdrop" @click="$emit('close-menu')"></div>
    </Transition>

    <!-- Slide-in Drawer -->
    <Transition name="drawer-slide">
      <div 
        v-if="menuOpen" 
        class="mobile-navbar-drawer"
        :class="{ 'mobile-navbar-drawer--light': isLightTheme }"
      >
        <!-- Drawer Header -->
        <div class="mobile-navbar-drawer__header">
          <RouterLink to="/" class="mobile-navbar-drawer__logo" @click="$emit('close-menu')">
            <img src="/logo/logo blue.png" alt="NgodingNgedit" class="mobile-navbar-drawer__logo-img" />
          </RouterLink>
          <button class="mobile-navbar-drawer__close" @click="$emit('close-menu')" aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Nav Links -->
        <nav class="mobile-navbar-drawer__nav">
          <template v-for="item in navItems" :key="item.path">
            <RouterLink
              v-if="item.isRoute"
              :to="item.path"
              class="mobile-navbar-drawer__link"
              :class="{ 'mobile-navbar-drawer__link--active': isRouteActive(item) }"
              @click="$emit('close-menu')"
            >
              <span class="mobile-navbar-drawer__link-text">{{ item.label }}</span>
              <svg class="mobile-navbar-drawer__link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </RouterLink>
            <a
              v-else
              :href="item.path"
              class="mobile-navbar-drawer__link"
              @click.prevent="$emit('click-link', item.path)"
            >
              <span class="mobile-navbar-drawer__link-text">{{ item.label }}</span>
              <svg class="mobile-navbar-drawer__link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </template>
        </nav>

        <!-- Divider -->
        <div class="mobile-navbar-drawer__divider"></div>

        <!-- Language Switcher -->
        <div class="mobile-navbar-drawer__lang-section">
          <span class="mobile-navbar-drawer__lang-label">{{ $t('navbar.language') || 'Language' }}</span>
          <div class="mobile-navbar-drawer__lang-btns">
            <button
              v-for="l in languages"
              :key="l.code"
              class="mobile-navbar-drawer__lang-btn"
              :class="{ 'mobile-navbar-drawer__lang-btn--active': lang === l.code }"
              @click="$emit('set-language', l.code)"
            >
              <img :src="l.flag" :alt="l.label" class="mobile-navbar-drawer__lang-flag" />
              <span>{{ l.label }}</span>
            </button>
          </div>
        </div>

        <!-- CTA Footer -->
        <div class="mobile-navbar-drawer__footer">
          <a href="#" class="mobile-navbar-drawer__cta" @click.prevent="$emit('click-link', '#contact')">
            {{ $t('navbar.contactUs') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useRoute } from 'vue-router'

defineProps({
  menuOpen: { type: Boolean, required: true },
  scrolled: { type: Boolean, default: false },
  isLightTheme: { type: Boolean, default: false },
  navItems: { type: Array, required: true },
  languages: { type: Array, required: true },
  lang: { type: String, required: true }
})

defineEmits(['toggle-menu', 'close-menu', 'set-language', 'click-link'])

const route = useRoute()

function isRouteActive(item) {
  if (item.path === '/') return route.path === '/'
  return route.path.startsWith(item.path)
}
</script>

<style scoped>
/* ── Hamburger Trigger Button ─────────────────────────── */
.mobile-navbar-btn {
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Scroll / light style adaptions */
.mobile-navbar-btn--scrolled {
  background: rgba(255, 255, 255, 0.6);
  border-color: rgba(0, 0, 0, 0.08);
}
.mobile-navbar-btn--light {
  background: rgba(15, 23, 42, 0.05);
  border-color: rgba(15, 23, 42, 0.1);
}
.mobile-navbar-btn--light.mobile-navbar-btn--scrolled {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(0, 0, 0, 0.08);
}

.mobile-navbar-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}
.mobile-navbar-btn--scrolled:hover {
  background: rgba(255, 255, 255, 0.85);
}
.mobile-navbar-btn--light:hover {
  background: rgba(15, 23, 42, 0.08);
}

/* Hamburger lines → Morph into X */
.mobile-navbar-hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  gap: 4px;
}

.mobile-navbar-line {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 4px;
  background: #ffffff;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: center;
}

.mobile-navbar-btn--scrolled .mobile-navbar-line,
.mobile-navbar-btn--light .mobile-navbar-line {
  background: #0f172a;
}

/* Animated Morph Open State */
.mobile-navbar-btn--open {
  background: #0f172a !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
}
.mobile-navbar-btn--open .mobile-navbar-line {
  background: #ffffff !important;
}
.mobile-navbar-btn--open .mobile-navbar-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.mobile-navbar-btn--open .mobile-navbar-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.mobile-navbar-btn--open .mobile-navbar-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (min-width: 1025px) {
  .mobile-navbar-btn {
    display: none;
  }
}
</style>

<style>
/* ── Teleported Drawer Custom Style (Needs global scope) ── */
.mobile-navbar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9998;
}

.backdrop-fade-enter-active,
.backdrop-fade-leave-active { 
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1); 
}
.backdrop-fade-enter-from,
.backdrop-fade-leave-to { 
  opacity: 0; 
}

.mobile-navbar-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(340px, 88vw);
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(24px) saturate(190%);
  -webkit-backdrop-filter: blur(24px) saturate(190%);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: -20px 0 50px rgba(0, 0, 0, 0.3);
  padding: 1.5rem 1.25rem env(safe-area-inset-bottom, 1.5rem);
}

/* Light Mode Drawer style override */
.mobile-navbar-drawer--light {
  background: rgba(255, 255, 255, 0.88);
  border-left-color: rgba(0, 0, 0, 0.06);
  box-shadow: -20px 0 50px rgba(15, 23, 42, 0.08);
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
}

/* Drawer Header */
.mobile-navbar-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__header {
  border-bottom-color: rgba(0, 0, 0, 0.06);
}

.mobile-navbar-drawer__logo-img {
  height: 38px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.mobile-navbar-drawer__logo:hover .mobile-navbar-drawer__logo-img {
  transform: scale(1.02);
}

.mobile-navbar-drawer__close {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__close {
  background: rgba(15, 23, 42, 0.04);
  border-color: rgba(15, 23, 42, 0.06);
  color: #475569;
}
.mobile-navbar-drawer__close:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  transform: rotate(90deg);
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__close:hover {
  background: rgba(15, 23, 42, 0.08);
  color: #0f172a;
}

/* Nav Links */
.mobile-navbar-drawer__nav {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  gap: 0.5rem;
  flex-shrink: 0;
}

.mobile-navbar-drawer__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid transparent;
  background: transparent;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__link {
  color: #334155;
}

.mobile-navbar-drawer__link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__link:hover {
  background: rgba(15, 23, 42, 0.03);
  color: #0f172a;
}

.mobile-navbar-drawer__link--active {
  background: rgba(37, 99, 235, 0.15) !important;
  border-color: rgba(37, 99, 235, 0.25);
  color: #3b82f6 !important;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__link--active {
  background: rgba(37, 99, 235, 0.06) !important;
  border-color: rgba(37, 99, 235, 0.15);
  color: #2563eb !important;
}

.mobile-navbar-drawer__link-arrow {
  opacity: 0.5;
  transform: translateX(-5px);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  color: inherit;
}
.mobile-navbar-drawer__link:hover .mobile-navbar-drawer__link-arrow,
.mobile-navbar-drawer__link--active .mobile-navbar-drawer__link-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Drawer Divider */
.mobile-navbar-drawer__divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 0.5rem 0;
  flex-shrink: 0;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__divider {
  background: rgba(0, 0, 0, 0.06);
}

/* Language Section */
.mobile-navbar-drawer__lang-section {
  padding: 1.25rem 0;
  flex-shrink: 0;
}
.mobile-navbar-drawer__lang-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.75rem;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__lang-label {
  color: #94a3b8;
}

.mobile-navbar-drawer__lang-btns {
  display: flex;
  gap: 0.75rem;
}

.mobile-navbar-drawer__lang-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 0.875rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  justify-content: center;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__lang-btn {
  border-color: rgba(0, 0, 0, 0.08);
  background: #f8fafc;
  color: #475569;
}

.mobile-navbar-drawer__lang-btn:hover {
  border-color: rgba(59, 130, 246, 0.4);
  background: rgba(59, 130, 246, 0.08);
  color: #3b82f6;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__lang-btn:hover {
  border-color: rgba(37, 99, 235, 0.3);
  background: rgba(37, 99, 235, 0.04);
  color: #2563eb;
}

.mobile-navbar-drawer__lang-btn--active {
  border-color: #3b82f6 !important;
  background: rgba(59, 130, 246, 0.12) !important;
  color: #3b82f6 !important;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__lang-btn--active {
  border-color: #2563eb !important;
  background: rgba(37, 99, 235, 0.08) !important;
  color: #2563eb !important;
}

.mobile-navbar-drawer__lang-flag {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
}

/* Drawer Footer CTA */
.mobile-navbar-drawer__footer {
  margin-top: auto;
  padding-top: 1.5rem;
  flex-shrink: 0;
}

.mobile-navbar-drawer__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0.875rem;
  background: #2563eb;
  color: #ffffff;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
}

.mobile-navbar-drawer__cta:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.4);
}
</style>
