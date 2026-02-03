<template>
    <div
        class="bg-theme-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group relative">
        <div class="relative overflow-hidden bg-theme-elevated">
            <img :src="product?.image" width="100%" height="auto" alt="product.name"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
            <div
                class="absolute top-3 left-3 ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {{ product?.badge }}
            </div>
            <div
                class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                -{{ product?.discount }}%
            </div>

            <div v-if="product?.stock < 10"
                class="absolute bottom-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Only {{ product?.stock }} left!
            </div>

            <button onclick="addToCart({product.id})"
                class="absolute bottom-3 right-3 bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-accent shadow-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                </svg>
            </button>
        </div>
        <div class="p-4">
            <div class="text-xs text-theme-muted uppercase tracking-wide mb-1">{{ product?.category }}</div>
            <h3 class="font-bold text-lg mb-2 line-clamp-2 text-theme group-hover:text-primary transition">
                {{ product?.name }}</h3>
            <div class="flex items-center mb-3">
                <div class="flex items-center">
                    <span class="text-yellow-400 text-sm">{{ '★'.repeat(Math.floor(product.rating)) }}
                        {{ '☆'.repeat(5 - Math.floor(product?.rating)) }}</span>
                    <span class="text-gray-600 text-xs ml-2">{{ product?.rating }}</span>
                </div>
                <span class="text-gray-400 text-xs ml-2">({{ product?.reviews ?? 0 }})</span>
            </div>
            <div class="flex items-baseline gap-2 mb-3">
                <span class="text-2xl font-bold text-theme">{{ product?.price }}</span>
                <span v-if="product?.originalPrice" class="text-sm text-theme-light line-through">{{
                    product?.originalPrice
                    }}</span>
            </div>
            <button onclick="addToCart(${product.id})"
                class="w-full bg-theme-elevated hover:bg-primary text-theme hover:text-white py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Add to Cart
            </button>
        </div>
    </div>
</template>

<script setup>
// import ExampleComponent from '~/components/ExampleComponent.vue';

const props = defineProps(['product'])
</script>