<template>
    <main class="theme-layout theme-default">
        Modern Theme Layout
        <Header />
        <slot />
        <Footer />
    </main>
</template>

<script lang="ts" setup>
import Footer from './Inc/Footer.vue';
import Header from './Inc/Header.vue';


</script>

<style></style>