<template>
    <div class="min-h-screen bg-gray-50">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mb-2">Returns & Exchanges</h1>
                <p class="text-gray-400">Hassle-free returns within 30 days</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <!-- Quick Steps -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-6">How to Return</h2>
                <div class="grid sm:grid-cols-4 gap-4">
                    <div v-for="(step, i) in steps" :key="i" class="text-center">
                        <div
                            class="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                            {{ i + 1 }}
                        </div>
                        <h3 class="font-semibold">{{ step.title }}</h3>
                        <p class="text-sm text-gray-500">{{ step.desc }}</p>
                    </div>
                </div>
            </section>

            <!-- Policy Content -->
            <section class="prose prose-gray max-w-none">
                <h2>Return Policy</h2>
                <p>We accept returns within 30 days of delivery for most items. Items must be unused, unwashed, and in
                    original packaging with all tags attached.</p>

                <h2>Non-Returnable Items</h2>
                <ul>
                    <li>Underwear and swimwear (for hygiene reasons)</li>
                    <li>Personalized or custom-made items</li>
                    <li>Sale items marked as final sale</li>
                    <li>Gift cards</li>
                </ul>

                <h2>Refund Process</h2>
                <p>Once we receive your return, please allow 5-7 business days for inspection. Refunds will be credited
                    to your original payment method within 3-5 business days after approval.</p>

                <h2>Exchanges</h2>
                <p>Need a different size or color? We offer free exchanges on all orders. Simply start a return and
                    place a new order for the item you want.</p>
            </section>

            <div class="mt-8 p-6 bg-orange-50 rounded-xl">
                <h3 class="font-bold text-lg mb-2">Need to make a return?</h3>
                <p class="text-gray-600 mb-4">Start your return process online for faster processing.</p>
                <button class="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold">Start Return</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({ title: 'Returns & Exchanges' })

const steps = [
    { title: 'Request', desc: 'Start return online' },
    { title: 'Pack', desc: 'Package your items' },
    { title: 'Ship', desc: 'Drop off at carrier' },
    { title: 'Refund', desc: 'Get your money back' }
]
</script>
