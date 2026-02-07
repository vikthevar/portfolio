<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ScrambleText from '@/components/ScrambleText.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import { siteConfig } from '@/content/site'
</script>

<template>
  <DefaultLayout>
    <!-- Intro Section -->
    <section class="mb-16">
      <h1 class="text-2xl mb-4">
        Hey 👋, I'm <ScrambleText :texts="[siteConfig.fullName, siteConfig.shortName]" />
      </h1>
      <p class="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
        {{ siteConfig.about }}
      </p>
    </section>

    <!-- Social Links -->
    <section class="mb-16">
      <p class="text-xs text-gray-500 mb-3">Also on:</p>
      <SocialLinks :links="siteConfig.social" />
    </section>

    <!-- Project Highlights Section -->
    <section v-if="siteConfig.projectHighlights.length" class="mb-16">
      <h2 class="text-sm font-medium text-gray-400 mb-4">Project Highlights</h2>
      <div class="space-y-4">
        <div v-for="project in siteConfig.projectHighlights" :key="project.title" class="border-l-2 border-gray-800 pl-4">
          <h3 class="text-sm text-gray-300 font-medium mb-1">{{ project.title }}</h3>
          <p class="text-xs text-gray-500 mb-2">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.tech" 
              :key="tech" 
              class="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Reads Section -->
    <section v-if="siteConfig.latestReads.length" class="mb-16">
      <h2 class="text-sm font-medium text-gray-400 mb-4">Latest Reads</h2>
      <ul class="space-y-2">
        <li v-for="read in siteConfig.latestReads" :key="read.title" class="text-sm text-gray-400 leading-relaxed">
          • <a :href="read.url" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors">{{ read.title }}</a>
          <span class="text-gray-600 text-xs ml-2">({{ read.type }})</span>
        </li>
      </ul>
    </section>

    <!-- Connect Section -->
    <section>
      <h2 class="text-sm font-medium text-gray-400 mb-3">Let's Connect</h2>
      <p class="text-sm text-gray-400">
        Shoot me an 
        <a :href="`mailto:${siteConfig.social.email}`" class="text-blue-400 hover:text-blue-300 transition-colors">email</a>
        or message on 
        <a :href="siteConfig.social.linkedin" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a>.
      </p>
    </section>
  </DefaultLayout>
</template>
