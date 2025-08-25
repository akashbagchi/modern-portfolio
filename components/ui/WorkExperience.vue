<script setup lang="ts">
interface WorkExperience {
  jobTitle: string
  company: string
  location: string
  from: string
  to: string
  description: string
  responsibilities: string[]
  icon?: string
  color?: string
}

const experience = ref<WorkExperience[]>([
  {
    jobTitle: 'Product Development Engineer',
    company: 'LaKeel, Inc',
    location: 'Tokyo, Japan',
    from: 'Dec 2023',
    to: 'May 2025',
    description: 'Core developer for LaKeel Visual Mosaic and UI/UX Task Team lead',
    responsibilities: [
      'Core Developer - LaKeel Visual Mosaic (low-code enterprise development platform)',
      'Engineered several feature expansions',
      'Developed reusable UI Components reducing development time by 20%',
      'Core UI/UX Engineer - UX Task Team',
      'Pioneered LaKeel\'s first design system',
    ],
    icon: 'pi pi-code',
    color: '#4CAF50',
  },
  {
    jobTitle: 'SAP SD Intern',
    company: 'Carl Zeiss India',
    location: 'Bangalore, India',
    from: 'Jan 2023',
    to: 'Jun 2023',
    description: 'Enterprise software customization and business process analysis',
    responsibilities: [
      'Analyzed business requirements and workflows across multiple departments',
      'Participated in system configuration discussions',
      'Gained hands-on experience with SAP modules',
    ],
    icon: 'pi pi-briefcase',
    color: '#2196F3',
  },
  {
    jobTitle: 'UEX Intern',
    company: 'Elektrobit',
    location: 'Bangalore, India',
    from: 'Jan 2022',
    to: 'Jun 2022',
    description: 'Automotive software development and optimization',
    responsibilities: [
      'Engineered a QML parser in Python',
      'Reduced static analysis processing time by 50%',
      'Collaborated with automotive software engineers in an Agile environment',
    ],
    icon: 'pi pi-code',
    color: '#FF9800',
  },
])
</script>

<template>
  <Fieldset legend="Bio">
    <p class="text-justify">
      I'm a Front-End focused Full-Stack Developer with a passion for creating intuitive,
      accessible, and elegant digital experiences. Currently working as a Product Development
      Engineer at Lakeel Inc. in Tokyo, I bridge the gap between development and user experience,
      bringing a unique perspective to every project I undertake.
    </p>
    <Timeline :value="experience" align="left" class="job-timeline">
      <template #marker="{ item }">
        <span
          class="flex h-12 w-12 items-center justify-center rounded-full border-2"
          :style="{ borderColor: item.color, color: item.color }"
        >
          <i class="text-xl" :class="[item.icon]" />
        </span>
      </template>

      <template #content="{ item }">
        <Card class="timeline-card mb-3">
          <template #title>
            <div class="job-title text-xl font-bold">
              {{ item.jobTitle }}
            </div>
          </template>
          <template #subtitle>
            <div class="company-info text-gray-600 dark:text-gray-400">
              <span class="company font-semibold">{{ item.company }}</span>
              <span class="mx-2">|</span>
              <span class="location">{{ item.location }}</span>
            </div>
            <div class="date-range text-sm text-gray-500 dark:text-gray-500">
              {{ item.from }} - {{ item.to }}
            </div>
          </template>
          <template #content>
            <p class="mb-4 text-gray-700 dark:text-gray-300">
              {{ item.description }}
            </p>
            <ul class="ml-5 list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li v-for="(responsibility, index) in item.responsibilities" :key="index">
                {{ responsibility }}
              </li>
            </ul>
          </template>
        </Card>
      </template>
    </Timeline>
  </Fieldset>
</template>

<style scoped>
.job-timeline {
  margin: 2rem 0;
}

:deep(.p-timeline-event-opposite) {
  flex: 0;
  padding: 0 1rem;
}

:deep(.p-timeline-event-content) {
  padding: 0 1rem;
}

:deep(.timeline-card) {
  background-color: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

:deep(.timeline-card:hover) {
  transform: translateY(-2px);
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.dark :deep(.timeline-card) {
  border-color: #374151;
  background-color: rgb(17 24 39 / 0.5);
}

@media (max-width: 768px) {
  :deep(.p-timeline-event) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  :deep(.p-timeline-event-opposite) {
    padding: 0;
    flex: 0;
  }

  :deep(.p-timeline-event-content) {
    padding: 0;
    margin-top: 1rem;
    width: 100%;
  }
}
</style>
