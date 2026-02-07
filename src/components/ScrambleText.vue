<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  texts: string[]
  speed?: number
  duration?: number
  charset?: string
  trigger?: 'hover' | 'mount'
  loop?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  speed: 50,
  duration: 2000,
  charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  trigger: 'mount',
  loop: true
})

const displayText = ref('')
const currentIndex = ref(0)
let intervalId: number | null = null
let timeoutId: number | null = null

const getRandomChar = () => {
  return props.charset[Math.floor(Math.random() * props.charset.length)]
}

const scramble = () => {
  if (intervalId) clearInterval(intervalId)
  if (timeoutId) clearTimeout(timeoutId)
  
  const targetText = props.texts[currentIndex.value]
  const startTime = Date.now()
  
  intervalId = window.setInterval(() => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    
    let result = ''
    for (let i = 0; i < targetText.length; i++) {
      if (i < progress * targetText.length) {
        result += targetText[i]
      } else {
        result += getRandomChar()
      }
    }
    
    displayText.value = result
    
    if (progress >= 1) {
      if (intervalId) clearInterval(intervalId)
      displayText.value = targetText
      
      if (props.loop) {
        timeoutId = window.setTimeout(() => {
          currentIndex.value = (currentIndex.value + 1) % props.texts.length
          scramble()
        }, 800)
      }
    }
  }, props.speed)
}

const handleHover = () => {
  if (props.trigger === 'hover') {
    scramble()
  }
}

onMounted(() => {
  if (props.trigger === 'mount') {
    displayText.value = props.texts[0]
    scramble()
  } else {
    displayText.value = props.texts[0]
  }
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<template>
  <span 
    @mouseenter="handleHover"
    class="inline-block font-mono"
  >
    {{ displayText }}
  </span>
</template>
