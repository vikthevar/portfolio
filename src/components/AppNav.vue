<script setup lang="ts">
</script>

<template>
  <nav class="border-b border-gray-800">
    <div class="max-w-[900px] mx-auto px-6 py-4">
      <div class="flex gap-6 text-sm">
        <router-link 
          to="/" 
          class="text-gray-400 hover:text-gray-100 transition-colors"
          active-class="text-gray-100 border-b-2 border-blue-500 pb-1"
        >
          Home
        </router-link>
        <router-link 
          to="/projects" 
          class="text-gray-400 hover:text-gray-100 transition-colors"
          active-class="text-gray-100 border-b-2 border-blue-500 pb-1"
        >
          Projects
        </router-link>
        <router-link 
          to="/resume" 
          class="text-gray-400 hover:text-gray-100 transition-colors"
          active-class="text-gray-100 border-b-2 border-blue-500 pb-1"
        >
          Resume
        </router-link>
      </div>
    </div>
  </nav>
</template>
