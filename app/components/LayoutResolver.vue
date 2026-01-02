<template>
    <component :is="Comp">
        <slot />
    </component>
</template>

<script lang="ts" setup>
const tenant = useNuxtApp().$tenant

const Comp = computed(() => defineAsyncComponent(() => themeLayouts[`/themes/${tenant.theme}/Layout.vue`]!()))

</script>

<style></style>