<template>
  <div
    ref="carouselRoot"
    class="carousel"
    :class="{ 'carousel--light': lightTheme }"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointerleave="onPointerUp"
    @keydown="onKeyDown"
    tabindex="0"
    role="listbox"
    :aria-label="`${categoryLabel} services carousel`"
  >
    <!-- 3D Stage -->
    <div class="carousel__stage" :style="stageStyle">
      <div
        v-for="(item, i) in items"
        :key="item.id"
        class="carousel__item"
        :class="{ 'carousel__item--active': activeIndex === i }"
        :style="getItemStyle(i)"
        @click="onItemClick(i)"
        role="option"
        :aria-selected="activeIndex === i"
        :aria-label="`${item.title}, ${item.price}`"
      >
        <div class="carousel__card">
          <!-- Image -->
          <div class="carousel__img-wrap">
            <img
              :src="item.image"
              :alt="item.title"
              class="carousel__img"
              loading="lazy"
              draggable="false"
            />
            <div class="carousel__img-overlay"></div>
          </div>

          <!-- Info -->
          <div class="carousel__info">
            <span class="carousel__badge">{{ item.badge }}</span>
            <h3 class="carousel__title">{{ item.title }}</h3>
            <p class="carousel__price">
              <span class="carousel__price-label">Starting from</span>
              {{ item.price }}
            </p>
            <!-- CTA hint on active card -->
            <span v-if="activeIndex === i" class="carousel__cta-hint">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Center indicator line -->
    <div class="carousel__center-line" aria-hidden="true"></div>

    <!-- Nav Arrows -->
    <button class="carousel__arrow carousel__arrow--prev" @click.stop="navigate(-1)" aria-label="Previous">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="carousel__arrow carousel__arrow--next" @click.stop="navigate(1)" aria-label="Next">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>

    <!-- Bottom HUD -->
    <div class="carousel__hud">
      <div class="carousel__hud-left">
        <span class="carousel__hud-dot"></span>
        <span>{{ categoryLabel }} · {{ items.length }} Services</span>
      </div>
      <div class="carousel__hud-center">
        <span
          v-for="(_, i) in items"
          :key="i"
          class="carousel__dot"
          :class="{ 'carousel__dot--active': activeIndex === i }"
          @click="snapToIndex(i)"
        ></span>
      </div>
      <div class="carousel__hud-right">
        <span>Drag → Explore</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  categoryLabel: { type: String, default: '' },
  lightTheme: { type: Boolean, default: false },
})

const emit = defineEmits(['select'])

// ─── Carousel geometry ───────────────────────────────────────
const RADIUS = 520
const ITEM_ANGLE_GAP = 36

const carouselRoot = ref(null)
const rotation = ref(0)
const targetRotation = ref(0)
const velocity = ref(0)
const isDragging = ref(false)
const lastPointerX = ref(0)
const animFrameId = ref(null)
const isIdle = ref(true)

const activeIndex = computed(() => {
  if (!props.items.length) return 0
  const totalAngle = props.items.length * ITEM_ANGLE_GAP
  const norm = ((rotation.value % totalAngle) + totalAngle) % totalAngle
  const idx = Math.round(norm / ITEM_ANGLE_GAP) % props.items.length
  return idx
})

const stageStyle = computed(() => ({
  transform: `translateZ(-${RADIUS}px) rotateY(${-rotation.value}deg)`,
}))

function getItemStyle(index) {
  const angle = index * ITEM_ANGLE_GAP
  return {
    transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
  }
}

// ─── Snap Logic ───────────────────────────────────────────────
function snapToIndex(index) {
  const totalAngle = props.items.length * ITEM_ANGLE_GAP
  // Find nearest snap point from current rotation
  const currentRound = Math.round(rotation.value / totalAngle)
  targetRotation.value = currentRound * totalAngle + index * ITEM_ANGLE_GAP
  velocity.value = 0
  wakeUp()
}

function snapToNearest() {
  const snapped = Math.round(targetRotation.value / ITEM_ANGLE_GAP) * ITEM_ANGLE_GAP
  targetRotation.value = snapped
}

// ─── Pointer / scroll handlers ───────────────────────────────
const pointerDownX = ref(0)
const dragDistance = ref(0)

function onPointerDown(e) {
  isDragging.value = true
  lastPointerX.value = e.clientX
  pointerDownX.value = e.clientX
  dragDistance.value = 0
  velocity.value = 0
  carouselRoot.value?.setPointerCapture?.(e.pointerId)
  wakeUp()
}

function onPointerMove(e) {
  if (!isDragging.value) return
  const dx = e.clientX - lastPointerX.value
  lastPointerX.value = e.clientX
  dragDistance.value += Math.abs(dx)
  targetRotation.value -= dx * 0.3
  velocity.value = -dx * 0.3
}

function onPointerUp() {
  if (isDragging.value) {
    isDragging.value = false
    dragDistance.value = 0
    snapToNearest()
  }
}

function onKeyDown(e) {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    navigate(-1)
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    navigate(1)
  }
}

function navigate(dir) {
  const next = (activeIndex.value + dir + props.items.length) % props.items.length
  snapToIndex(next)
}

// ─── RAF with idle optimization ───────────────────────────────
function wakeUp() {
  if (isIdle.value) {
    isIdle.value = false
    animFrameId.value = requestAnimationFrame(animate)
  }
}

function animate() {
  const diff = targetRotation.value - rotation.value
  rotation.value += diff * 0.08

  if (!isDragging.value) {
    velocity.value *= 0.92
    if (Math.abs(velocity.value) > 0.01) {
      targetRotation.value += velocity.value * 0.1
    }
  }

  const isSettled = Math.abs(diff) < 0.01 && Math.abs(velocity.value) < 0.01 && !isDragging.value
  if (isSettled) {
    rotation.value = targetRotation.value
    isIdle.value = true
    return // Stop RAF
  }

  animFrameId.value = requestAnimationFrame(animate)
}

