<template>
    <div class="min-h-screen bg-gray-50">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mb-2">My Account</h1>
                <p class="text-gray-400">Manage your profile and preferences</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar -->
                <aside class="lg:w-64">
                    <div class="bg-white rounded-xl shadow-sm p-6">
                        <div class="flex items-center gap-4 mb-6 pb-6 border-b">
                            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <span class="text-2xl font-bold text-orange-500">{{ user.name.charAt(0) }}</span>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">{{ user.name }}</h3>
                                <p class="text-sm text-gray-500">{{ user.email }}</p>
                            </div>
                        </div>
                        <nav class="space-y-1">
                            <button v-for="item in menuItems" :key="item.id" @click="activeTab = item.id"
                                :class="activeTab === item.id ? 'bg-orange-50 text-orange-500' : 'text-gray-600 hover:bg-gray-50'"
                                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition text-left">
                                <span v-html="item.icon"></span>
                                {{ item.label }}
                            </button>
                        </nav>
                    </div>
                </aside>

                <!-- Content -->
                <main class="flex-1">
                    <!-- Profile -->
                    <div v-if="activeTab === 'profile'" class="bg-white rounded-xl shadow-sm p-6">
                        <h2 class="text-xl font-bold mb-6">Profile Information</h2>
                        <form class="space-y-4 max-w-lg">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input v-model="user.name" type="text"
                                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input v-model="user.email" type="email"
                                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input v-model="user.phone" type="tel"
                                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                            </div>
                            <button type="submit"
                                class="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
                                Save Changes
                            </button>
                        </form>
                    </div>

                    <!-- Orders -->
                    <div v-if="activeTab === 'orders'" class="bg-white rounded-xl shadow-sm p-6">
                        <h2 class="text-xl font-bold mb-6">Order History</h2>
                        <div class="space-y-4">
                            <div v-for="order in orders" :key="order.id" class="border rounded-lg p-4">
                                <div class="flex justify-between items-start mb-3">
                                    <div>
                                        <p class="font-semibold">Order #{{ order.id }}</p>
                                        <p class="text-sm text-gray-500">{{ order.date }}</p>
                                    </div>
                                    <span
                                        :class="order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'"
                                        class="px-3 py-1 rounded-full text-sm font-medium">
                                        {{ order.status }}
                                    </span>
                                </div>
                                <p class="text-gray-600">{{ order.items }} items • ${{ order.total }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Addresses -->
                    <div v-if="activeTab === 'addresses'" class="bg-white rounded-xl shadow-sm p-6">
                        <div class="flex justify-between items-center mb-6">
                            <h2 class="text-xl font-bold">Saved Addresses</h2>
                            <button class="px-4 py-2 bg-orange-500 text-white rounded-lg">Add New</button>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">
                            <div v-for="addr in addresses" :key="addr.id" class="border rounded-lg p-4">
                                <div class="flex justify-between mb-2">
                                    <span class="font-semibold">{{ addr.label }}</span>
                                    <span v-if="addr.isDefault"
                                        class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Default</span>
                                </div>
                                <p class="text-gray-600 text-sm">{{ addr.address }}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
useSeoMeta({ title: 'My Account' })

const activeTab = ref('profile')
const user = reactive({ name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 890' })

const menuItems = [
    { id: 'profile', label: 'Profile', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>' },
    { id: 'orders', label: 'Orders', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>' },
    { id: 'addresses', label: 'Addresses', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>' }
]

const orders = [
    { id: '12345', date: 'Jan 15, 2026', status: 'Delivered', items: 3, total: '149.99' },
    { id: '12344', date: 'Jan 10, 2026', status: 'Shipped', items: 2, total: '89.99' }
]

const addresses = [
    { id: 1, label: 'Home', address: '123 Main St, New York, NY 10001', isDefault: true },
    { id: 2, label: 'Office', address: '456 Business Ave, New York, NY 10002', isDefault: false }
]
</script>
