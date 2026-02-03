<template>
    <header class="bg-gray-900 sticky text-white top-0 z-50 shadow-lg">
        <div class="container mx-auto px-4">
            <!-- Top Row -->
            <div class="flex items-center justify-between py-3 gap-2">
                <!-- Logo & Menu Button -->
                <div class="flex items-center gap-3">
                    <button @click="toggleMobileMenu" class="lg:hidden text-white hover:text-primary transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <NuxtLink to="/">
                        <h1
                            class="text-xl sm:text-2xl font-bold cursor-pointer hover:text-primary transition whitespace-nowrap text-white">
                            {{ $tenant?.name || 'Store' }}
                        </h1>
                    </NuxtLink>
                    <div class="hidden xl:flex items-center text-xs ml-4 text-white/80">
                        <button @click="showLocationModal = true"
                            class="cursor-pointer hover:text-primary transition flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Deliver to {{ deliveryLocation }}</span>
                        </button>
                    </div>
                </div>

                <!-- Search Bar - Hidden on smallest screens -->
                <div class="hidden sm:flex flex-1 max-w-2xl mx-2 lg:mx-4">
                    <form @submit.prevent="handleSearch" class="relative w-full">
                        <input v-model="searchQuery" type="text" placeholder="Search for products..."
                            class="w-full rounded-xl px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm pr-12 placeholder-gray-400 border border-gray-700">
                        <button type="submit"
                            class="absolute right-0 top-0 bg-orange-400 hover:bg-primary px-4 py-2 rounded-r-xl transition">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </form>
                </div>

                <!-- Right Side Icons -->
                <div class="flex items-center gap-2 sm:gap-4 text-white">
                    <!-- Mobile Search Toggle -->
                    <button @click="toggleMobileSearch" class="sm:hidden text-white hover:text-primary transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    <!-- Account Dropdown (Desktop) -->
                    <div class="relative hidden lg:block">
                        <button @click="toggleAccountDropdown"
                            class="cursor-pointer hover:text-primary transition text-left text-white">
                            <div class="text-xs text-white/80">Hello, {{ isLoggedIn ? userName : 'Sign in' }}</div>
                            <div class="font-bold text-sm flex items-center gap-1">
                                Account
                                <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': showAccountDropdown }"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        <!-- Account Dropdown Menu -->
                        <Transition enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                            <div v-if="showAccountDropdown"
                                class="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-xl py-2 z-50 border border-gray-700 text-white">
                                <div v-if="!isLoggedIn" class="px-4 py-3 border-b border-gray-700">
                                    <NuxtLink to="/auth/login" @click="showAccountDropdown = false">
                                        <button
                                            class="w-full bg-primary hover:bg-accent text-white font-semibold py-2 px-4 rounded-lg transition">
                                            Sign In
                                        </button>
                                    </NuxtLink>
                                    <p class="text-xs text-gray-400 mt-2 text-center">
                                        New customer? <NuxtLink to="/auth/register" class="text-primary hover:underline"
                                            @click="showAccountDropdown = false">Start here</NuxtLink>
                                    </p>
                                </div>
                                <div class="py-1">
                                    <NuxtLink to="/account"
                                        class="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition"
                                        @click="showAccountDropdown = false">
                                        <span class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            My Account
                                        </span>
                                    </NuxtLink>
                                    <NuxtLink to="/orders"
                                        class="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition"
                                        @click="showAccountDropdown = false">
                                        <span class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                            My Orders
                                        </span>
                                    </NuxtLink>
                                    <NuxtLink to="/wishlist"
                                        class="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition"
                                        @click="showAccountDropdown = false">
                                        <span class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            Wishlist
                                        </span>
                                    </NuxtLink>
                                    <div v-if="isLoggedIn" class="border-t border-gray-700 mt-1 pt-1">
                                        <button @click="handleLogout"
                                            class="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 transition">
                                            <span class="flex items-center gap-2">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Sign Out
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>

                    <!-- Mobile Account Button -->
                    <button @click="toggleAccountDropdown" class="lg:hidden text-white hover:text-primary transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </button>

                    <!-- Orders (Desktop) -->
                    <NuxtLink to="/orders" class="cursor-pointer hover:text-primary transition hidden md:block text-white">
                        <div class="text-xs text-white/80">Returns</div>
                        <div class="font-bold text-sm">& Orders</div>
                    </NuxtLink>

                    <!-- Dark Mode Toggle -->
                    <button @click="toggleTheme" class="p-2 hover:text-primary transition text-white" title="Toggle theme">
                        <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>

                    <!-- Cart Button -->
                    <button @click="toggleCart" class="relative cursor-pointer hover:text-primary transition text-white">
                        <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                            </path>
                        </svg>
                        <span
                            class="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                            :class="{ 'animate-bounce': cartBounce }">
                            {{ cartCount }}
                        </span>
                    </button>
                </div>
            </div>

            <!-- Mobile Search Bar -->
            <Transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2">
                <div v-if="showMobileSearch" class="sm:hidden pb-3">
                    <form @submit.prevent="handleSearch" class="relative">
                        <input v-model="searchQuery" ref="mobileSearchInput" type="text"
                            placeholder="Search for products..."
                            class="w-full px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm pr-12 placeholder-gray-400 border border-gray-700">
                        <button type="submit"
                            class="absolute right-0 top-0 bg-orange-400 hover:bg-primary px-4 py-2 rounded-r-xl transition">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </Transition>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <Transition enter-active-class="transition-opacity ease-out duration-300" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-opacity ease-in duration-200"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="showMobileMenu" class="fixed inset-0 bg-black/50 z-50 lg:hidden" @click="showMobileMenu = false">
        </div>
    </Transition>

    <!-- Mobile Menu Drawer -->
    <Transition enter-active-class="transition ease-out duration-300 transform" enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0" leave-active-class="transition ease-in duration-200 transform"
        leave-from-class="translate-x-0" leave-to-class="-translate-x-full">
        <div v-if="showMobileMenu"
            class="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-gray-900 z-50 shadow-2xl lg:hidden overflow-y-auto border-r border-gray-800">
            <!-- Menu Header -->
            <div class="flex items-center justify-between p-4 border-b border-gray-800">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div class="text-white">
                        <div class="text-sm font-medium">Hello, {{ isLoggedIn ? userName : 'Guest' }}</div>
                        <NuxtLink v-if="!isLoggedIn" to="/auth/login" class="text-primary text-sm font-bold hover:text-orange-400 transition"
                            @click="showMobileMenu = false">Sign In</NuxtLink>
                    </div>
                </div>
                <button @click="showMobileMenu = false" class="text-gray-400 hover:text-white transition p-2 bg-gray-800 rounded-full">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Menu Links -->
            <nav class="py-4 space-y-1">
                <NuxtLink to="/" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                    @click="showMobileMenu = false">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                </NuxtLink>
                <NuxtLink to="/shop" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                    @click="showMobileMenu = false">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Shop
                </NuxtLink>
                <NuxtLink to="/categories"
                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                    @click="showMobileMenu = false">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Categories
                </NuxtLink>
                <NuxtLink to="/deals" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                    @click="showMobileMenu = false">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Deals & Offers
                </NuxtLink>

                <div class="border-t border-gray-800 my-4"></div>

                <NuxtLink to="/account"
                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                    @click="showMobileMenu = false">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Account
                </NuxtLink>
                <NuxtLink to="/orders" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                    @click="showMobileMenu = false">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    My Orders
                </NuxtLink>
                <NuxtLink to="/wishlist"
                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                    @click="showMobileMenu = false">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Wishlist
                </NuxtLink>
                <NuxtLink to="/help" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
                    @click="showMobileMenu = false">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Help & Support
                </NuxtLink>
            </nav>
        </div>
    </Transition>

    <!-- Cart Drawer -->
    <Transition enter-active-class="transition-opacity ease-out duration-300" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-opacity ease-in duration-200"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="showCart" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" @click="showCart = false"></div>
    </Transition>

    <Transition enter-active-class="transition ease-out duration-300 transform" enter-from-class="translate-x-full"
        enter-to-class="translate-x-0" leave-active-class="transition ease-in duration-200 transform"
        leave-from-class="translate-x-0" leave-to-class="translate-x-full">
        <div v-if="showCart"
            class="fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-gray-900 border-l border-gray-800 z-50 shadow-2xl flex flex-col">
            <!-- Cart Header -->
            <div class="flex items-center justify-between p-5 border-b border-gray-800 bg-gray-900 text-white">
                <h2 class="text-xl font-bold flex items-center gap-2">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Shopping Cart
                    <span class="text-sm font-normal text-gray-400 ml-1">({{ cartCount }} items)</span>
                </h2>
                <button @click="showCart = false" class="text-gray-400 hover:text-white transition p-2 hover:bg-gray-800 rounded-full">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Cart Items -->
            <div class="flex-1 overflow-y-auto p-5">
                <div v-if="cartItems.length === 0"
                    class="flex flex-col items-center justify-center h-full text-gray-400">
                    <div class="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <p class="text-lg font-medium text-white">Your cart is empty</p>
                    <p class="text-sm text-gray-500 mt-1">Looks like you haven't added anything yet.</p>
                    <button @click="showCart = false; navigateTo('/shop')"
                        class="mt-6 px-8 py-3 bg-primary text-white rounded-xl hover:bg-accent transition font-semibold">
                        Start Shopping
                    </button>
                </div>

                <div v-else class="space-y-4">
                    <div v-for="item in cartItems" :key="item.id" class="flex gap-4 p-3 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition">
                        <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg bg-gray-700">
                        <div class="flex-1">
                            <h4 class="font-medium text-white text-sm line-clamp-2 mb-1">{{ item.name }}</h4>
                            <p class="text-primary font-bold">${{ item.price.toFixed(2) }}</p>
                            <div class="flex items-center gap-3 mt-3">
                                <div class="flex items-center bg-gray-700 rounded-lg">
                                    <button @click="updateCartQuantity(item.id, item.quantity - 1)"
                                        class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 rounded-l-lg transition">
                                        -
                                    </button>
                                    <span class="text-sm font-medium text-white w-6 text-center">{{ item.quantity }}</span>
                                    <button @click="updateCartQuantity(item.id, item.quantity + 1)"
                                        class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 rounded-r-lg transition">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button @click="removeFromCart(item.id)" class="self-start text-gray-500 hover:text-red-400 transition p-1">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Cart Footer -->
            <div v-if="cartItems.length > 0" class="p-5 border-t border-gray-800 bg-gray-900">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-gray-400">Subtotal</span>
                    <span class="text-2xl font-bold text-white">${{ cartTotal.toFixed(2) }}</span>
                </div>
                <p class="text-xs text-center text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
                <NuxtLink to="/checkout" @click="showCart = false">
                    <button
                        class="w-full py-3.5 bg-primary hover:bg-accent text-white font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                        Checkout Now
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </NuxtLink>
                <button @click="showCart = false"
                    class="w-full mt-3 py-2 text-gray-500 hover:text-white transition text-sm font-medium">
                    Continue Shopping
                </button>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'

