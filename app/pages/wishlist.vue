<template>
    <div class="min-h-screen bg-gray-50">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mb-2">My Wishlist</h1>
                <p class="text-gray-400">{{ items.length }} items saved</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div v-if="items.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in items" :key="item.id" class="bg-white rounded-xl shadow-sm overflow-hidden group">
                    <div class="relative aspect-square">
                        <img :src="item.image" :alt="item.name"
                            class="w-full h-full object-cover group-hover:scale-105 transition">
                        <button @click="removeItem(item.id)"
                            class="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-red-50">
                            <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div class="p-4">
                        <h4 class="font-medium line-clamp-2 mb-2">{{ item.name }}</h4>
                        <p class="text-xl font-bold text-orange-500 mb-3">${{ item.price }}</p>
                        <button
                            class="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-16">
                <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
                <p class="text-gray-500 mb-6">Start adding items you love</p>
                <NuxtLink to="/shop" class="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold">
                    Browse Products
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
useSeoMeta({ title: 'My Wishlist' })

const items = ref([
    { id: 1, name: 'Wireless Bluetooth Headphones', price: '79.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop' },
    { id: 2, name: 'Smart Watch Series 5', price: '199.99', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop' },
    { id: 3, name: 'Premium Running Shoes', price: '89.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' }
])

const removeItem = (id: number) => {
    items.value = items.value.filter(i => i.id !== id)
}
</script>
