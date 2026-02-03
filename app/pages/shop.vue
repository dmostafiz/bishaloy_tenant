<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <!-- Hero Banner -->
        <div
            class="bg-theme-elevated text-white py-8">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl md:text-4xl font-bold animate-fade-in">Shop All Products</h1>
                <p class="text-gray-300 mt-2">Discover our amazing collection</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar Filters -->
                <aside class="lg:w-64 shrink-0">
                    <div
                        class="bg-theme-card rounded-2xl shadow-theme-lg p-6 sticky top-24 transition-colors duration-300">
                        <h3 class="font-bold text-lg mb-4 text-theme">Filters</h3>

                        <!-- Categories -->
                        <div class="mb-6">
                            <h4 class="font-semibold text-theme-muted mb-3">Categories</h4>
                            <div class="space-y-2">
                                <label v-for="cat in categories" :key="cat"
                                    class="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" v-model="filters.categories" :value="cat"
                                        class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary">
                                    <span
                                        class="text-gray-600 dark:text-gray-300 group-hover:text-primary transition">{{
                                        cat }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- Price Range -->
                        <div class="mb-6">
                            <h4 class="font-semibold text-theme-muted mb-3">Price Range</h4>
                            <div class="flex gap-2">
                                <input v-model.number="filters.minPrice" type="number" placeholder="Min"
                                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                                <input v-model.number="filters.maxPrice" type="number" placeholder="Max"
                                    class="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            </div>
                        </div>

                        <!-- Rating -->
                        <div class="mb-6">
                            <h4 class="font-semibold text-theme-muted mb-3">Rating</h4>
                            <div class="space-y-2">
                                <label v-for="r in [4, 3, 2, 1]" :key="r"
                                    class="flex items-center gap-2 cursor-pointer group">
                                    <input type="radio" v-model="filters.rating" :value="r"
                                        class="w-4 h-4 border-gray-300 dark:border-gray-600 text-primary focus:ring-primary">
                                    <span class="flex text-yellow-400">
                                        <span v-for="i in 5" :key="i">{{ i <= r ? '★' : '☆' }}</span>
                                        </span>
                                        <span class="text-theme-muted text-sm">& up</span>
                                </label>
                            </div>
                        </div>

                        <button @click="clearFilters"
                            class="w-full py-2 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:border-primary hover:text-primary transition">
                            Clear Filters
                        </button>
                    </div>
                </aside>

                <!-- Products Grid -->
                <main class="flex-1">
                    <!-- Toolbar -->
                    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <p class="text-theme-muted">Showing {{ filteredProducts.length }} products</p>
                        <div class="flex items-center gap-3">
                            <select v-model="sortBy"
                                class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-theme-card text-theme-muted focus:ring-2 focus:ring-primary">
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                            <div class="flex border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                                <button @click="viewMode = 'grid'"
                                    :class="viewMode === 'grid' ? 'bg-primary text-white' : 'bg-theme-card text-gray-600 dark:text-gray-300'"
                                    class="p-2 transition">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                                <button @click="viewMode = 'list'"
                                    :class="viewMode === 'list' ? 'bg-primary text-white' : 'bg-theme-card text-gray-600 dark:text-gray-300'"
                                    class="p-2 transition">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Grid View -->
                    <div v-if="viewMode === 'grid'" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div v-for="(product, i) in filteredProducts" :key="product.id"
                            class="group bg-theme-card rounded-2xl shadow-theme-lg overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-1"
                            :style="{ animationDelay: `${i * 0.05}s` }">
                            <div class="relative aspect-square overflow-hidden">
                                <img :src="product.image" :alt="product.name"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                <div v-if="product.discount"
                                    class="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">
                                    -{{ product.discount }}%
                                </div>
                                <div
                                    class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <button
                                        class="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-accent">
                                        Quick View
                                    </button>
                                </div>
                            </div>
                            <div class="p-4">
                                <p class="text-xs text-primary font-medium mb-1">{{ product.category }}</p>
                                <h3
                                    class="font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {{ product.name }}</h3>
                                <div class="flex items-center gap-1 mb-2">
                                    <span class="text-yellow-400">{{ '★'.repeat(product.rating) }}{{ '☆'.repeat(5 -
                                        product.rating) }}</span>
                                    <span class="text-gray-400 text-xs">({{ product.reviews }})</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="text-xl font-bold text-theme">${{ product.price
                                            }}</span>
                                        <span v-if="product.originalPrice"
                                            class="text-sm text-gray-400 line-through">${{ product.originalPrice
                                            }}</span>
                                    </div>
                                    <button
                                        class="p-2 bg-primary hover:bg-accent text-white rounded-lg transition-colors">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- List View -->
                    <div v-else class="space-y-4">
                        <div v-for="product in filteredProducts" :key="product.id"
                            class="flex gap-4 bg-theme-card rounded-2xl shadow-theme-lg p-4 hover:shadow-xl transition-all duration-300">
                            <div class="w-32 h-32 shrink-0 rounded-xl overflow-hidden">
                                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover">
                            </div>
                            <div class="flex-1">
                                <p class="text-xs text-primary font-medium">{{ product.category }}</p>
                                <h3 class="font-semibold text-gray-800 dark:text-white mb-1">{{ product.name }}</h3>
                                <div class="flex items-center gap-1 mb-2">
                                    <span class="text-yellow-400 text-sm">{{ '★'.repeat(product.rating) }}</span>
                                    <span class="text-gray-400 text-xs">({{ product.reviews }} reviews)</span>
                                </div>
                                <p class="text-theme-muted text-sm line-clamp-2">{{ product.description
                                    }}</p>
                            </div>
                            <div class="text-right">
                                <span class="text-xl font-bold text-theme">${{ product.price
                                    }}</span>
                                <button
                                    class="block mt-2 px-4 py-2 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="flex justify-center mt-10">
                        <div class="flex gap-2">
                            <button v-for="i in 5" :key="i"
                                :class="i === 1 ? 'bg-primary text-white' : 'bg-theme-card text-gray-600 dark:text-gray-300 hover:border-primary'"
                                class="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-600 font-medium transition">
                                {{ i }}
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({ title: 'Shop All Products' })

const sortBy = ref('featured')
const viewMode = ref<'grid' | 'list'>('grid')
const filters = ref({
    categories: [] as string[],
    minPrice: null as number | null,
    maxPrice: null as number | null,
    rating: null as number | null
})

const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Toys']

const products = [
    { id: 1, name: 'Premium Wireless Headphones', category: 'Electronics', price: 79.99, originalPrice: 99.99, discount: 20, rating: 4, reviews: 128, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', description: 'High-quality wireless headphones with noise cancellation.' },
    { id: 2, name: 'Smart Watch Pro Series', category: 'Electronics', price: 199.99, rating: 5, reviews: 256, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', description: 'Advanced smartwatch with health monitoring features.' },
    { id: 3, name: 'Premium Running Shoes', category: 'Sports', price: 89.99, rating: 4, reviews: 89, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', description: 'Comfortable and lightweight running shoes.' },
    { id: 4, name: 'Designer Leather Bag', category: 'Fashion', price: 149.99, originalPrice: 199.99, discount: 25, rating: 5, reviews: 67, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', description: 'Elegant leather bag for everyday use.' },
    { id: 5, name: 'Modern Desk Lamp', category: 'Home & Garden', price: 45.99, rating: 4, reviews: 45, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', description: 'Sleek desk lamp with adjustable brightness.' },
    { id: 6, name: 'Wireless Earbuds', category: 'Electronics', price: 59.99, rating: 4, reviews: 312, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop', description: 'True wireless earbuds with premium sound quality.' }
]

const filteredProducts = computed(() => {
    let result = [...products]

    if (filters.value.categories.length > 0) {
        result = result.filter(p => filters.value.categories.includes(p.category))
    }
    if (filters.value.minPrice) {
        result = result.filter(p => p.price >= (filters.value.minPrice || 0))
    }
    if (filters.value.maxPrice) {
        result = result.filter(p => p.price <= (filters.value.maxPrice || Infinity))
    }
    if (filters.value.rating) {
        result = result.filter(p => p.rating >= (filters.value.rating || 0))
    }

    if (sortBy.value === 'price-low') result.sort((a, b) => a.price - b.price)
    else if (sortBy.value === 'price-high') result.sort((a, b) => b.price - a.price)
    else if (sortBy.value === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
})

const clearFilters = () => {
    filters.value = { categories: [], minPrice: null, maxPrice: null, rating: null }
}
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
