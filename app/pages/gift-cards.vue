<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16">
            <div class="container mx-auto px-4 text-center">
                <span class="text-6xl mb-4 block">🎁</span>
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Gift Cards</h1>
                <p class="text-xl opacity-90">Give the perfect gift every time</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <h2 class="text-2xl font-bold text-theme text-center mb-8">Choose Amount</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                <button v-for="amount in amounts" :key="amount" @click="selected = amount"
                    :class="selected === amount ? 'border-primary bg-primary-muted dark:bg-orange-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'"
                    class="p-6 border-2 rounded-2xl text-center transition bg-theme-card">
                    <p class="text-3xl font-bold text-theme">${{ amount }}</p>
                </button>
            </div>

            <div class="max-w-lg mx-auto bg-theme-card rounded-2xl p-6 shadow-theme-lg">
                <h3 class="font-bold text-theme mb-4">Personalize Your Gift</h3>
                <div class="space-y-4">
                    <input v-model="form.to" placeholder="Recipient's Email"
                        class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                    <input v-model="form.from" placeholder="Your Name"
                        class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                    <textarea v-model="form.message" placeholder="Add a personal message" rows="3"
                        class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary"></textarea>
                    <button
                        class="w-full py-3 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition">
                        Buy Gift Card - ${{ selected }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
useSeoMeta({ title: 'Gift Cards' })

const amounts = [25, 50, 100, 200]
const selected = ref(50)
const form = reactive({ to: '', from: '', message: '' })
</script>
