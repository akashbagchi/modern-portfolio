<template>
    <div class="flex flex-col items-center gap-8 py-12">
        <section class="max-w-4xl w-full">
            <HeroSection />
            <div class="h-12"></div>
            <TechStack />
        </section>
    </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/ui/HeroSection.vue';
import TechStack from '../components/ui/TechStack.vue';
</script>
