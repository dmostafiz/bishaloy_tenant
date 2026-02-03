<template>
    <main class="theme-layout theme-default">
        <CustomComponentResolver v-show="$tenant?.layoutComponents?.header" :name="$tenant?.layoutComponents?.header" />
        <div class="bg-gray-900 text-white  top-0">
            <CustomComponentResolver v-show="$tenant?.layoutComponents?.navBar"
                :name="$tenant?.layoutComponents?.navBar" />
        </div>
        <div>
            <slot />
        </div>
        <CustomComponentResolver name="Footer/DefaultFooter" />
    </main>

</template>

<script lang="ts" setup>
const themeStore = useThemeStore()
const { $tenant } = useNuxtApp()

console.log('$tenant: ', $tenant)
</script>

<style></style>