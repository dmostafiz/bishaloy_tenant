<template>
    <section
        class="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(badge, index) in badges" :key="index"
                    class="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div
                        :class="`w-14 h-14 rounded-full bg-${badge.color}-100 dark:bg-${badge.color}-900/30 flex items-center justify-center text-${badge.color}-600 dark:text-${badge.color}-400 group-hover:bg-${badge.color}-600 group-hover:text-white transition-colors duration-300`">
                        <!-- Icon Resolver (Simplified for demo, ideally use a robust icon library or component map) -->
                        <svg v-if="badge.icon === 'truck'" class="w-7 h-7" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                        <svg v-else-if="badge.icon === 'shield-check'" class="w-7 h-7" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <svg v-else-if="badge.icon === 'headphones'" class="w-7 h-7" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg v-else-if="badge.icon === 'refresh'" class="w-7 h-7" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-900 dark:text-white text-lg mb-1">{{ badge.title }}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ badge.subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    badges: Array<{
        title: string;
        subtitle: string;
        icon: string;
        color: string;
    }>
}>()
</script>
