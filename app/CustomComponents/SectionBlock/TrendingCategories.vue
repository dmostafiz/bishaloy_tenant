<template>
    <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="container mx-auto px-4">
            <div class="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                        {{ title }}
                    </h2>
                    <p class="text-gray-500 dark:text-gray-400 text-lg">{{ subtitle }}</p>
                </div>
                <NuxtLink to="/categories"
                    class="hidden sm:flex items-center gap-2 text-primary hover:text-orange-600 font-semibold transition-colors group">
                    <span>View All Collections</span>
                    <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </NuxtLink>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <NuxtLink v-for="(category, index) in categories" :key="index" to="/categories"
                    class="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-200 dark:bg-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500">

                    <img :src="category.image" :alt="category.name"
                        class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out">

                    <!-- Gradient Overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                    </div>

                    <!-- Content -->
                    <div
                        class="absolute bottom-0 left-0 w-full p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 class="text-white font-bold text-xl leading-tight mb-1">{{ category.name }}</h3>
                        <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                            <span class="text-primary font-medium text-sm">Explore</span>
                            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            
            <div class="mt-8 text-center sm:hidden">
                <NuxtLink to="/categories"
                    class="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-semibold transition-colors">
                    View All Collections
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    subtitle: string;
    categories: Array<{
        name: string;
        count: string;
        image: string;
    }>
}>()
</script>
