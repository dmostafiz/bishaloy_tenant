<template>
  <div class="flex gap-5">
    <button @click="() => navigateTo('http://storex.h.localhost:3000', { external: true })">StoreX</button>
    <button @click="() => navigateTo('http://storey.h.localhost:3000', { external: true })">StoreY</button>
    <button @click="() => navigateTo('http://storez.h.localhost:3000', { external: true })">StoreZ</button>
  </div>

  {{ themeStore.currentTheme }}

  <LayoutResolver>
    <div class="flex items-center gap-5">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>

    </div>
    <NuxtPage />
  </LayoutResolver>
</template>


<script setup lang="ts">
const themeStore = useThemeStore()


</script>
