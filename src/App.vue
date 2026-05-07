<template>
  <div id="app">
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarComponent from '@/components/layout/NavbarComponent.vue'
import FooterComponent from '@/components/layout/FooterComponent.vue'
import { RouterView } from 'vue-router'
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
