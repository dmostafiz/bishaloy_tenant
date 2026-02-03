<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <!-- Hero -->
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-3xl md:text-4xl font-bold animate-fade-in-up">Shop by Category</h1>
                <p class="text-primary mt-2">Find exactly what you're looking for</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Featured Categories -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <NuxtLink v-for="(cat, i) in featuredCategories" :key="cat.name" :to="`/shop?category=${cat.name}`"
                    class="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    :style="{ animationDelay: `${i * 0.1}s` }">
                    <img :src="cat.image" :alt="cat.name"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-2xl font-bold text-white mb-1">{{ cat.name }}</h3>
                        <p class="text-primary group-hover:text-primary transition flex items-center gap-1">
                            Shop Now
                            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </p>
                    </div>
                </NuxtLink>
            </div>

            <!-- All Categories Grid -->
            <h2 class="text-2xl font-bold text-theme mb-8">All Categories</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <NuxtLink v-for="cat in allCategories" :key="cat.name" :to="`/shop?category=${cat.name}`"
                    class="group p-6 bg-theme-card rounded-2xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 text-center transition-all duration-300 hover:-translate-y-1">
                    <div
                        class="w-14 h-14 mx-auto mb-3 flex items-center justify-center text-3xl bg-primary-muted dark:bg-orange-900/30 rounded-2xl group-hover:scale-110 transition-transform">
                        {{ cat.icon }}
                    </div>
                    <h4 class="font-semibold text-gray-800 dark:text-white group-hover:text-primary transition">{{
                        cat.name }}</h4>
                    <p class="text-sm text-theme-muted">{{ cat.count }} items</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Shop by Category' })

const featuredCategories = [
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop' },
    { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop' },
    { name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop' }
]

const allCategories = [
    { name: 'Electronics', icon: '📱', count: 1250 },
    { name: 'Fashion', icon: '👗', count: 890 },
    { name: 'Home', icon: '🏠', count: 567 },
    { name: 'Sports', icon: '⚽', count: 432 },
    { name: 'Toys', icon: '🧸', count: 321 },
    { name: 'Books', icon: '📚', count: 654 },
    { name: 'Beauty', icon: '💄', count: 789 },
    { name: 'Automotive', icon: '🚗', count: 234 },
    { name: 'Garden', icon: '🌱', count: 156 },
    { name: 'Pet Supplies', icon: '🐕', count: 287 },
    { name: 'Office', icon: '💼', count: 198 },
    { name: 'Music', icon: '🎵', count: 145 }
]
</script>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
