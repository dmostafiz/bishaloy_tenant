<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12">
            <div class="container mx-auto px-4 text-center">
                <span class="text-4xl mb-4 block">🚚</span>
                <h1 class="text-3xl md:text-4xl font-bold mb-2">Shipping Information</h1>
                <p class="text-blue-100">Fast and reliable delivery to your doorstep</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Shipping Options -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div v-for="option in shippingOptions" :key="option.name"
                    class="bg-theme-card rounded-2xl p-6 shadow-theme-lg text-center hover:-translate-y-1 transition-all duration-300">
                    <div class="text-4xl mb-4">{{ option.icon }}</div>
                    <h3 class="text-lg font-bold text-theme mb-2">{{ option.name }}</h3>
                    <p class="text-2xl font-bold text-primary mb-2">{{ option.price }}</p>
                    <p class="text-theme-muted text-sm">{{ option.time }}</p>
                </div>
            </div>

            <!-- Info Sections -->
            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="section in sections" :key="section.title"
                    class="bg-theme-card rounded-2xl p-6 shadow-theme-lg">
                    <h3 class="text-lg font-bold text-theme mb-4 flex items-center gap-2">
                        <span class="text-xl">{{ section.icon }}</span>
                        {{ section.title }}
                    </h3>
                    <ul class="space-y-2">
                        <li v-for="item in section.items" :key="item"
                            class="flex items-start gap-2 text-theme-muted">
                            <svg class="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Free Shipping Banner -->
            <div class="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
                <h3 class="text-2xl font-bold mb-2">🎉 Free Shipping on Orders Over $50!</h3>
                <p class="text-green-100">No promo code needed - automatically applied at checkout</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Shipping Information' })

const shippingOptions = [
    { icon: '📦', name: 'Standard Shipping', price: '$4.99', time: '5-7 Business Days' },
    { icon: '⚡', name: 'Express Shipping', price: '$9.99', time: '2-3 Business Days' },
    { icon: '🚀', name: 'Next Day Delivery', price: '$19.99', time: 'Next Business Day' }
]

const sections = [
    { icon: '🌍', title: 'International Shipping', items: ['Available to 100+ countries', 'Delivery in 7-21 business days', 'Duties and taxes may apply', 'Real-time tracking available'] },
    { icon: '📍', title: 'Delivery Information', items: ['Signature may be required', 'Leave at door option available', 'Delivery to PO boxes supported', 'Rescheduling available'] },
    { icon: '📱', title: 'Order Tracking', items: ['Real-time tracking updates', 'SMS and email notifications', 'Track from your account', 'Carrier app integration'] },
    { icon: '🔄', title: 'Shipping Issues', items: ['Damaged package claims', 'Lost package investigation', 'Address correction available', 'Rerouting options'] }
]
</script>
