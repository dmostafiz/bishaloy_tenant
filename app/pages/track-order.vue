<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-theme-elevated text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mb-2">Track Your Order</h1>
                <p class="text-gray-400">Enter your order details to see delivery status</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12 max-w-2xl">
            <!-- Search Form -->
            <div v-if="!order" class="bg-theme-card rounded-2xl shadow-theme-lg p-8">
                <form @submit.prevent="trackOrder" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-theme-muted mb-1">Order ID</label>
                        <input v-model="orderId" type="text" placeholder="e.g. ORD-12345" required
                            class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-theme-muted mb-1">Email
                            Address</label>
                        <input v-model="email" type="email" placeholder="you@example.com" required
                            class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                    </div>
                    <button type="submit"
                        class="w-full py-3 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition">Track
                        Order</button>
                </form>
            </div>

            <!-- Order Status -->
            <div v-else class="space-y-6">
                <div class="bg-theme-card rounded-2xl shadow-theme-lg p-6">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <p class="text-sm text-theme-muted">Order ID</p>
                            <p class="font-bold text-lg text-theme">{{ order.id }}</p>
                        </div>
                        <span
                            class="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">{{
                                order.status }}</span>
                    </div>

                    <!-- Timeline -->
                    <div class="space-y-4">
                        <div v-for="(step, i) in order.timeline" :key="i" class="flex gap-4">
                            <div class="flex flex-col items-center">
                                <div :class="step.done ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'"
                                    class="w-4 h-4 rounded-full"></div>
                                <div v-if="i < order.timeline.length - 1"
                                    :class="step.done ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'"
                                    class="w-0.5 h-12"></div>
                            </div>
                            <div>
                                <p :class="step.done ? 'text-theme' : 'text-gray-400'"
                                    class="font-medium">{{ step.title }}</p>
                                <p v-if="step.date" class="text-sm text-theme-muted">{{ step.date }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button @click="order = null" class="text-primary hover:underline font-medium">Track another
                    order</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
useSeoMeta({ title: 'Track Order' })

const orderId = ref('')
const email = ref('')
const order = ref<any>(null)

const trackOrder = () => {
    order.value = {
        id: orderId.value || 'ORD-12345',
        status: 'Shipped',
        timeline: [
            { title: 'Order Placed', date: 'Jan 15, 2026 10:30 AM', done: true },
            { title: 'Processing', date: 'Jan 15, 2026 2:00 PM', done: true },
            { title: 'Shipped', date: 'Jan 16, 2026 9:00 AM', done: true },
            { title: 'Out for Delivery', date: '', done: false },
            { title: 'Delivered', date: '', done: false }
        ]
    }
}
</script>
