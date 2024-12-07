<template>
    <div class="ui-hero md:pt-20 md:pb-20 font-mono text-gray-900 dark:text-gray-100 grid md:grid-cols-3 grid-cols-1">
        <div class="about-content md:col-span-2 col-span-1 flex flex-col justify-start align-top">
            <!-- Text content, buttons go here -->
            <h1 class="name-large text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Hello, I'm Akash Bagchi</h1>
            <p class="about-shorttext text-xl mb-6 text-gray-700 dark:text-gray-300">Front-End Focused Full-Stack Developer, UX Designer, Generalist.</p>
            <Button class="projects-button mr-auto pl-1" label="View My Work" severity="primary" size="large" />
        </div>
        <div class="about-icon col-span-1 h-full!">
            <Image
                :pt="{
                    image: 'w-full max-w-[300px] h-auto'
                    }"
                src="/dev-icon.svg"
                alt="Developer Icon"
                imageClass="w-full h-auto"
                :preview="false"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
// ..
</script>

<style scoped>
:deep(.p-image) {
    width: 100%;
    max-width: 300px;
}

:deep(.p-image img) {
    width: 100%;
    height: auto;
}
</style>
