import { useColorMode } from '@vueuse/core'
import { ref, watch } from 'vue'

export function useTheme() {
  const colorMode = useColorMode({
    attribute: 'class',
    modes: {
      dark: 'dark',
      light: 'light',
    },
  })

  const isHydrated = ref(false)

  if (process.client) {
    onMounted(() => {
      isHydrated.value = true

      if (!localStorage.getItem('vueuse-color-scheme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        colorMode.value = prefersDark ? 'dark' : 'light'
      }
    })

    watch(colorMode, (newMode) => {
      if (isHydrated.value) {
        localStorage.setItem('vueuse-color-scheme', newMode)

        const themeColor = document.querySelector('meta#theme-color')
        if (themeColor) {
          themeColor.setAttribute('content', newMode === 'dark' ? '#111827' : '#ffffff')
        }
      }
    })
  }

  function toggleTheme() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  return {
    colorMode,
    isHydrated,
    toggleTheme,
  }
}
