<template>
    <div class="min-h-screen bg-gray-50">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mb-2">Shipping Information</h1>
                <p class="text-gray-400">Everything you need to know about delivery</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <!-- Shipping Options -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-6">Shipping Options</h2>
                <div class="grid sm:grid-cols-3 gap-4">
                    <div v-for="opt in shippingOptions" :key="opt.name"
                        class="bg-white rounded-xl p-6 shadow-sm text-center">
                        <div class="text-3xl mb-3">{{ opt.icon }}</div>
                        <h3 class="font-bold text-lg mb-1">{{ opt.name }}</h3>
                        <p class="text-orange-500 font-semibold mb-2">{{ opt.price }}</p>
                        <p class="text-sm text-gray-500">{{ opt.time }}</p>
                    </div>
                </div>
            </section>

            <!-- Info Sections -->
            <section class="prose prose-gray max-w-none">
                <h2>Delivery Times</h2>
                <p>Orders placed before 2 PM EST are processed the same business day. Delivery times are estimated and
                    may vary based on your location and chosen shipping method.</p>

                <h2>International Shipping</h2>
                <p>We ship to over 100 countries worldwide. International orders may be subject to customs duties and
                    taxes, which are the responsibility of the recipient.</p>

                <h2>Order Tracking</h2>
                <p>Once your order ships, you'll receive an email with tracking information. You can also track your
                    order anytime on our <NuxtLink to="/track-order" class="text-orange-500">Track Order</NuxtLink>
                    page.</p>

                <h2>Free Shipping</h2>
                <p>Enjoy free standard shipping on all orders over $50. This offer applies to domestic orders only.</p>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({ title: 'Shipping Information' })

const shippingOptions = [
    { icon: '📦', name: 'Standard', price: '$5.99', time: '5-7 business days' },
    { icon: '🚀', name: 'Express', price: '$12.99', time: '2-3 business days' },
    { icon: '⚡', name: 'Next Day', price: '$24.99', time: 'Next business day' }
]
</script>
