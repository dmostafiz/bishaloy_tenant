<template>
    <section class="hero-section relative w-full min-h-[500px] overflow-hidden bg-black" :style="{
        minHeight: height ? `${height}px` : '600px',
    }" @mouseenter="pauseOnHover && pauseAutoplay()" @mouseleave="pauseOnHover && resumeAutoplay()">
        
        <!-- Carousel Slides -->
        <TransitionGroup name="fade">
            <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
                class="absolute inset-0 w-full h-full">
                
                <!-- Background Image with Overlay -->
                <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms] hover:scale-110 motion-safe:animate-ken-burns"
                    :style="{ backgroundImage: `url(${slide.bgImageUrl || defaultBgImage})` }">
                    <!-- Gradient Overlay -->
                    <div class="absolute inset-0" :class="getOverlayClasses(slide.overlayType)"></div>
                </div>

                <!-- Animated Background Elements (Optional) -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="floating-shape shape-1"></div>
                    <div class="floating-shape shape-2"></div>
                </div>

                <!-- Content Container -->
                <div class="relative z-10 container mx-auto px-4 h-full flex items-center" :style="{
                    padding: slide.padding
                        ? `${slide.padding.top || 0}px ${slide.padding.right || 0}px ${slide.padding.bottom || 0}px ${slide.padding.left || 0}px`
                        : '80px 0'
                }">
                    <div class="w-full flex" :class="getContentAlignmentClass(slide.contentAlignment)"
                        :dir="slide.contentDirection || 'ltr'">
                        <div class="max-w-2xl space-y-6" :class="{ 'animate-fade-in-up': currentSlide === index }">
                            <!-- Badge/Tag -->
                            <div v-if="slide.badge"
                                class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                <span class="text-sm font-medium text-white/90">{{ slide.badge }}</span>
                            </div>

                            <!-- Main Title -->
                            <h1 class="hero-title font-bold leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                                :style="{ color: slide.titleColor || '#ffffff' }">
                                <span class="block">{{ getPrimaryTitle(slide.title) }}</span>
                                <span v-if="getHighlightedTitle(slide.title)"
                                    class="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                                    {{ getHighlightedTitle(slide.title) }}
                                </span>
                            </h1>

                            <!-- Subtitle/Description -->
                            <p v-if="slide.subTitle" class="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl"
                                :style="{ color: slide.subTitleColor || 'rgba(255, 255, 255, 0.85)' }">
                                {{ slide.subTitle }}
                            </p>

                            <!-- CTA Buttons -->
                            <div class="flex flex-wrap gap-4 pt-4">
                                <button v-if="slide.primaryButton" @click="handlePrimaryClick(slide)"
                                    class="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1">
                                    <span class="relative z-10 flex items-center gap-2">
                                        {{ slide.primaryButton.text || 'Shop Now' }}
                                        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </button>

                                <button v-if="slide.secondaryButton" @click="handleSecondaryClick(slide)"
                                    class="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:-translate-y-1">
                                    <span class="flex items-center gap-2">
                                        {{ slide.secondaryButton.text || 'Learn More' }}
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <!-- Stats/Features Row -->
                            <div v-if="slide.stats && slide.stats.length > 0"
                                class="flex flex-wrap gap-8 pt-8 border-t border-white/20 mt-8">
                                <div v-for="(stat, idx) in slide.stats" :key="idx" class="text-center">
                                    <div class="text-3xl md:text-4xl font-bold text-white mb-1">
                                        {{ stat.value }}
                                    </div>
                                    <div class="text-sm text-white/70">{{ stat.label }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- Optional: Side Image/Product Showcase -->
                        <div v-if="slide.sideImage" class="hidden lg:block flex-1 relative">
                            <img :src="slide.sideImage" :alt="slide.title"
                                class="absolute right-0 top-1/2 -translate-y-1/2 max-w-lg w-full object-contain drop-shadow-2xl animate-float">
                        </div>
                    </div>
                </div>
            </div>
        </TransitionGroup>

        <!-- Navigation Controls -->
        <div class="absolute bottom-10 left-0 right-0 z-20 flex justify-center items-center gap-4">
            <!-- Prev Button (Optional) -->
            <button @click="prevSlide" class="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-md">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            <!-- Indicators -->
            <div class="flex gap-3">
                <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
                    class="h-1.5 rounded-full transition-all duration-300"
                    :class="currentSlide === index ? 'w-8 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white'">
                </button>
            </div>
            
             <!-- Next Button (Optional) -->
            <button @click="nextSlide" class="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-md">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>

    </section>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

interface HeroProps {
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
    primaryButton?: { text?: string, url?: string }
    secondaryButton?: { text?: string, url?: string }
    stats?: Array<{ value: string, label: string }>
    sideImage?: string
    showScrollIndicator?: boolean
    overlayType?: 'dark' | 'light' | 'gradient' | 'none'
    padding?: { top?: number, right?: number, bottom?: number, left?: number }
}

const props = defineProps<HeroProps>()

// Default Image
const defaultBgImage = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80'

// Carousel State
const currentSlide = ref(0)
const autoplayInterval = ref<any>(null)
const pauseOnHover = ref(true)

// Mock Slides combined with Props
// Use props as the first slide, then add demo slides
const slides = computed(() => {
    const propSlide: HeroProps = { ...props }
    
    // Additional "Beautiful" Demo Slides
    const demoSlides: HeroProps[] = [
        {
            title: "Summer Collection | New Arrivals",
            subTitle: "Discover the hottest trends of the season. Lightweight fabrics, vibrant colors, and styles that define summer.",
            bgImageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80",
            overlayType: 'dark',
            contentAlignment: 'center',
            badge: "Limited Edition",
            primaryButton: { text: "View Collection", url: "/shop" },
            secondaryButton: { text: "Read Lookbook", url: "/blog" }
        },
        {
            title: "Tech Revolution | Future is Here",
            subTitle: "Upgrade your lifestyle with cutting-edge gadgets designed to make your life smarter and easier.",
            bgImageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80",
            overlayType: 'gradient',
            contentAlignment: 'left',
            badge: "Tech Week Deal",
            primaryButton: { text: "Shop Gadgets", url: "/categories" },
            stats: [
                { value: "50%", label: "Discount" },
                { value: "24h", label: "Delivery" }
            ]
        }
    ]

    return [propSlide, ...demoSlides]
})


// Helpers
const getPrimaryTitle = (title?: string) => title?.split('|')[0]?.trim() || 'Welcome'
const getHighlightedTitle = (title?: string) => title?.split('|')[1]?.trim() || ''

const getOverlayClasses = (type?: string) => {
    switch (type || props.overlayType || 'gradient') {
        case 'dark': return 'bg-black/60'
        case 'light': return 'bg-white/20'
        case 'gradient': return 'bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent'
        case 'none': return ''
        default: return 'bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent'
    }
}

const getContentAlignmentClass = (alignment?: string) => {
    switch (alignment || props.contentAlignment || 'left') {
        case 'center': return 'justify-center text-center'
        case 'right': return 'justify-end text-right'
        default: return 'justify-start text-left'
    }
}

// Navigation Logic
const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index: number) => {
    currentSlide.value = index
}

