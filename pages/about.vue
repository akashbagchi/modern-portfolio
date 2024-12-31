<script setup lang="ts">
import WorkExperience from '../components/ui/WorkExperience.vue'
</script>

<template>
  <div class="mx-auto max-w-4xl bg-white py-12 font-mono dark:bg-gray-900">
    <h1 class="mb-8 text-3xl font-bold">
      About Me
    </h1>
    <Accordion value="0" class="about-accordion">
      <AccordionPanel value="0">
        <AccordionHeader>Work Experience</AccordionHeader>
        <AccordionContent>
          <WorkExperience />
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>Beyond Code</AccordionHeader>
        <!-- Undecided -->
        <AccordionContent>
          <p class="mx-5">
            Apart from programming, I'm also a huge music-lover and write and produce my own music
            at times. You can find my work on all major platforms below
          </p>
          <div
            class="mt-8 grid grid-cols-1 font-mono text-gray-900 dark:text-gray-100 md:grid-cols-3"
          >
            <Card class="m-5 overflow-hidden">
              <template #header>
                <NuxtImg
                  src="/images/Devices.png"
                  alt="Devices by Akash Bagchi"
                  leading="lazy"
                  quality="80"
                  class="aspect-auto h-auto w-full object-cover"
                />
              </template>
              <template #title>
                <h3 class="font-mono text-2xl">
                  Devices - Single
                </h3>
              </template>
              <template #content>
                My first single
              </template>
            </Card>
            <Card class="m-5 overflow-hidden">
              <template #header>
                <NuxtImg
                  src="/images/Hush.png"
                  alt="Hush by Akash Bagchi"
                  leading="lazy"
                  quality="80"
                  class="aspect-auto h-auto w-full object-cover"
                />
              </template>
              <template #title>
                <h3 class="font-mono text-2xl">
                  Hush - Single
                </h3>
              </template>
              <template #content>
                A relaxed instrumental beat
              </template>
            </Card>
            <Card class="m-5 overflow-hidden">
              <template #header>
                <NuxtImg
                  src="/images/livin.png"
                  alt="Livin by Akash Bagchi"
                  leading="lazy"
                  quality="80"
                  class="aspect-auto h-auto w-full object-cover"
                />
              </template>
              <template #title>
                <h3 class="font-mono text-2xl">
                  LIVIN - From "It's Always Been You"
                </h3>
              </template>
              <template #content>
                A track I co-wrote and co-produced for the short film "It's Always Been You"
              </template>
            </Card>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped>
:deep(.about-accordion .p-accordionheader) {
  background: transparent !important;
}
</style>
