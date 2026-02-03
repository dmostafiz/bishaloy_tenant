<template>
    <section class="container mx-auto px-4 py-16">
        <div class="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div class="max-w-xl">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                    {{ title }}
                </h2>
                <p v-if="subtitle" class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{{ subtitle }}</p>
            </div>
            
             <NuxtLink to="/shop" class="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:text-orange-600 transition group">
                <span>View All Products</span>
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </NuxtLink>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            <DefaultCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        
        <div class="mt-12 text-center md:hidden">
             <NuxtLink to="/shop" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <span>View All Products</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import DefaultCard from '~/CustomComponents/Product/GridCards/DefaultCard.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Our Products'
    },
    subtitle: {
        type: String,
        default: ''
    },
    products: {
        type: Array,
        default: () => []
    }
})
</script>
