import { onMounted, ref } from 'vue'

export function useEnvironmentNotification() {
  const showDevNotification = ref(false)
  const config = useRuntimeConfig()

  onMounted(() => {
    showDevNotification.value = config.public.vercelEnv !== 'production'
  })

  return {
    showDevNotification,
  }
}
