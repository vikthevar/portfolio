<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="border-t border-gray-800 mt-24">
    <div class="max-w-[900px] mx-auto px-6 py-8">
      <p class="text-xs text-gray-500">
        © {{ currentYear }} • 
        <a 
          href="https://github.com/vikthevar/portfolio" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-blue-400 hover:text-blue-300 transition-colors"
        >
          source code
        </a>
      </p>
    </div>
  </footer>
</template>
