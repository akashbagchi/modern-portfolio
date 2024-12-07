<template>
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header
            class="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <NavBar @toggle-dark="toggleDarkmode" />
        </header>

        <main class="flex-grow mt-16 px-4 max-w-7xl mx-auto w-full">
            <slot />
        </main>

        <footer class="p-4 text-center w-full border-t border-gray-200 dark:border-gray-800">
            <p class="font-mono text-sm text-gray-600 dark:text-gray-400">© {{ new Date().getFullYear() }} Akash Bagchi</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import NavBar from '../components/layout/NavBar.vue';

const colorMode = useColorMode({
  attribute: 'class',
  modes: {
    dark: 'dark',
    light: ''
  }
})

const toggleDarkmode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>


