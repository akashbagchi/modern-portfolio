<template>
    <div class="relative h-[400px] w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <div ref="stackContainer" class="absolute inset-0">
            <div v-for="(tech, index) in techStack"
                 :key="tech.name"
                 class="tech-item absolute opacity-0"
                 :style="getPosition(index)">
                <div class="w-12 h-12 relative tech-icon">
                    <img :src="tech.icon"
                         :alt="tech.name"
                         class="w-full h-full object-contain dark:invert" />
                </div>
            </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-900/50 to-transparent pointer-events-none"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

interface TechItem {
    name: string;
    icon: string;
}
const stackContainer = ref<HTMLElement | null>(null);

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

const ROWS = 4;
const COLS = Math.ceil(techStack.value.length / ROWS);
const SPACING = 100; // Spacing between items in pixels

const getPosition = (index: number) => {
    return {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    };
};

const createGridAnimation = () => {
    const elements = stackContainer.value?.querySelectorAll('.tech-item');
    if (!elements) return;

    // First fade in all items
    gsap.to(elements, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05
    });

    // Calculate initial grid positions
    elements.forEach((el, index) => {
        const row = Math.floor(index / COLS);
        const col = index % COLS;

        // Center the grid
        const x = (col - (COLS - 1) / 2) * SPACING;
        const y = (row - (ROWS - 1) / 2) * SPACING;

        gsap.set(el, {
            x,
            y,
            z: 0
        });
    });

    // Create the rotating animation
    const timeline = gsap.timeline({
        repeat: -1,
        defaults: { duration: 20, ease: "none" }
    });

    // Rotate the entire grid
    timeline.to(elements, {
        rotate: 360,
        transformOrigin: "center center",
        stagger: {
            each: 0,
            from: "center"
        }
    });

    // Add subtle floating effect
    elements.forEach((el) => {
        gsap.to(el, {
            y: "+=20",
            duration: gsap.utils.random(2, 3),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
};

onMounted(() => {
    createGridAnimation();
});

onBeforeUnmount(() => {
    gsap.killTweensOf('.tech-item');
});
</script>

<style scoped>
.tech-item {
    will-change: transform;
    transform-style: preserve-3d;
}

/* Fix icon colors in dark mode using invert */
.dark :deep(img) {
    filter: invert(1);
}

.tech-icon {
    transition: transform 0.3s ease;
}

.tech-icon:hover {
    transform: scale(1.2);
}
</style>
