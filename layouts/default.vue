<template>
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <header
            class="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <h1 class="text-xl font-bold">akash bagchi</h1>
            <MenuBar :model="menuItems" class="border-none shadow-none">
                <template #start>
                    <span class="font-mono font-bold text-xl">Akash Bagchi</span>
                </template>
                <template #item="{ item, props }">
                    <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
                        <a v-ripple :href="href" v-bind="props.action" @click="navigate"
                            class="font-mono transition-colors duration-200">
                            <span>{{ item.label }}</span>
                        </a>
                    </router-link>
                </template>
                <template #end>
                    <Button icon="pi pi-moon" text rounded aria-label="Toggle dark mode" @click="toggleDarkmode"
                        class="!text-gray-700 dark:!text-gray-300" />
                </template>
            </MenuBar>
        </header>

        <main class="flex-grow mt-16 px-4 max-w-7xl mx-auto w-full">
            <slot />
        </main>

        <footer class="p-4 text-center w-full border-t border-gray-200 dark:border-gray-800">
            <p class="font-mono text-sm text-gray-600 dark:text-gray-400">© {{ new Date().getFullYear() }} Akash Bagchi
            </p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode({
    attribute: 'class',
    modes: {
        dark: 'dark',
        light: ''
    }
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
]);

const toggleDarkmode = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}

.p-menubar {
    background: transparent !important;
    padding: 1rem !important;
}

.p-menubar-root-list {
    gap: 1rem !important;
}

.dark .p-menubar p-menuitem-text {
    color: #e5e7eb;
}

.dark .p-menubar .p-menubar-root-list>.p-menuitem>p.menuitem-link:not(.p-disabled):hover {
    background: #1f2937;
}
</style>
