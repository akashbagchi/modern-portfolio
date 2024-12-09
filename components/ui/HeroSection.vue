<script setup lang="ts">
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
      <!-- Text content, buttons go here -->
      <h1 class="name-large mb-10 pr-10 text-4xl font-bold text-gray-900 dark:text-gray-100">
        Hello, I'm Akash Bagchi
      </h1>
      <p class="hero-shorttext mb-6 text-xl text-gray-700 dark:text-gray-300">
        Front-End Focused Full-Stack Developer, UX Designer, Generalist.
      </p>
      <p class="hero-shorttext mb-6 text-xl text-gray-700 dark:text-gray-300">
        I make fully-fledged websites like this one using a variety of modern frameworks and
        technologies.
      </p>
      <div class="hero-buttons mt-auto flex justify-start gap-5">
        <a href="/projects">
          <Button
            class="projects-button px-2"
            label="See my Projects"
            severity="primary"
            size="large"
          />
        </a>
        <Button
          class="resume-button px-2 py-1"
          label="See my Resume"
          severity="contrast"
          size="large"
          @click="openResume"
        />
      </div>
    </div>
    <div class="about-icon h-full! col-span-1">
      <Image
        :pt="{
          image: 'w-full max-w-[300px] h-auto',
        }"
        src="/images/akashbagchi.png"
        alt="Developer Icon"
        image-class="w-full h-auto rounded-full object-cover"
        :preview="false"
      />
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
