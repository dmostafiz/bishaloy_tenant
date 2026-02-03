<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
            <div class="container mx-auto px-4 text-center">
                <span class="text-4xl mb-4 block">↩️</span>
                <h1 class="text-3xl md:text-4xl font-bold mb-2">Returns & Exchanges</h1>
                <p class="text-purple-100">Hassle-free returns within 30 days</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Return Steps -->
            <div class="grid sm:grid-cols-3 gap-6 mb-12">
                <div v-for="(step, i) in steps" :key="i"
                    class="bg-theme-card rounded-2xl p-6 shadow-theme-lg text-center hover:-translate-y-1 transition-all duration-300">
                    <div
                        class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xl font-bold text-purple-600 dark:text-purple-400 mx-auto mb-4">
                        {{ i + 1 }}
                    </div>
                    <h3 class="font-bold text-theme mb-2">{{ step.title }}</h3>
                    <p class="text-theme-muted text-sm">{{ step.desc }}</p>
                </div>
            </div>

            <!-- Policy Info -->
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="bg-theme-card rounded-2xl p-6 shadow-theme-lg">
                    <h3 class="text-lg font-bold text-theme mb-4 flex items-center gap-2">
                        <span class="text-xl">✅</span> Eligible Items
                    </h3>
                    <ul class="space-y-2 text-theme-muted">
                        <li v-for="item in eligible" :key="item" class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <div class="bg-theme-card rounded-2xl p-6 shadow-theme-lg">
                    <h3 class="text-lg font-bold text-theme mb-4 flex items-center gap-2">
                        <span class="text-xl">❌</span> Non-Returnable Items
                    </h3>
                    <ul class="space-y-2 text-theme-muted">
                        <li v-for="item in nonReturnable" :key="item" class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Refund Info -->
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white mb-12">
                <h3 class="text-xl font-bold mb-4">💰 Refund Timeline</h3>
                <div class="grid sm:grid-cols-3 gap-4">
                    <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                        <p class="text-2xl font-bold">1-2</p>
                        <p class="text-sm text-blue-100">Days to process return</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                        <p class="text-2xl font-bold">3-5</p>
                        <p class="text-sm text-blue-100">Days to inspect item</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                        <p class="text-2xl font-bold">5-10</p>
                        <p class="text-sm text-blue-100">Days for refund to appear</p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center">
                <NuxtLink to="/help"
                    class="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition">
                    Start a Return
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Returns & Exchanges' })

const steps = [
    { title: 'Start Return', desc: 'Log in to your account and select the order you want to return' },
    { title: 'Ship Item', desc: 'Use the prepaid label to ship the item back to us' },
    { title: 'Get Refund', desc: 'Receive your refund once we process the return' }
]

const eligible = ['Unused items in original packaging', 'Items returned within 30 days', 'Items with all tags attached', 'Defective or damaged products']
const nonReturnable = ['Final sale items', 'Personalized products', 'Intimate apparel', 'Opened electronics (unless defective)']
</script>
