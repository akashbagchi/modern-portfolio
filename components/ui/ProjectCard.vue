<script setup lang="ts">
import type { Project } from '../../types/project.ts'

const props = defineProps<{
  project: Project
}>()

const emits = defineEmits<{
  viewDetails: [project: Project]
}>()

const imageError = ref(false)
const linkType = computed(() => {
  if (!props.project.linkType) {
    return 'Preview'
  }
  return props.project.linkType
})

function handleImageError() {
  imageError.value = true
}

function handleViewDetails() {
  emits('viewDetails', props.project)
}
</script>

<template>
  <div
    class="ui-project-card flex rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-700 md:w-[400px]"
  >
    <Card class="overflow-hidden">
      <template #header>
        <template v-if="!imageError">
          <NuxtImg
            v-if="!imageError"
            :src="project.image"
            :alt="project.title"
            format="webp"
            loading="lazy"
            quality="90"
            class="h-48 w-full object-cover"
            @error="handleImageError"
          />
        </template>
        <div
          v-else
          class="flex h-48 w-full items-center justify-center bg-gray-50 dark:bg-gray-800"
        >
          <i class="pi pi-image mx-auto my-auto text-4xl text-gray-400 dark:text-gray-600" />
        </div>
      </template>

      <template #title>
        <h3 class="mt-4 truncate font-mono text-2xl">
          {{ project.title }}
        </h3>
      </template>

      <template #subtitle>
        <div class="flex max-w-full flex-wrap gap-2 text-sm">
          <Tag
            v-for="tech in project.technologies"
            :key="tech"
            :value="tech"
            severity="info"
            class="font-mono text-sm"
          />
        </div>
      </template>

      <template #content>
        <p
          class="m-0 line-clamp-5 break-words font-mono font-light text-gray-700 dark:text-gray-300"
        >
          {{ project.description }}
        </p>
      </template>

      <template #footer>
        <div class="flex min-h-[40px] justify-start gap-3">
          <Button
            v-if="project.expandedContent"
            label="Read More"
            severity="secondary"
            outlined
            class="w-1/2 font-mono"
            :class="{ 'flex-1': !project.linkTo }"
            @click="handleViewDetails"
          />
          <a
            v-if="project.linkTo"
            :href="project.linkTo"
            target="_blank"
            rel="noopener noreferrer"
            class="w-1/2 flex-1"
          >
            <Button
              :label="linkType"
              icon="pi pi-external-link"
              class="w-full font-mono"
              severity="contrast"
            />
          </a>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
:deep(.p-card) {
  background: transparent;
  box-shadow: none;
  width: 100%;
  max-width: 420px;
}

:deep(.p-card-body) {
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
}

:deep(.p-card-content) {
  flex-grow: 1;
  padding: 1rem;
  overflow: hidden;
  margin-top: auto;
}

:deep(.p-card-title),
:deep(.p-card-subtitle) {
  padding: 0 1rem;
}

:deep(.p-card-footer) {
  padding: 1rem;
}

/* Ensure tags don't overflow */
:deep(.p-tag) {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
