<template>
  <main class="sv">
    <!-- HERO / CATEGORY PICKER -->
    <section class="sv-hero" ref="heroSection">
      <!-- Parallax Background -->
      <div class="sv-hero__bg" aria-hidden="true" :style="{ transform: `translateY(${scrollY * 0.4}px)` }">
        <div class="sv-hero__grid"></div>
        <div class="sv-hero__orb sv-hero__orb--1"></div>
        <div class="sv-hero__orb sv-hero__orb--2"></div>
      </div>

      <div class="container sv-hero__inner">
        <div class="sv-hero__heading reveal">
          <span class="sv-badge">
            <svg width="8" height="8" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="4"/></svg>
            {{ t.badge }}
          </span>
          <h1 class="sv-hero__title">{{ t.heroTitle1 }}<br/><span class="sv-hero__title-hl">{{ t.heroTitle2 }}</span></h1>
          <p class="sv-hero__sub">{{ t.heroSub }}</p>
        </div>

        <div class="sv-hero__cards reveal delay-100">
          <button class="sv-card sv-card--ngoding" @click="selectCategory('ngoding')" @mousemove="handleHeroMove($event, 'ngoding')" ref="heroNgodingRef">
            <div class="sv-card__border-glow"></div>
            <div class="sv-card__bg-glow"></div>
            <div class="sv-card__inner">
              <div class="sv-card__icon sv-card__icon--blue">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h2 class="sv-card__name">{{ t.ngodingTitle }}</h2>
              <p class="sv-card__sub">{{ t.ngodingSub }}</p>
              <ul class="sv-card__tags">
                <li v-for="tag in t.ngodingTags" :key="tag">{{ tag }}</li>
              </ul>
              <span class="sv-card__cta">{{ t.ngodingCta }}</span>
            </div>
          </button>

          <button class="sv-card sv-card--ngedit" @click="selectCategory('ngedit')" @mousemove="handleHeroMove($event, 'ngedit')" ref="heroNgeditRef">
            <div class="sv-card__border-glow sv-card__border-glow--purple"></div>
            <div class="sv-card__bg-glow sv-card__bg-glow--purple"></div>
            <div class="sv-card__inner">
              <div class="sv-card__icon sv-card__icon--purple">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              </div>
              <h2 class="sv-card__name">{{ t.ngeditTitle }}</h2>
              <p class="sv-card__sub">{{ t.ngeditSub }}</p>
              <ul class="sv-card__tags">
                <li v-for="tag in t.ngeditTags" :key="tag">{{ tag }}</li>
              </ul>
              <span class="sv-card__cta sv-card__cta--purple">{{ t.ngeditCta }}</span>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- BENTO GALLERY SECTION -->
    <section v-if="activeCategory" class="sv-gallery-section" id="gallery" ref="gallerySection">
      <div class="sv-gallery-content container">
        <div class="sv-gallery__topbar">
          <h2 class="sv-gallery__cat-label animate-fade-in">
            {{ activeCategory === 'ngoding' ? '< Ngoding />' : '▶ Ngedit' }}
          </h2>
          <span class="sv-gallery__count animate-fade-in">{{ activeItems.length }} {{ t.galleryAvail }}</span>
        </div>

        <!-- Symmetrical Immersive Grid -->
        <div class="services-grid">
          <article 
            v-for="(item, index) in activeItems" 
            :key="item.id"
            class="service-card animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @mousemove="handleMouseMove($event, index)"
            @mouseleave="handleMouseLeave(index)"
            @click="onServiceSelect(item, $event)"
            :ref="el => setCardRef(el, index)"
          >
            <!-- Magic Glow Border -->
            <div class="service-card__border-glow"></div>
            
            <div class="service-card__inner">
              <div class="service-card__img-wrap">
                <img :src="item.image" :alt="item.title" class="service-card__img" loading="lazy" />
              </div>

              <div class="service-card__content">
                <div class="service-card__content-top">
                  <span class="sv-badge">{{ item.badge }}</span>
                  <h3 class="service-card__title">{{ item.title }}</h3>
                  <p class="service-card__desc">{{ item.description }}</p>
                </div>
                
                <div class="service-card__footer">
                  <div class="service-card__price-wrap">
                    <span class="service-card__price-label">{{ t.cardStartFrom }}</span>
                    <strong class="service-card__price">{{ item.price }}</strong>
                  </div>
                  <button 
                    class="service-card__add-btn" 
                    @click.stop="addToEstimation(item, 1)"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    <span>{{ isSelected(item) ? t.cardAdded : t.cardAdd }}</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- DETAIL MODAL (Overlay) -->
    <Transition name="modal">
      <div v-if="selectedService" 
           class="sv-modal" 
           @click.self="selectedService = null"
           :style="{ '--modal-origin-x': modalOrigin.x, '--modal-origin-y': modalOrigin.y }">
        <article class="sv-modal__card">
          <button class="sv-modal__close" @click="selectedService = null">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          
          <div class="sv-modal__layout">
            <div class="sv-modal__img-wrap">
              <img :src="selectedService.image" :alt="selectedService.title" class="sv-modal__img"/>
              <div class="sv-modal__img-overlay"></div>
            </div>
            
            <div class="sv-modal__body">
              <div class="sv-modal__header">
                <span class="sv-badge sv-badge--sm">{{ selectedService.badge }}</span>
                <h2 class="sv-modal__title">{{ selectedService.title }}</h2>
              </div>
              
              <p class="sv-modal__desc">{{ selectedService.description }}</p>
              
              <div class="sv-modal__features" v-if="selectedService.features">
                <h4 class="sv-modal__features-title">{{ t.modalIncludes }}</h4>
                <ul>
                  <li v-for="feat in selectedService.features" :key="feat">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ feat }}
                  </li>
                </ul>
              </div>
              
              <div class="sv-modal__qty">
                <span class="sv-modal__qty-label">{{ t.modalQty }}</span>
                <div class="sv-qty-control">
                  <button class="sv-qty-btn" @click="qty = Math.max(1, qty - 1)">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </button>
                  <input type="number" class="sv-qty-input" v-model.number="qty" min="1" />
                  <button class="sv-qty-btn" @click="qty++">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </button>
                </div>
              </div>
              
              <div class="sv-modal__footer">
                <div class="sv-modal__price-wrap">
                  <span class="sv-modal__price-label">{{ qty > 1 ? t.modalTotal.replace('{qty}', qty) : t.cardStartFrom }}</span>
                  <strong class="sv-modal__price">{{ formatPrice(selectedService.basePrice * qty) }}</strong>
                </div>
                <button 
                  class="sv-modal__cta" 
                  @click="addToEstimation(selectedService, qty)"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  {{ isSelected(selectedService) ? t.cardAdded : t.modalAdd }}
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Transition>

    <!-- SIMULATION FLOATING BAR -->
    <Transition name="slide-up">
      <div v-if="selectedItems.length > 0" class="sv-sim-bar">
        <div class="container sv-sim-bar-wrapper">
          <!-- Cart Popover -->
          <Transition name="fade-slide">
            <div v-if="showCart" class="sv-sim-cart">
              <div class="sv-sim-cart__header">
                <h4>{{ t.barDetail }}</h4>
                <button class="sv-sim-cart__close" @click="showCart = false" :title="t.barClose">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div class="sv-sim-cart__items">
                <div v-for="item in selectedItems" :key="item.id" class="sv-sim-cart__item">
                  <div class="sv-sim-cart__item-info">
                    <span class="sv-sim-cart__item-title">{{ item.title }}</span>
                    <span class="sv-sim-cart__item-price">{{ formatPrice(item.basePrice * item.qty) }}</span>
                  </div>
                  <div class="sv-sim-cart__qty-ctrl">
                    <button class="sv-sim-cart__qty-btn" @click="decreaseItemQty(item)">-</button>
                    <span class="sv-sim-cart__qty-val">{{ item.qty }}</span>
                    <button class="sv-sim-cart__qty-btn" @click="addToEstimation(item, 1)">+</button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <div class="sv-sim-bar__inner">
            <div class="sv-sim-bar__info" @click="showCart = !showCart" style="cursor: pointer;" :title="t.barDetail">
              <span class="sv-sim-bar__count">{{ totalItemsCount }} {{ t.barSelected }}</span>
              <div class="sv-sim-bar__total-wrap">
                <span class="sv-sim-bar__total-label">{{ t.barTotal }} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:4px; opacity:0.7; transform:translateY(1px); display:inline-block"><polyline points="18 15 12 9 6 15"/></svg></span>
                <strong class="sv-sim-bar__total">{{ formattedTotal }}</strong>
              </div>
            </div>
            <div class="sv-sim-bar__actions">
              <button class="sv-sim-bar__btn-reset" @click="selectedItems = []; showCart = false" :title="t.barReset">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
              <a :href="whatsappLink" target="_blank" class="sv-sim-bar__btn-cta">
                {{ t.barConsult }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import img3dModel from '@/assets/images/services/3d-model.png'
import { globalLang as lang } from '@/store.js'

const t = computed(() => lang.value === 'id' ? {
  badge: 'Layanan Kami',
  heroTitle1: 'Pilih Kategori',
  heroTitle2: 'Layanan Anda',
  heroSub: 'Dua divisi. Satu tujuan — mengangkat bisnis Anda.',
  ngodingTitle: 'Ngoding',
  ngodingSub: 'Website · Aplikasi · Solusi Digital',
  ngodingTags: ['Company Profile', 'Landing Page', 'E-Commerce'],
  ngodingCta: 'Jelajahi Ngoding →',
  ngeditTitle: 'Ngedit',
  ngeditSub: 'Video · Motion Graphics · Konten Kreatif',
  ngeditTags: ['Short-Form', 'Video Promosi', 'Podcast'],
  ngeditCta: 'Jelajahi Ngedit →',
  galleryAvail: 'Layanan Tersedia',
  cardAdd: 'Tambah',
  cardAdded: 'Tambah Lagi',
  cardStartFrom: 'Mulai dari',
  modalIncludes: 'Termasuk:',
  modalQty: 'Estimasi Jumlah:',
  modalTotal: 'Total Estimasi ({qty} unit)',
  modalAdd: 'Tambah ke Estimasi',
  modalUnit: 'unit',
  barSelected: 'Layanan Terpilih',
  barTotal: 'Estimasi Total',
  barDetail: 'Detail Estimasi',
  barReset: 'Reset Estimasi',
  barConsult: 'Konsultasikan',
  barClose: 'Tutup'
} : {
  badge: 'Our Services',
  heroTitle1: 'Choose Your',
  heroTitle2: 'Service Category',
  heroSub: 'Two divisions. One goal — elevating your business.',
  ngodingTitle: 'Coding',
  ngodingSub: 'Website · Apps · Digital Solutions',
  ngodingTags: ['Company Profile', 'Landing Page', 'E-Commerce'],
  ngodingCta: 'Explore Coding →',
  ngeditTitle: 'Editing',
  ngeditSub: 'Video · Motion Graphics · Creative Content',
  ngeditTags: ['Short-Form', 'Promo Video', 'Podcast'],
  ngeditCta: 'Explore Editing →',
  galleryAvail: 'Services Available',
  cardAdd: 'Add',
  cardAdded: 'Add More',
  cardStartFrom: 'Starting from',
  modalIncludes: 'Includes:',
  modalQty: 'Estimated Quantity:',
  modalTotal: 'Total Estimate ({qty} units)',
  modalAdd: 'Add to Estimate',
  modalUnit: 'units',
  barSelected: 'Services Selected',
  barTotal: 'Total Estimate',
  barDetail: 'Estimate Details',
  barReset: 'Reset Estimate',
  barConsult: 'Consult',
  barClose: 'Close'
})

const activeCategory = ref(null)
const selectedService = ref(null)
const scrollY = ref(0)
const gallerySection = ref(null)
const cardRefs = ref([])
const heroNgodingRef = ref(null)
const heroNgeditRef = ref(null)
const modalOrigin = ref({ x: '50%', y: '50%' })
const qty = ref(1)
const showCart = ref(false)

const decreaseItemQty = (item) => {
  const index = selectedItems.value.findIndex(i => i.id === item.id)
  if (index !== -1) {
    if (selectedItems.value[index].qty > 1) {
      selectedItems.value[index].qty--
    } else {
      selectedItems.value.splice(index, 1)
      if (selectedItems.value.length === 0) showCart.value = false
    }
  }
}

const formatPrice = (val) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(val).replace(/IDR/g, 'Rp').trim()
}

