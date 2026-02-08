<script setup lang="ts">
</script>

<template>
  <router-link to="/" class="flex items-center">
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="hover:opacity-80 transition-opacity"
    >
      <!-- V letter - staggered up -->
      <text
        x="4"
        y="22"
        font-family="JetBrains Mono, monospace"
        font-size="24"
        font-weight="600"
        fill="#e5e7eb"
        class="select-none"
      >
        V
      </text>
      
      <!-- T letter - staggered down -->
      <text
        x="18"
        y="28"
        font-family="JetBrains Mono, monospace"
        font-size="24"
        font-weight="600"
        fill="#e5e7eb"
        class="select-none"
      >
        T
      </text>
    </svg>
  </router-link>
</template>

<style scoped>
text {
  letter-spacing: -0.05em;
}
</style>
