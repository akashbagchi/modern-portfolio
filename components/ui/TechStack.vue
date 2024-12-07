<template>
    <div class="max-w-4xl w-full">
        <!-- Container for all tech categories -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <template v-for="(category, categoryName) in categorizedTech" :key="categoryName">
                <div class="tech-category p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50"
                    v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }"
                    :delay="150 * Object.keys(categorizedTech).indexOf(categoryName)">
                    <h3 class="text-lg font-mono font-semibold mb-4 text-gray-900 dark:text-gray-100">
                        {{ categoryName }}
                    </h3>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        <div v-for="tech in category" :key="tech.name"
                            class="tech-item flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
                        >
                            <div class="w-8 h-8 relative tech-icon" v-motion :initial="{ scale: 0.8, opacity: 0 }"
                                :enter="{ scale: 1, opacity: 1 }" :delay="100 * category.indexOf(tech)">
                                <img :src="tech.icon" :alt="tech.name"
                                    class="w-full h-full object-contain dark:invert" />
                            </div>
                            <span class="text-xs text-center font-mono text-gray-700 dark:text-gray-300 line-clamp-2">
                                {{ tech.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface TechItem {
    name: string;
    icon: string; a
    category: 'Languages' | 'Frameworks' | 'Databases' | 'Tools';
}

const techStack = ref<TechItem[]>([
    { name: 'TypeScript', icon: '/icons/TypeScript Icon.svg', category: 'Languages' },
    { name: 'HTML5', icon: '/icons/HTML5 Icon.svg', category: 'Languages' },
    { name: 'CSS3', icon: '/icons/CSS3 Icon.svg', category: 'Languages' },
    { name: 'JavaScript', icon: '/icons/JavaScript Icon.svg', category: 'Languages' },
    { name: 'Python', icon: '/icons/Python Icon.svg', category: 'Languages' },
    { name: 'C', icon: '/icons/C Icon.svg', category: 'Languages' },
    { name: 'C++', icon: '/icons/Cplusplus Icon.svg', category: 'Languages' },
    { name: 'PHP', icon: '/icons/PHP Icon.svg', category: 'Languages' },
    { name: 'Swift', icon: '/icons/Swift Icon.svg', category: 'Languages' },
    { name: 'Go', icon: '/icons/Go Icon.svg', category: 'Languages' },
    { name: 'Vue.js', icon: '/icons/VueDotJS.svg', category: 'Frameworks' },
    { name: 'Vim', icon: '/icons/Vim Icon.svg', category: 'Tools' },
    { name: 'Vercel', icon: '/icons/Vercel Icon.svg', category: 'Tools' },
    { name: 'Unity', icon: '/icons/Unity Icon.svg', category: 'Tools' },
    { name: 'TensorFlow', icon: '/icons/TensorFlow Icon.svg', category: 'Frameworks' },
    { name: 'TailwindCSS', icon: '/icons/Tailwind CSS Icon.svg', category: 'Frameworks' },
    { name: 'SQLite', icon: '/icons/SQLite Icon.svg', category: 'Databases' },
    { name: 'React.js', icon: '/icons/React Icon.svg', category: 'Frameworks' },
    { name: 'PostgreSQL', icon: '/icons/PostgreSQL Icon.svg', category: 'Databases' },
    { name: 'Nuxt.js', icon: '/icons/Nuxt.js Icon.svg', category: 'Frameworks' },
    { name: 'Next.js', icon: '/icons/Next.js Icon.svg', category: 'Frameworks' },
    { name: 'NestJS', icon: '/icons/NestJS Icon.svg', category: 'Frameworks' },
    { name: 'Neovim', icon: '/icons/Neovim Icon.svg', category: 'Tools' },
    { name: 'MySQL', icon: '/icons/MySQL Icon.svg', category: 'Databases' },
    { name: 'MongoDB', icon: '/icons/MongoDB Icon.svg', category: 'Databases' },
    { name: 'Linux', icon: '/icons/Linux Icon.svg', category: 'Tools' },
    { name: 'Git', icon: '/icons/Git Icon.svg', category: 'Tools' },
    { name: 'Flask', icon: '/icons/Flask Icon.svg', category: 'Frameworks' },
    { name: 'Docker', icon: '/icons/Docker Icon.svg', category: 'Tools' },
    { name: 'Bootstrap', icon: '/icons/Bootstrap Icon.svg', category: 'Frameworks' },
    { name: 'Vite', icon: '/icons/Vite Icon.svg', category: 'Frameworks' },
    { name: 'Postman', icon: '/icons/Postman Icon.svg', category: 'Tools' },
    { name: 'Figma', icon: '/icons/Figma Icon.svg', category: 'Tools' },
]);

const categorizedTech = computed(() => {
    return techStack.value.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, TechItem[]>);
});
</script>

<style scoped>
.tech-item {
    will-change: transform;
}

.tech-icon {
    will-change: transform;
}

/* Fix icon colors in dark mode using invert */
.dark :deep(img) {
    filter: invert(1);
}
</style>