// Color mode (simple approach)
const isDark = ref(false)
const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}

const { $tenant } = useNuxtApp()

// Reactive state
const showMobileMenu = ref(false)
const showMobileSearch = ref(false)
const showAccountDropdown = ref(false)
const showCart = ref(false)
const showLocationModal = ref(false)
const searchQuery = ref('')
const cartBounce = ref(false)
const mobileSearchInput = ref<HTMLInputElement | null>(null)

// User state (replace with your auth store)
const isLoggedIn = ref(false)
const userName = ref('Guest')
const deliveryLocation = ref('Bangladesh 🇧🇩')

// Cart state (replace with your cart store)
const cartItems = ref<Array<{ id: number, name: string, price: number, quantity: number, image: string }>>([])

// Computed
const cartCount = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))
const cartTotal = computed(() => cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0))

// Methods
const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
    if (showMobileMenu.value) {
        showCart.value = false
        showAccountDropdown.value = false
    }
}

const toggleMobileSearch = async () => {
    showMobileSearch.value = !showMobileSearch.value
    if (showMobileSearch.value) {
        await nextTick()
        mobileSearchInput.value?.focus()
    }
}

const toggleAccountDropdown = () => {
    showAccountDropdown.value = !showAccountDropdown.value
}

const toggleCart = () => {
    showCart.value = !showCart.value
    if (showCart.value) {
        showMobileMenu.value = false
        showAccountDropdown.value = false
    }
}

const handleSearch = () => {
    if (searchQuery.value.trim()) {
        navigateTo(`/search?q=${encodeURIComponent(searchQuery.value.trim())}`)
        showMobileSearch.value = false
        searchQuery.value = ''
    }
}

const handleLogout = () => {
    // TODO: Implement logout logic
    isLoggedIn.value = false
    userName.value = 'Guest'
    showAccountDropdown.value = false
    navigateTo('/')
}

const updateCartQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
        removeFromCart(itemId)
        return
    }
    const item = cartItems.value.find(i => i.id === itemId)
    if (item) {
        item.quantity = newQuantity
    }
}

const removeFromCart = (itemId: number) => {
    cartItems.value = cartItems.value.filter(i => i.id !== itemId)
}

// Close dropdowns when clicking outside
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative') && showAccountDropdown.value) {
        showAccountDropdown.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
        isDark.value = true
        document.documentElement.classList.add('dark')
    }
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Prevent body scroll when overlays are open */
:global(body.overflow-hidden) {
    overflow: hidden;
}
</style>