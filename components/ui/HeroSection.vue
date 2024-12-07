<template>
    <div class="ui-hero md:pt-20 md:pb-20 font-mono text-gray-900 dark:text-gray-100 grid md:grid-cols-3 grid-cols-1">
        <div class="hero-content md:col-span-2 col-span-1 flex flex-col justify-start align-top md:mr-5">
            <!-- Text content, buttons go here -->
            <h1 class="name-large text-4xl font-bold mb-10 pr-10 text-gray-900 dark:text-gray-100">Hello, I'm Akash Bagchi</h1>
            <p class="hero-shorttext text-xl mb-6 text-gray-700 dark:text-gray-300">Front-End Focused Full-Stack Developer, UX Designer, Generalist.</p>
            <p class="hero-shorttext text-xl mb-6 text-gray-700 dark:text-gray-300">I make fully-fledged websites like this one using a variety of modern frameworks and technologies.</p>
            <div class="hero-buttons flex justify-start gap-5 mt-auto">
                <Button class="resume-button pl-1" label="See my Resume" severity="primary" size="large" />
                <Button class="projects-button pl-1" label="See my Projects" severity="primary" size="large" />
            </div>
        </div>
        <div class="about-icon col-span-1 h-full!">
            <Image
                :pt="{
                    image: 'w-full max-w-[300px] h-auto'
                    }"
                src="/akashbagchi.png"
                alt="Developer Icon"
                imageClass="w-full h-auto rounded-full object-cover"
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
