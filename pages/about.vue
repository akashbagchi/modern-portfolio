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
      <AccordionPanel value="1">
        <AccordionHeader>Philosophy</AccordionHeader>
        <!-- Undecided -->
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader>Beyond Code</AccordionHeader>
        <!-- Undecided -->
      </AccordionPanel>
    </Accordion>
    <!-- <UnderConstruction message="The About Page is coming soon, but until then I am an enigma 😶‍🌫️" /> -->
  </div>
</template>

<style scoped>
:deep(.about-accordion .p-accordionheader) {
  background: transparent !important;
}
</style>
