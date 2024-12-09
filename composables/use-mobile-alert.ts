import { ref } from 'vue'

export function useMobileAlert() {
  const isAlertDismissed = ref(false)
  const isMobile = ref(false)

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })

  function checkMobile() {
    isMobile.value = window.innerWidth < 768 // Standard mobile breakpoint
  }

  function dismissAlert() {
    isAlertDismissed.value = true
    localStorage.setItem('mobileAlertDismissed', 'true')
  }

  onMounted(() => {
    isAlertDismissed.value = localStorage.getItem('mobileAlertDismissed') === 'true'
  })

  const shouldShowAlert = computed(() => isMobile.value && !isAlertDismissed.value)

  return {
    isMobile,
    isAlertDismissed,
    shouldShowAlert,
    dismissAlert,
  }
}
