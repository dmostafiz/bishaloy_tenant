<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12 transition-colors duration-300">
        <div class="w-full max-w-md">
            <div class="text-center mb-8">
                <NuxtLink to="/" class="text-3xl font-bold text-orange-500">ShopNow</NuxtLink>
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white mt-6">Create Account</h1>
                <p class="text-gray-500 dark:text-gray-400 mt-1">Join us and start shopping</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8">
                <form @submit.prevent="handleRegister" class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First
                                Name</label>
                            <input v-model="form.firstName" type="text" required
                                class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last
                                Name</label>
                            <input v-model="form.lastName" type="text" required
                                class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input v-model="form.email" type="email" required
                            class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input v-model="form.password" type="password" required
                            class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500">
                    </div>
                    <label class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <input type="checkbox" v-model="form.terms" required
                            class="mt-1 rounded border-gray-300 text-orange-500">
                        I agree to the <NuxtLink to="/terms" class="text-orange-500 hover:underline">Terms of Service
                        </NuxtLink>
                    </label>
                    <button type="submit" :disabled="loading"
                        class="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition disabled:opacity-50">
                        {{ loading ? 'Creating account...' : 'Create Account' }}
                    </button>
                </form>

                <div class="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    Already have an account? <NuxtLink to="/auth/login"
                        class="text-orange-500 hover:underline font-medium">Sign in</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
useSeoMeta({ title: 'Register' })
definePageMeta({ layout: false })

const loading = ref(false)
const form = reactive({ firstName: '', lastName: '', email: '', password: '', terms: false })

const handleRegister = async () => {
    loading.value = true
    await new Promise(r => setTimeout(r, 1500))
    loading.value = false
    navigateTo('/')
}
</script>
