<template>
  <div class="partner-logo">
    <span v-if="icon" class="partner-logo__icon" v-html="icon"></span>
    <img v-else-if="image" :src="image" :alt="name" class="partner-logo__img" />
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  icon: { type: String, default: '' },
  image: { type: String, default: '' },
})
</script>

<style scoped>
.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
  background: transparent;
  transition: all var(--transition-base);
  cursor: default;
}

.partner-logo:hover {
  transform: scale(1.1);
}

.partner-logo__icon,
.partner-logo__img {
  display: flex;
  align-items: center;
  height: 150px; /* Increased from 64px */
  width: auto;
  object-fit: contain;
  transition: all var(--transition-base);
  filter: grayscale(1) opacity(0.45);
}

.partner-logo:hover .partner-logo__icon,
.partner-logo:hover .partner-logo__img {
  filter: grayscale(0) opacity(1);
}

@media (max-width: 1024px) {
  .partner-logo {
    padding: var(--space-sm);
  }
  .partner-logo__icon,
  .partner-logo__img {
    height: 80px;
  }
}

@media (max-width: 640px) {
  .partner-logo {
    padding: 0.5rem;
  }
  .partner-logo__icon,
  .partner-logo__img {
    height: 50px;
  }
}
</style>
