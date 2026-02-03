<template>
    <div class="min-h-screen bg-gray-50">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-3xl font-bold mb-4">How can we help?</h1>
                <div class="max-w-xl mx-auto relative">
                    <input v-model="search" type="text" placeholder="Search for help..."
                        class="w-full px-6 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500">
                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Quick Links -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <NuxtLink v-for="link in quickLinks" :key="link.to" :to="link.to"
                    class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                    <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <span class="text-2xl">{{ link.icon }}</span>
                    </div>
                    <div>
                        <h3 class="font-semibold">{{ link.title }}</h3>
                        <p class="text-sm text-gray-500">{{ link.desc }}</p>
                    </div>
                </NuxtLink>
            </div>

            <!-- FAQ -->
            <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div class="space-y-3 max-w-3xl">
                <div v-for="(faq, i) in faqs" :key="i" class="bg-white rounded-xl shadow-sm overflow-hidden">
                    <button @click="openFaq = openFaq === i ? -1 : i"
                        class="w-full flex justify-between items-center p-4 text-left">
                        <span class="font-medium">{{ faq.q }}</span>
                        <svg :class="openFaq === i ? 'rotate-180' : ''" class="w-5 h-5 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-show="openFaq === i" class="px-4 pb-4 text-gray-600">{{ faq.a }}</div>
                </div>
            </div>

            <!-- Contact CTA -->
            <div class="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
                <h3 class="text-2xl font-bold mb-2">Still need help?</h3>
                <p class="mb-6 opacity-90">Our support team is available 24/7</p>
                <NuxtLink to="/contact"
                    class="inline-block px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100">
                    Contact Support
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
useSeoMeta({ title: 'Help Center' })

const search = ref('')
const openFaq = ref(-1)

const quickLinks = [
    { icon: '📦', title: 'Track Order', desc: 'Check your order status', to: '/track-order' },
    { icon: '🚚', title: 'Shipping', desc: 'Delivery information', to: '/shipping' },
    { icon: '🔄', title: 'Returns', desc: 'Return & exchange policy', to: '/returns' },
    { icon: '💬', title: 'Contact Us', desc: 'Get in touch', to: '/contact' }
]

const faqs = [
    { q: 'How do I track my order?', a: 'You can track your order by visiting the Track Order page and entering your order ID and email address.' },
    { q: 'What is your return policy?', a: 'We offer a 30-day return policy for most items. Items must be unused and in original packaging.' },
    { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.' },
    { q: 'Do you ship internationally?', a: 'Yes, we ship to over 100 countries worldwide. International shipping times vary by location.' },
    { q: 'How do I cancel an order?', a: 'You can cancel an order within 1 hour of placing it by contacting our support team.' }
]
</script>