const selectedItems = ref([])

const codingServices = computed(() => [
  { id: 'web-company', badge: 'WEBSITE', title: 'Company Profiles', basePrice: 500000, price: 'Rp 500.000',
    description: lang.value === 'id' ? 'Website company profile profesional yang responsif, SEO-friendly, dan dirancang untuk meningkatkan kredibilitas bisnis Anda secara online.' : 'Professional, responsive, and SEO-friendly company profile websites designed to boost your online credibility.',
    features: lang.value === 'id' ? ['Desain Responsif & Modern', 'SEO Dasar', 'Integrasi WhatsApp', 'Maintenance Dasar'] : ['Responsive & Modern Design', 'Basic SEO', 'WhatsApp Integration', 'Basic Maintenance'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
  { id: 'web-landing', badge: 'WEBSITE', title: 'Landing Page', basePrice: 150000, price: 'Rp 150.000',
    description: lang.value === 'id' ? 'Landing page high-conversion dengan desain modern dan copywriting yang efektif untuk kampanye marketing Anda.' : 'High-conversion landing pages with modern design and effective copywriting for your marketing campaigns.',
    features: lang.value === 'id' ? ['Copywriting Persuasif', 'Optimasi Kecepatan', 'Form Leads / Call-to-Action', 'Analytics Setup'] : ['Persuasive Copywriting', 'Speed Optimization', 'Lead Forms / CTA', 'Analytics Setup'],
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&q=80' },
  { id: 'web-database', badge: 'BACKEND', title: 'Database Setup', basePrice: 300000, price: 'Rp 300.000',
    description: lang.value === 'id' ? 'Perancangan dan setup database yang aman, scalable, dan teroptimasi untuk kebutuhan aplikasi Anda.' : 'Design and setup of a secure, scalable, and optimized database for your application needs.',
    features: lang.value === 'id' ? ['Schema Design', 'Optimasi Query', 'Setup Keamanan', 'Backup Otomatis'] : ['Schema Design', 'Query Optimization', 'Security Setup', 'Automated Backups'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
  { id: 'domain', badge: 'DOMAIN', title: 'Connect Domain', basePrice: 100000, price: 'Rp 100.000',
    description: lang.value === 'id' ? 'Bantuan setup koneksi domain ke server atau hosting Anda, lengkap dengan konfigurasi DNS.' : 'Assistance connecting your domain to your server or hosting, complete with DNS configuration.',
    features: lang.value === 'id' ? ['Konfigurasi DNS', 'Integrasi Hosting', 'Setup CNAME/A Record', 'Bantuan Teknis'] : ['DNS Configuration', 'Hosting Integration', 'CNAME/A Record Setup', 'Technical Support'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80' },
  { id: 'server', badge: 'INFRA', title: 'Server / Hosting', basePrice: 300000, price: 'Rp 300.000',
    description: lang.value === 'id' ? 'Setup dan deployment aplikasi Anda ke server cloud (VPS) atau hosting yang andal dan cepat.' : 'Setup and deployment of your application to a reliable and fast cloud server (VPS) or hosting.',
    features: lang.value === 'id' ? ['Deployment Web/App', 'Konfigurasi VPS', 'Setup SSL (HTTPS)', 'Monitoring Dasar'] : ['Web/App Deployment', 'VPS Configuration', 'SSL Setup (HTTPS)', 'Basic Monitoring'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
])

const editingServices = computed(() => [
  { id: 'vid-short', badge: 'VIDEO', title: 'Short-Form Content', basePrice: 200000, price: 'Rp 200.000',
    description: lang.value === 'id' ? 'Editing video short-form untuk TikTok, Reels, dan Shorts dengan transisi dinamis dan pacing yang engaging.' : 'Short-form video editing for TikTok, Reels, and Shorts with dynamic transitions and engaging pacing.',
    features: ['Dynamic Subtitles', 'Sound Effects & BGM', 'Color Correction', 'Trend Adaptation'],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80' },
  { id: 'vid-promo', badge: 'VIDEO', title: lang.value === 'id' ? 'Video Promosi' : 'Promo Video', basePrice: 750000, price: 'Rp 750.000',
    description: lang.value === 'id' ? 'Video promosi sinematik dengan color grading profesional, motion graphics, dan sound design premium.' : 'Cinematic promo video with professional color grading, motion graphics, and premium sound design.',
    features: ['Cinematic Color Grading', 'Premium Motion Graphics', 'Licensed Music', 'Storytelling Edit'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80' },
  { id: 'vid-podcast', badge: 'VIDEO', title: 'Podcast Editing', basePrice: 350000, price: 'Rp 350.000',
    description: lang.value === 'id' ? 'Editing podcast lengkap — noise removal, leveling, chapter markers, dan visual waveform untuk YouTube.' : 'Complete podcast editing — noise removal, leveling, chapter markers, and visual waveforms for YouTube.',
    features: ['Audio Enhancement', 'Multi-cam Switching', 'Intro/Outro Addition', 'Chapter Generation'],
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80' },
  { id: 'vid-3d', badge: '3D MODEL', title: '3D Visualization', basePrice: 2500000, price: 'Rp 2.500.000',
    description: lang.value === 'id' ? 'Layanan pemodelan 3D dan render realistis untuk produk, arsitektur, atau karakter game dengan kualitas AAA.' : '3D modeling and realistic rendering services for products, architecture, or game characters with AAA quality.',
    features: ['High-Fidelity Rendering', 'Texture & Material Design', 'Animation Ready', 'Source File (Blend/FBX)'],
    image: img3dModel },
  { id: 'vid-motion', badge: 'MOTION', title: 'Motion Graphics', basePrice: 500000, price: 'Rp 500.000',
    description: lang.value === 'id' ? 'Animasi motion graphics untuk intro, lower thirds, infografis, dan branding visual yang eye-catching.' : 'Motion graphics animation for intros, lower thirds, infographics, and eye-catching visual branding.',
    features: ['Custom Animations', 'Logo Reveals', 'Infographic Video', 'Seamless Looping'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80' },
])

const activeItems = computed(() =>
  activeCategory.value === 'ngoding' ? codingServices.value : editingServices.value
)

const addToEstimation = (item, quantity) => {
  const index = selectedItems.value.findIndex(i => i.id === item.id)
  if (index === -1) {
    selectedItems.value.push({ ...item, qty: quantity })
  } else {
    selectedItems.value[index].qty += quantity
  }
}

const isSelected = (item) => {
  return selectedItems.value.some(i => i.id === item.id)
}

const parsePrice = (priceStr) => {
  return parseInt(priceStr.replace(/Rp /g, '').replace(/\./g, ''), 10) || 0
}

const totalItemsCount = computed(() => {
  return selectedItems.value.reduce((sum, item) => sum + item.qty, 0)
})

const totalPrice = computed(() => {
  return selectedItems.value.reduce((sum, item) => sum + (item.basePrice * item.qty), 0)
})

const formattedTotal = computed(() => {
  return formatPrice(totalPrice.value)
})

const whatsappLink = computed(() => {
  const phoneNumber = '628111776617' 
  let message = lang.value === 'id' 
    ? `Halo, saya tertarik dengan estimasi layanan berikut:\n\n`
    : `Hello, I'm interested in the following service estimation:\n\n`
  selectedItems.value.forEach(item => {
    message += `- ${item.title} (${item.qty} ${t.value.modalUnit} x ${formatPrice(item.basePrice)}) = ${formatPrice(item.basePrice * item.qty)}\n`
  })
  message += lang.value === 'id' 
    ? `\n*Estimasi Total: ${formattedTotal.value}*\n\nMohon informasi lebih lanjut.`
    : `\n*Total Estimate: ${formattedTotal.value}*\n\nPlease provide more information.`
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
})

function setCardRef(el, index) {
  if (el) cardRefs.value[index] = el
}

function handleMouseMove(e, index) {
  const card = cardRefs.value[index]
  if (!card) return
  const rect = card.getBoundingClientRect()
  
  // Magic Glow Coordinates
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)

  // 3D Tilt Parallax Coordinates
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -6 // Max 6 deg tilt
  const rotateY = ((x - centerX) / centerX) * 6
  
  card.style.setProperty('--rotate-x', `${rotateX}deg`)
  card.style.setProperty('--rotate-y', `${rotateY}deg`)
}

function handleMouseLeave(index) {
  const card = cardRefs.value[index]
  if (!card) return
  // Smoothly reset tilt
  card.style.setProperty('--rotate-x', `0deg`)
  card.style.setProperty('--rotate-y', `0deg`)
}

function handleHeroMove(e, cat) {
  const card = cat === 'ngoding' ? heroNgodingRef.value : heroNgeditRef.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

function onScroll() {
  scrollY.value = window.scrollY
}

async function selectCategory(cat) {
  activeCategory.value = cat
  await nextTick()
  if (gallerySection.value) {
    const y = gallerySection.value.getBoundingClientRect().top + window.scrollY - 80 // offset for navbar
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

function onServiceSelect(item, event) {
  if (event) {
    const rect = event.currentTarget.getBoundingClientRect()
    modalOrigin.value = {
      x: `${rect.left + rect.width / 2}px`,
      y: `${rect.top + rect.height / 2}px`
    }
  }
  qty.value = 1
  selectedService.value = item
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  
  const io = new IntersectionObserver(
    e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.sv { 
  background: #f1f5f9; /* Darker off-white for better card contrast */
  min-height: 100vh; 
}

/* Shared badge */
.sv-badge {
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  padding: 0.35rem 1.5rem; /* Padding horizontal diperbesar */
  border-radius: 999px;
  font-size: 0.6875rem; font-weight: 700;
  letter-spacing: 0.1em; /* Spasi huruf dilebarkan sedikit */
  text-transform: uppercase;
  color: var(--color-primary, #2563eb);
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.2);
}
.sv-badge--sm { font-size: 0.625rem; padding: 0.25rem 1.25rem; }

/* ══ HERO SECTION ════════════════════════════════════════ */
.sv-hero {
  position: relative;
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: calc(var(--navbar-height, 72px) + 3rem) 2rem 4rem;
  overflow: hidden;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.sv-hero__bg {
  position: absolute; inset: -50px; pointer-events: none;
  z-index: 0;
  will-change: transform;
}
.sv-hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.6) 0%, transparent 70%);
}
.sv-hero__orb {
  position: absolute; border-radius: 50%; filter: blur(90px);
}
.sv-hero__orb--1 {
  width: 500px; height: 500px;
  background: rgba(37,99,235,0.1);
  top: -100px; right: 10%;
}
.sv-hero__orb--2 {
  width: 380px; height: 380px;
  background: rgba(168,85,247,0.08);
  bottom: 0px; left: 10%;
}

.sv-hero__inner {
  position: relative; z-index: 1;
  display: flex; flex-direction: column; align-items: center;
  gap: 4rem; width: 100%;
}

/* Heading */
.sv-hero__heading {
  text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
}
.sv-hero__title {
  font-family: var(--font-heading,'Poppins',sans-serif);
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  font-weight: 800; color: #0f172a;
  letter-spacing: -0.03em; line-height: 1.08; margin: 0;
}
.sv-hero__title-hl {
  background: linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a855f7 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.sv-hero__sub {
  color: #64748b; font-size: 1.0625rem; line-height: 1.7; margin: 0;
}

/* Category Cards grid */
.sv-hero__cards {
  display: grid; grid-template-columns: repeat(2,1fr);
  gap: 2rem; width: 100%; max-width: 900px;
}

.sv-card {
  position: relative; overflow: hidden;
  padding: 1px; /* space for border glow */
  border-radius: 24px;
  background: rgba(0,0,0,0.08); /* Darker border color for clear boundary */
  cursor: pointer; text-align: left;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04); /* More defined shadow */
  transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
  border: none;
}
.sv-card:hover {
  transform: translateY(-8px) scale(1.015);
  box-shadow: 0 32px 72px rgba(37,99,235,0.08);
}
.sv-card--ngedit:hover {
  box-shadow: 0 32px 72px rgba(168,85,247,0.08);
}

.sv-card__border-glow {
  position: absolute; inset: 0; border-radius: inherit;
  background: radial-gradient(
    400px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(37,99,235,0.8),
    rgba(168,85,247,0.4),
    transparent 40%
  );
  opacity: 0; z-index: 0;
  transition: opacity 0.3s;
}
.sv-card__border-glow--purple {
  background: radial-gradient(
    400px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(168,85,247,0.8),
    rgba(217,70,239,0.4),
    transparent 40%
  );
}
.sv-card:hover .sv-card__border-glow { opacity: 1; }

.sv-card__bg-glow {
  position: absolute; inset: 1px; border-radius: calc(24px - 1px);
  background: radial-gradient(
    800px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(37,99,235,0.04),
    transparent 40%
  );
  opacity: 0; z-index: 1; pointer-events: none;
  transition: opacity 0.3s;
}
.sv-card__bg-glow--purple {
  background: radial-gradient(
    800px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(168,85,247,0.04),
    transparent 40%
  );
}
.sv-card:hover .sv-card__bg-glow { opacity: 1; }

.sv-card__inner {
  position: relative; z-index: 2;
  display: flex; flex-direction: column; align-items: flex-start; gap: 1.25rem;
  padding: 3rem 2.5rem;
  background: #ffffff;
  border-radius: calc(24px - 1px);
  height: 100%; width: 100%;
}

.sv-card__icon {
  width: 72px; height: 72px; border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
}
.sv-card__icon--blue { background: rgba(37,99,235,0.1); color: #2563eb; }
.sv-card__icon--purple { background: rgba(168,85,247,0.1); color: #a855f7; }
.sv-card:hover .sv-card__icon { transform: scale(1.1) rotate(-5deg); }
.sv-card--ngoding:hover .sv-card__icon { background: linear-gradient(135deg,#2563eb,#60a5fa); color: #fff; }
.sv-card--ngedit:hover .sv-card__icon { background: linear-gradient(135deg,#a855f7,#d946ef); color: #fff; }

.sv-card__name {
  font-family: var(--font-heading,'Poppins',sans-serif);
  font-size: 2rem; font-weight: 800; color: #0f172a; margin: 0; letter-spacing: -0.03em;
}
.sv-card__sub { font-size: 0.9rem; color: #64748b; line-height: 1.6; margin: 0; }

.sv-card__tags {
  display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0; margin: 0;
}
.sv-card__tags li {
  font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.06em;
  color: #475569; text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 4px;
  background: rgba(0,0,0,0.02);
}

.sv-card__cta {
  font-size: 0.8125rem; font-weight: 700; color: var(--color-primary,#2563eb);
  letter-spacing: 0.02em; margin-top: auto;
}
.sv-card__cta--purple { color: #a855f7; }
.sv-card:hover .sv-card__cta { text-decoration: underline; }


/* ══ BENTO GALLERY SECTION ════════════════════════════════════ */
.sv-gallery-section {
  position: relative;
  min-height: 100vh;
  background: #f1f5f9; /* matches new sv background */
  padding-bottom: 6rem;
  animation: fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.sv-gallery__topbar {
  display: flex; align-items: flex-end; justify-content: space-between;
  padding: 2rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.sv-gallery__cat-label {
  font-family: var(--font-heading,'Poppins',sans-serif);
  font-size: 2.25rem; font-weight: 800; color: #0f172a;
  letter-spacing: -0.02em; margin: 0;
}

.sv-gallery__count {
  font-size: 0.875rem; font-weight: 600;
  color: #64748b;
  text-transform: uppercase; letter-spacing: 0.05em;
  padding-bottom: 0.5rem;
}

/* ══ SYMMETRICAL IMMERSIVE GRID ════════════════════════════════════ */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  perspective: 1200px; /* Needed for 3D tilt effect */
}

.service-card {
  position: relative;
  border-radius: 24px;
  background: rgba(0,0,0,0.12); /* Slightly darker border base */
  padding: 1.2px; /* Ditebelin dari 1px ke 2px biar border glow lebih kelihatan */
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-height: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  
  /* 3D Transform properties set by JS */
  transform: rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out, box-shadow 0.4s ease;
  will-change: transform;
}

.service-card:hover {
  box-shadow: 0 30px 60px rgba(37, 99, 235, 0.12);
  z-index: 10;
}

.service-card:active {
  /* Efek ditekan: mengecil sedikit dan rotasi 3D-nya tetap sinkron */
  transform: rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) scale(0.96);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.1s ease;
}

.service-card__border-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    500px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(37, 99, 235, 0.9), /* Naik dari 0.6 biar lebih tebal */
    rgba(168, 85, 247, 0.5), /* Naik dari 0.2 biar lebih tebal */
    transparent 60% /* Sebaran cahaya lebih luas */
  );
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.service-card:hover .service-card__border-glow { opacity: 1; }

.service-card__inner {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: calc(24px - 1px);
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  transform-style: preserve-3d;
}

.service-card__img-wrap {
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.service-card__img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.22,1,0.36,1);
}
.service-card:hover .service-card__img { transform: scale(1.08); }

.service-card__content {
  flex: 1;
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  
  /* The magic: lifts text closer to user during 3D tilt */
  transform: translateZ(40px);
  transition: transform 0.3s ease;
}

.service-card__title {
  font-family: var(--font-heading,'Poppins',sans-serif);
  font-size: 1.15rem; font-weight: 800; color: #0f172a;
  margin: 1rem 0 0.5rem; letter-spacing: -0.02em;
}

.service-card__desc {
  font-size: 0.9rem; color: #64748b; line-height: 1.6; margin: 0;
}

.service-card__footer {
  display: flex; align-items: flex-end; justify-content: space-between;
  margin-top: auto;
}

.service-card__price-wrap {
  display: flex; flex-direction: column; gap: 2px;
}
.service-card__price-label {
  font-size: 0.75rem; font-weight: 600; color: #94a3b8; text-transform: uppercase;
}
.service-card__price {
  font-size: 1.125rem; font-weight: 800; color: var(--color-primary, #2563eb);
}

.service-card__add-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f1f5f9;
  color: #334155;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.25s ease;
  z-index: 2;
}
.service-card__add-btn:hover {
  background: #e2e8f0;
  transform: translateY(-2px);
}
.service-card__add-btn.is-selected {
  background: var(--color-primary, #2563eb);
  color: #fff;
}
.service-card__add-btn.is-selected:hover {
  background: #1d4ed8;
}

@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .sv-gallery__topbar { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
}

/* ══ DETAIL MODAL ════════════════════════════════════════ */
.sv-modal {
  position: fixed; inset: 0; z-index: 2000;
  display: flex; align-items: center; justify-content: center; padding: 2rem;
  background: rgba(15,23,42,0.85); backdrop-filter: blur(12px);
}
.sv-modal__card {
  position: relative; width: 100%; max-width: 1050px;
  border-radius: 24px; overflow: hidden;
  background: #ffffff;
  box-shadow: 0 40px 100px rgba(0,0,0,0.4);
  /* Origin dinamis berdasarkan card yang diklik */
  transform-origin: var(--modal-origin-x, 50%) var(--modal-origin-y, 50%);
}
.sv-modal__close {
  position: absolute; top: 1rem; right: 1rem; z-index: 10;
  width: 38px; height: 38px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #ffffff;
  background: rgba(0,0,0,0.4); backdrop-filter: blur(8px);
  cursor: pointer; transition: all 0.2s ease; border: none;
}
.sv-modal__close:hover { background: rgba(0,0,0,0.6); transform: scale(1.05); }

.sv-modal__layout {
  display: flex;
  flex-direction: column;
}

.sv-modal__img-wrap { 
  height: 240px; overflow: hidden; position: relative; 
}
.sv-modal__img { width: 100%; height: 100%; object-fit: cover; }
.sv-modal__img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 60%);
}

.sv-modal__body { 
  padding: 0 2.5rem 2rem; display: flex; flex-direction: column; gap: 1rem;
  margin-top: -2rem; /* Pull up to overlap gradient slightly */
  position: relative;
  z-index: 2;
}

.sv-modal__header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.sv-modal__title {
  font-family: var(--font-heading,'Poppins',sans-serif);
  font-size: 2rem; font-weight: 800; color: #0f172a; margin: 0; letter-spacing: -0.02em;
}

.sv-modal__desc { 
  font-size: 0.9375rem; line-height: 1.6; color: #475569; margin: 0; 
}

.sv-modal__features {
  margin-top: 0.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.sv-modal__features-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.75rem 0;
}

.sv-modal__features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.sv-modal__features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
}

/* Qty Control */
.sv-modal__qty {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-top: 0.5rem;
}
.sv-modal__qty-label { font-size: 0.9375rem; font-weight: 700; color: #1e293b; }
.sv-qty-control { display: flex; align-items: center; gap: 0.75rem; }
.sv-qty-btn {
  width: 36px; height: 36px; border-radius: 10px;
  border: 1px solid #cbd5e1; background: #fff;
  color: #0f172a; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.sv-qty-btn:hover { 
  background: #f1f5f9; border-color: var(--color-primary, #2563eb); color: var(--color-primary, #2563eb);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
}
.sv-qty-btn:active { transform: translateY(0); }
.sv-qty-input {
  width: 40px; text-align: center; border: none; background: transparent;
  font-weight: 800; color: #0f172a; font-size: 1.125rem;
  font-family: inherit;
}
.sv-qty-input::-webkit-inner-spin-button, .sv-qty-input::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }

.sv-modal__footer {
  display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem;
  padding-top: 1rem; margin-top: 0.25rem;
  border-top: 1px solid #e2e8f0;
}
.sv-modal__price-label {
  display: block; font-size: 0.75rem; font-weight: 600;
  color: #64748b; text-transform: uppercase; letter-spacing: 0.07em;
}
.sv-modal__price {
  font-family: var(--font-heading,'Poppins',sans-serif);
  font-size: 1.75rem; font-weight: 800; color: var(--color-primary,#2563eb); letter-spacing: -0.02em;
}
.sv-modal__cta {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 0.75rem 1.5rem; border-radius: 8px;
  background: var(--color-primary,#2563eb); color: #fff;
  font-size: 0.9rem; font-weight: 700;
  box-shadow: 0 4px 16px rgba(37,99,235,0.35);
  transition: all 0.25s ease; white-space: nowrap;
}
.sv-modal__cta:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(37,99,235,0.45); }

.sv-modal__cta.is-selected {
  background: #10b981;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);
}
.sv-modal__cta.is-selected:hover {
  background: #059669;
  box-shadow: 0 6px 24px rgba(16, 185, 129, 0.45);
}

/* Transitions */
.modal-enter-active { transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-leave-active { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.modal-enter-from { opacity: 0; }
.modal-enter-from .sv-modal__card { transform: scale(0.1); }
.modal-leave-to { opacity: 0; }
.modal-leave-to .sv-modal__card { transform: scale(0.9); }

/* ══ SIMULATION FLOATING BAR ════════════════════════════════════ */
.sv-sim-bar {
  position: fixed;
  bottom: 24px;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  pointer-events: none;
  padding: 0 1rem;
}

.sv-sim-bar-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
}

.sv-sim-cart {
  position: absolute;
  bottom: calc(100% + 16px);
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.05) inset;
  pointer-events: auto;
}

.sv-sim-cart__header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.sv-sim-cart__header h4 { margin: 0; color: #fff; font-size: 1.125rem; font-family: var(--font-heading,'Poppins',sans-serif); }
.sv-sim-cart__close { 
  background: rgba(255,255,255,0.1); border: none; color: #fff; 
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all 0.2s; 
}
.sv-sim-cart__close:hover { background: rgba(255,255,255,0.2); transform: scale(1.05); }

.sv-sim-cart__items {
  max-height: 300px; overflow-y: auto;
  display: flex; flex-direction: column; gap: 0.75rem;
}
.sv-sim-cart__items::-webkit-scrollbar { width: 6px; }
.sv-sim-cart__items::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }

.sv-sim-cart__item {
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  padding: 0.75rem 1rem; background: rgba(255,255,255,0.03); border-radius: 12px;
}

.sv-sim-cart__item-info { display: flex; flex-direction: column; gap: 0.1rem; flex: 1; }
.sv-sim-cart__item-title { color: #fff; font-size: 0.9375rem; font-weight: 600; }
.sv-sim-cart__item-price { color: #94a3b8; font-size: 0.8125rem; font-weight: 600; }

.sv-sim-cart__qty-ctrl {
  display: flex; align-items: center; gap: 0.75rem;
  background: rgba(0,0,0,0.3); padding: 0.35rem; border-radius: 10px;
}
.sv-sim-cart__qty-btn {
  width: 28px; height: 28px; border-radius: 6px; border: none; background: rgba(255,255,255,0.1);
  color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; font-weight: 800;
}
.sv-sim-cart__qty-btn:hover { background: rgba(255,255,255,0.25); }
.sv-sim-cart__qty-val { color: #fff; font-size: 0.875rem; font-weight: 700; min-width: 20px; text-align: center; }

/* fade-slide animation */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
.fade-slide-enter-from, .fade-slide-leave-to { opacity: 0; transform: translateY(10px); }

.sv-sim-bar__inner {
  pointer-events: auto;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  padding: 0.75rem 1.25rem 0.75rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255,255,255,0.05) inset;
  width: 100%;
  justify-content: space-between;
}


.sv-sim-bar__info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.sv-sim-bar__count {
  font-size: 0.875rem;
  font-weight: 600;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.35rem 0.85rem;
  border-radius: 99px;
  white-space: nowrap;
}

.sv-sim-bar__total-wrap {
  display: flex;
  flex-direction: column;
}

.sv-sim-bar__total-label {
  font-size: 0.6875rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.sv-sim-bar__total {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
}

.sv-sim-bar__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.sv-sim-bar__btn-reset {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: #ef4444;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sv-sim-bar__btn-reset:hover {
  background: rgba(239, 68, 68, 0.1);
  transform: scale(1.05);
}

.sv-sim-bar__btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.85rem 1.75rem;
  border-radius: 99px;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.sv-sim-bar__btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}

/* Responsive */
@media (min-width: 768px) {
  .sv-modal__layout {
    flex-direction: row;
  }
  .sv-modal__img-wrap {
    width: 40%;
    height: auto;
    min-height: 320px;
  }
  .sv-modal__img-overlay {
    background: linear-gradient(to right, rgba(255,255,255,1) 0%, transparent 60%);
    left: auto; right: 0; width: 100%;
    transform: scaleX(-1);
  }
  .sv-modal__body {
    width: 60%;
    padding: 2rem 2.5rem;
    margin-top: 0;
  }
}
@media (max-width: 768px) {
  .sv-hero__cards { grid-template-columns: 1fr; }
  .sv-modal__features ul { grid-template-columns: 1fr; }

  .sv-sim-bar {
    bottom: 16px;
  }
  .sv-sim-bar__inner {
    flex-direction: column;
    padding: 1.25rem;
    border-radius: 24px;
    gap: 1.25rem;
  }
  .sv-sim-bar__info {
    width: 100%;
    justify-content: space-between;
  }
  .sv-sim-bar__actions {
    width: 100%;
  }
  .sv-sim-bar__btn-cta {
    flex: 1;
    justify-content: center;
  }
}
@media (max-width: 640px) {
  .sv-card__inner { padding: 2.5rem 1.75rem; }
  .sv-card__name { font-size: 1.75rem; }
  .sv-modal__card { border-radius: 20px; }
  .sv-modal__footer { flex-direction: column; align-items: flex-start; }
}
</style>
