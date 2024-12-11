import { onMounted, onUnmounted, ref } from 'vue'

interface UseMobileOptions {
  breakpoint?: number
  watchResize?: boolean
}

export function useMobile(options: UseMobileOptions = {}) {
  const { breakpoint = 768, watchResize = true } = options
  const isMobile = ref(false)

  const checkMobile = () => {
    isMobile.value = window.innerWidth < breakpoint
  }

  onMounted(() => {
    checkMobile()
    if (watchResize) {
      window.addEventListener('resize', checkMobile)
    }
  })

  onUnmounted(() => {
    if (watchResize) {
      window.removeEventListener('resize', checkMobile)
    }
  })

  return {
    isMobile,
    checkMobile,
  }
}
