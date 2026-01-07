<template>
    <header class="bg-gray-900 sticky text-white  top-0 z-50 shadow-lg">
        <div class="container mx-auto px-4">
            <!-- Top Row -->
            <div class="flex items-center justify-between py-3 gap-2">
                <!-- Logo & Menu Button -->
                <div class="flex items-center gap-3">
                    <button onclick="toggleMobileMenu()" class="lg:hidden text-white hover:text-orange-400 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <h1
                        class="text-xl sm:text-2xl font-bold cursor-pointer hover:text-orange-400 transition whitespace-nowrap">
                        {{ $tenant.name }}</h1>
                    <div class="hidden xl:flex items-center text-xs ml-4">
                        <span class="cursor-pointer hover:text-orange-400 transition">Deliver to Bangladesh 🇧🇩</span>
                    </div>
                </div>

                <!-- Search Bar - Hidden on smallest screens -->
                <div class="hidden sm:flex flex-1 max-w-2xl mx-2 lg:mx-4">
                    <div class="relative w-full">
                        <input type="text" id="searchInput" placeholder="Search for products..."
                            class="w-full rounded-xl px-3 py-2 bg-white rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm">
                        <button
                            class="absolute right-0 top-0 bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-r-lg transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Right Side Icons -->
                <div class="flex items-center gap-2 sm:gap-4">
                    <button onclick="toggleSearch()" class="sm:hidden text-white hover:text-orange-400 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    <div class="cursor-pointer hover:text-orange-400 transition hidden lg:block">
                        <div class="text-xs">Hello, Sign in</div>
                        <div class="font-bold text-sm">Account</div>
                    </div>

                    <button onclick="toggleAccount()" class="lg:hidden text-white hover:text-orange-400 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </button>

                    <div class="cursor-pointer hover:text-orange-400 transition hidden md:block">
                        <div class="text-xs">Returns</div>
                        <div class="font-bold text-sm">& Orders</div>
                    </div>

                    <div class="relative cursor-pointer hover:text-orange-400 transition" onclick="toggleCart()">
                        <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                            </path>
                        </svg>
                        <span id="cartCount"
                            class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
                    </div>
                </div>
            </div>

            <!-- Mobile Search Bar -->
            <div id="mobileSearch" class="sm:hidden pb-3 hidden">
                <div class="relative">
                    <input type="text" id="searchInputMobile" placeholder="Search for products..."
                        class="w-full px-3 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm">
                    <button
                        class="absolute right-0 top-0 bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-r-lg transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div class="bg-gray-900 text-white  top-0">
        <Navigation />
    </div>
</template>

<script lang="ts" setup>
import Navigation from './Navigation.vue';
const { $tenant } = useNuxtApp()


</script>

<style></style>