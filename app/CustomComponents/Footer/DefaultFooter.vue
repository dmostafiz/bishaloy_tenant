<template>
  <footer class="bg-gray-950 text-gray-300 font-sans border-t border-gray-900">
    <!-- Newsletter Section -->
    <div class="relative overflow-hidden border-b border-gray-900">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent"></div>
        <div class="container mx-auto px-4 py-12 relative z-10">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div class="flex items-center gap-5">
                    <div class="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                        <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold text-white mb-1">Join our Newsletter</h3>
                        <p class="text-gray-400">Unlock particular offers and new arrivals first.</p>
                    </div>
                </div>
                
                <form @submit.prevent="subscribeNewsletter" class="flex w-full lg:w-auto gap-2">
                    <input v-model="email" type="email" placeholder="Enter your email address"
                        class="w-full lg:w-80 px-4 py-3.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                        required>
                    <button type="submit"
                        class="px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-500/40 whitespace-nowrap">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <!-- Brand & Description -->
        <div class="lg:col-span-1 space-y-6">
          <NuxtLink to="/" class="block">
              <h2 class="text-3xl font-extrabold text-white tracking-tight">{{ $tenant.name }}</h2>
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed max-w-sm">
            Elevating your shopping experience with curated products and exceptional service. We believe in quality, style, and customer satisfaction above all else.
          </p>
          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
             <a href="#" class="w-10 h-10 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div class="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <!-- Customer Service -->
            <div>
              <h4 class="text-white font-bold mb-6">Customer Service</h4>
              <ul class="space-y-4 text-sm">
                <li><a href="/help" class="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="/track-order" class="hover:text-primary transition-colors">Track Your Order</a></li>
                <li><a href="/shipping" class="hover:text-primary transition-colors">Shipping & Delivery</a></li>
                <li><a href="/returns" class="hover:text-primary transition-colors">Returns & Exchanges</a></li>
                <li><a href="/contact" class="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <!-- Shop -->
            <div>
              <h4 class="text-white font-bold mb-6">Shop</h4>
              <ul class="space-y-4 text-sm">
                <li><a href="/shop" class="hover:text-primary transition-colors">All Products</a></li>
                <li><a href="/new-arrivals" class="hover:text-primary transition-colors">New Arrivals</a></li>
                <li><a href="/deals" class="hover:text-primary transition-colors">Deals & Offers</a></li>
                <li><a href="/wishlist" class="hover:text-primary transition-colors">My Wishlist</a></li>
                <li><a href="/gift-cards" class="hover:text-primary transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            <!-- Company -->
             <div>
              <h4 class="text-white font-bold mb-6">Company</h4>
              <ul class="space-y-4 text-sm">
                <li><a href="/about" class="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="/careers" class="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="/blog" class="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/privacy" class="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" class="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
        </div>
      </div>

      <!-- Trust Badges & Payment Methods -->
      <div class="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <!-- Trust Badges -->
          <div class="flex flex-wrap justify-center gap-6">
             <div class="flex items-center gap-2 text-gray-400">
                 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                 <span class="text-xs font-medium uppercase tracking-wide">Secure Payment</span>
             </div>
             <div class="w-px h-4 bg-gray-800 hidden sm:block"></div>
             <div class="flex items-center gap-2 text-gray-400">
                 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                 <span class="text-xs font-medium uppercase tracking-wide">Premium Quality</span>
             </div>
              <div class="w-px h-4 bg-gray-800 hidden sm:block"></div>
             <div class="flex items-center gap-2 text-gray-400">
                 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                 <span class="text-xs font-medium uppercase tracking-wide">Easy Returns</span>
             </div>
          </div>

        <!-- Payment Methods -->
        <div class="flex items-center gap-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" class="h-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" class="h-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" class="h-4">
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-black py-6 border-t border-gray-900">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <p>© {{ new Date().getFullYear() }} {{ $tenant.name }}. All rights reserved.</p>
        <div class="flex items-center gap-6">
            <a href="#" class="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" class="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" class="hover:text-gray-400 transition-colors">Sitemap</a>
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