<template>
    <section class="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-end mb-8">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ title }}</h2>
                    <p class="text-gray-500 dark:text-gray-400">{{ subtitle }}</p>
                </div>
                <a href="/categories"
                    class="hidden sm:flex items-center gap-2 text-primary hover:text-orange-600 font-semibold transition-colors">
                    View All
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <a v-for="(category, index) in categories" :key="index" href="#"
                    class="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300">

                    <img :src="category.image" :alt="category.name"
                        class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">

                    <!-- Gradient Overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                    </div>

                    <div
                        class="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 class="text-white font-bold text-lg leading-tight mb-1">{{ category.name }}</h3>
                        <p
                            class="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {{ category.count }} Products</p>
                    </div>
                </a>
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
