<template>
    <div class="relative h-[400px] w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <!-- Container for all rows -->
        <div class="absolute inset-0 flex flex-col justify-center gap-12">
            <!-- Each row is independently managed -->
            <div v-for="(row, rowIndex) in animatedRows" :key="`row-${rowIndex}`"
                 class="flex whitespace-nowrap relative"
                 :class="`scroll-row-${rowIndex % 2 ? 'right' : 'left'}`">
                <div class="flex gap-12 px-6 absolute" :style="{ left: '0' }">
                    <div v-for="(tech, techIndex) in row" :key="`${tech.name}-${techIndex}`"
                         class="tech-item w-12"
                         @animationiteration="handleIteration(rowIndex, $event)">
                        <div class="w-12 h-12 relative tech-icon">
                            <img :src="tech.icon"
                                 :alt="tech.name"
                                 class="w-full h-full object-contain dark:invert" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-900/50 to-transparent pointer-events-none"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface TechItem {
    name: string;
    icon: string;
}

const techStack = ref<TechItem[]>([
    { name: 'Vue.js', icon: '/icons/VueDotJS.svg' },
    { name: 'Vim', icon: '/icons/Vim Icon.svg' },
    { name: 'Vercel', icon: '/icons/Vercel Icon.svg' },
    { name: 'Unity', icon: '/icons/Unity Icon.svg' },
    { name: 'TypeScript', icon: '/icons/TypeScript Icon.svg' },
    { name: 'TypeORM', icon: '/icons/TypeORM Icon.svg' },
    { name: 'TensorFlow', icon: '/icons/TensorFlow Icon.svg' },
    { name: 'TailwindCSS', icon: '/icons/Tailwind CSS Icon.svg' },
    { name: 'Swift', icon: '/icons/Swift Icon.svg' },
    { name: 'Sass', icon: '/icons/Sass Icon.svg' },
    { name: 'SQLite', icon: '/icons/SQLite Icon.svg' },
    { name: 'React.js', icon: '/icons/React Icon.svg' },
    { name: 'Python', icon: '/icons/Python Icon.svg' },
    { name: 'PostgreSQL', icon: '/icons/PostgreSQL Icon.svg' },
    { name: 'PHP', icon: '/icons/PHP Icon.svg' },
    { name: 'Nuxt.js', icon: '/icons/Nuxt.js Icon.svg' },
    { name: 'Next.js', icon: '/icons/Next.js Icon.svg' },
    { name: 'NestJS', icon: '/icons/NestJS Icon.svg' },
    { name: 'Neovim', icon: '/icons/Neovim Icon.svg' },
    { name: 'MySQL', icon: '/icons/MySQL Icon.svg' },
    { name: 'MongoDB', icon: '/icons/MongoDB Icon.svg' },
    { name: 'Linux', icon: '/icons/Linux Icon.svg' },
    { name: 'JavaScript', icon: '/icons/JavaScript Icon.svg' },
    { name: 'HTML5', icon: '/icons/HTML5 Icon.svg' },
    { name: 'Bash', icon: '/icons/Gnu Bash Icon.svg' },
    { name: 'GitLab', icon: '/icons/GitLab Icon.svg' },
    { name: 'GitHub', icon: '/icons/GitHub Icon.svg' },
    { name: 'Git', icon: '/icons/Git Icon.svg' },
    { name: 'Flask', icon: '/icons/Flask Icon.svg' },
    { name: 'Docker', icon: '/icons/Docker Icon.svg' },
    { name: 'C++', icon: '/icons/Cplusplus Icon.svg' },
    { name: 'CSS3', icon: '/icons/CSS3 Icon.svg' },
    { name: 'Bootstrap', icon: '/icons/Bootstrap Icon.svg' },
]);

const animatedRows = ref<TechItem[][]>([]);

// Initialize rows with enough items for smooth scrolling
const initializeRows = () => {
    const itemsPerRow = Math.ceil(techStack.value.length / 4);
    animatedRows.value = Array.from({ length: 4 }, (_, index) => {
        const startIndex = index * itemsPerRow;
        const rowItems = [...techStack.value.slice(startIndex, startIndex + itemsPerRow)];
        // Add enough copies to ensure smooth scrolling
        return [...rowItems, ...rowItems, ...rowItems];
    });
};

// Handle animation iteration - reorder items without visual interruption
const handleIteration = (rowIndex: number, event: AnimationEvent) => {
    // Only handle event from the first item in the row to avoid multiple updates
    if (event.target === event.currentTarget) {
        const row = animatedRows.value[rowIndex];
        const itemsToMove = row.slice(0, row.length / 3);
        animatedRows.value[rowIndex] = [
            ...row.slice(row.length / 3),
            ...itemsToMove
        ];
    }
};

onMounted(() => {
    initializeRows();
});
</script>

<style scoped>
.scroll-row-left {
    animation: scrollLeft 20s linear infinite;
}

.scroll-row-right {
    animation: scrollRight 20s linear infinite;
}

@keyframes scrollLeft {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-33.33%); /* Move by 1/3 of the content */
    }
}

@keyframes scrollRight {
    from {
        transform: translateX(-33.33%);
    }
    to {
        transform: translateX(0%);
    }
}

.tech-item {
    will-change: transform;
    pointer-events: none;
}

/* Fix icon colors in dark mode using invert */
.dark :deep(img) {
    filter: invert(1);
}
</style>
