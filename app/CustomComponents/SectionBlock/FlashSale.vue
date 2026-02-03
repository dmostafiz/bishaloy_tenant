<template>
    <section class="py-0 sm:py-8">
        <div class="container mx-auto px-4">
            <div
                class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-800 shadow-2xl">
                <!-- Decorative Circles -->
                <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-black/10 blur-2xl"></div>

                <div class="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
                    <div class="text-center md:text-left text-white max-w-lg">
                        <span
                            class="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">Limited
                            Time Offer</span>
                        <h2 class="text-4xl md:text-5xl font-black mb-4 leading-tight">{{ title }}</h2>
                        <p class="text-lg text-white/90 mb-6">{{ subtitle }}</p>

                        <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8">
                            <div
                                class="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-3 min-w-[70px] border border-white/20">
                                <span class="text-2xl font-bold font-mono">{{ hours }}</span>
                                <span class="text-xs uppercase opacity-80">Hours</span>
                            </div>
                            <span class="text-2xl font-bold opacity-50">:</span>
                            <div
                                class="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-3 min-w-[70px] border border-white/20">
                                <span class="text-2xl font-bold font-mono">{{ minutes }}</span>
                                <span class="text-xs uppercase opacity-80">Mins</span>
                            </div>
                            <span class="text-2xl font-bold opacity-50">:</span>
                            <div
                                class="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-3 min-w-[70px] border border-white/20">
                                <span class="text-2xl font-bold font-mono">{{ seconds }}</span>
                                <span class="text-xs uppercase opacity-80">Secs</span>
                            </div>
                        </div>

                        <button
                            class="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group mx-auto md:mx-0">
                            {{ ctaText }}
                            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                    <div class="relative w-full md:w-1/2 lg:w-5/12 max-w-sm md:max-w-none">
                        <div class="relative aspect-square">
                            <div
                                class="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full transform rotate-6 border border-white/20 animate-pulse">
                            </div>
                            <img :src="image" alt="Flash Sale Product"
                                class="absolute inset-0 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 transform -rotate-12">

                            <!-- Floating Tag -->
                            <div
                                class="absolute top-0 right-0 bg-yellow-400 text-black font-black text-xl py-4 px-3 rounded-full shadow-lg transform rotate-12 flex flex-col items-center justify-center leading-tight w-20 h-20 border-4 border-white">
                                <span>{{ discountText }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
    title: string;
    subtitle: string;
    discountText: string;
    image: string;
    ctaText: string;
    endTime?: string;
}>()

const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
let timer = null

const updateTimer = () => {
    const now = new Date()
    const end = new Date()
    end.setHours(23, 59, 59, 999) // Sale ends at midnight

    // If passed midnight, set to next day midnight (simulate recurring sale)
    if (now > end) {
        end.setDate(end.getDate() + 1)
    }

    const diff = end - now

    if (diff <= 0) {
        // Reset
        return
    }

    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((diff % (1000 * 60)) / 1000)

    hours.value = h.toString().padStart(2, '0')
    minutes.value = m.toString().padStart(2, '0')
    seconds.value = s.toString().padStart(2, '0')
}

onMounted(() => {
    updateTimer()
    timer = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
    if (timer) clearInterval(timer)
})
</script>
