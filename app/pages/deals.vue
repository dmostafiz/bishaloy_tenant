<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <!-- Countdown Hero -->
        <div class="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white py-10 relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
            <div class="container mx-auto px-4 text-center relative">
                <span class="inline-block px-4 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-4">⚡
                    Limited Time</span>
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Flash Deals</h1>
                <p class="text-lg text-orange-100 mb-6">Up to 70% off - Hurry, ends soon!</p>
                <div class="flex justify-center gap-4">
                    <div v-for="(unit, label) in countdown" :key="label"
                        class="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px]">
                        <div class="text-3xl font-bold">{{ String(unit).padStart(2, '0') }}</div>
                        <div class="text-xs text-orange-200 uppercase">{{ label }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Flash Deals -->
            <section class="mb-16">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white">⚡</span>
                    Flash Deals
                </h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="deal in flashDeals" :key="deal.id"
                        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                        <div class="relative aspect-square overflow-hidden">
                            <img :src="deal.image" :alt="deal.name"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <div
                                class="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                                -{{ deal.discount }}%</div>
                        </div>
                        <div class="p-4">
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2 line-clamp-1">{{ deal.name }}
                            </h4>
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-xl font-bold text-red-500">${{ deal.salePrice }}</span>
                                <span class="text-sm text-gray-400 line-through">${{ deal.originalPrice }}</span>
                            </div>
                            <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div :style="{ width: `${deal.soldPercent}%` }"
                                    class="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ deal.soldPercent }}% sold</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Coupon Codes -->
            <section class="mb-16">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">🎟️ Exclusive Coupons</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="coupon in coupons" :key="coupon.code"
                        class="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-2xl p-5 text-white relative overflow-hidden group">
                        <div class="absolute -right-4 -bottom-4 text-8xl opacity-20">🏷️</div>
                        <div class="relative">
                            <p class="text-3xl font-bold mb-1">{{ coupon.discount }}</p>
                            <p class="text-sm text-orange-100 mb-3">{{ coupon.description }}</p>
                            <div class="flex items-center gap-2">
                                <code class="px-3 py-1 bg-white/20 rounded font-mono text-sm">{{ coupon.code }}</code>
                                <button @click="copyCoupon(coupon.code)"
                                    class="px-3 py-1 bg-white text-orange-500 rounded font-semibold text-sm hover:bg-orange-50 transition">
                                    {{ copied === coupon.code ? '✓ Copied' : 'Copy' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Today's Deals -->
            <section>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">🔥 Today's Best Deals</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="deal in todayDeals" :key="deal.id"
                        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div class="relative aspect-video overflow-hidden">
                            <img :src="deal.image" :alt="deal.name"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        </div>
                        <div class="p-4">
                            <h4 class="font-semibold text-gray-800 dark:text-white mb-2">{{ deal.name }}</h4>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="text-xl font-bold text-orange-500">${{ deal.price }}</span>
                                    <span class="text-sm text-gray-400 line-through">${{ deal.originalPrice }}</span>
                                </div>
                                <button
                                    class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
                                    Shop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
useSeoMeta({ title: 'Deals & Offers' })

const copied = ref('')
const countdown = reactive({ hours: 5, mins: 23, secs: 45 })

let timer: ReturnType<typeof setInterval>
onMounted(() => {
    timer = setInterval(() => {
        if (countdown.secs > 0) countdown.secs--
        else if (countdown.mins > 0) { countdown.mins--; countdown.secs = 59 }
        else if (countdown.hours > 0) { countdown.hours--; countdown.mins = 59; countdown.secs = 59 }
    }, 1000)
})
onUnmounted(() => clearInterval(timer))

const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code)
    copied.value = code
    setTimeout(() => copied.value = '', 2000)
}

const flashDeals = [
    { id: 1, name: 'Wireless Earbuds Pro', originalPrice: 129, salePrice: 49, discount: 62, soldPercent: 78, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop' },
    { id: 2, name: 'Smart Fitness Band', originalPrice: 89, salePrice: 29, discount: 67, soldPercent: 85, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop' },
    { id: 3, name: 'Bluetooth Speaker', originalPrice: 79, salePrice: 35, discount: 56, soldPercent: 62, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop' },
    { id: 4, name: 'Portable Charger', originalPrice: 59, salePrice: 22, discount: 63, soldPercent: 91, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop' }
]

const coupons = [
    { code: 'SAVE20', discount: '20% OFF', description: 'On orders over $100' },
    { code: 'FREESHIP', discount: 'Free Shipping', description: 'No minimum order' },
    { code: 'FLASH50', discount: '$50 OFF', description: 'On orders over $200' }
]

const todayDeals = [
    { id: 1, name: 'Premium Headphones Bundle', price: 89, originalPrice: 159, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop' },
    { id: 2, name: 'Smart Home Starter Kit', price: 149, originalPrice: 249, image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=400&fit=crop' },
    { id: 3, name: 'Designer Watch Collection', price: 199, originalPrice: 349, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop' }
]
</script>
