<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Hero Banner -->
        <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Shop All Products</h1>
                    <p class="text-gray-300 text-lg">Discover our curated collection of premium products</p>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar Filters -->
                <aside class="lg:w-64 flex-shrink-0">
                    <div class="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="font-bold text-lg text-gray-900">Filters</h3>
                            <button @click="clearFilters"
                                class="text-sm text-orange-500 hover:text-orange-600 transition">
                                Clear all
                            </button>
                        </div>

                        <!-- Categories -->
                        <div class="mb-6">
                            <h4 class="font-semibold text-gray-900 mb-3">Categories</h4>
                            <div class="space-y-2">
                                <label v-for="cat in categories" :key="cat.id"
                                    class="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" :value="cat.id" v-model="filters.categories"
                                        class="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500">
                                    <span class="text-gray-600 group-hover:text-gray-900 transition">{{ cat.name
                                        }}</span>
                                    <span class="text-xs text-gray-400 ml-auto">({{ cat.count }})</span>
                                </label>
                            </div>
                        </div>

                        <!-- Price Range -->
                        <div class="mb-6">
                            <h4 class="font-semibold text-gray-900 mb-3">Price Range</h4>
                            <div class="flex items-center gap-2">
                                <input v-model.number="filters.minPrice" type="number" placeholder="Min"
                                    class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <span class="text-gray-400">-</span>
                                <input v-model.number="filters.maxPrice" type="number" placeholder="Max"
                                    class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                            </div>
                        </div>

                        <!-- Rating -->
                        <div class="mb-6">
                            <h4 class="font-semibold text-gray-900 mb-3">Rating</h4>
                            <div class="space-y-2">
                                <label v-for="rating in [4, 3, 2, 1]" :key="rating"
                                    class="flex items-center gap-2 cursor-pointer group">
                                    <input type="radio" :value="rating" v-model="filters.minRating" name="rating"
                                        class="w-4 h-4 border-gray-300 text-orange-500 focus:ring-orange-500">
                                    <div class="flex items-center gap-1">
                                        <svg v-for="i in 5" :key="i" class="w-4 h-4"
                                            :class="i <= rating ? 'text-yellow-400' : 'text-gray-300'"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span class="text-sm text-gray-500 ml-1">& up</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Apply Button -->
                        <button @click="applyFilters"
                            class="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition">
                            Apply Filters
                        </button>
                    </div>
                </aside>

                <!-- Products Grid -->
                <main class="flex-1">
                    <!-- Toolbar -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                        <p class="text-gray-600">
                            Showing <span class="font-semibold text-gray-900">{{ filteredProducts.length }}</span>
                            products
                        </p>
                        <div class="flex items-center gap-4">
                            <!-- Sort -->
                            <select v-model="sortBy"
                                class="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option value="featured">Featured</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating">Best Rating</option>
                                <option value="newest">Newest</option>
                            </select>
                            <!-- View Toggle -->
                            <div class="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                <button @click="viewMode = 'grid'" :class="viewMode === 'grid' ? 'bg-white shadow' : ''"
                                    class="p-2 rounded-lg transition">
                                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                                <button @click="viewMode = 'list'" :class="viewMode === 'list' ? 'bg-white shadow' : ''"
                                    class="p-2 rounded-lg transition">
                                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Products Grid View -->
                    <div v-if="viewMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div v-for="product in filteredProducts" :key="product.id"
                            class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div class="relative aspect-square overflow-hidden">
                                <img :src="product.image" :alt="product.name"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                <div v-if="product.badge"
                                    class="absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                                    {{ product.badge }}
                                </div>
                                <button
                                    class="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                                    <svg class="w-5 h-5 text-gray-600 hover:text-red-500" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="p-4">
                                <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">{{ product.category }}</p>
                                <h3
                                    class="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition">
                                    {{ product.name }}
                                </h3>
                                <div class="flex items-center gap-1 mb-3">
                                    <div class="flex">
                                        <svg v-for="i in 5" :key="i" class="w-4 h-4"
                                            :class="i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-500">({{ product.reviews }})</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <span class="text-xl font-bold text-gray-900">${{ product.price.toFixed(2)
                                            }}</span>
                                        <span v-if="product.originalPrice"
                                            class="text-sm text-gray-400 line-through ml-2">
                                            ${{ product.originalPrice.toFixed(2) }}
                                        </span>
                                    </div>
                                    <button
                                        class="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all hover:scale-110">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Products List View -->
                    <div v-else class="space-y-4">
                        <div v-for="product in filteredProducts" :key="product.id"
                            class="flex gap-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden p-4">
                            <div class="relative w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover">
                                <div v-if="product.badge"
                                    class="absolute top-2 left-2 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                                    {{ product.badge }}
                                </div>
                            </div>
                            <div class="flex-1 py-2">
                                <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">{{ product.category }}</p>
                                <h3
                                    class="font-semibold text-lg text-gray-900 mb-2 hover:text-orange-500 transition cursor-pointer">
                                    {{ product.name }}
                                </h3>
                                <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                                    Premium quality product with excellent craftsmanship and durable materials.
                                </p>
                                <div class="flex items-center gap-1 mb-3">
                                    <div class="flex">
                                        <svg v-for="i in 5" :key="i" class="w-4 h-4"
                                            :class="i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-500">{{ product.rating }} ({{ product.reviews }}
                                        reviews)</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <span class="text-2xl font-bold text-gray-900">${{ product.price.toFixed(2)
                                            }}</span>
                                        <span v-if="product.originalPrice"
                                            class="text-sm text-gray-400 line-through ml-2">
                                            ${{ product.originalPrice.toFixed(2) }}
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button
                                            class="p-2 border border-gray-200 hover:border-red-300 hover:bg-red-50 rounded-xl transition">
                                            <svg class="w-5 h-5 text-gray-400 hover:text-red-500" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button
                                            class="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition flex items-center gap-2">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="flex items-center justify-center gap-2 mt-10">
                        <button
                            class="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
                            disabled>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button class="w-10 h-10 bg-orange-500 text-white font-semibold rounded-lg">1</button>
                        <button
                            class="w-10 h-10 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition">2</button>
                        <button
                            class="w-10 h-10 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition">3</button>
                        <span class="px-2 text-gray-400">...</span>
                        <button
                            class="w-10 h-10 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition">10</button>
                        <button class="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

