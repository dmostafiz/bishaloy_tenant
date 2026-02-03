<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12 transition-colors duration-300">
        <div class="w-full max-w-md">
            <div class="text-center mb-8">
                <NuxtLink to="/" class="text-3xl font-bold text-primary">ShopNow</NuxtLink>
                <h1 class="text-2xl font-bold text-theme mt-6">Reset Password</h1>
                <p class="text-theme-muted mt-1">Enter your email to receive a reset link</p>
            </div>

            <div class="bg-theme-card rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8">
                <form v-if="!sent" @submit.prevent="handleSubmit" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-theme-muted mb-1">Email</label>
                        <input v-model="email" type="email" required
                            class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-theme focus:ring-2 focus:ring-primary">
                    </div>
                    <button type="submit" :disabled="loading"
                        class="w-full py-3 bg-primary hover:bg-accent text-white font-semibold rounded-xl transition disabled:opacity-50">
                        {{ loading ? 'Sending...' : 'Send Reset Link' }}
                    </button>
                </form>

                <div v-else class="text-center py-4">
                    <div
                        class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p class="text-theme-muted">Check your email for the reset link</p>
                </div>

                <div class="mt-6 text-center text-sm">
                    <NuxtLink to="/auth/login" class="text-primary hover:underline font-medium">Back to Login
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
useSeoMeta({ title: 'Forgot Password' })
definePageMeta({ layout: false })

const loading = ref(false)
const sent = ref(false)
const email = ref('')

const handleSubmit = async () => {
    loading.value = true
    await new Promise(r => setTimeout(r, 1500))
    loading.value = false
    sent.value = true
}
</script>
