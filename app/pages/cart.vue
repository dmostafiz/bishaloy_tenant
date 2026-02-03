<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-theme-elevated text-white py-10">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold">Shopping Cart</h1>
                <p class="text-gray-400 mt-1">{{ items.length }} items in your cart</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div v-if="items.length > 0" class="flex flex-col lg:flex-row gap-8">
                <!-- Cart Items -->
                <div class="flex-1 space-y-4">
                    <div v-for="item in items" :key="item.id"
                        class="bg-theme-card rounded-2xl shadow-theme-lg p-4 flex gap-4 hover:shadow-xl transition-shadow">
                        <img :src="item.image" :alt="item.name" class="w-24 h-24 rounded-xl object-cover">
                        <div class="flex-1">
                            <h4 class="font-semibold text-theme">{{ item.name }}</h4>
                            <p class="text-sm text-theme-muted">{{ item.variant }}</p>
                            <div class="flex items-center gap-3 mt-3">
                                <button @click="updateQty(item.id, -1)"
                                    class="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition">-</button>
                                <span class="font-medium text-theme">{{ item.qty }}</span>
                                <button @click="updateQty(item.id, 1)"
                                    class="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition">+</button>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-xl font-bold text-theme">${{ (item.price *
                                item.qty).toFixed(2) }}</p>
                            <button @click="removeItem(item.id)"
                                class="mt-2 text-sm text-red-500 hover:underline">Remove</button>
                        </div>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="lg:w-96">
                    <div
                        class="bg-theme-card rounded-2xl shadow-theme-lg p-6 sticky top-24">
                        <h3 class="text-lg font-bold text-theme mb-4">Order Summary</h3>
                        <div class="space-y-3 text-sm">
                            <div class="flex justify-between text-theme-muted">
                                <span>Subtotal</span><span>${{ subtotal.toFixed(2) }}</span></div>
                            <div class="flex justify-between text-theme-muted">
                                <span>Shipping</span><span class="text-green-500 font-medium">Free</span></div>
                            <div class="flex justify-between text-theme-muted"><span>Tax</span><span>${{
                                    tax.toFixed(2) }}</span></div>
                            <div
                                class="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between text-lg font-bold text-theme">
                                <span>Total</span><span>${{ total.toFixed(2) }}</span>
                            </div>
                        </div>
                        <NuxtLink to="/checkout"
                            class="block w-full mt-6 py-3 bg-primary hover:bg-accent text-white text-center font-semibold rounded-xl transition">
                            Proceed to Checkout
                        </NuxtLink>
                        <NuxtLink to="/shop"
                            class="block w-full mt-3 py-3 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-center font-medium rounded-xl hover:border-primary hover:text-primary transition">
                            Continue Shopping
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-20">
                <div
                    class="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold text-theme mb-2">Your cart is empty</h2>
                <p class="text-theme-muted mb-6">Start adding items to your cart</p>
                <NuxtLink to="/shop"
                    class="inline-block px-6 py-3 bg-primary hover:bg-accent text-white rounded-xl font-semibold transition">
                    Start Shopping</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
useSeoMeta({ title: 'Shopping Cart' })

const items = ref([
    { id: 1, name: 'Wireless Headphones', variant: 'Black', price: 79.99, qty: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
    { id: 2, name: 'Smart Watch', variant: 'Silver', price: 199.99, qty: 2, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' }
])

const subtotal = computed(() => items.value.reduce((sum, i) => sum + i.price * i.qty, 0))
const tax = computed(() => subtotal.value * 0.08)
const total = computed(() => subtotal.value + tax.value)

const updateQty = (id: number, delta: number) => {
    const item = items.value.find(i => i.id === id)
    if (item) item.qty = Math.max(1, item.qty + delta)
}
const removeItem = (id: number) => { items.value = items.value.filter(i => i.id !== id) }
</script>
