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
      <p class="text-sm text-gray-400 leading-relaxed">
        {{ siteConfig.about }}
      </p>
    </section>

    <!-- Social Links -->
    <section class="mb-16">
      <p class="text-xs text-gray-500 mb-3">Also on:</p>
      <SocialLinks :links="siteConfig.social" />
    </section>

    <!-- Posts Section -->
    <section v-if="siteConfig.posts.length" class="mb-16">
      <h2 class="text-sm font-medium text-gray-400 mb-4">Posts</h2>
      <div class="space-y-3">
        <div v-for="post in siteConfig.posts" :key="post.title" class="border-l-2 border-gray-800 pl-4">
          <p class="text-xs text-gray-500">{{ post.date }}</p>
          <a :href="post.url" class="text-sm text-gray-300 hover:text-gray-100 transition-colors">
            {{ post.title }}
          </a>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section v-if="siteConfig.highlights.length" class="mb-16">
      <h2 class="text-sm font-medium text-gray-400 mb-4">Work Highlights</h2>
      <ul class="space-y-2">
        <li v-for="highlight in siteConfig.highlights" :key="highlight" class="text-sm text-gray-400 leading-relaxed">
          • {{ highlight }}
        </li>
      </ul>
    </section>

    <!-- Connect Section -->
    <section>
      <h2 class="text-sm font-medium text-gray-400 mb-3">Let's Connect</h2>
      <p class="text-sm text-gray-400">
        Feel free to reach out. Shoot me an 
        <a :href="`mailto:${siteConfig.social.email}`" class="text-blue-400 hover:text-blue-300 transition-colors">email</a>
        or schedule a call.
      </p>
    </section>
  </DefaultLayout>
</template>
