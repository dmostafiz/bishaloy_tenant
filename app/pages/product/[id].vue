<template>
    <div class="min-h-screen bg-theme-bg text-theme-text pb-20">
        <!-- Breadcrumbs -->
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center text-sm text-theme-muted">
                <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
                <span class="mx-2">/</span>
                <NuxtLink to="/shop" class="hover:text-primary transition-colors">Electronics</NuxtLink>
                <span class="mx-2">/</span>
                <span class="text-theme-text font-medium">Wireless Noise-Cancelling Headphones</span>
            </div>
        </div>

        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <!-- Product Gallery -->
                <div class="space-y-4">
                    <div class="relative overflow-hidden rounded-2xl bg-white aspect-square group">
                        <img :src="activeImage" alt="Product Image"
                            class="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105">
                        <div class="absolute top-4 left-4">
                            <span class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                -15% OFF
                            </span>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                        <button v-for="(img, index) in images" :key="index" @click="activeImage = img"
                            class="relative rounded-xl overflow-hidden border-2 transition-all duration-300 aspect-square"
                            :class="activeImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-gray-200'">
                            <img :src="img" class="w-full h-full object-cover">
                        </button>
                    </div>
                </div>

                <!-- Product Info -->
                <div class="flex flex-col">
                    <div class="mb-2">
                        <span
                            class="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
                            Best Seller
                        </span>
                    </div>
                    <h1 class="text-3xl md:text-4xl font-bold mb-4 text-theme-text">Wireless Noise-Cancelling Headphones
                    </h1>
                    
                    <!-- Ratings -->
                    <div class="flex items-center gap-4 mb-6">
                        <div class="flex items-center text-yellow-400">
                            <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <span class="text-theme-muted font-medium text-sm">(128 Reviews)</span>
                    </div>

                    <!-- Price -->
                    <div class="flex items-end gap-3 mb-8">
                        <span class="text-4xl font-bold text-primary">$299.99</span>
                        <span class="text-xl text-theme-muted line-through mb-1">$349.99</span>
                    </div>

                    <!-- Short Description -->
                    <p class="text-theme-muted mb-8 leading-relaxed text-lg">
                        Experience world-class silence and superior sound with our latest noise-cancelling technology. 
                        Designed for comfort and built for performance, these headphones are your perfect companion for travel and work.
                    </p>

                    <!-- Color Selection -->
                    <div class="mb-8">
                        <h3 class="text-sm font-bold uppercase tracking-wider text-theme-muted mb-3">Color</h3>
                        <div class="flex gap-3">
                            <button v-for="color in colors" :key="color.name"
                                @click="selectedColor = color"
                                class="w-10 h-10 rounded-full border-2 transition-all duration-300 relative"
                                :class="selectedColor.name === color.name ? 'border-primary ring-2 ring-primary/20 scale-110' : 'border-transparent hover:scale-110'"
                                :style="{ backgroundColor: color.hex }">
                            </button>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="flex flex-col sm:flex-row gap-4 mb-8">
                        <div class="h-14 flex items-center border border-gray-200 dark:border-gray-700 rounded-xl px-4 w-full sm:w-32 bg-theme-bg">
                            <button @click="quantity > 1 ? quantity-- : null" 
                                class="w-8 h-8 flex items-center justify-center text-theme-muted hover:text-primary transition-colors">
                                -
                            </button>
                            <span class="flex-1 text-center font-bold text-lg">{{ quantity }}</span>
                            <button @click="quantity++"
                                class="w-8 h-8 flex items-center justify-center text-theme-muted hover:text-primary transition-colors">
                                +
                            </button>
                        </div>
                        <button class="h-14 flex-1 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Add to Cart
                        </button>
                        <button class="h-14 w-14 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-theme-muted hover:text-red-500 hover:border-red-500/30 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all duration-300">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>

                    <!-- Features List -->
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div class="flex items-center gap-2 text-theme-text/80">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Free Shipping
                        </div>
                        <div class="flex items-center gap-2 text-theme-text/80">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            2 Year Warranty
                        </div>
                        <div class="flex items-center gap-2 text-theme-text/80">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            30 Days Return
                        </div>
                        <div class="flex items-center gap-2 text-theme-text/80">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            24/7 Support
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabs Section -->
            <div class="border-t border-gray-200 dark:border-gray-800 pt-10">
                <div class="flex gap-8 border-b border-gray-200 dark:border-gray-800 mb-8 overflow-x-auto">
                    <button v-for="tab in tabs" :key="tab"
                        @click="activeTab = tab"
                        class="pb-4 text-lg font-medium transition-all relative whitespace-nowrap"
                        :class="activeTab === tab ? 'text-primary' : 'text-theme-muted hover:text-theme-text'">
                        {{ tab }}
                        <span v-if="activeTab === tab" class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                    </button>
                </div>

                <div class="min-h-[300px]">
                    <div v-if="activeTab === 'Description'" class="prose dark:prose-invert max-w-none text-theme-muted">
                        <p class="mb-4">
                            Immerse yourself in music with our industry-leading noise cancellation technology. 
                            Whether you're flying long-haul or commuting to work, these headphones block out the world so you can focus on what matters.
                        </p>
                        <h3 class="text-theme-text font-bold text-xl mt-6 mb-3">Key Features</h3>
                        <ul class="list-disc pl-5 space-y-2 mb-6">
                            <li>Active Noise Cancellation (ANC) suitable for various environments</li>
                            <li>Up to 30 hours of battery life with quick charging capability</li>
                            <li>Premium comfort with plush ear cushions and lightweight headband</li>
                            <li>Crystal clear calls with advanced microphone system</li>
                            <li>Seamless multi-device pairing with Bluetooth 5.0</li>
                        </ul>
                    </div>

                    <div v-if="activeTab === 'Reviews'" class="space-y-6">
                        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 sm:p-10 text-center mb-8">
                            <div class="text-5xl font-bold text-theme-text mb-2">4.8</div>
                            <div class="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                                <svg v-for="i in 5" :key="i" class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div class="text-theme-muted">Based on 128 reviews</div>
                        </div>
                        
                        <!-- Mock Reviews -->
                        <div v-for="i in 3" :key="i" class="border-b border-gray-100 dark:border-gray-800 pb-6 last:border-0">
                            <div class="flex items-center gap-4 mb-3">
                                <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                <div>
                                    <div class="font-bold text-theme-text">John Doe</div>
                                    <div class="text-xs text-theme-muted">2 days ago</div>
                                </div>
                                <div class="ml-auto flex text-yellow-400">
                                    <svg v-for="s in 5" :key="s" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-theme-muted leading-relaxed">
                                Absolutely amazing headphones. The noise cancellation is top notch and the sound quality is crisp. 
                                Battery life lasts forever! Highly recommended.
                            </p>
                        </div>
                    </div>
                    
                    <div v-if="activeTab === 'Questions'" class="text-center py-12 text-theme-muted">
                        <svg class="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <p>No questions yet. Be the first to ask!</p>
                        <button class="mt-4 px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-theme-text font-medium hover:border-primary hover:text-primary transition-colors">
                            Ask a Question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const images = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&q=80',
    'https://images.unsplash.com/photo-1524678606372-569688ee1165?w=800&q=80'
]
const activeImage = ref(images[0])
const quantity = ref(1)

const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Blue', hex: '#1E3A8A' }
]
const selectedColor = ref(colors[0])

const tabs = ['Description', 'Reviews', 'Questions']
const activeTab = ref('Description')
</script>

<style scoped>
/* Add any custom animations or specific overrides here */
</style>
