<template>
    <section class="hero-section relative w-full min-h-[500px] overflow-hidden" :style="{
        minHeight: section?.height ? `${section.height}px` : '600px',
    }">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms] hover:scale-110"
            :style="{ backgroundImage: `url(${section?.bgImageUrl || defaultBgImage})` }">
            <!-- Gradient Overlay -->
            <div class="absolute inset-0" :class="overlayClasses"></div>
        </div>

        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="floating-shape shape-1"></div>
            <div class="floating-shape shape-2"></div>
            <div class="floating-shape shape-3"></div>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 container mx-auto px-4 h-full flex items-center" :style="{
            padding: section?.padding
                ? `${section.padding.top || 0}px ${section.padding.right || 0}px ${section.padding.bottom || 0}px ${section.padding.left || 0}px`
                : '80px 0'
        }">
            <div class="w-full flex" :class="contentAlignmentClass" :dir="section?.contentDirection || 'ltr'">
                <div class="max-w-2xl space-y-6 animate-fade-in-up">
                    <!-- Badge/Tag -->
                    <div v-if="section?.badge"
                        class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                        <span class="text-sm font-medium text-white/90">{{ section.badge }}</span>
                    </div>

                    <!-- Main Title -->
                    <h1 class="hero-title font-bold leading-tight" :class="titleSizeClass"
                        :style="{ color: section?.titleColor || '#ffffff' }">
                        <span class="block">{{ primaryTitle }}</span>
                        <span v-if="highlightedTitle"
                            class="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                            {{ highlightedTitle }}
                        </span>
                    </h1>

                    <!-- Subtitle/Description -->
                    <p v-if="section?.subTitle" class="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl"
                        :style="{ color: section?.subTitleColor || 'rgba(255, 255, 255, 0.85)' }">
                        {{ section.subTitle }}
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-wrap gap-4 pt-4">
                        <button v-if="section?.primaryButton" @click="handlePrimaryClick"
                            class="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1">
                            <span class="relative z-10 flex items-center gap-2">
                                {{ section.primaryButton.text || 'Shop Now' }}
                                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            </div>
                        </button>

                        <button v-if="section?.secondaryButton" @click="handleSecondaryClick"
                            class="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:-translate-y-1">
                            <span class="flex items-center gap-2">
                                {{ section.secondaryButton.text || 'Learn More' }}
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <!-- Stats/Features Row -->
                    <div v-if="section?.stats && section.stats.length > 0"
                        class="flex flex-wrap gap-8 pt-8 border-t border-white/20 mt-8">
                        <div v-for="(stat, index) in section.stats" :key="index" class="text-center">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-1">
                                {{ stat.value }}
                            </div>
                            <div class="text-sm text-white/70">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>

                <!-- Optional: Side Image/Product Showcase -->
                <div v-if="section?.sideImage" class="hidden lg:block flex-1 relative">
                    <img :src="section.sideImage" :alt="section.title"
                        class="absolute right-0 top-1/2 -translate-y-1/2 max-w-lg w-full object-contain drop-shadow-2xl animate-float">
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div v-if="section?.showScrollIndicator !== false" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div class="scroll-indicator">
                <div class="scroll-dot"></div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface HeroSection {
    type?: string
    title?: string
    subTitle?: string
    titleColor?: string
    subTitleColor?: string
    bgImageUrl?: string
    bgColor?: string
    height?: number
    contentDirection?: 'ltr' | 'rtl'
    contentAlignment?: 'left' | 'center' | 'right'
    badge?: string
    primaryButton?: {
        text?: string
        url?: string
    }
    secondaryButton?: {
        text?: string
        url?: string
    }
    stats?: Array<{
        value: string
        label: string
    }>
    sideImage?: string
    showScrollIndicator?: boolean
    overlayType?: 'dark' | 'light' | 'gradient' | 'none'
    padding?: {
        top?: number
        right?: number
        bottom?: number
        left?: number
    }
}

const props = defineProps<{
    section: HeroSection
}>()

const defaultBgImage = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80'

// Split title into primary and highlighted parts
const primaryTitle = computed(() => {
    if (!props.section?.title) return 'Welcome to Our Store'
    const parts = props.section.title.split('|')
    return parts[0]?.trim() || props.section.title
})

const highlightedTitle = computed(() => {
    if (!props.section?.title) return ''
    const parts = props.section.title.split('|')
    return parts[1]?.trim() || ''
})

// Overlay classes based on type
const overlayClasses = computed(() => {
    const type = props.section?.overlayType || 'gradient'
    switch (type) {
        case 'dark':
            return 'bg-gray-900/70'
        case 'light':
            return 'bg-white/30'
        case 'gradient':
            return 'bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent'
        case 'none':
            return ''
        default:
            return 'bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent'
    }
})

// Content alignment class
const contentAlignmentClass = computed(() => {
    const alignment = props.section?.contentAlignment || 'left'
    switch (alignment) {
        case 'center':
            return 'justify-center text-center'
        case 'right':
            return 'justify-end text-right'
        default:
            return 'justify-start text-left'
    }
})

// Title size class
const titleSizeClass = computed(() => {
    return 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
})

// Navigation handlers
const handlePrimaryClick = () => {
    if (props.section?.primaryButton?.url) {
        navigateTo(props.section.primaryButton.url)
    }
}

const handleSecondaryClick = () => {
    if (props.section?.secondaryButton?.url) {
        navigateTo(props.section.secondaryButton.url)
    }
}
</script>

<style scoped>
/* Fade in up animation */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Floating animation for side image */
@keyframes float {

    0%,
    100% {
        transform: translateY(-50%) translateX(0);
    }

    50% {
        transform: translateY(-50%) translateX(-10px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Floating background shapes */
.floating-shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    background: linear-gradient(135deg, #f97316, #ea580c);
}

.shape-1 {
    width: 400px;
    height: 400px;
    top: -100px;
    right: -100px;
    animation: floatShape 20s ease-in-out infinite;
}

.shape-2 {
    width: 300px;
    height: 300px;
    bottom: -50px;
    left: 10%;
    animation: floatShape 15s ease-in-out infinite reverse;
}

.shape-3 {
    width: 200px;
    height: 200px;
    top: 40%;
    right: 20%;
    animation: floatShape 18s ease-in-out infinite;
}

@keyframes floatShape {

    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }

    25% {
        transform: translate(20px, 20px) rotate(5deg);
    }

    50% {
        transform: translate(0, 40px) rotate(0deg);
    }

    75% {
        transform: translate(-20px, 20px) rotate(-5deg);
    }
}

/* Scroll indicator */
.scroll-indicator {
    width: 30px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    position: relative;
}

.scroll-dot {
    width: 6px;
    height: 10px;
    background: #f97316;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 8px;
    animation: scrollDot 2s ease-in-out infinite;
}

@keyframes scrollDot {

    0%,
    100% {
        top: 8px;
        opacity: 1;
    }

    50% {
        top: 28px;
        opacity: 0.3;
    }
}

/* Hero title gradient animation */
.hero-title span:last-child {
    background-size: 200% auto;
    animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% center;
    }

    50% {
        background-position: 100% center;
    }

    100% {
        background-position: 0% center;
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .floating-shape {
        display: none;
    }
}
</style>
