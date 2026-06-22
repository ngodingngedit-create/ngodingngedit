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

  <!-- Backdrop (Directly rendered for instant click response and no Teleport target resolution delays) -->
  <Transition name="backdrop-fade">
    <div v-if="menuOpen" class="mobile-navbar-backdrop" @click="$emit('close-menu')"></div>
  </Transition>

  <!-- Modern Minimalist Floating Drawer -->
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

      <!-- Nav Links with fade-in stagger animation -->
      <nav class="mobile-navbar-drawer__nav">
        <template v-for="(item, index) in navItems" :key="item.path">
          <RouterLink
            v-if="item.isRoute"
            :to="item.path"
            class="mobile-navbar-drawer__link"
            :class="{ 'mobile-navbar-drawer__link--active': isRouteActive(item) }"
            :style="{ animationDelay: `${index * 50}ms` }"
            @click="$emit('close-menu')"
          >
            <span class="mobile-navbar-drawer__link-text">{{ item.label }}</span>
            <span class="mobile-navbar-drawer__link-dot"></span>
          </RouterLink>
          <a
            v-else
            :href="item.path"
            class="mobile-navbar-drawer__link"
            :style="{ animationDelay: `${index * 50}ms` }"
            @click.prevent="$emit('click-link', item.path)"
          >
            <span class="mobile-navbar-drawer__link-text">{{ item.label }}</span>
            <span class="mobile-navbar-drawer__link-dot"></span>
          </a>
        </template>
      </nav>

      <!-- Footer containing minimalist Lang Selector & CTA -->
      <div class="mobile-navbar-drawer__footer">
        <!-- Minimalist Language switch -->
        <div class="mobile-navbar-drawer__lang-section">
          <div class="mobile-navbar-drawer__lang-switch">
            <button
              v-for="l in languages"
              :key="l.code"
              class="mobile-navbar-drawer__lang-tab"
              :class="{ 'mobile-navbar-drawer__lang-tab--active': lang === l.code }"
              @click="$emit('set-language', l.code)"
            >
              <img :src="l.flag" :alt="l.label" class="mobile-navbar-drawer__lang-flag-icon" />
              <span>{{ l.code.toUpperCase() }}</span>
            </button>
          </div>
        </div>

        <!-- Contact Us CTA button -->
        <a href="#" class="mobile-navbar-drawer__cta" @click.prevent="$emit('click-link', '#contact')">
          <span>{{ $t('navbar.contactUs') }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  </Transition>
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
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  z-index: 10001; /* Must be higher than the backdrop and drawer */
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
  gap: 4.5px;
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
  transform: translateY(6.5px) rotate(45deg);
}
.mobile-navbar-btn--open .mobile-navbar-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.mobile-navbar-btn--open .mobile-navbar-line:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

@media (min-width: 1025px) {
  .mobile-navbar-btn {
    display: none;
  }
}

/* ── Menu Drawer and Backdrop Styles (Scoped within component) ── */
.mobile-navbar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(5px); /* Soft blur to avoid animation performance lag */
  -webkit-backdrop-filter: blur(5px);
  z-index: 9998;
}

/* Backdrop Fade Transition */
.backdrop-fade-enter-active,
.backdrop-fade-leave-active { 
  transition: opacity 0.3s ease; 
}
.backdrop-fade-enter-from,
.backdrop-fade-leave-to { 
  opacity: 0; 
}
.backdrop-fade-enter-to,
.backdrop-fade-leave-from { 
  opacity: 1; 
}

/* Elegant Floating Drawer Card */
.mobile-navbar-drawer {
  position: fixed;
  top: 16px;
  right: 16px;
  bottom: 16px;
  width: min(300px, 85vw);
  background: #0f172a; /* Solid color to prevent laggy repaint processes on scroll/transition */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  padding: 1.5rem;
  overflow-y: auto;
}

/* Light Mode Drawer style override */
.mobile-navbar-drawer--light {
  background: #ffffff; /* Solid color to prevent laggy repaint processes on scroll/transition */
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
}

/* Smooth slide & fade transition without laggy scaling operations */
.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.drawer-slide-enter-to,
.drawer-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

/* Drawer Header */
.mobile-navbar-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__header {
  border-bottom-color: rgba(0, 0, 0, 0.04);
}

.mobile-navbar-drawer__logo-img {
  height: 38px;
  width: auto;
  object-fit: contain;
}

.mobile-navbar-drawer__close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
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

/* Nav Links with Staggered Entrance */
.mobile-navbar-drawer__nav {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  gap: 0.25rem;
  flex-shrink: 0;
}

.mobile-navbar-drawer__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  background: transparent;
  animation: mobile-item-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__link {
  color: #475569;
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
  background: rgba(37, 99, 235, 0.1) !important;
  color: #3b82f6 !important;
  font-weight: 600;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__link--active {
  background: rgba(37, 99, 235, 0.06) !important;
  color: #2563eb !important;
}

.mobile-navbar-drawer__link-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3b82f6;
  opacity: 0;
  transform: scale(0);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__link-dot {
  background: #2563eb;
}
.mobile-navbar-drawer__link--active .mobile-navbar-drawer__link-dot {
  opacity: 1;
  transform: scale(1);
}

@keyframes mobile-item-fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Footer Section */
.mobile-navbar-drawer__footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex-shrink: 0;
}

/* Lang Selector styled as a neat segmented capsule switch */
.mobile-navbar-drawer__lang-section {
  display: flex;
  justify-content: center;
  width: 100%;
}
.mobile-navbar-drawer__lang-switch {
  display: flex;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3px;
  border-radius: 99px;
  width: 100%;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__lang-switch {
  background: rgba(15, 23, 42, 0.04);
  border-color: rgba(15, 23, 42, 0.06);
}

.mobile-navbar-drawer__lang-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0.5rem;
  border-radius: 99px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  flex: 1;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__lang-tab {
  color: #64748b;
}

.mobile-navbar-drawer__lang-tab:hover {
  color: #ffffff;
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__lang-tab:hover {
  color: #0f172a;
}

.mobile-navbar-drawer__lang-tab--active {
  background: #ffffff;
  color: #0f172a !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.mobile-navbar-drawer--light .mobile-navbar-drawer__lang-tab--active {
  background: #ffffff;
  color: #2563eb !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.mobile-navbar-drawer__lang-flag-icon {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  object-fit: cover;
}

/* Premium Pill CTA Button */
.mobile-navbar-drawer__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0.8rem;
  background: #2563eb;
  color: #ffffff;
  border-radius: 99px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}
.mobile-navbar-drawer__cta:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.35);
}
.mobile-navbar-drawer__cta svg {
  transition: transform 0.25s ease;
}
.mobile-navbar-drawer__cta:hover svg {
  transform: translateX(3px);
}
</style>
