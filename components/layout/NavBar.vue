<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed, onMounted, ref, watch } from 'vue'
import { useMobile } from '../../composables/use-mobile'

const emit = defineEmits<{
  toggleDark: []
}>()

const { isMobile } = useMobile()
const isMobileMenuOpen = ref(false)
const router = useRouter() // Add router composable

const colorMode = useColorMode()
const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
})

const colorModeIcon = computed(() => {
  return colorMode.value === 'dark' ? 'pi pi-sun' : 'pi pi-moon'
})

const menuItems = ref([
  {
    label: 'Home',
    to: '/',
    ariaLabel: 'Navigate to the home page',
  },
  {
    label: 'Projects',
    to: '/projects',
    ariaLabel: 'Navigate to the projects page',
  },
  {
    label: 'About',
    to: '/about',
    ariaLabel: 'Navigate to the about page',
  },
  {
    label: 'Contact',
    to: '/contact',
    ariaLabel: 'Navigate to the contact page',
  },
])

function toggleDarkmode() {
  emit('toggleDark')
}

function openMobileNavMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

watch(
  () => router.currentRoute.value,
  () => {
    isMobileMenuOpen.value = false
  },
)
</script>

<template>
  <MenuBar
    :model="menuItems"
    class="layout-navbar ml-auto mr-auto border-none shadow-none md:w-3/5"
    role="navigation"
  >
    <template #start>
      <Button
        v-if="isMobile"
        aria-label="Toggle Mobile Menu"
        icon="pi pi-bars"
        text
        rounded
        class="!text-gray-700 transition-all dark:!text-gray-300"
        @click="openMobileNavMenu"
      />
      <NuxtLink to="/" aria-label="Home" class="no-underline">
        <span class="font-mono text-xl font-bold text-gray-900 dark:text-gray-100">akash bagchi</span>
      </NuxtLink>
    </template>
    <template #item="{ item }">
      <NuxtLink
        v-ripple
        :to="item.to"
        role="navigation"
        :aria-label="item.ariaLabel"
        class="font-mono text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        external
      >
        <span>{{ item.label }}</span>
      </NuxtLink>
    </template>
    <template #end>
      <Button
        v-if="isHydrated"
        :icon="colorModeIcon"
        text
        rounded
        aria-label="Toggle dark mode"
        class="!text-gray-700 transition-all dark:!text-gray-300"
        @click="toggleDarkmode"
      />
    </template>
  </MenuBar>
  <Drawer
    v-model:visible="isMobileMenuOpen"
    :modal="true"
    :dismissable="true"
    class="mobile-nav-drawer"
    role="dialog"
    aria-label="Mobile navigation menu"
  >
    <template #header>
      <div class="flex items-start justify-start">
        <h2 class="font-mono text-xl font-bold">
          Navigation
        </h2>
      </div>
    </template>

    <div class="mobile-nav-menu mt-5 flex flex-col gap-2" aria-labelledby="mobile-nav-title">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.to"
        v-ripple
        :to="item.to"
        :label="item.label"
        :aria-label="item.ariaLabel"
        class="mobile-nav-item justify-start p-4 font-mono"
        external
      >
        <span>{{ item.label }}</span>
      </NuxtLink>
    </div>
  </Drawer>
</template>

<style>
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
  --menubar-padding: 1rem;
}

.dark .p-menubar .p-menuitem-text {
  color: #e5e7eb !important;
}

.dark .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
  background: #1f2937 !important;
}

.mobile-nav-drawer .p-drawer-content {
  @apply bg-white dark:bg-gray-900;
}

.mobile-nav-drawer .p-drawer-header {
  @apply border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900;
  padding: 1rem;
}

.mobile-nav-item.p-button.p-button-text {
  @apply text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800;
  padding: 1rem;
}

.mobile-nav-item.p-button.p-button-text:hover {
  @apply bg-gray-100 dark:bg-gray-800;
}

.mobile-nav-item .p-button-label {
  @apply ml-3;
}

.p-drawer-mask {
  @apply bg-gray-900/50 backdrop-blur-sm;
}

.mobile-nav-item.p-button:focus {
  box-shadow: none !important;
  @apply ring-2 ring-primary-500;
}

@media (max-width: 768px) {
  .p-menubar {
    display: flex;
    justify-content: space-between;
  }
  .p-menubar .p-menubar-root-list,
  .p-menubar .p-menubar-button {
    display: none;
  }
}
</style>
