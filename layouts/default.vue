<template>
    <div class="min-h-screen flex flex-col">
        <header class="p-4 shadow-sm">
            <h1 class="text-xl font-bold">akash bagchi</h1>
            <MenuBar :model="menuItems" class="border-none">
                <template #start>
                    <span class="font-bold text-xl">Akash Bagchi</span>
                </template>
                <template #item="{ item, props }">
                    <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
                        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                            <span>{{ item.label }}</span>
                        </a>
                    </router-link>
                </template>
            </MenuBar>
        </header>
        <main class="p-4 h-full">
            <slot />
        </main>
        <footer class="p-4 text-center w-full">
            <p>© {{ new Date().getFullYear() }} Akash Bagchi </p>
        </footer>
    </div>
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
</script>
