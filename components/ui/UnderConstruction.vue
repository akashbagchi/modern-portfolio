<script setup lang="ts">
interface Props {
  message?: string
  showHomeButton?: boolean
  class?: string
}

// Define props with defaults
withDefaults(defineProps<Props>(), {
  message: 'This page is under construction. Check back soon!',
  showHomeButton: true,
  class: '',
})

interface ConstructionFrame {
  icon: string
  label: string
}

const constructionFrames = ref<ConstructionFrame[]>([
  { icon: '🏗️', label: 'Building...' },
  { icon: '👷', label: 'Working...' },
  { icon: '🚧', label: 'In Progress...' },
])

// Handle animation frame switching
const currentFrameIndex = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    currentFrameIndex.value = (currentFrameIndex.value + 1) % constructionFrames.value.length
  }, 2000)

  onUnmounted(() => clearInterval(interval))
})

const currentFrame = computed(() => constructionFrames.value[currentFrameIndex.value])
</script>

<template>
  <div
    class="my-20 flex min-h-[400px] w-full flex-col items-center justify-center space-y-6 rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900/50"
  >
    <div class="animate-bounce text-6xl">
      {{ currentFrame.icon }}
    </div>

    <div class="space-y-2">
      <h2 class="font-mono text-xl font-semibold">
        {{ currentFrame.label }}
      </h2>
      <p class="font-mono text-gray-600 dark:text-gray-400">
        {{ message }}
      </p>
    </div>

    <NuxtLink
      v-if="showHomeButton"
      to="/"
      class="mt-4 inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 font-mono text-sm text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
    >
      <i class="pi pi-home mr-2" />
      Return Home
    </NuxtLink>
  </div>
</template>
