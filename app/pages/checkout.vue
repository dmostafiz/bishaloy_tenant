<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-theme-elevated text-white py-8">
            <div class="container mx-auto px-4">
                <h1 class="text-2xl font-bold">Checkout</h1>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Form -->
                <div class="flex-1 space-y-6">
                    <!-- Shipping -->
                    <div class="bg-theme-card rounded-2xl shadow-theme-lg p-6">
                        <h2 class="text-lg font-bold text-theme mb-4 flex items-center gap-2">
                            <span
                                class="w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center">1</span>
                            Shipping Address
                        </h2>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <input v-model="form.firstName" placeholder="First Name"
                                class="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            <input v-model="form.lastName" placeholder="Last Name"
                                class="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            <input v-model="form.email" type="email" placeholder="Email"
                                class="sm:col-span-2 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            <input v-model="form.address" placeholder="Address"
                                class="sm:col-span-2 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            <input v-model="form.city" placeholder="City"
                                class="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            <input v-model="form.zip" placeholder="ZIP Code"
                                class="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                        </div>
                    </div>

                    <!-- Payment -->
                    <div class="bg-theme-card rounded-2xl shadow-theme-lg p-6">
                        <h2 class="text-lg font-bold text-theme mb-4 flex items-center gap-2">
                            <span
                                class="w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center">2</span>
                            Payment Method
                        </h2>
                        <div class="space-y-3">
                            <label v-for="method in paymentMethods" :key="method.id"
                                class="flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all"
                                :class="form.payment === method.id ? 'border-primary bg-primary-muted dark:bg-orange-900/20' : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'">
                                <input v-model="form.payment" type="radio" :value="method.id"
                                    class="w-4 h-4 text-primary">
                                <span class="text-2xl">{{ method.icon }}</span>
                                <span class="text-gray-800 dark:text-white font-medium">{{ method.name }}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Summary -->
                <div class="lg:w-96">
                    <div
                        class="bg-theme-card rounded-2xl shadow-theme-lg p-6 sticky top-24">
                        <h3 class="text-lg font-bold text-theme mb-4">Order Summary</h3>
                        <div v-for="item in cartItems" :key="item.id"
                            class="flex gap-3 py-3 border-b border-gray-100 dark:border-gray-700">
                            <img :src="item.image" class="w-16 h-16 rounded-lg object-cover">
                            <div class="flex-1">
                                <p class="font-medium text-gray-800 dark:text-white text-sm">{{ item.name }}</p>
                                <p class="text-xs text-theme-muted">Qty: {{ item.qty }}</p>
                            </div>
                            <p class="font-semibold text-theme">${{ (item.price *
                                item.qty).toFixed(2) }}</p>
                        </div>
                        <div class="space-y-2 mt-4 text-sm">
                            <div class="flex justify-between text-theme-muted">
                                <span>Subtotal</span><span>${{ subtotal.toFixed(2) }}</span></div>
                            <div class="flex justify-between text-theme-muted">
                                <span>Shipping</span><span class="text-green-500">Free</span></div>
                            <div class="flex justify-between text-theme-muted"><span>Tax</span><span>${{
                                    tax.toFixed(2) }}</span></div>
                            <div
                                class="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between text-lg font-bold text-theme">
                                <span>Total</span><span>${{ total.toFixed(2) }}</span>
                            </div>
                        </div>
                        <button @click="placeOrder" :disabled="loading"
                            class="w-full mt-6 py-3 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition disabled:opacity-50">
                            {{ loading ? 'Processing...' : 'Place Order' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
useSeoMeta({ title: 'Checkout' })

const loading = ref(false)
const form = reactive({ firstName: '', lastName: '', email: '', address: '', city: '', zip: '', payment: 'card' })

const paymentMethods = [
    { id: 'card', name: 'Credit Card', icon: '💳' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' },
    { id: 'apple', name: 'Apple Pay', icon: '🍎' }
]

const cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, qty: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop' },
    { id: 2, name: 'Smart Watch', price: 199.99, qty: 2, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop' }
]

const subtotal = computed(() => cartItems.reduce((sum, i) => sum + i.price * i.qty, 0))
const tax = computed(() => subtotal.value * 0.08)
const total = computed(() => subtotal.value + tax.value)

const placeOrder = async () => {
    loading.value = true
    await new Promise(r => setTimeout(r, 2000))
    loading.value = false
    navigateTo('/orders')
}
</script>
