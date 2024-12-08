import type { Project } from '~/types/project'
import { ref, type Ref } from 'vue'

export function useProjects() {
  const projects: Ref<Project[]> = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchProjects() {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('api/projects')
      if (!response.ok)
        throw new Error('Failed to fetch projects.')

      projects.value = await response.json()
    }
    catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error occured.'
      console.error('Error fetching projects:', e)
    }
    finally {
      loading.value = false
    }
  }

  return {
    projects,
    loading,
    error,
    fetchProjects,
  }
}
