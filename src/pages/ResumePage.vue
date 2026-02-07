<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { Download } from 'lucide-vue-next'
import { siteConfig } from '@/content/site'
</script>

<template>
  <DefaultLayout>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-2xl">Resume</h1>
      <a 
        :href="siteConfig.resumeUrl" 
        download
        class="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
      >
        <Download :size="16" />
        Download PDF
      </a>
    </div>

    <!-- Resume Content -->
    <div class="space-y-8 text-sm">
      <!-- Experience Section -->
      <section>
        <h2 class="text-base font-medium text-gray-300 mb-4 border-b border-gray-800 pb-2">
          Experience
        </h2>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-medium text-gray-200">Senior Software Engineer</h3>
              <span class="text-xs text-gray-500">2023 - Present</span>
            </div>
            <p class="text-gray-400 mb-2">Tech Corp</p>
            <ul class="space-y-1 text-gray-400">
              <li>• Led development of cloud-native applications serving 100K+ users</li>
              <li>• Architected microservices infrastructure reducing latency by 40%</li>
              <li>• Mentored junior engineers and drove technical excellence</li>
            </ul>
          </div>
          
          <div>
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-medium text-gray-200">Software Engineer</h3>
              <span class="text-xs text-gray-500">2021 - 2023</span>
            </div>
            <p class="text-gray-400 mb-2">Startup Inc</p>
            <ul class="space-y-1 text-gray-400">
              <li>• Built real-time analytics dashboard with WebSocket streaming</li>
              <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
              <li>• Collaborated with cross-functional teams on product features</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section>
        <h2 class="text-base font-medium text-gray-300 mb-4 border-b border-gray-800 pb-2">
          Education
        </h2>
        <div>
          <div class="flex justify-between items-start mb-1">
            <h3 class="font-medium text-gray-200">Bachelor of Science in Computer Science</h3>
            <span class="text-xs text-gray-500">2017 - 2021</span>
          </div>
          <p class="text-gray-400">University Name</p>
        </div>
      </section>

      <!-- Skills Section -->
      <section>
        <h2 class="text-base font-medium text-gray-300 mb-4 border-b border-gray-800 pb-2">
          Skills
        </h2>
        <div class="space-y-3">
          <div>
            <h3 class="font-medium text-gray-200 mb-2">Languages</h3>
            <p class="text-gray-400">TypeScript, Python, Go, JavaScript, SQL</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-200 mb-2">Frameworks & Tools</h3>
            <p class="text-gray-400">Vue.js, React, Node.js, Docker, Kubernetes, PostgreSQL, Redis</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-200 mb-2">Specialties</h3>
            <p class="text-gray-400">System Architecture, API Design, Performance Optimization, Cloud Infrastructure</p>
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>
