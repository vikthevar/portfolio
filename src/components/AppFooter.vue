<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="border-t border-gray-800 mt-24">
    <div class="max-w-[900px] mx-auto px-6 py-8">
      <p class="text-xs text-gray-500">
        © {{ currentYear }} • Built with Vue
      </p>
    </div>
  </footer>
</template>
