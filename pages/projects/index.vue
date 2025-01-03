<script setup lang="ts">
import type { Project } from '../../types/project.ts'
import { computed, onMounted, ref } from 'vue'
import ProjectCard from '../../components/ui/ProjectCard.vue'
import { useProjects } from '../../composables/use-projects.ts'

const isInitalLoad = ref(true)
const { projects, loading, error, refresh, isCacheStale } = useProjects()

onMounted(async () => {
  if (isCacheStale())
    await refresh()
  isInitalLoad.value = false
})

const projectDetails = ref<Project | null>(null)
const dialogVisible = computed({
  get: () => projectDetails.value !== null,
  set: (value: boolean) => {
    if (!value)
      projectDetails.value = null
  },
})
const longDescription = computed(() => {
  return `${projectDetails.value.description} \n\n ${projectDetails.value.expandedContent}` ?? ''
})
const longTech = computed(() => {
  if (!projectDetails.value)
    return []
  if (!projectDetails.value.expandedTech)
    return projectDetails.value.technologies
  return [...projectDetails.value.technologies, ...projectDetails.value.expandedTech]
})

function handleViewDetails(project: Project) {
  projectDetails.value = project
}

const refreshing = ref(false)
async function handleRefresh() {
  refreshing.value = true
  try {
    await refresh()
  }
  finally {
    refreshing.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-7xl py-12">
    <div class="mb-8 flex items-center justify-between">
      <h1 class="mb-8 font-mono text-3xl font-bold">
        My Projects
      </h1>
      <ClientOnly>
        <Button
          v-if="!loading"
          icon="pi pi-refresh"
          :loading="refreshing"
          rounded
          text
          aria-label="Refresh Projects"
          @click="handleRefresh"
        />
      </ClientOnly>
    </div>
    <div v-if="loading || isInitalLoad" class="flex justify-center py-12">
      <ProgressSpinner />
    </div>
    <div v-else-if="error" class="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
      <p class="text-red-700 dark:text-red-300">
        {{ error }}
      </p>
    </div>
    <div
      v-else-if="!projects?.length"
      class="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-900/20"
    >
      <p class="text-gray-700 dark:text-gray-300">
        No Projects Found
      </p>
    </div>
    <div v-else class="projects-grid grid grid-cols-1 gap-6 font-mono md:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        @view-details="handleViewDetails"
      />
    </div>

    <Dialog
      v-model:visible="dialogVisible"
      :modal="true"
      :style="{ width: '50rem' }"
      :dismissable-mask="true"
      :maximizable="true"
      class="project-dialog"
    >
      <template v-if="projectDetails" #header>
        <h2 class="font-mono text-2xl font-bold">
          {{ projectDetails.title }}
        </h2>
      </template>

      <div v-if="projectDetails" class="space-y-6 font-mono">
        <img
          :src="projectDetails.image"
          :alt="projectDetails.title"
          class="h-auto w-full rounded-lg object-cover"
        >

        <div class="flex flex-wrap gap-2">
          <Tag v-for="tech in longTech" :key="tech" :value="tech" severity="info" class="text-sm" />
        </div>

        <p class="whitespace-pre-line leading-relaxed text-gray-700 dark:text-gray-300">
          {{ longDescription }}
        </p>

        <div class="mt-auto flex gap-4 pt-4">
          <a
            v-if="projectDetails.linkTo"
            :href="projectDetails.linkTo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button label="Visit Project" icon="pi pi-external-link" />
          </a>
          <Button
            label="Close"
            icon="pi pi-times"
            severity="secondary"
            @click="projectDetails = null"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
:deep(.p-dialog) {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

:deep(.p-dialog.p-component) {
  @apply bg-white dark:bg-gray-900;
}

:deep(.p-dialog-mask.p-component-overlay) {
  @apply bg-gray-900/50 backdrop-blur-sm;
}

:deep(.p-dialog-header) {
  @apply border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}

:deep(.p-dialog-content) {
  @apply bg-white dark:bg-gray-900;
  padding: 1.5rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}
:deep(.p-dialog-content::-webkit-scrollbar) {
  width: 6px;
}
:deep(.p-dialog-content::-webkit-scrollbar-track) {
  background: transparent;
}
:deep(.p-dialog-content::-webkit-scrollbar-thumb) {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 20px;

  &:hover {
    background-color: rgba(156, 163, 175, 0.7);
  }
}

:deep(.p-dialog-mask) {
  transition: background-color 0.2s;
}

:deep(.p-dialog) {
  transform-origin: center;
  transition:
    transform 0.2s,
    opacity 0.2s;
}
</style>
