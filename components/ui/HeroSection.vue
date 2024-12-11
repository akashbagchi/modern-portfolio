<script setup lang="ts">
import { useMobile } from '../../composables/use-mobile.ts'

const { isMobile } = useMobile()

function openResume() {
  window.open('/resume/akashbagchi_resume.pdf', '_blank', 'noopener, noreferrer')
}
</script>

<template>
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
            severity="primary"
            size="large"
          />
        </a>
        <Button
          class="resume-button px-2 py-1"
          :class="{ 'mb-2 flex-shrink-0 p-2 text-sm': isMobile }"
          label="See my Resume"
          severity="contrast"
          size="large"
          @click="openResume"
        />
      </div>
    </div>
    <div class="about-icon h-full! col-span-1">
      <Teleport to=".mobile-photo-container" :disabled="!isMobile">
        <Image
          :pt="
            isMobile
              ? {
                image: 'w-full max-w-[180px] h-auto mx-auto mb-8',
              }
              : {
                image: 'w-full max-w-[300px] h-auto',
              }
          "
          src="/images/akashbagchi.png"
          alt="Developer Icon"
          image-class="w-full h-auto rounded-full object-cover"
          :preview="false"
        />
      </Teleport>
    </div>
  </div>
</template>

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
