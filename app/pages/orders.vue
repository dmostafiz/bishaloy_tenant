<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white py-10">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold">My Orders</h1>
                <p class="text-gray-400 mt-1">Track and manage your orders</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <!-- Status Filters -->
            <div class="flex flex-wrap gap-2 mb-8">
                <button v-for="status in statuses" :key="status" @click="activeFilter = status"
                    :class="activeFilter === status ? 'bg-orange-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:border-orange-500'"
                    class="px-5 py-2 rounded-full font-medium border border-gray-200 dark:border-gray-700 transition-colors">
                    {{ status }}
                </button>
            </div>

            <!-- Orders List -->
            <div class="space-y-6">
                <div v-for="order in filteredOrders" :key="order.id"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden">
                    <!-- Header -->
                    <div
                        class="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700 flex flex-wrap justify-between items-center gap-4">
                        <div>
                            <span class="text-gray-500 dark:text-gray-400 text-sm">Order #</span>
                            <span class="font-semibold text-gray-900 dark:text-white ml-1">{{ order.id }}</span>
                        </div>
                        <span :class="statusColors[order.status]"
                            class="px-4 py-1.5 rounded-full text-sm font-medium">{{ order.status }}</span>
                    </div>

                    <!-- Items -->
                    <div class="p-6">
                        <div v-for="item in order.items" :key="item.id"
                            class="flex gap-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
                            <img :src="item.image" :alt="item.name" class="w-20 h-20 rounded-xl object-cover">
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-900 dark:text-white">{{ item.name }}</h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Qty: {{ item.quantity }}</p>
                            </div>
                            <p class="font-semibold text-gray-900 dark:text-white">${{ item.price }}</p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div
                        class="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 flex flex-wrap justify-between items-center gap-4">
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                            Placed on {{ order.date }} · <span
                                class="font-semibold text-gray-900 dark:text-white">Total: ${{ order.total }}</span>
                        </div>
                        <div class="flex gap-3">
                            <button v-if="order.status === 'Shipped'"
                                class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition">Track
                                Order</button>
                            <button
                                class="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 rounded-lg font-medium transition">Reorder</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="filteredOrders.length === 0" class="text-center py-16">
                <div
                    class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                </div>
                <p class="text-gray-500 dark:text-gray-400">No orders found</p>
                <NuxtLink to="/shop"
                    class="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition">
                    Start Shopping</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
useSeoMeta({ title: 'My Orders' })

const activeFilter = ref('All')
const statuses = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

const statusColors: Record<string, string> = {
    'Delivered': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    'Shipped': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    'Processing': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
    'Cancelled': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
}

const orders = [
    {
        id: 'ORD-12345', status: 'Shipped', date: 'Jan 18, 2026', total: 249.98, items: [
            { id: 1, name: 'Wireless Headphones Pro', quantity: 1, price: 149.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
            { id: 2, name: 'USB-C Cable Pack', quantity: 2, price: 49.99, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=200&fit=crop' }
        ]
    },
    {
        id: 'ORD-12344', status: 'Delivered', date: 'Jan 10, 2026', total: 89.99, items: [
            { id: 1, name: 'Smart Watch Band', quantity: 1, price: 89.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' }
        ]
    }
]

const filteredOrders = computed(() => {
    if (activeFilter.value === 'All') return orders
    return orders.filter(o => o.status === activeFilter.value)
})
</script>
