<script setup lang="ts">
import { Linkedin, Github, Mail } from 'lucide-vue-next'

interface Props {
  links: {
    linkedin?: string
    github?: string
    email?: string
  }
}

defineProps<Props>()
</script>

<template>
  <div class="flex gap-4 items-center">
    <a 
      v-if="links.linkedin" 
      :href="links.linkedin"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      class="text-gray-400 hover:text-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
    >
      <Linkedin :size="20" />
    </a>
    <a 
      v-if="links.github" 
      :href="links.github"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      class="text-gray-400 hover:text-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
    >
      <Github :size="20" />
    </a>
    <a 
      v-if="links.email" 
      :href="`mailto:${links.email}`"
      aria-label="Email"
      class="text-gray-400 hover:text-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
    >
      <Mail :size="20" />
    </a>
  </div>
</template>
