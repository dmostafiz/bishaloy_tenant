<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-10">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold flex items-center gap-3">
                    <span class="text-4xl">❤️</span> My Wishlist
                </h1>
                <p class="text-pink-100 mt-1">{{ items.length }} saved items</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div v-if="items.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in items" :key="item.id"
                    class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden hover:-translate-y-1 transition-all duration-300">
                    <div class="relative aspect-square overflow-hidden">
                        <img :src="item.image" :alt="item.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <button @click="removeItem(item.id)"
                            class="absolute top-3 right-3 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg text-red-500 hover:bg-red-500 hover:text-white transition">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="p-4">
                        <p class="text-xs text-orange-500 mb-1">{{ item.category }}</p>
                        <h4
                            class="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-orange-500 transition">
                            {{ item.name }}</h4>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-gray-900 dark:text-white">${{ item.price }}</span>
                            <button
                                class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition text-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-20">
                <div
                    class="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span class="text-4xl">💔</span>
                </div>
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Your wishlist is empty</h2>
                <p class="text-gray-500 dark:text-gray-400 mb-6">Save items you love for later</p>
                <NuxtLink to="/shop"
                    class="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition">
                    Browse Products</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
useSeoMeta({ title: 'My Wishlist' })

const items = ref([
    { id: 1, name: 'Premium Wireless Headphones', category: 'Electronics', price: 79.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop' },
    { id: 2, name: 'Designer Leather Bag', category: 'Fashion', price: 149.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop' },
    { id: 3, name: 'Smart Watch Pro', category: 'Electronics', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop' },
    { id: 4, name: 'Running Shoes Elite', category: 'Sports', price: 89.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' }
])

const removeItem = (id: number) => {
    items.value = items.value.filter(i => i.id !== id)
}
</script>
