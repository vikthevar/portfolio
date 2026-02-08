<script setup lang="ts">
import Logo from './Logo.vue'
</script>

<template>
  <nav class="border-b border-gray-800">
    <div class="max-w-[900px] mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <Logo />
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
          <a 
            href="/VikramThevarResume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-100 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