function onItemClick(index) {
  if (dragDistance.value < 8) {
    if (activeIndex.value === index) {
      emit('select', props.items[index])
    } else {
      snapToIndex(index)
    }
  }
}

onMounted(() => {
  // Start with a small spin to hint interactivity
  targetRotation.value = 0
  rotation.value = 0
  wakeUp()
})

onUnmounted(() => {
  if (animFrameId.value) cancelAnimationFrame(animFrameId.value)
})
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  touch-action: none;
  perspective: 1200px;
  background: transparent;
  outline: none;
}

.carousel:active {
  cursor: grabbing;
}

/* ─── 3D Stage ────────────────────────────────────────────── */
.carousel__stage {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
  will-change: transform;
  margin-left: 0;
  margin-top: -140px;
}

/* ─── Individual item ─────────────────────────────────────── */
.carousel__item {
  position: absolute;
  width: 280px;
  height: 380px;
  margin-left: -140px;
  margin-top: -190px;
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden;
  transition: filter 0.4s ease, opacity 0.4s ease;
  opacity: 0.45;
  filter: brightness(0.5) saturate(0.3);
  cursor: pointer;
}

.carousel__item--active {
  opacity: 1;
  filter: brightness(1) saturate(1);
}

/* ─── Card ────────────────────────────────────────────────── */
.carousel__card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

/* Light theme card */
.carousel--light .carousel__card {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
}

.carousel__item--active .carousel__card {
  border-color: rgba(96, 165, 250, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    0 0 60px rgba(37, 99, 235, 0.18);
}

.carousel--light .carousel__item--active .carousel__card {
  border-color: rgba(37, 99, 235, 0.25);
  box-shadow:
    0 16px 48px rgba(37, 99, 235, 0.14),
    0 4px 12px rgba(0, 0, 0, 0.08);
}

/* ─── Image ───────────────────────────────────────────────── */
.carousel__img-wrap {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.carousel__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  transition: transform 0.5s ease;
}

.carousel__item--active .carousel__img {
  transform: scale(1.05);
}

.carousel__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 22, 40, 0.95) 0%,
    rgba(10, 22, 40, 0.2) 50%,
    transparent 100%
  );
}

.carousel--light .carousel__img-overlay {
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
}

/* ─── Info ────────────────────────────────────────────────── */
.carousel__info {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.carousel__badge {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(96, 165, 250, 0.9);
}

.carousel--light .carousel__badge {
  color: var(--color-primary, #2563eb);
}

.carousel__title {
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.0625rem;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: -0.01em;
}

.carousel--light .carousel__title {
  color: var(--color-text-primary, #0f172a);
}

.carousel__price {
  display: flex;
  flex-direction: column;
  font-family: var(--font-heading, 'Poppins', sans-serif);
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--color-primary, #0066FF);
  margin: 0;
  letter-spacing: -0.02em;
}

.carousel__price-label {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.carousel--light .carousel__price-label {
  color: rgba(0, 0, 0, 0.35);
}

.carousel__cta-hint {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary, #0066ff);
  letter-spacing: 0.03em;
  margin-top: 4px;
  opacity: 0;
  transform: translateY(4px);
  transition: all 0.3s ease;
}
.carousel__item--active .carousel__cta-hint {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Center line ─────────────────────────────────────────── */
.carousel__center-line {
  position: absolute;
  left: 50%;
  top: 12%;
  bottom: 25%;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(96, 165, 250, 0.2) 30%,
    rgba(96, 165, 250, 0.2) 70%,
    transparent
  );
  pointer-events: none;
  z-index: 1;
}

.carousel--light .carousel__center-line {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(37, 99, 235, 0.15) 30%,
    rgba(37, 99, 235, 0.15) 70%,
    transparent
  );
}

/* ─── Nav Arrows ──────────────────────────────────────────── */
.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
  margin-top: -70px; /* offset from stage center */
}

.carousel--light .carousel__arrow {
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(0, 0, 0, 0.1);
  color: var(--color-text-primary, #0f172a);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.carousel__arrow:hover {
  background: rgba(37, 99, 235, 0.85);
  color: white;
  border-color: transparent;
  transform: translateY(-50%) scale(1.08);
}

.carousel__arrow--prev { left: 2rem; }
.carousel__arrow--next { right: 2rem; }

/* ─── HUD ─────────────────────────────────────────────────── */
.carousel__hud {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  z-index: 10;
}

.carousel__hud-left,
.carousel__hud-right {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.carousel--light .carousel__hud-left,
.carousel--light .carousel__hud-right {
  color: rgba(0, 0, 0, 0.3);
}

.carousel__hud-center {
  display: flex;
  gap: 6px;
  align-items: center;
  pointer-events: all;
}

.carousel__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.25s ease;
}

.carousel--light .carousel__dot {
  background: rgba(0, 0, 0, 0.15);
}

.carousel__dot--active {
  background: var(--color-primary, #2563eb);
  transform: scale(1.4);
}

.carousel__hud-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
  animation: dot-pulse 2s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
}

/* ─── Responsive ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .carousel__item {
    width: 220px;
    height: 300px;
    margin-left: -110px;
    margin-top: -150px;
  }
  .carousel__arrow--prev { left: 0.75rem; }
  .carousel__arrow--next { right: 0.75rem; }
  .carousel__hud { bottom: 1.25rem; padding: 0 1.25rem; }
}
</style>
