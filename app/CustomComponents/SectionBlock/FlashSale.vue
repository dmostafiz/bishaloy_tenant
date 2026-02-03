<template>
    <section class="py-12 sm:py-16">
        <div class="container mx-auto px-4">
            <div
                class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 dark:from-orange-700 dark:via-red-800 dark:to-purple-900 shadow-2xl transition-colors duration-500">
                <!-- Decorative Elements -->
                <div class="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-white/10 blur-3xl opacity-50"></div>
                <div class="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full bg-black/20 blur-3xl opacity-50"></div>
                <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 gap-12">
                    <!-- Content -->
                    <div class="text-center lg:text-left text-white max-w-xl">
                        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 shadow-sm mb-6">
                            <span class="relative flex h-3 w-3">
                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span class="text-sm font-bold tracking-wide uppercase">Limited Time Offer</span>
                        </div>

                        <h2 class="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-sm">
                            {{ title }}
                        </h2>
                        <p class="text-lg md:text-xl text-white/90 mb-10 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                            {{ subtitle }}
                        </p>

                        <!-- Timer -->
                        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                            <div class="flex flex-col items-center justify-center w-20 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                                <span class="text-3xl font-bold font-mono">{{ hours }}</span>
                                <span class="text-[10px] uppercase tracking-widest opacity-80 mt-1">Hours</span>
                            </div>
                            <span class="text-3xl font-bold opacity-50 pb-4">:</span>
                            <div class="flex flex-col items-center justify-center w-20 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                                <span class="text-3xl font-bold font-mono">{{ minutes }}</span>
                                <span class="text-[10px] uppercase tracking-widest opacity-80 mt-1">Mins</span>
                            </div>
                            <span class="text-3xl font-bold opacity-50 pb-4">:</span>
                            <div class="flex flex-col items-center justify-center w-20 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                                <span class="text-3xl font-bold font-mono">{{ seconds }}</span>
                                <span class="text-[10px] uppercase tracking-widest opacity-80 mt-1">Secs</span>
                            </div>
                        </div>

                        <button
                            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg shadow-xl shadow-orange-900/20 hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                            <span>{{ ctaText }}</span>
                            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    <!-- Image Section -->
                    <div class="relative w-full lg:w-1/2 max-w-md lg:max-w-none">
                        <div class="relative aspect-square flex items-center justify-center">
                            <!-- Glowing Effect -->
                            <div class="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-full blur-3xl transform scale-75 opacity-40 animate-pulse"></div>
                            
                            <!-- Main Image -->
                            <img :src="image" alt="Flash Sale Product"
                                class="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700 ease-in-out hover:rotate-2">

                            <!-- Floating Badge -->
                            <div
                                class="absolute top-4 right-4 md:top-0 md:right-12 z-20 bg-white/90 backdrop-blur-xl border border-white/50 text-gray-900 font-black text-2xl md:text-3xl py-6 px-4 rounded-3xl shadow-2xl transform rotate-12 flex flex-col items-center justify-center leading-none min-w-[100px] min-h-[100px] animate-bounce-slow">
                                <span class="text-sm font-bold text-red-600 uppercase tracking-wide mb-1">Save</span>
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
