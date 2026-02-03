<template>
  <footer class="bg-theme-elevated text-theme py-12 mt-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">{{ $tenant?.name || 'Store' }}</h3>
          <p class="text-theme-muted text-sm">Your trusted online shopping destination for quality products and
            excellent service.</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm text-theme-muted">
            <li><a href="/about" class="hover:text-primary transition">About Us</a></li>
            <li><a href="/contact" class="hover:text-primary transition">Contact</a></li>
            <li><a href="/help" class="hover:text-primary transition">Help Center</a></li>
            <li><a href="/careers" class="hover:text-primary transition">Careers</a></li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="font-semibold mb-4">Customer Service</h4>
          <ul class="space-y-2 text-sm text-theme-muted">
            <li><a href="/shipping" class="hover:text-primary transition">Shipping Info</a></li>
            <li><a href="/returns" class="hover:text-primary transition">Returns</a></li>
            <li><a href="/track-order" class="hover:text-primary transition">Track Order</a></li>
            <li><a href="/gift-cards" class="hover:text-primary transition">Gift Cards</a></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="font-semibold mb-4">Legal</h4>
          <ul class="space-y-2 text-sm text-theme-muted">
            <li><a href="/privacy" class="hover:text-primary transition">Privacy Policy</a></li>
            <li><a href="/terms" class="hover:text-primary transition">Terms of Service</a></li>
            <li><a href="/cookies" class="hover:text-primary transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-theme mt-8 pt-8 text-center text-sm text-theme-muted">
        <p>&copy; {{ new Date().getFullYear() }} {{ $tenant?.name || 'Store' }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { $tenant } = useNuxtApp()
</script>

<style></style>