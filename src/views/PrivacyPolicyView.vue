<template>
  <main class="legal-page">
    <div class="legal-hero">
      <div class="legal-hero__inner container">
        <h1 class="legal-hero__title">{{ $t('privacy.title') }}</h1>
        <p class="legal-hero__subtitle" v-html="$t('privacy.subtitle')"></p>
      </div>
    </div>

    <div class="legal-body container">
      <!-- Sidebar TOC -->
      <aside class="legal-toc">
        <p class="legal-toc__label">{{ $t('privacy.tocLabel') }}</p>
        <nav>
          <a v-for="item in tocItems" :key="item.id" :href="`#${item.id}`" class="legal-toc__link">
            {{ item.label }}
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <article class="legal-content">
        <section v-for="section in sections" :key="section.id" :id="section.id" class="legal-section">
          <h2>{{ section.title }}</h2>

          <!-- Paragraphs -->
          <template v-if="section.paragraphs">
            <p v-for="(p, i) in section.paragraphs" :key="i" v-html="p"></p>
          </template>

          <!-- Items (ul) -->
          <template v-if="section.items">
            <ul>
              <li v-for="(item, i) in section.items" :key="i" v-html="item"></li>
            </ul>
          </template>

          <!-- Sub Items (ul class="legal-sub-list") -->
          <template v-if="section.subItems">
            <ul class="legal-sub-list">
              <li v-for="(subItem, i) in section.subItems" :key="i" v-html="subItem"></li>
            </ul>
          </template>

          <!-- Blocks (mixed p and ul) -->
          <template v-if="section.blocks">
            <template v-for="(block, i) in section.blocks" :key="i">
              <p v-if="block.type === 'p'" v-html="block.html"></p>
              <ul v-if="block.type === 'ul'">
                <li v-for="(item, j) in block.items" :key="j" v-html="item"></li>
              </ul>
            </template>
          </template>

          <!-- Note -->
          <p v-if="section.note" class="legal-note" v-html="section.note"></p>

          <!-- Callout -->
          <p v-if="section.callout" class="legal-callout" v-html="section.callout"></p>
        </section>

        <!-- Back Nav -->
        <div class="legal-back">
          <router-link to="/" class="legal-back__btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
            {{ $t('privacy.backHome') }}
          </router-link>
          <router-link to="/terms-and-conditions" class="legal-back__btn legal-back__btn--alt">
            {{ $t('privacy.viewTerms') }}
          </router-link>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const tocItems = computed(() => tm('privacy.toc'))
const sections = computed(() => tm('privacy.sections'))
</script>

<style scoped>
/* ─── Layout ───────────────────────────────────── */
.legal-page {
  background: #f8faff;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ─── Hero ─────────────────────────────────────── */
.legal-hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%);
  padding: 8rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.legal-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.legal-hero__inner {
  position: relative;
  text-align: center;
}

.legal-badge {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
}

.legal-hero__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.legal-hero__subtitle {
  color: rgba(255,255,255,0.8);
  font-size: 1rem;
  margin: 0;
}

/* ─── Body Layout ──────────────────────────────── */
.legal-body {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 3rem;
  padding-top: 3rem;
  padding-bottom: 5rem;
  align-items: start;
}

/* ─── TOC Sidebar ──────────────────────────────── */
.legal-toc {
  position: sticky;
  top: 6rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(37,99,235,0.07);
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 10rem);
}

.legal-toc__label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
  margin: 0 0 1rem;
  flex-shrink: 0;
}

.legal-toc nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.legal-toc nav::-webkit-scrollbar {
  width: 4px;
}

.legal-toc nav::-webkit-scrollbar-track {
  background: transparent;
}

.legal-toc nav::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 99px;
}

.legal-toc__link {
  font-size: 0.82rem;
  color: #64748b;
  text-decoration: none;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-left: 2px solid transparent;
  line-height: 1.4;
}

.legal-toc__link:hover {
  color: #2563eb;
  background: #eff6ff;
  border-left-color: #2563eb;
}

/* ─── Content ──────────────────────────────────── */
.legal-content {
  min-width: 0;
}

.legal-section {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.2s;
}

.legal-section:hover {
  box-shadow: 0 8px 30px rgba(37,99,235,0.08);
}

.legal-section h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #eff6ff;
}

.legal-section p {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.legal-section p:last-child {
  margin-bottom: 0;
}

.legal-section ul {
  color: #475569;
  line-height: 1.8;
  padding-left: 1.25rem;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.legal-section li {
  margin-bottom: 0.4rem;
}

.legal-sub-list {
  padding-left: 2.5rem !important;
  margin-top: 0.25rem !important;
}

.legal-note {
  background: #eff6ff;
  border-left: 4px solid #2563eb;
  border-radius: 0 8px 8px 0;
  padding: 0.75rem 1rem !important;
  color: #1e40af !important;
  margin-top: 0.75rem !important;
  font-size: 0.9rem !important;
}

.legal-callout {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #fefce8;
  border: 1px solid #fde047;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  color: #854d0e;
  font-size: 0.88rem;
  font-weight: 500;
}

.legal-callout svg {
  flex-shrink: 0;
  color: #ca8a04;
}

/* ─── Contact Section ──────────────────────────── */
.legal-section--contact {
  background: linear-gradient(135deg, #eff6ff, #f0f9ff);
  border-color: #bfdbfe;
}

.legal-contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
}

.legal-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #fff;
  border: 1px solid #dbeafe;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.legal-contact-item svg {
  color: #2563eb;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.legal-contact-item div {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.legal-contact-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #94a3b8;
}

.legal-contact-value {
  font-size: 0.9rem;
  color: #1e3a8a;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

a.legal-contact-value:hover {
  color: #2563eb;
  text-decoration: underline;
}

/* ─── Back Nav ─────────────────────────────────── */
.legal-back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.5rem;
  flex-wrap: wrap;
}

.legal-back__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  color: #1e3a8a;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.65rem 1.25rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s;
}

.legal-back__btn:hover {
  background: #eff6ff;
  border-color: #bfdbfe;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37,99,235,0.12);
}

.legal-back__btn--alt {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff;
}

.legal-back__btn--alt:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

/* ─── Responsive ───────────────────────────────── */
@media (max-width: 1024px) {
  .legal-body {
    grid-template-columns: 1fr;
  }

  .legal-toc {
    position: static;
  }
}

@media (max-width: 640px) {
  .legal-hero {
    padding: 3rem 0 2.5rem;
  }

  .legal-section {
    padding: 1.5rem;
  }

  .legal-contact-grid {
    grid-template-columns: 1fr;
  }

  .legal-back {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .legal-back__btn {
    justify-content: center;
  }
}
</style>
