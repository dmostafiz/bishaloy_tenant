<template>
    <component :is="Comp">
        <slot />
    </component>
    Layout resolver
</template>

<script lang="ts" setup>
const themeStore = useThemeStore()
const Comp = defineAsyncComponent(() => themeLayouts[`/themes/${themeStore.currentTheme}/Layout.vue`]!())

</script>

<style></style>