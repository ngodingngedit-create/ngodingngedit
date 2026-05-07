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
}
</style>
