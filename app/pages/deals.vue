<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Hero -->
        <div class="relative bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-20 overflow-hidden">
            <div class="container mx-auto px-4 text-center relative z-10">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                    <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span class="text-sm font-medium">Limited Time Offers</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-bold mb-4">Mega Deals & Offers</h1>
                <p class="text-xl text-white/90 mb-8">Save up to 70% on thousands of products</p>
                <div class="flex items-center justify-center gap-4">
                    <div v-for="(val, key) in countdown" :key="key" class="text-center">
                        <div class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-1">
                            <span class="text-2xl font-bold">{{ val }}</span>
                        </div>
                        <span class="text-xs">{{ key }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Flash Deals -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">⚡ Flash Deals</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div v-for="deal in flashDeals" :key="deal.id"
                        class="bg-white rounded-xl shadow-sm overflow-hidden group">
                        <div class="relative aspect-square">
                            <img :src="deal.image" :alt="deal.name"
                                class="w-full h-full object-cover group-hover:scale-105 transition">
                            <div
                                class="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                                -{{ deal.discount }}%
                            </div>
                        </div>
                        <div class="p-3">
                            <h4 class="text-sm font-medium line-clamp-2 mb-2">{{ deal.name }}</h4>
                            <div class="flex gap-2">
                                <span class="font-bold text-red-500">${{ deal.salePrice }}</span>
                                <span class="text-sm text-gray-400 line-through">${{ deal.originalPrice }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Coupons -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🎟️ Coupons</h2>
                <div class="grid md:grid-cols-3 gap-4">
                    <div v-for="c in coupons" :key="c.code" class="bg-orange-500 text-white rounded-xl p-5">
                        <p class="text-sm opacity-80">{{ c.description }}</p>
                        <p class="text-2xl font-bold my-2">{{ c.discount }}</p>
                        <div class="flex justify-between items-center">
                            <span class="font-mono bg-white/20 px-2 py-1 rounded">{{ c.code }}</span>
                            <button @click="navigator.clipboard.writeText(c.code)"
                                class="px-3 py-1 bg-white text-orange-500 rounded font-medium text-sm">Copy</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Today's Deals -->
            <section>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🛍️ Today's Deals</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="p in todayDeals" :key="p.id"
                        class="bg-white rounded-xl shadow-sm overflow-hidden group">
                        <div class="relative aspect-square">
                            <img :src="p.image" :alt="p.name"
                                class="w-full h-full object-cover group-hover:scale-105 transition">
                            <div
                                class="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                                SAVE ${{ (p.originalPrice - p.price).toFixed(0) }}
                            </div>
                        </div>
                        <div class="p-4">
                            <h4 class="font-medium line-clamp-2 mb-2 group-hover:text-orange-500">{{ p.name }}</h4>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="text-xl font-bold text-red-500">${{ p.price }}</span>
                                    <span class="text-sm text-gray-400 line-through ml-2">${{ p.originalPrice }}</span>
                                </div>
                                <button class="p-2 bg-orange-500 text-white rounded-lg">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({ title: 'Deals & Offers', description: 'Exclusive deals and discounts' })

const countdown = ref({ days: '02', hours: '14', mins: '32', secs: '45' })
let timer: any
onMounted(() => {
    timer = setInterval(() => {
        const end = new Date(); end.setHours(23, 59, 59, 999)
        const diff = end.getTime() - Date.now()
        countdown.value = {
            days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
            hours: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
            mins: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
            secs: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0')
        }
    }, 1000)
})
onUnmounted(() => clearInterval(timer))

const flashDeals = [
    { id: 1, name: 'Wireless Earbuds Pro', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop', originalPrice: 99, salePrice: 39, discount: 60 },
    { id: 2, name: 'Smart Fitness Band', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop', originalPrice: 79, salePrice: 29, discount: 63 },
    { id: 3, name: 'Portable Charger', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop', originalPrice: 49, salePrice: 19, discount: 61 },
    { id: 4, name: 'Bluetooth Speaker', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', originalPrice: 89, salePrice: 35, discount: 61 }
]

const coupons = [
    { code: 'SAVE20', discount: '20% OFF', description: 'On orders over $100' },
    { code: 'FREESHIP', discount: 'Free Shipping', description: 'On all orders' },
    { code: 'EXTRA10', discount: '$10 OFF', description: 'First order only' }
]

const todayDeals = [
    { id: 1, name: 'Premium Wireless Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', price: 59.99, originalPrice: 129.99 },
    { id: 2, name: 'Smart Watch Series 5', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', price: 149.99, originalPrice: 299.99 },
    { id: 3, name: 'Running Shoes Ultra', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', price: 69.99, originalPrice: 119.99 },
    { id: 4, name: 'Designer Backpack', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', price: 29.99, originalPrice: 79.99 }
]
</script>
