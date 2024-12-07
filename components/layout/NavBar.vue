<template>
  <MenuBar :model="menuItems" class="layout-navbar border-none shadow-none">
    <template #start>
      <span class="font-mono font-bold text-xl text-gray-900 dark:text-gray-100">akash bagchi</span>
    </template>
    <template #item="{ item, props }">
      <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate"
          class="font-mono transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
          <span>{{ item.label }}</span>
        </a>
      </router-link>
    </template>
    <template #end>
      <Button icon="pi pi-moon" text rounded aria-label="Toggle dark mode" @click="toggleDarkmode"
        class="!text-gray-700 dark:!text-gray-300" />
    </template>
  </MenuBar>
</template>

<script setup lang="ts">
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
]);

const emit = defineEmits<{
  'toggle-dark': []
}>()

const toggleDarkmode = () => {
  emit('toggle-dark')
}
</script>

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
