<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0b0f14] text-gray-300">
    <AppNav />
    <main class="max-w-[900px] mx-auto px-6 py-12">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
