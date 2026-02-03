<template>
  <div id="categoryDropdown" class="h-full">
    <div class=" bg-primary text-white px-4 py-3 font-bold flex items-center justify-between">
      <span class="flex items-center gap-2">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        All Categories
      </span>
      <button onclick="toggleCategoryDropdown()" class="lg:hidden">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="max-h-122.5 overflow-y-auto bg-theme-card">
      <button onclick="filterCategory('electronics'); toggleCategoryDropdown();"
        class="w-full px-4 py-3 text-left hover:bg-primary-muted transition flex items-center gap-3 border-b border-theme-light">
        <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
        <div>
          <div class="font-semibold text-theme">Electronics</div>
          <div class="text-xs text-theme-muted">Phones, Laptops & More</div>
        </div>
      </button>

      <button onclick="filterCategory('fashion'); toggleCategoryDropdown();"
        class="w-full px-4 py-3 text-left hover:bg-primary-muted transition flex items-center gap-3 border-b border-theme-light">
        <svg class="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
          </path>
        </svg>
        <div>
          <div class="font-semibold text-theme">Fashion</div>
          <div class="text-xs text-theme-muted">Clothing & Accessories</div>
        </div>
      </button>

      <button onclick="filterCategory('home'); toggleCategoryDropdown();"
        class="w-full px-4 py-3 text-left hover:bg-primary-muted transition flex items-center gap-3 border-b border-theme-light">
        <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
          </path>
        </svg>
        <div>
          <div class="font-semibold text-theme">Home & Kitchen</div>
          <div class="text-xs text-theme-muted">Furniture & Appliances</div>
        </div>
      </button>

      <button onclick="filterCategory('sports'); toggleCategoryDropdown();"
        class="w-full px-4 py-3 text-left hover:bg-primary-muted transition flex items-center gap-3 border-b border-theme-light">
        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <div>
          <div class="font-semibold text-theme">Sports & Fitness</div>
          <div class="text-xs text-theme-muted">Equipment & Gear</div>
        </div>
      </button>

      <button onclick="filterCategory('books'); toggleCategoryDropdown();"
        class="w-full px-4 py-3 text-left hover:bg-primary-muted transition flex items-center gap-3 border-b border-theme-light">
        <svg class="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
          </path>
        </svg>
        <div>
          <div class="font-semibold text-theme">Books & Media</div>
          <div class="text-xs text-theme-muted">Books, Music & More</div>
        </div>
      </button>

      <button onclick="filterCategory('beauty'); toggleCategoryDropdown();"
        class="w-full px-4 py-3 text-left hover:bg-primary-muted transition flex items-center gap-3 border-b border-theme-light">
        <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
          </path>
        </svg>
        <div>
          <div class="font-semibold text-theme">Beauty & Health</div>
          <div class="text-xs text-theme-muted">Cosmetics & Wellness</div>
        </div>
      </button>

      <button onclick="filterCategory('toys'); toggleCategoryDropdown();"
        class="w-full px-4 py-3 text-left hover:bg-primary-muted transition flex items-center gap-3 border-b border-theme-light">
        <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <div class="font-semibold text-theme">Toys & Games</div>
          <div class="text-xs text-theme-muted">Kids & Family Fun</div>
        </div>
      </button>

      <button onclick="filterCategory('automotive'); toggleCategoryDropdown();"
        class="w-full px-4 py-3 text-left hover:bg-primary-muted transition flex items-center gap-3">
        <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
        <div>
          <div class="font-semibold text-theme">Automotive</div>
          <div class="text-xs text-theme-muted">Car Parts & Accessories</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>