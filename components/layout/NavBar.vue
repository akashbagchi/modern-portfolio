<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const emit = defineEmits<{
  toggleDark: []
}>()

const colorMode = useColorMode()
const colorModeIcon = computed(() => {
  return colorMode.value === 'dark' ? 'pi pi-sun' : 'pi pi-moon'
})

const menuItems = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
])

function toggleDarkmode() {
  emit('toggleDark')
}
</script>

<template>
  <MenuBar
    :model="menuItems"
    class="layout-navbar ml-auto mr-auto border-none shadow-none md:w-3/5"
    role="navigation"
  >
    <template #start>
      <a href="/">
        <span class="font-mono text-xl font-bold text-gray-900 dark:text-gray-100">akash bagchi</span>
      </a>
    </template>
    <template #item="{ item, props }">
      <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
        <a
          v-ripple
          :href="href"
          v-bind="props.action"
          role="navigation"
          class="font-mono text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          @click="navigate"
        >
          <span>{{ item.label }}</span>
        </a>
      </router-link>
    </template>
    <template #end>
      <Button
        :icon="colorModeIcon"
        text
        rounded
        aria-label="Toggle dark mode"
        class="!text-gray-700 transition-all dark:!text-gray-300"
        @click="toggleDarkmode"
      />
    </template>
  </MenuBar>
</template>

<style>
/* Using higher specificity to override PrimeVue styles */
.p-menubar.p-menubar {
  background: transparent !important;
  padding: 1rem !important;
  border: none !important;
}

.p-menubar .p-menubar-start {
  min-width: fit-content;
}

.p-menubar .p-menubar-root-list {
  gap: 1rem !important;
  display: flex;
  justify-content: end;
  width: 100%;
}

.p-menubar .p-menubar-end {
  margin: 0 1rem;
}

:root {
  /* Override PrimeVue theme variables */
  --menubar-padding: 1rem;
}

.dark .p-menubar .p-menuitem-text {
  color: #e5e7eb !important;
}

.dark .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
  background: #1f2937 !important;
}
</style>
