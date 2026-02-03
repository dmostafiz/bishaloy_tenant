<template>
  <footer class="bg-gray-900 dark:bg-gray-950 text-gray-300 transition-colors duration-300">
    <!-- Newsletter Section -->
    <div class="bg-gradient-to-r from-orange-500 to-orange-600">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <div class="p-3 bg-white/20 rounded-full">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="text-white">
              <h3 class="text-xl font-bold">Subscribe to our Newsletter</h3>
              <p class="text-white/80 text-sm">Get exclusive offers, updates & new arrivals right to your inbox</p>
            </div>
          </div>
          <form @submit.prevent="subscribeNewsletter" class="flex w-full lg:w-auto">
            <input v-model="email" type="email" placeholder="Enter your email address"
              class="w-full lg:w-80 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required>
            <button type="submit"
              class="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-r-lg transition-all duration-300 hover:shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand & Description -->
        <div class="lg:col-span-1">
          <h2 class="text-2xl font-bold text-white mb-4">{{ $tenant.name }}</h2>
          <p class="text-gray-400 text-sm mb-6 leading-relaxed">
            Your trusted destination for quality products at amazing prices. We're committed to providing exceptional
            shopping experiences.
          </p>
          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <a href="#" class="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition-all duration-300 group">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" class="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition-all duration-300 group">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" class="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition-all duration-300 group">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" class="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition-all duration-300 group">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-5 relative">
            Customer Service
            <span class="absolute -bottom-2 left-0 w-10 h-0.5 bg-orange-500"></span>
          </h4>
          <ul class="space-y-3">
            <li>
              <a href="/help"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Help Center</span>
              </a>
            </li>
            <li>
              <a href="/track-order"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Track Your Order</span>
              </a>
            </li>
            <li>
              <a href="/shipping"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Shipping Info</span>
              </a>
            </li>
            <li>
              <a href="/returns"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Returns & Exchanges</span>
              </a>
            </li>
            <li>
              <a href="/contact"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-5 relative">
            Quick Links
            <span class="absolute -bottom-2 left-0 w-10 h-0.5 bg-orange-500"></span>
          </h4>
          <ul class="space-y-3">
            <li>
              <a href="/shop"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Shop All</span>
              </a>
            </li>
            <li>
              <a href="/new-arrivals"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>New Arrivals</span>
              </a>
            </li>
            <li>
              <a href="/deals"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Deals & Offers</span>
              </a>
            </li>
            <li>
              <a href="/wishlist"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>My Wishlist</span>
              </a>
            </li>
            <li>
              <a href="/gift-cards"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Gift Cards</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- About & Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-5 relative">
            About Us
            <span class="absolute -bottom-2 left-0 w-10 h-0.5 bg-orange-500"></span>
          </h4>
          <ul class="space-y-3">
            <li>
              <a href="/about"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Our Story</span>
              </a>
            </li>
            <li>
              <a href="/careers"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a href="/blog"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="/privacy"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="/terms"
                class="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                <svg
                  class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span>Terms of Service</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Trust Badges & Payment Methods -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <!-- Trust Badges -->
          <div class="flex flex-wrap items-center justify-center gap-6">
            <div class="flex items-center gap-2 text-gray-400">
              <div class="p-2 bg-gray-800 rounded-lg">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span class="text-sm font-medium">Secure Payments</span>
            </div>
            <div class="flex items-center gap-2 text-gray-400">
              <div class="p-2 bg-gray-800 rounded-lg">
                <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <span class="text-sm font-medium">Fast Delivery</span>
            </div>
            <div class="flex items-center gap-2 text-gray-400">
              <div class="p-2 bg-gray-800 rounded-lg">
                <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span class="text-sm font-medium">Easy Returns</span>
            </div>
            <div class="flex items-center gap-2 text-gray-400">
              <div class="p-2 bg-gray-800 rounded-lg">
                <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span class="text-sm font-medium">24/7 Support</span>
            </div>
          </div>

          <!-- Payment Methods -->
          <div class="flex flex-wrap items-center justify-center gap-3">
            <span class="text-gray-500 text-sm mr-2">We Accept:</span>
            <div class="flex items-center gap-2">
              <!-- Visa -->
              <div class="px-3 py-2 bg-gray-800 rounded-lg">
                <svg class="h-6 w-10" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#1A1F71" />
                  <path d="M19.5 21H17L14 11H16.5L18.25 18.5L20 11H22.5L19.5 21Z" fill="white" />
                  <path d="M23 11H25.5V21H23V11Z" fill="white" />
                  <path
                    d="M30.5 11.5C30 11.2 29.3 11 28.5 11C26.5 11 25 12.3 25 14C25 15.4 26.2 16.2 27.2 16.7C28.2 17.2 28.5 17.6 28.5 18C28.5 18.6 27.8 19 27 19C26.2 19 25.5 18.8 25 18.5L24.5 20.5C25.2 20.8 26 21 27 21C29.2 21 30.5 19.7 30.5 18C30.5 16.3 29 15.5 28 15C27 14.5 26.8 14.2 26.8 13.8C26.8 13.3 27.3 13 28 13C28.7 13 29.3 13.2 29.7 13.4L30.5 11.5Z"
                    fill="white" />
                  <path d="M35 11H33L30 21H32.5L33 19.5H36L36.3 21H38.5L35 11ZM33.5 17.5L34.5 13.5L35.5 17.5H33.5Z"
                    fill="white" />
                </svg>
              </div>
              <!-- Mastercard -->
              <div class="px-3 py-2 bg-gray-800 rounded-lg">
                <svg class="h-6 w-10" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#000" />
                  <circle cx="18" cy="16" r="8" fill="#EB001B" />
                  <circle cx="30" cy="16" r="8" fill="#F79E1B" />
                  <path d="M24 10.34A8 8 0 0024 21.66 8 8 0 0024 10.34Z" fill="#FF5F00" />
                </svg>
              </div>
              <!-- PayPal -->
              <div class="px-3 py-2 bg-gray-800 rounded-lg">
                <svg class="h-6 w-10" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#003087" />
                  <path d="M19 21L20 14H22C24 14 25 15 24.8 17C24.5 19.5 23 21 20.5 21H19Z" fill="#009CDE" />
                  <path d="M25 11L26 8H30C32 8 33 9 32.8 11C32.5 13.5 31 15 28.5 15H27L26 21H23.5L25 11Z"
                    fill="white" />
                </svg>
              </div>
              <!-- Apple Pay -->
              <div class="px-3 py-2 bg-gray-800 rounded-lg">
                <svg class="h-6 w-10" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#000" />
                  <path d="M18 10C17.2 10.8 16 10.6 16 10.6S15.8 9.4 16.6 8.6C17.4 7.8 18.5 8 18.5 8S18.7 9.2 18 10Z"
                    fill="white" />
                  <path
                    d="M18.5 11C17.5 11 16.8 11.8 16 11.8C15.2 11.8 14.2 11 13.2 11C11.5 11 10 12.5 10 15C10 18.5 12.5 23 14.2 23C15 23 15.8 22.4 16.8 22.4C17.8 22.4 18.5 23 19.5 23C21 23 22.5 19 23 17.5C21 16.5 21 13 23 12C22.2 11.2 21 11 20 11C19 11 18.5 11 18.5 11Z"
                    fill="white" />
                  <text x="25" y="18" fill="white" font-size="10" font-family="Arial" font-weight="bold">Pay</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-gray-950">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-500 text-sm text-center md:text-left">
            © {{ new Date().getFullYear() }} {{ $tenant.name }}. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <a href="/privacy"
              class="text-gray-500 hover:text-orange-400 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" class="text-gray-500 hover:text-orange-400 text-sm transition-colors duration-300">Terms of
              Service</a>
            <a href="/cookies" class="text-gray-500 hover:text-orange-400 text-sm transition-colors duration-300">Cookie
              Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const { $tenant } = useNuxtApp()

const email = ref('')

const subscribeNewsletter = async () => {
  // TODO: Implement newsletter subscription logic
  console.log('Subscribing email:', email.value)
  email.value = ''
  // You can add toast notification here
}
</script>

<style scoped>
/* Smooth hover animation for links */
footer a {
  position: relative;
}

/* Shimmer effect for newsletter section */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

/* Subtle gradient animation on hover for social icons */
.group:hover .group-hover\:text-white {
  transition: all 0.3s ease;
}
</style>