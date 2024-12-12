<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { useMobile } from '../../composables/use-mobile.ts'

const { isMobile } = useMobile()

function openResume() {
  window.open('/resume/akashbagchi_resume.pdf', '_blank', 'noopener, noreferrer')
}

const teleportTarget = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    document.body.style.removeProperty('overflow')
    teleportTarget.value = document.querySelector('#mobile-image-target')
  })
})
</script>

<template>
  <div class="relative">
    <div id="mobile-image-target" class="mb-8 md:hidden" />
    <div
      class="ui-hero grid grid-cols-1 font-mono text-gray-900 dark:text-gray-100 md:grid-cols-3 md:pb-20 md:pt-20"
    >
      <div
        class="hero-content col-span-1 flex flex-col justify-start align-top md:col-span-2 md:mr-5"
      >
        <div class="mobile-photo-container" />
        <h1
          class="name-large mb-10 px-4 text-center text-4xl font-bold text-gray-900 dark:text-gray-100 md:px-0 md:pr-10 md:text-start"
        >
          Hello, I'm Akash Bagchi
        </h1>
        <p
          class="hero-shorttext mb-6 text-center text-gray-700 dark:text-gray-300 md:text-start md:text-xl"
        >
          Front-End Focused Full-Stack Developer, UX Designer, Generalist.
        </p>
        <p
          class="hero-shorttext md:[text-xl] mb-6 text-center text-sm text-gray-700 dark:text-gray-300 md:text-start"
        >
          I make fully-fledged websites like this one using a variety of modern frameworks and
          technologies.
        </p>
        <div class="hero-buttons mt-auto flex justify-evenly gap-5 md:justify-start">
          <a href="/projects">
            <Button
              class="projects-button px-2"
              :class="{ 'mb-2 flex-shrink-0 p-2 text-sm': isMobile }"
              label="See my Projects"
              aria-label="See my Projects - Navigate to projects"
              severity="primary"
              size="large"
            />
          </a>
          <Button
            class="resume-button px-2 py-1"
            :class="{ 'mb-2 flex-shrink-0 p-2 text-sm': isMobile }"
            label="See my Resume"
            aria-label="See my Resume - Open resume in new tab"
            severity="contrast"
            size="large"
            @click="openResume"
          />
        </div>
      </div>
      <Teleport :to="teleportTarget || 'body'" :disabled="!isMobile">
        <div
          class="about-icon col-span-1 flex justify-center md:justify-end"
          :class="{
            'mb-8': isMobile,
          }"
        >
          <div
            class="relative aspect-square"
            :class="[isMobile ? 'mx-auto mb-8 w-full max-w-[180px]' : 'w-full max-w-[300px]']"
          >
            <NuxtImg
              src="/images/akashbagchi.png"
              alt="Developer Icon"
              format="webp"
              loading="lazy"
              class="h-full w-full rounded-full object-cover transition-transform duration-300"
              sizes="(max-width: 758px) 180px, 300px"
              quality="100"
            />
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<style scoped></style>
