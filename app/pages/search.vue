<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white py-8">
            <div class="container mx-auto px-4">
                <form @submit.prevent class="max-w-2xl mx-auto">
                    <div class="relative">
                        <input v-model="query" type="text" placeholder="Search for products..."
                            class="w-full px-6 py-4 rounded-xl text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 text-lg">
                        <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </form>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <p class="text-gray-600 dark:text-gray-400 mb-6">{{ results.length }} results for "<span
                    class="font-semibold text-gray-900 dark:text-white">{{ query }}</span>"</p>

            <div v-if="results.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="p in results" :key="p.id"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <div class="aspect-square overflow-hidden">
                        <img :src="p.image" :alt="p.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-4">
                        <h4
                            class="font-medium text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-orange-500 transition">
                            {{ p.name }}</h4>
                        <p class="text-xl font-bold text-orange-500">${{ p.price }}</p>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-16">
                <p class="text-gray-400 text-lg mb-4">No products found</p>
                <NuxtLink to="/shop" class="text-orange-500 hover:underline font-medium">Browse all products</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const route = useRoute()
useSeoMeta({ title: 'Search Results' })

const query = ref(route.query.q as string || '')

const allProducts = [
    { id: 1, name: 'Wireless Headphones', price: '79.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop' },
    { id: 2, name: 'Smart Watch', price: '199.99', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop' },
    { id: 3, name: 'Running Shoes', price: '89.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
    { id: 4, name: 'Backpack', price: '49.99', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop' }
]

const results = computed(() => {
    if (!query.value) return allProducts
    return allProducts.filter(p => p.name.toLowerCase().includes(query.value.toLowerCase()))
})
</script>
