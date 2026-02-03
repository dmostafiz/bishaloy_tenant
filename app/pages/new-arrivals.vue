<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
            <div class="container mx-auto px-4 text-center">
                <span class="inline-block px-4 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-4">✨
                    Just Arrived</span>
                <h1 class="text-4xl md:text-5xl font-bold mb-4">New Arrivals</h1>
                <p class="text-xl opacity-90">Discover the latest additions to our collection</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="p in products" :key="p.id"
                    class="bg-theme-card rounded-2xl shadow-theme-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <div class="relative aspect-square overflow-hidden">
                        <img :src="p.image" :alt="p.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-3 left-3 px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded">
                            NEW</div>
                    </div>
                    <div class="p-4">
                        <p class="text-xs text-theme-muted mb-1">{{ p.category }}</p>
                        <h4
                            class="font-medium text-theme mb-2 group-hover:text-primary transition">
                            {{ p.name }}</h4>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-theme">${{ p.price }}</span>
                            <button class="p-2 bg-primary hover:bg-accent text-white rounded-lg transition">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'New Arrivals' })

const products = [
    { id: 1, name: 'Premium Wireless Earbuds', category: 'Electronics', price: '129.99', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop' },
    { id: 2, name: 'Designer Sunglasses', category: 'Fashion', price: '89.99', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop' },
    { id: 3, name: 'Smart Home Speaker', category: 'Electronics', price: '149.99', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop' },
    { id: 4, name: 'Leather Crossbody Bag', category: 'Fashion', price: '79.99', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop' }
]
</script>
