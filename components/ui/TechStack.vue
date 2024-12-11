<script setup lang="ts">
import { computed, ref } from 'vue'

interface TechItem {
  name: string
  icon: string
  category: 'Languages' | 'Frameworks' | 'Databases' | 'Tools'
}

const mouseX = ref(0)
const mouseY = ref(0)
const isHovering = ref(false)

const categoryColors = {
  Languages: 'rgba(59, 130, 246, 0.1)', // Blue
  Frameworks: 'rgba(16, 185, 129, 0.1)', // Green
  Databases: 'rgba(236, 72, 153, 0.1)', // Pink
  Tools: 'rgba(245, 158, 11, 0.1)', // Amber
} as const

function getGradientStyle(category: string) {
  if (!isHovering.value)
    return {}

  const color = categoryColors[category as keyof typeof categoryColors] || categoryColors.Languages

  return {
    background: `radial-gradient(
            600px circle at ${mouseX.value}px ${mouseY.value}px,
            ${color},
            transparent 40%
        )`,
  }
}

function handleMouseMove(event: MouseEvent) {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = event.clientX - rect.left
  mouseY.value = event.clientY - rect.top
  isHovering.value = true
}

function handleMouseLeave() {
  isHovering.value = false
}
const techStack = ref<TechItem[]>([
  { name: 'TypeScript', icon: '/icons/TypeScript Icon.svg', category: 'Languages' },
  { name: 'HTML5', icon: '/icons/HTML5 Icon.svg', category: 'Languages' },
  { name: 'CSS3', icon: '/icons/CSS3 Icon.svg', category: 'Languages' },
  { name: 'JavaScript', icon: '/icons/JavaScript Icon.svg', category: 'Languages' },
  { name: 'Python', icon: '/icons/Python Icon.svg', category: 'Languages' },
  { name: 'C', icon: '/icons/c-icon.svg', category: 'Languages' },
  { name: 'C++', icon: '/icons/Cplusplus Icon.svg', category: 'Languages' },
  { name: 'PHP', icon: '/icons/PHP Icon.svg', category: 'Languages' },
  { name: 'Swift', icon: '/icons/Swift Icon.svg', category: 'Languages' },
  { name: 'Go', icon: '/icons/Go Icon.svg', category: 'Languages' },
  { name: 'Vue.js', icon: '/icons/VueDotJS.svg', category: 'Frameworks' },
  { name: 'NestJS', icon: '/icons/NestJS Icon.svg', category: 'Frameworks' },
  { name: 'Nuxt.js', icon: '/icons/Nuxt.js Icon.svg', category: 'Frameworks' },
  { name: 'Vite', icon: '/icons/Vite Icon.svg', category: 'Frameworks' },
  { name: 'TailwindCSS', icon: '/icons/Tailwind CSS Icon.svg', category: 'Frameworks' },
  { name: 'Next.js', icon: '/icons/Next.js Icon.svg', category: 'Frameworks' },
  { name: 'React.js', icon: '/icons/React Icon.svg', category: 'Frameworks' },
  { name: 'Bootstrap', icon: '/icons/Bootstrap Icon.svg', category: 'Frameworks' },
  { name: 'Flask', icon: '/icons/Flask Icon.svg', category: 'Frameworks' },
  { name: 'TensorFlow', icon: '/icons/TensorFlow Icon.svg', category: 'Frameworks' },
  { name: 'MongoDB', icon: '/icons/MongoDB Icon.svg', category: 'Databases' },
  { name: 'PostgreSQL', icon: '/icons/PostgreSQL Icon.svg', category: 'Databases' },
  { name: 'MySQL', icon: '/icons/MySQL Icon.svg', category: 'Databases' },
  { name: 'SQLite', icon: '/icons/SQLite Icon.svg', category: 'Databases' },
  { name: 'Git', icon: '/icons/Git Icon.svg', category: 'Tools' },
  { name: 'Postman', icon: '/icons/Postman Icon.svg', category: 'Tools' },
  { name: 'Neovim', icon: '/icons/Neovim Icon.svg', category: 'Tools' },
  { name: 'Figma', icon: '/icons/Figma Icon.svg', category: 'Tools' },
  { name: 'Docker', icon: '/icons/Docker Icon.svg', category: 'Tools' },
  { name: 'Linux', icon: '/icons/Linux Icon.svg', category: 'Tools' },
  { name: 'Vercel', icon: '/icons/Vercel Icon.svg', category: 'Tools' },
  { name: 'Unity', icon: '/icons/Unity Icon.svg', category: 'Tools' },
])

const categorizedTech = computed(() => {
  return techStack.value.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, TechItem[]>,
  )
})
</script>

<template>
  <div class="flex w-full max-w-4xl flex-col">
    <div
      class="tech-stack-explainer md:[w-3/5] mx-auto mb-5 justify-center text-center font-mono text-sm text-gray-900 dark:text-gray-100"
    >
      My technology stack is varied and expansive, and ever growing. Here's some of it:
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <template v-for="(category, categoryName) in categorizedTech" :key="categoryName">
        <div
          class="tech-category group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50"
          :data-category="categoryName"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        >
          <div
            class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            :style="getGradientStyle(categoryName)"
          />

          <div class="relative z-10">
            <h3 class="mb-4 font-mono text-lg font-semibold text-gray-900 dark:text-gray-100">
              {{ categoryName }}
            </h3>
            <div class="grid grid-cols-3 gap-4 sm:grid-cols-4">
              <div
                v-for="tech in category"
                :key="tech.name"
                class="tech-item flex flex-col items-center gap-2 rounded-lg p-2 transition-all duration-200"
                :data-category="categoryName"
              >
                <div
                  class="tech-icon relative h-8 w-8 transition-transform duration-200 hover:scale-110"
                >
                  <img
                    :src="tech.icon"
                    :alt="tech.name"
                    class="h-full w-full object-contain dark:invert"
                  >
                </div>
                <span
                  class="line-clamp-2 text-center font-mono text-xs text-gray-700 dark:text-gray-300"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div
      class="tech-stack-explainer md:[w-3/5 mx-auto mt-2 mt-5 justify-center font-mono text-sm text-gray-900 dark:text-gray-100"
    >
      and an infinite desire to learn more ✨
    </div>
  </div>
</template>

<style scoped>
.tech-item {
  will-change: transform;
}

.tech-icon {
  will-change: transform;
}

.dark :deep(img) {
  filter: invert(1);
}
</style>
