<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <!-- Hero -->
        <div class="bg-theme-elevated text-theme py-20">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                <p class="text-xl text-theme-muted max-w-2xl mx-auto">We're on a mission to make quality products
                    accessible to everyone</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-16">
            <!-- Story -->
            <section class="max-w-3xl mx-auto text-center mb-20">
                <h2 class="text-3xl font-bold text-theme mb-6">Our Story</h2>
                <p class="text-theme-muted text-lg leading-relaxed">
                    Founded in 2020, we started with a simple idea: make premium products affordable.
                    Today, we serve millions of customers worldwide with a curated selection of quality
                    products at unbeatable prices. Our team is passionate about delivering exceptional
                    customer experiences and continuously improving our offerings.
                </p>
            </section>

            <!-- Stats -->
            <section class="grid sm:grid-cols-4 gap-8 mb-20">
                <div v-for="stat in stats" :key="stat.label" class="text-center">
                    <p class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</p>
                    <p class="text-theme-muted">{{ stat.label }}</p>
                </div>
            </section>

            <!-- Values -->
            <section class="mb-20">
                <h2 class="text-3xl font-bold text-theme text-center mb-12">Our Values</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="value in values" :key="value.title"
                        class="bg-theme-card rounded-2xl p-8 shadow-theme-lg text-center hover:-translate-y-1 transition-all duration-300">
                        <div class="text-5xl mb-4">{{ value.icon }}</div>
                        <h3 class="font-bold text-xl text-theme mb-2">{{ value.title }}</h3>
                        <p class="text-theme-muted">{{ value.desc }}</p>
                    </div>
                </div>
            </section>

            <!-- CTA -->
            <section class="bg-primary rounded-2xl p-12 text-white text-center">
                <h2 class="text-3xl font-bold mb-4">Join Our Team</h2>
                <p class="text-lg opacity-90 mb-6">We're always looking for talented people</p>
                <NuxtLink to="/careers"
                    class="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-theme transition">
                    View Careers</NuxtLink>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'About Us' })

const stats = [
    { value: '10M+', label: 'Happy Customers' },
    { value: '50K+', label: 'Products' },
    { value: '100+', label: 'Countries' },
    { value: '24/7', label: 'Support' }
]

const values = [
    { icon: '🎯', title: 'Quality First', desc: 'We never compromise on product quality' },
    { icon: '💚', title: 'Sustainability', desc: 'Committed to eco-friendly practices' },
    { icon: '🤝', title: 'Customer Focus', desc: 'Your satisfaction is our priority' }
]
</script>
