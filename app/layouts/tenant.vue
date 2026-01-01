<template>
  <div class="flex gap-5">
    <button @click="() => navigateTo('https://storex.bishaloy.com', { external: true })">StoreX</button>
    <button @click="() => navigateTo('https://storey.bishaloy.com', { external: true })">StoreY</button>
    <button @click="() => navigateTo('https://storez.bishaloy.com', { external: true })">StoreZ</button>
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
