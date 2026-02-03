<template>
    <div class="min-h-screen bg-gray-50">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mb-2">Contact Us</h1>
                <p class="text-gray-400">We'd love to hear from you</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Contact Info -->
                <div class="space-y-6">
                    <div v-for="info in contactInfo" :key="info.title" class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                            <span class="text-2xl">{{ info.icon }}</span>
                        </div>
                        <h3 class="font-semibold mb-2">{{ info.title }}</h3>
                        <p class="text-gray-600">{{ info.value }}</p>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
                    <h2 class="text-xl font-bold mb-6">Send us a message</h2>
                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input v-model="form.name" type="text" required
                                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input v-model="form.email" type="email" required
                                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <select v-model="form.subject"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                                <option>General Inquiry</option>
                                <option>Order Issue</option>
                                <option>Return Request</option>
                                <option>Technical Support</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea v-model="form.message" rows="5" required
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"></textarea>
                        </div>
                        <button type="submit"
                            class="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
useSeoMeta({ title: 'Contact Us' })

const form = reactive({ name: '', email: '', subject: 'General Inquiry', message: '' })
const submitForm = () => console.log('Form submitted:', form)

const contactInfo = [
    { icon: '📧', title: 'Email', value: 'support@store.com' },
    { icon: '📞', title: 'Phone', value: '+1 (555) 123-4567' },
    { icon: '📍', title: 'Address', value: '123 Commerce St, New York, NY 10001' }
]
</script>
