<script setup lang="ts">
import { useMobileAlert } from '~/composables/use-mobile-alert'

defineProps<{
  message?: 'Mobile support is currently under development. Some features may not work as expected.'
  class?: ''
}>()

const { shouldShowAlert, dismissAlert } = useMobileAlert()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div
      v-if="shouldShowAlert"
      class="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-yellow-100 bg-yellow-50 px-4 py-3 shadow-lg dark:border-yellow-800 dark:bg-yellow-900/70"
      :class="[className]"
    >
      <div class="flex items-center">
        <i class="pi pi-mobile mr-2 text-yellow-600 dark:text-yellow-400" />
        <p class="font-mono text-sm text-yellow-800 dark:text-yellow-200">
          {{ message }}
        </p>
      </div>
      <button
        class="ml-4 rounded-full p-1 hover:bg-yellow-100 dark:hover:bg-yellow-800/20"
        aria-label="Dismiss alert"
        @click="dismissAlert"
      >
        <i class="pi pi-times text-yellow-600 dark:text-yellow-400" />
      </button>
    </div>
  </Transition>
</template>
