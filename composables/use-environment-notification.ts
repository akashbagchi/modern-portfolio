import { onMounted, ref } from 'vue'

export function useEnvironmentNotification() {
  const showDevNotification = ref(false)
  const config = useRuntimeConfig()

  onMounted(() => {
    const isDevelopment = config.public.environment === 'development'
    const currentBranch = config.public.gitBranch || 'unknown'
    showDevNotification.value = isDevelopment || currentBranch !== 'main'
  })

  return {
    showDevNotification,
  }
}
