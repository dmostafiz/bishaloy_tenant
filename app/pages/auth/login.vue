<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12 transition-colors duration-300">
        <div class="w-full max-w-md">
            <div class="text-center mb-8">
                <NuxtLink to="/" class="text-3xl font-bold text-orange-500">ShopNow</NuxtLink>
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white mt-6">Welcome back</h1>
                <p class="text-gray-500 dark:text-gray-400 mt-1">Sign in to your account</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8">
                <form @submit.prevent="handleLogin" class="space-y-4">
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
                    <div class="flex items-center justify-between text-sm">
                        <label class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <input type="checkbox" v-model="form.remember"
                                class="rounded border-gray-300 text-orange-500">
                            Remember me
                        </label>
                        <NuxtLink to="/auth/forgot-password" class="text-orange-500 hover:underline">Forgot password?
                        </NuxtLink>
                    </div>
                    <button type="submit" :disabled="loading"
                        class="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition disabled:opacity-50">
                        {{ loading ? 'Signing in...' : 'Sign In' }}
                    </button>
                </form>

                <div class="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    Do not have an account? <NuxtLink to="/auth/register"
                        class="text-orange-500 hover:underline font-medium">Sign up</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
useSeoMeta({ title: 'Login' })
definePageMeta({ layout: false })

const loading = ref(false)
const form = reactive({ email: '', password: '', remember: false })

const handleLogin = async () => {
    loading.value = true
    await new Promise(r => setTimeout(r, 1500))
    loading.value = false
    navigateTo('/')
}
</script>
