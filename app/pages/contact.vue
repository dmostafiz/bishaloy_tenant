<template>
    <div class="min-h-screen bg-theme transition-colors duration-300">
        <div class="bg-theme-elevated text-theme py-12">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
                <p class="text-theme-muted">We'd love to hear from you</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Contact Info -->
                <div class="space-y-6">
                    <div v-for="info in contactInfo" :key="info.title"
                        class="bg-theme-card rounded-2xl p-6 shadow-theme-lg flex items-start gap-4">
                        <div
                            class="w-12 h-12 bg-primary-muted rounded-xl flex items-center justify-center text-2xl shrink-0">
                            {{ info.icon }}
                        </div>
                        <div>
                            <h3 class="font-semibold text-theme">{{ info.title }}</h3>
                            <p class="text-theme-muted text-sm mt-1">{{ info.value }}</p>
                            <p v-if="info.extra" class="text-theme-light text-xs mt-1">{{ info.extra }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="lg:col-span-2">
                    <div class="bg-theme-card rounded-2xl shadow-theme-lg p-6 md:p-8">
                        <h2 class="text-xl font-bold text-theme mb-6">Send us a message</h2>
                        <form @submit.prevent="handleSubmit" class="space-y-4">
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-theme-muted mb-1">Name</label>
                                    <input v-model="form.name" type="text" required class="input-theme">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-theme-muted mb-1">Email</label>
                                    <input v-model="form.email" type="email" required class="input-theme">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-theme-muted mb-1">Subject</label>
                                <input v-model="form.subject" type="text" required class="input-theme">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-theme-muted mb-1">Message</label>
                                <textarea v-model="form.message" rows="5" required class="input-theme"></textarea>
                            </div>
                            <button type="submit" :disabled="loading" class="btn-primary disabled:opacity-50">
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
