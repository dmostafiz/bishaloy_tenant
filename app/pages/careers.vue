<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
                <p class="text-xl opacity-90">Build the future of e-commerce with us</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-16">
            <!-- Perks -->
            <section class="mb-16">
                <h2 class="text-2xl font-bold text-theme text-center mb-8">Why Work With Us</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="perk in perks" :key="perk.title"
                        class="bg-theme-card rounded-2xl p-6 shadow-theme-lg text-center hover:-translate-y-1 transition-all duration-300">
                        <div class="text-4xl mb-3">{{ perk.icon }}</div>
                        <h3 class="font-semibold text-theme">{{ perk.title }}</h3>
                    </div>
                </div>
            </section>

            <!-- Open Positions -->
            <section>
                <h2 class="text-2xl font-bold text-theme mb-8">Open Positions</h2>
                <div class="space-y-4">
                    <div v-for="job in jobs" :key="job.id"
                        class="bg-theme-card rounded-2xl p-6 shadow-theme-lg flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-xl transition-shadow">
                        <div>
                            <h3 class="font-bold text-lg text-theme">{{ job.title }}</h3>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span
                                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-theme-muted rounded-full text-sm">{{
                                    job.department }}</span>
                                <span
                                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-theme-muted rounded-full text-sm">{{
                                    job.location }}</span>
                                <span
                                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-theme-muted rounded-full text-sm">{{
                                    job.type }}</span>
                            </div>
                        </div>
                        <button
                            class="px-6 py-2 bg-primary hover:bg-accent text-white rounded-xl font-semibold whitespace-nowrap transition">Apply
                            Now</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Careers' })

const perks = [
    { icon: '💰', title: 'Competitive Salary' },
    { icon: '🏖️', title: 'Unlimited PTO' },
    { icon: '🏥', title: 'Health Insurance' },
    { icon: '🏠', title: 'Remote Friendly' }
]

const jobs = [
    { id: 1, title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Product Designer', department: 'Design', location: 'New York', type: 'Full-time' },
    { id: 3, title: 'Customer Success Manager', department: 'Support', location: 'Remote', type: 'Full-time' },
    { id: 4, title: 'Marketing Specialist', department: 'Marketing', location: 'Los Angeles', type: 'Full-time' }
]
</script>
