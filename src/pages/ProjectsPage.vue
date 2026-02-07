<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { projects } from '@/content/projects'
</script>

<template>
  <DefaultLayout>
    <h1 class="text-2xl mb-8">Projects</h1>
    
    <div class="space-y-8">
      <article v-for="project in projects" :key="project.title" class="border-l-2 border-gray-800 pl-6">
        <h2 class="text-lg font-medium text-gray-200 mb-2">
          {{ project.title }}
        </h2>
        
        <p class="text-sm text-gray-400 mb-3 leading-relaxed">
          {{ project.description }}
        </p>
        
        <div class="flex flex-wrap gap-2 mb-3">
          <span 
            v-for="tech in project.tech" 
            :key="tech" 
            class="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded"
          >
            {{ tech }}
          </span>
        </div>
        
        <div class="flex gap-4 text-sm">
          <a 
            v-if="project.github" 
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-300 transition-colors"
          >
            GitHub →
          </a>
          <a 
            v-if="project.live" 
            :href="project.live"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Live Demo →
          </a>
        </div>
      </article>
    </div>
  </DefaultLayout>
</template>
