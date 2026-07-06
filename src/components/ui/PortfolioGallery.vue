<template>
  <div class="portfolio-gallery">
    <!-- Slides Container -->
    <div class="gallery__frame">
      <div
        ref="trackRef"
        class="gallery__track"
        @scroll="onScroll"
      >
        <div
          v-for="(img, idx) in images"
          :key="img.id"
          class="gallery__slide"
        >
          <img
            :src="img.image_url"
            :alt="'Gallery image ' + (idx + 1)"
            class="gallery__slide-img"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Nav Arrows -->
      <button
        v-if="images.length > 1"
        class="gallery__arrow gallery__arrow--prev"
        :disabled="activeIndex <= 0"
        aria-label="Previous image"
        @click="slideTo(activeIndex - 1)"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        v-if="images.length > 1"
        class="gallery__arrow gallery__arrow--next"
        :disabled="activeIndex >= images.length - 1"
        aria-label="Next image"
        @click="slideTo(activeIndex + 1)"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <!-- Dots Indicator -->
    <div v-if="images.length > 1" class="gallery__dots">
      <button
        v-for="(img, idx) in images"
        :key="'dot-' + img.id"
        class="gallery__dot"
        :class="{ active: activeIndex === idx }"
        aria-label="Go to image {{ idx + 1 }}"
        @click="slideTo(idx)"
      />
    </div>

    <!-- Counter -->
    <div v-if="images.length > 1" class="gallery__counter">
      {{ activeIndex + 1 }} / {{ images.length }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
})

const trackRef = ref(null)
const activeIndex = ref(0)

function slideTo(idx) {
  if (!trackRef.value) return
  const slides = trackRef.value.querySelectorAll('.gallery__slide')
  if (!slides[idx]) return
  slides[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  activeIndex.value = idx
}

function onScroll() {
  if (!trackRef.value) return
  const scrollLeft = trackRef.value.scrollLeft
  const slideWidth = trackRef.value.querySelector('.gallery__slide')?.offsetWidth || 1
  const idx = Math.round(scrollLeft / slideWidth)
  if (idx !== activeIndex.value) activeIndex.value = idx
}

watch(() => props.images, () => {
  activeIndex.value = 0
  nextTick(() => {
    if (trackRef.value) trackRef.value.scrollLeft = 0
  })
})
</script>

<style scoped>
.portfolio-gallery {
  position: relative;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
}

/* ── Frame & Track ─────────────────────────────── */
.gallery__frame {
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);
  background: var(--color-surface);
}

.gallery__track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.gallery__track::-webkit-scrollbar {
  display: none;
}

.gallery__slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery__slide-img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  display: block;
  transition: opacity 0.3s;
}

/* ── Arrows ────────────────────────────────────── */
.gallery__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  color: var(--color-bg-dark);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
}

.gallery__arrow:hover:not(:disabled) {
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.15);
  transform: translateY(-50%) scale(1.08);
}

.gallery__arrow:disabled {
  opacity: 0.25;
  cursor: default;
}

.gallery__arrow--prev {
  left: 12px;
}

.gallery__arrow--next {
  right: 12px;
}

/* ── Dots ───────────────────────────────────────── */
.gallery__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
}

.gallery__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  padding: 0;
  transition: all 0.25s ease;
}

.gallery__dot.active {
  width: 24px;
  border-radius: 4px;
  background: var(--color-primary);
}

.gallery__dot:hover:not(.active) {
  background: #9ca3af;
}

/* ── Counter ───────────────────────────────────── */
.gallery__counter {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-muted);
  font-variant-numeric: tabular-nums;
}
</style>
