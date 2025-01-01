import type { Project } from '~/types/project'
import { ref } from 'vue'

export function useProjects() {
  const CACHE_DURATION = 30 * 60 * 1000
  const lastFetchTimeStamp = ref<number | null>(null)

  function getCachedData(key: string) {
    if (!lastFetchTimeStamp.value)
      return null
    const cacheAge = Date.now() - lastFetchTimeStamp.value
    if (cacheAge > CACHE_DURATION)
      return null

    const nuxt = useNuxtApp()
    return nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key]
  }

  const {
    data: projects,
    status,
    error,
    refresh,
  } = useLazyAsyncData(
    'projects',
    async () => {
      try {
        const response = await fetch('/api/projects')
        if (!response.ok)
          throw new Error('Failed to fetch projects')

        lastFetchTimeStamp.value = Date.now()
        return response.json()
      }
      catch (e) {
        console.error('Error fetching projects:', e)
        throw e
      }
    },
    {
      server: true,
      immediate: true,
      default: () => [],
      transform: (data: Project[] | null) => data ?? [],
      deep: true,
      getCachedData,
    },
  )

  async function forceRefresh() {
    lastFetchTimeStamp.value = null
    return refresh()
  }

  function isCacheStale() {
    if (!lastFetchTimeStamp.value)
      return true
    const cacheAge = Date.now() - lastFetchTimeStamp.value
    return cacheAge > CACHE_DURATION
  }

  const loading = computed(() => status.value === 'pending')

  return {
    projects,
    loading,
    error,
    refresh: forceRefresh,
    isCacheStale,
  }
}
