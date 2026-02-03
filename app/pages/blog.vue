<template>
    <div class="min-h-screen bg-gray-50">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mb-2">Blog</h1>
                <p class="text-gray-400">News, tips, and insights</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Featured -->
            <div class="mb-12">
                <div class="bg-white rounded-2xl shadow-sm overflow-hidden md:flex">
                    <img :src="featured.image" :alt="featured.title" class="md:w-1/2 h-64 md:h-auto object-cover">
                    <div class="p-8 md:w-1/2 flex flex-col justify-center">
                        <span class="text-orange-500 text-sm font-semibold">{{ featured.category }}</span>
                        <h2 class="text-2xl font-bold mt-2 mb-4">{{ featured.title }}</h2>
                        <p class="text-gray-600 mb-4">{{ featured.excerpt }}</p>
                        <div class="flex items-center gap-3 text-sm text-gray-500">
                            <span>{{ featured.author }}</span>
                            <span>•</span>
                            <span>{{ featured.date }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Posts Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="post in posts" :key="post.id" class="bg-white rounded-xl shadow-sm overflow-hidden group">
                    <div class="aspect-video overflow-hidden">
                        <img :src="post.image" :alt="post.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition">
                    </div>
                    <div class="p-5">
                        <span class="text-orange-500 text-xs font-semibold">{{ post.category }}</span>
                        <h3 class="font-bold mt-1 mb-2 group-hover:text-orange-500 transition">{{ post.title }}</h3>
                        <p class="text-sm text-gray-600 line-clamp-2">{{ post.excerpt }}</p>
                        <p class="text-xs text-gray-400 mt-3">{{ post.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({ title: 'Blog' })

const featured = {
    title: 'The Ultimate Guide to Smart Shopping in 2026',
    excerpt: 'Discover the best strategies to save money while getting quality products.',
    category: 'Shopping Tips',
    author: 'Sarah Johnson',
    date: 'Jan 20, 2026',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=400&fit=crop'
}

const posts = [
    { id: 1, title: 'Top 10 Gadgets You Need', category: 'Tech', excerpt: 'Must-have gadgets for the modern lifestyle.', date: 'Jan 18', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop' },
    { id: 2, title: 'Sustainable Fashion Trends', category: 'Fashion', excerpt: 'How to build an eco-friendly wardrobe.', date: 'Jan 15', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop' },
    { id: 3, title: 'Home Office Setup Guide', category: 'Lifestyle', excerpt: 'Create the perfect workspace at home.', date: 'Jan 12', image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=400&h=300&fit=crop' }
]
</script>
