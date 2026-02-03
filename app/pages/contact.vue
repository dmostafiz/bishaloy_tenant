<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white py-12">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
                <p class="text-gray-400">We'd love to hear from you</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Contact Info -->
                <div class="space-y-6">
                    <div v-for="info in contactInfo" :key="info.title"
                        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/50 flex items-start gap-4">
                        <div
                            class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-2xl shrink-0">
                            {{ info.icon }}
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white">{{ info.title }}</h3>
                            <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ info.value }}</p>
                            <p v-if="info.extra" class="text-gray-500 dark:text-gray-500 text-xs mt-1">{{ info.extra }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="lg:col-span-2">
                    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-6 md:p-8">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
                        <form @submit.prevent="handleSubmit" class="space-y-4">
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                    <input v-model="form.name" type="text" required
                                        class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500">
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                    <input v-model="form.email" type="email" required
                                        class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500">
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                                <input v-model="form.subject" type="text" required
                                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500">
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea v-model="form.message" rows="5" required
                                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500"></textarea>
                            </div>
                            <button type="submit" :disabled="loading"
                                class="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition disabled:opacity-50">
                                {{ loading ? 'Sending...' : 'Send Message' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
useSeoMeta({ title: 'Contact Us' })

const loading = ref(false)
const form = reactive({ name: '', email: '', subject: '', message: '' })

const contactInfo = [
    { icon: '📧', title: 'Email', value: 'support@store.com', extra: 'We reply within 24 hours' },
    { icon: '📞', title: 'Phone', value: '+1 (555) 123-4567', extra: 'Mon-Fri 9am-6pm EST' },
    { icon: '📍', title: 'Address', value: '123 Commerce Street, New York, NY 10001' }
]

const handleSubmit = async () => {
    loading.value = true
    await new Promise(r => setTimeout(r, 1500))
    loading.value = false
    alert('Message sent successfully!')
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
}
</script>