// Autoplay
const startAutoplay = () => {
    autoplayInterval.value = setInterval(nextSlide, 5000)
}

const pauseAutoplay = () => {
    if (autoplayInterval.value) clearInterval(autoplayInterval.value)
}

const resumeAutoplay = () => {
    pauseAutoplay()
    startAutoplay()
}

// Click Handlers
const handlePrimaryClick = (slide: HeroProps) => {
    if (slide.primaryButton?.url) navigateTo(slide.primaryButton.url)
}

const handleSecondaryClick = (slide: HeroProps) => {
    if (slide.secondaryButton?.url) navigateTo(slide.secondaryButton.url)
}

// Lifecycle
onMounted(() => {
    startAutoplay()
})

onUnmounted(() => {
    pauseAutoplay()
})
</script>

<style scoped>
/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Animations */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes kenBurns {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
.motion-safe\:animate-ken-burns {
    animation: kenBurns 20s infinite alternate linear;
}

/* Floating Shapes */
.floating-shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    background: linear-gradient(135deg, #f97316, #ea580c);
}
.shape-1 {
    width: 400px; height: 400px; top: -100px; right: -100px;
    animation: floatShape 20s ease-in-out infinite;
}
.shape-2 {
    width: 300px; height: 300px; bottom: -50px; left: 10%;
    animation: floatShape 15s ease-in-out infinite reverse;
}

@keyframes floatShape {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(20px, 20px) rotate(5deg); }
    50% { transform: translate(0, 40px) rotate(0deg); }
    75% { transform: translate(-20px, 20px) rotate(-5deg); }
}
</style>
