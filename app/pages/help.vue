<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-3xl md:text-4xl font-bold mb-4">How can we help?</h1>
                <div class="max-w-xl mx-auto relative">
                    <input v-model="searchQuery" type="text" placeholder="Search for help..."
                        class="w-full px-6 py-4 rounded-xl text-gray-900 focus:ring-4 focus:ring-white/30 text-lg">
                    <svg class="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none"
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
                <NuxtLink v-for="link in quickLinks" :key="link.title" :to="link.to"
                    class="bg-theme-card rounded-2xl p-6 shadow-theme-lg text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                    <div class="text-4xl mb-3">{{ link.icon }}</div>
                    <h3 class="font-semibold text-theme group-hover:text-primary transition">{{
                        link.title }}</h3>
                    <p class="text-sm text-theme-muted mt-1">{{ link.desc }}</p>
                </NuxtLink>
            </div>

            <!-- FAQ -->
            <h2 class="text-2xl font-bold text-theme mb-6">Frequently Asked Questions</h2>
            <div class="space-y-3">
                <div v-for="(faq, i) in faqs" :key="i"
                    class="bg-theme-card rounded-xl shadow-md dark:shadow-gray-900/50 overflow-hidden">
                    <button @click="openFaq = openFaq === i ? null : i"
                        class="w-full px-6 py-4 flex justify-between items-center text-left">
                        <span class="font-medium text-theme">{{ faq.q }}</span>
                        <svg :class="openFaq === i ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transition-transform" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-if="openFaq === i" class="px-6 pb-4 text-theme-muted">{{ faq.a }}</div>
                </div>
            </div>

            <!-- Contact CTA -->
            <div class="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
                <h3 class="text-2xl font-bold mb-2">Still need help?</h3>
                <p class="text-primary mb-6">Our support team is ready to assist you</p>
                <NuxtLink to="/contact"
                    class="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-primary-muted transition">
                    Contact Support
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
useSeoMeta({ title: 'Help Center' })

const searchQuery = ref('')
const openFaq = ref<number | null>(null)

const quickLinks = [
    { icon: '📦', title: 'Track Order', desc: 'Check order status', to: '/track-order' },
    { icon: '🚚', title: 'Shipping', desc: 'Delivery information', to: '/shipping' },
    { icon: '↩️', title: 'Returns', desc: 'Return policy', to: '/returns' },
    { icon: '💬', title: 'Contact', desc: 'Get in touch', to: '/contact' }
]

const faqs = [
    { q: 'How do I track my order?', a: 'You can track your order by visiting the Track Order page and entering your order number and email address.' },
    { q: 'What is your return policy?', a: 'We accept returns within 30 days of purchase. Items must be unused and in original packaging. Visit our Returns page for more details.' },
    { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery. Free shipping on orders over $50.' },
    { q: 'Do you ship internationally?', a: 'Yes! We ship to over 100 countries worldwide. International shipping times and rates vary by destination.' },
    { q: 'How can I change my order?', a: 'Orders can be modified within 1 hour of placement. Contact our support team immediately for assistance.' }
]
</script>
