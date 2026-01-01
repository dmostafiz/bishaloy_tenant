<template>
  <div class="flex gap-5">
    <button @click="themeStore.currentTheme = 'default'">Default</button>
    <button @click="themeStore.currentTheme = 'classic'">Classic</button>
    <button @click="themeStore.currentTheme = 'modern'">Modern</button>
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
