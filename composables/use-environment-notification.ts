import { onMounted, ref } from 'vue'

export function useEnvironmentNotification() {
  const showDevNotification = ref(false)
  const config = useRuntimeConfig()

  onMounted(() => {
    const isDevelopment = config.public.environment === 'development'
    const currentBranch = config.public.gitBranch || 'unknown'

    console.log({
      isDevelopment,
      currentBranch,
      shouldShow: isDevelopment || (currentBranch && currentBranch !== 'main'),
    })

    showDevNotification.value = isDevelopment || currentBranch !== 'main'
  })

  return {
    showDevNotification,
  }
}
