<script setup lang="ts">
import HeroSection from '../components/ui/HeroSection.vue'
import TechStack from '../components/ui/TechStack.vue'
import { useMobile } from '../composables/use-mobile.ts'

const { isMobile } = useMobile()
</script>

<template>
  <div class="flex flex-col items-center gap-8 py-12">
    <section class="w-full max-w-4xl">
      <HeroSection />
      <TechStack :class="{ 'pt-4': isMobile }" />
    </section>
  </div>
</template>
