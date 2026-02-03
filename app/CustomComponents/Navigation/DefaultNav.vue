<template>
    <!-- Category Nav -->
    <div
        class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-2 overflow-x-auto text-theme">
        <div class="container mx-auto px-4 flex items-center gap-4 lg:gap-6 text-xs sm:text-sm">
            <button onclick="toggleCategories()"
                class="lg:hidden whitespace-nowrap hover:text-primary transition font-semibold flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
                Categories
            </button>
            <button onclick="filterCategory('all')"
                class="whitespace-nowrap hover:text-primary transition font-semibold hidden lg:inline">All</button>
            <button onclick="filterCategory('electronics')"
                class="whitespace-nowrap hover:text-primary transition">Electronics</button>
            <button onclick="filterCategory('fashion')"
                class="whitespace-nowrap hover:text-primary transition">Fashion</button>
            <button onclick="filterCategory('home')"
                class="whitespace-nowrap hover:text-primary transition hidden sm:inline">Home & Kitchen</button>
            <button onclick="filterCategory('books')"
                class="whitespace-nowrap hover:text-primary transition hidden md:inline">Books</button>
            <button onclick="filterCategory('sports')"
                class="whitespace-nowrap hover:text-primary transition hidden md:inline">Sports</button>
            <button onclick="filterCategory('all')"
                class="whitespace-nowrap text-primary transition hidden lg:inline">View All</button>
            <span class="text-xs text-gray-400 hidden sm:inline ml-auto">Today's Deals</span>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>