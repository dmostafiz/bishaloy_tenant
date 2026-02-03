<template>
    <div class="min-h-screen bg-gray-50">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mb-2">My Orders</h1>
                <p class="text-gray-400">Track and manage your orders</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <!-- Filters -->
            <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
                <button v-for="f in filters" :key="f" @click="activeFilter = f"
                    :class="activeFilter === f ? 'bg-orange-500 text-white' : 'bg-white text-gray-600'"
                    class="px-4 py-2 rounded-lg font-medium whitespace-nowrap transition">
                    {{ f }}
                </button>
            </div>

            <!-- Orders List -->
            <div class="space-y-4">
                <div v-for="order in orders" :key="order.id" class="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div class="p-4 border-b flex flex-wrap justify-between items-center gap-4">
                        <div>
                            <p class="font-semibold">Order #{{ order.id }}</p>
                            <p class="text-sm text-gray-500">Placed on {{ order.date }}</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span :class="{
                                'bg-green-100 text-green-700': order.status === 'Delivered',
                                'bg-blue-100 text-blue-700': order.status === 'Shipped',
                                'bg-yellow-100 text-yellow-700': order.status === 'Processing'
                            }" class="px-3 py-1 rounded-full text-sm font-medium">
                                {{ order.status }}
                            </span>
                            <NuxtLink :to="`/track-order?id=${order.id}`"
                                class="text-orange-500 hover:underline text-sm font-medium">
                                Track Order
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="p-4">
                        <div v-for="item in order.items" :key="item.id" class="flex gap-4 py-3 border-b last:border-0">
                            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg">
                            <div class="flex-1">
                                <h4 class="font-medium">{{ item.name }}</h4>
                                <p class="text-sm text-gray-500">Qty: {{ item.qty }}</p>
                                <p class="font-semibold text-orange-500">${{ item.price }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 bg-gray-50 flex justify-between items-center">
                        <p class="text-gray-600">Total: <span class="font-bold text-gray-900">${{ order.total }}</span>
                        </p>
                        <button
                            class="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50">
                            Reorder
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="orders.length === 0" class="text-center py-16">
                <p class="text-gray-400 text-lg">No orders yet</p>
                <NuxtLink to="/shop" class="mt-4 inline-block px-6 py-2 bg-orange-500 text-white rounded-lg">
                    Start Shopping
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
useSeoMeta({ title: 'My Orders' })

const activeFilter = ref('All')
const filters = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

const orders = ref([
    {
        id: 'ORD-12345', date: 'Jan 15, 2026', status: 'Delivered', total: '149.99',
        items: [
            { id: 1, name: 'Wireless Headphones', qty: 1, price: '79.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
            { id: 2, name: 'Phone Case', qty: 2, price: '35.00', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop' }
        ]
    },
    {
        id: 'ORD-12344', date: 'Jan 10, 2026', status: 'Shipped', total: '89.99',
        items: [
            { id: 3, name: 'Smart Watch', qty: 1, price: '89.99', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' }
        ]
    }
])
</script>
