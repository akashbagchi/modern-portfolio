<script setup lang="ts">
import { watch } from 'vue'
import NavBar from '../components/layout/NavBar.vue'
import { useTheme } from '../composables/use-theme.ts'

const { colorMode, toggleTheme } = useTheme()

onMounted(() => {
  if (process.client) {
    const storedTheme = localStorage.getItem('color-scheme')
    if (storedTheme) {
      colorMode.value = storedTheme
    }
  }
})

watch(colorMode, (newValue) => {
  if (process.client) {
    localStorage.setItem('color-scheme', newValue)
  }
})
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="fixed-header-area fixed top-0 z-50 w-full">
      <header
        class="border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80"
      >
        <NavBar @toggle-dark="toggleTheme" />
      </header>

      <!-- <div class="mx-auto w-full max-w-7xl px-4">
        <DevBuildNotification />
      </div> -->
    </div>

    <!-- <MobileAlert
      message="Mobile support is currently under development. Some features may not work as expected."
      class="mobile-alert"
      /> -->

    <main class="mx-auto mt-16 w-full max-w-7xl flex-grow px-4">
      <slot />
    </main>

    <footer class="w-full border-t border-gray-200 p-4 text-center dark:border-gray-800">
      <div
        class="flex items-center justify-center gap-4 font-mono text-sm text-gray-600 dark:text-gray-400"
      >
        <span> © {{ new Date().getFullYear() }} Akash Bagchi </span>
        <a
          href="https://github.com/akashbagchi/modern-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
        >
          <i class="pi pi-github" />
          <span class="ml-1">Source</span>
        </a>
      </div>
    </footer>
  </div>
</template>
