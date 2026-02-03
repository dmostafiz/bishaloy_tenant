<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Hero -->
        <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h1>
                <p class="text-gray-300 text-lg max-w-2xl mx-auto">
                    Explore our diverse range of product categories
                </p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Featured Categories Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <NuxtLink v-for="category in categories" :key="category.id" :to="`/shop?category=${category.id}`"
                    class="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img :src="category.image" :alt="category.name"
                        class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition">
                    </div>
                    <div class="absolute inset-0 flex flex-col justify-end p-6">
                        <div class="transform group-hover:-translate-y-2 transition-transform duration-300">
                            <div class="flex items-center gap-2 mb-2">
                                <span
                                    class="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">
                                    {{ category.count }} Products
                                </span>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-2">{{ category.name }}</h3>
                            <p
                                class="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {{ category.description }}
                            </p>
                            <div class="flex items-center gap-2 text-orange-400 font-semibold">
                                <span>Explore</span>
                                <svg class="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <!-- All Categories List -->
            <div class="mt-16">
                <h2 class="text-2xl font-bold text-gray-900 mb-8">All Categories</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <NuxtLink v-for="cat in allCategories" :key="cat.id" :to="`/shop?category=${cat.id}`"
                        class="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span class="text-3xl">{{ cat.icon }}</span>
                        </div>
                        <h4 class="font-semibold text-gray-900 text-center group-hover:text-orange-500 transition">{{
                            cat.name }}</h4>
                        <p class="text-xs text-gray-500 mt-1">{{ cat.count }} items</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Shop by Category',
    description: 'Browse all product categories'
})

const categories = [
    { id: 'electronics', name: 'Electronics', count: 1240, description: 'Latest gadgets, phones, laptops and smart devices', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop' },
    { id: 'fashion', name: 'Fashion & Apparel', count: 2350, description: 'Trendy clothing, shoes and accessories for all', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop' },
    { id: 'home', name: 'Home & Living', count: 890, description: 'Furniture, decor and everything for your home', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop' },
    { id: 'sports', name: 'Sports & Outdoors', count: 670, description: 'Gear up for your active lifestyle adventures', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop' },
    { id: 'beauty', name: 'Beauty & Health', count: 1120, description: 'Skincare, makeup and wellness products', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop' },
    { id: 'books', name: 'Books & Media', count: 450, description: 'Bestsellers, textbooks and entertainment', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop' }
]

const allCategories = [
    { id: 'phones', name: 'Phones', count: 234, icon: '📱' },
    { id: 'laptops', name: 'Laptops', count: 156, icon: '💻' },
    { id: 'watches', name: 'Watches', count: 189, icon: '⌚' },
    { id: 'headphones', name: 'Headphones', count: 267, icon: '🎧' },
    { id: 'cameras', name: 'Cameras', count: 98, icon: '📷' },
    { id: 'gaming', name: 'Gaming', count: 345, icon: '🎮' },
    { id: 'mens', name: "Men's Fashion", count: 890, icon: '👔' },
    { id: 'womens', name: "Women's Fashion", count: 1120, icon: '👗' },
    { id: 'kids', name: 'Kids & Baby', count: 456, icon: '🧸' },
    { id: 'shoes', name: 'Shoes', count: 678, icon: '👟' },
    { id: 'bags', name: 'Bags', count: 234, icon: '👜' },
    { id: 'jewelry', name: 'Jewelry', count: 189, icon: '💎' }
]
</script>