useSeoMeta({
    title: 'Shop All Products',
    description: 'Browse our complete collection of premium products'
})

const viewMode = ref<'grid' | 'list'>('grid')
const sortBy = ref('featured')

const filters = reactive({
    categories: [] as string[],
    minPrice: null as number | null,
    maxPrice: null as number | null,
    minRating: null as number | null
})

const categories = [
    { id: 'electronics', name: 'Electronics', count: 124 },
    { id: 'fashion', name: 'Fashion', count: 89 },
    { id: 'home', name: 'Home & Living', count: 156 },
    { id: 'sports', name: 'Sports & Outdoors', count: 67 },
    { id: 'beauty', name: 'Beauty & Health', count: 93 },
    { id: 'books', name: 'Books & Media', count: 48 }
]

const products = ref([
    { id: 1, name: 'Wireless Bluetooth Headphones Pro', category: 'Electronics', price: 79.99, originalPrice: 129.99, rating: 4.5, reviews: 234, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', badge: 'Best Seller' },
    { id: 2, name: 'Smart Watch Series 5 with GPS', category: 'Electronics', price: 199.99, rating: 4.7, reviews: 567, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', badge: 'New' },
    { id: 3, name: 'Premium Running Shoes Ultra', category: 'Sports', price: 89.99, originalPrice: 119.99, rating: 4.3, reviews: 189, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', badge: '-25%' },
    { id: 4, name: 'Smart Coffee Maker Deluxe', category: 'Home', price: 45.99, rating: 4.6, reviews: 312, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop' },
    { id: 5, name: 'Travel Backpack Pro Waterproof', category: 'Fashion', price: 34.99, originalPrice: 59.99, rating: 4.4, reviews: 445, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', badge: 'Hot' },
    { id: 6, name: 'Portable Bluetooth Speaker Mini', category: 'Electronics', price: 59.99, rating: 4.8, reviews: 782, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop', badge: 'Top Rated' },
    { id: 7, name: 'Eco-Friendly Yoga Mat Premium', category: 'Sports', price: 29.99, rating: 4.5, reviews: 156, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop' },
    { id: 8, name: 'Modern LED Desk Lamp', category: 'Home', price: 39.99, rating: 4.2, reviews: 98, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop' },
    { id: 9, name: 'Designer Polarized Sunglasses', category: 'Fashion', price: 149.99, originalPrice: 199.99, rating: 4.6, reviews: 267, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop', badge: 'Limited' }
])

const filteredProducts = computed(() => {
    let result = [...products.value]

    // Apply category filter
    if (filters.categories.length > 0) {
        result = result.filter(p => filters.categories.includes(p.category.toLowerCase()))
    }

    // Apply price filter
    if (filters.minPrice) {
        result = result.filter(p => p.price >= filters.minPrice!)
    }
    if (filters.maxPrice) {
        result = result.filter(p => p.price <= filters.maxPrice!)
    }

    // Apply rating filter
    if (filters.minRating) {
        result = result.filter(p => p.rating >= filters.minRating!)
    }

    // Apply sorting
    switch (sortBy.value) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price)
            break
        case 'price-desc':
            result.sort((a, b) => b.price - a.price)
            break
        case 'rating':
            result.sort((a, b) => b.rating - a.rating)
            break
    }

    return result
})

const clearFilters = () => {
    filters.categories = []
    filters.minPrice = null
    filters.maxPrice = null
    filters.minRating = null
}

const applyFilters = () => {
    // Filters are already reactive, this is for UX feedback
    console.log('Filters applied')
}
</script>
