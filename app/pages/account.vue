<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-theme-elevated text-white py-10">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold">My Account</h1>
                <p class="text-gray-400 mt-1">Manage your profile and preferences</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar -->
                <aside class="lg:w-64 shrink-0">
                    <nav
                        class="bg-theme-card rounded-2xl shadow-theme-lg overflow-hidden">
                        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                            :class="activeTab === tab.id ? 'bg-primary text-white' : 'text-theme-muted hover:bg-gray-50 dark:hover:bg-gray-700'"
                            class="w-full flex items-center gap-3 px-5 py-4 font-medium transition-colors">
                            <span class="text-xl">{{ tab.icon }}</span>
                            {{ tab.label }}
                        </button>
                    </nav>
                </aside>

                <!-- Content -->
                <main class="flex-1">
                    <!-- Profile Tab -->
                    <div v-if="activeTab === 'profile'"
                        class="bg-theme-card rounded-2xl shadow-theme-lg p-6">
                        <h2 class="text-xl font-bold text-theme mb-6">Profile Information</h2>
                        <div class="flex items-center gap-6 mb-8">
                            <div
                                class="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-2xl font-bold">
                                {{ profile.name.charAt(0) }}
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-theme">{{ profile.name }}</h3>
                                <p class="text-theme-muted">{{ profile.email }}</p>
                            </div>
                        </div>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-theme-muted mb-1">Full
                                    Name</label>
                                <input v-model="profile.name" type="text"
                                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-theme-muted mb-1">Email</label>
                                <input v-model="profile.email" type="email"
                                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-theme-muted mb-1">Phone</label>
                                <input v-model="profile.phone" type="tel"
                                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                            </div>
                        </div>
                        <button
                            class="mt-6 px-6 py-3 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition">Save
                            Changes</button>
                    </div>

                    <!-- Orders Tab -->
                    <div v-if="activeTab === 'orders'" class="space-y-4">
                        <div v-for="order in orders" :key="order.id"
                            class="bg-theme-card rounded-2xl shadow-theme-lg p-5">
                            <div class="flex flex-wrap justify-between gap-4 mb-4">
                                <div>
                                    <p class="text-sm text-theme-muted">Order #{{ order.id }}</p>
                                    <p class="font-semibold text-theme">{{ order.date }}</p>
                                </div>
                                <span :class="statusColors[order.status]"
                                    class="px-3 py-1 rounded-full text-sm font-medium">{{ order.status }}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <img :src="order.items[0].image" class="w-16 h-16 rounded-lg object-cover">
                                <div class="flex-1">
                                    <p class="text-gray-800 dark:text-white font-medium">{{ order.items[0].name }}</p>
                                    <p class="text-sm text-theme-muted">{{ order.items.length }} item(s)
                                        · ${{ order.total }}</p>
                                </div>
                                <NuxtLink :to="`/orders?id=${order.id}`"
                                    class="text-primary hover:underline font-medium">View Details</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Addresses Tab -->
                    <div v-if="activeTab === 'addresses'" class="grid sm:grid-cols-2 gap-4">
                        <div v-for="addr in addresses" :key="addr.id"
                            class="bg-theme-card rounded-2xl shadow-theme-lg p-5 border-2"
                            :class="addr.isDefault ? 'border-primary' : 'border-transparent'">
                            <div class="flex justify-between items-start mb-3">
                                <span v-if="addr.isDefault"
                                    class="px-2 py-1 bg-primary-muted dark:bg-orange-900/30 text-primary dark:text-primary text-xs rounded font-medium">Default</span>
                                <button class="text-gray-400 hover:text-red-500 transition">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                            <h4 class="font-semibold text-theme">{{ addr.name }}</h4>
                            <p class="text-theme-muted text-sm mt-1">{{ addr.address }}</p>
                            <p class="text-theme-muted text-sm">{{ addr.city }}, {{ addr.zip }}</p>
                        </div>
                        <button
                            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition">
                            <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                            Add New Address
                        </button>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
useSeoMeta({ title: 'My Account' })

const activeTab = ref('profile')
const tabs = [
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'orders', icon: '📦', label: 'Orders' },
    { id: 'addresses', icon: '📍', label: 'Addresses' }
]

const profile = reactive({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890'
})

const statusColors: Record<string, string> = {
    'Delivered': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    'Shipped': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    'Processing': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
}

const orders = [
    { id: 'ORD-001', date: 'Jan 15, 2026', status: 'Delivered', total: 129.99, items: [{ name: 'Wireless Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop' }] },
    { id: 'ORD-002', date: 'Jan 10, 2026', status: 'Shipped', total: 89.99, items: [{ name: 'Smart Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop' }] }
]

const addresses = [
    { id: 1, name: 'Home', address: '123 Main Street', city: 'New York', zip: '10001', isDefault: true },
    { id: 2, name: 'Office', address: '456 Business Ave', city: 'New York', zip: '10002', isDefault: false }
]
</script>
