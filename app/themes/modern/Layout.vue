<template>
    <main class="theme-layout theme-default">
        Modern Theme Layout - {{ themeStore.currentTheme }}
        <Header />
        <slot />
        <Footer />
    </main>
</template>

<script lang="ts" setup>
import Footer from './Inc/Footer.vue';
import Header from './Inc/Header.vue';

const themeStore = useThemeStore()

</script>

<style></style>