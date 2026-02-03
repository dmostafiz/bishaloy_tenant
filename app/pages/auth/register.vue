<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <!-- Background Pattern -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl">
            </div>
        </div>

        <div class="relative w-full max-w-md">
            <!-- Logo/Brand -->
            <div class="text-center mb-8">
                <NuxtLink to="/" class="inline-block">
                    <h1 class="text-3xl font-bold text-white hover:text-orange-400 transition">
                        {{ $tenant?.name || 'Store' }}
                    </h1>
                </NuxtLink>
                <p class="text-gray-400 mt-2">Create your account to get started.</p>
            </div>

            <!-- Register Card -->
            <div class="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div class="p-8">
                    <!-- Social Register -->
                    <div class="space-y-3 mb-6">
                        <button @click="handleGoogleRegister"
                            class="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-xl transition-all duration-300 hover:shadow-lg">
                            <svg class="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Sign up with Google
                        </button>

                        <button @click="handleFacebookRegister"
                            class="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                            Sign up with Facebook
                        </button>
                    </div>

                    <!-- Divider -->
                    <div class="relative my-6">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-600"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-4 bg-transparent text-gray-400">or register with email</span>
                        </div>
                    </div>

                    <!-- Register Form -->
                    <form @submit.prevent="handleRegister" class="space-y-4">
                        <!-- Name -->
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <input id="name" v-model="form.name" type="text" required placeholder="John Doe"
                                    class="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition">
                            </div>
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email
                                Address</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input id="email" v-model="form.email" type="email" required
                                    placeholder="you@example.com"
                                    class="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition">
                            </div>
                        </div>

                        <!-- Phone (Optional) -->
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">
                                Phone Number <span class="text-gray-500">(optional)</span>
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <input id="phone" v-model="form.phone" type="tel" placeholder="+1 (555) 000-0000"
                                    class="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition">
                            </div>
                        </div>

                        <!-- Password -->
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'"
                                    required minlength="8" placeholder="Min. 8 characters"
                                    class="w-full pl-12 pr-12 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition">
                                <button type="button" @click="showPassword = !showPassword"
                                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition">
                                    <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                </button>
                            </div>
                            <!-- Password Strength Indicator -->
                            <div class="mt-2">
                                <div class="flex gap-1">
                                    <div v-for="i in 4" :key="i" class="h-1 flex-1 rounded-full transition-colors"
                                        :class="i <= passwordStrength ? strengthColors[passwordStrength] : 'bg-gray-700'">
                                    </div>
                                </div>
                                <p class="text-xs mt-1" :class="strengthTextColors[passwordStrength]">
                                    {{ strengthLabels[passwordStrength] }}
                                </p>
                            </div>
                        </div>

                        <!-- Confirm Password -->
                        <div>
                            <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2">Confirm
                                Password</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <input id="confirmPassword" v-model="form.confirmPassword"
                                    :type="showPassword ? 'text' : 'password'" required
                                    placeholder="Confirm your password"
                                    class="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                    :class="{ 'ring-2 ring-red-500': form.confirmPassword && form.password !== form.confirmPassword }">
                            </div>
                            <p v-if="form.confirmPassword && form.password !== form.confirmPassword"
                                class="text-red-400 text-xs mt-1">
                                Passwords do not match
                            </p>
                        </div>

                        <!-- Terms & Privacy -->
                        <div class="flex items-start">
                            <input id="terms" v-model="form.acceptTerms" type="checkbox" required
                                class="w-4 h-4 mt-0.5 rounded border-gray-600 bg-white/5 text-orange-500 focus:ring-orange-500 focus:ring-offset-0">
                            <label for="terms" class="ml-2 text-sm text-gray-400">
                                I agree to the
                                <NuxtLink to="/terms" class="text-orange-400 hover:underline">Terms of Service
                                </NuxtLink>
                                and
                                <NuxtLink to="/privacy" class="text-orange-400 hover:underline">Privacy Policy
                                </NuxtLink>
                            </label>
                        </div>

                        <!-- Error Message -->
                        <div v-if="error" class="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                            <p class="text-red-400 text-sm">{{ error }}</p>
                        </div>

                        <!-- Submit Button -->
                        <button type="submit" :disabled="loading || !isFormValid"
                            class="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                            <svg v-if="loading" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            <span v-if="!loading">Create Account</span>
                            <span v-else>Creating account...</span>
                        </button>
                    </form>
                </div>

                <!-- Footer -->
                <div class="px-8 py-4 bg-white/5 border-t border-white/10 text-center">
                    <p class="text-gray-400 text-sm">
                        Already have an account?
                        <NuxtLink to="/auth/login" class="text-orange-400 hover:text-orange-300 font-medium transition">
                            Sign in
                        </NuxtLink>
                    </p>
                </div>
            </div>

            <!-- Back to Home -->
            <div class="text-center mt-6">
                <NuxtLink to="/"
                    class="text-gray-400 hover:text-white text-sm transition flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to store
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'

const { $tenant, $axios } = useNuxtApp()

// Form state
const form = reactive({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
})

const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

// SEO
useSeoMeta({
    title: 'Create Account',
    description: 'Create your account to start shopping'
})

// Define page layout (no header/footer for auth pages)
definePageMeta({
    layout: false
})

// Password strength calculation
const passwordStrength = computed(() => {
    const password = form.password
    if (!password) return 0

    let strength = 0
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^a-zA-Z0-9]/.test(password)) strength++

    return strength
})

const strengthColors: Record<number, string> = {
    0: 'bg-gray-700',
    1: 'bg-red-500',
    2: 'bg-yellow-500',
    3: 'bg-green-400',
    4: 'bg-green-500'
}

const strengthTextColors: Record<number, string> = {
    0: 'text-gray-500',
    1: 'text-red-400',
    2: 'text-yellow-400',
    3: 'text-green-400',
    4: 'text-green-500'
}

const strengthLabels: Record<number, string> = {
    0: 'Enter a password',
    1: 'Weak - Add more characters',
    2: 'Fair - Add numbers or symbols',
    3: 'Good - Almost there!',
    4: 'Strong password'
}

// Form validation
const isFormValid = computed(() => {
    return (
        form.name.trim().length > 0 &&
        form.email.trim().length > 0 &&
        form.password.length >= 8 &&
        form.password === form.confirmPassword &&
        form.acceptTerms
    )
})

// Handlers
const handleRegister = async () => {
    if (!isFormValid.value) return

    loading.value = true
    error.value = ''

    try {
        // TODO: Replace with actual API call
        const response = await $axios.post('/auth/register', {
            name: form.name,
            email: form.email,
            phone: form.phone || undefined,
            password: form.password
        })

        // Handle success - redirect to login or auto-login
        if (response.data?.success) {
            navigateTo('/auth/login?registered=true')
        }
    } catch (err: any) {
        error.value = err.response?.data?.message || 'Registration failed. Please try again.'
    } finally {
        loading.value = false
    }
}

const handleGoogleRegister = () => {
    // TODO: Implement Google OAuth
    console.log('Google register clicked')
}

const handleFacebookRegister = () => {
    // TODO: Implement Facebook OAuth
    console.log('Facebook register clicked')
}
</script>

<style scoped>
/* Custom checkbox styling */
input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgb(75, 85, 99);
    border-radius: 0.25rem;
    cursor: pointer;
}

input[type="checkbox"]:checked {
    background-color: #f97316;
    border-color: #f97316;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
