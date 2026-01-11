<template>
    <main class="theme-layout theme-default">
        <CustomComponentResolver v-if="$tenant?.components?.header" :name="$tenant?.components?.header" />
        <div class="bg-gray-900 text-white  top-0">
            <CustomComponentResolver v-if="$tenant?.components?.navBar" :name="$tenant?.components?.navBar" />
        </div>
        <slot />
        <CustomComponentResolver name="Footer/DefaultFooter" />
    </main>
</template>

<script lang="ts" setup>
const themeStore = useThemeStore()
const { $tenant } = useNuxtApp()
</script>

<style></style>