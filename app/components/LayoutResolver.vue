<template>
    Layout resolver
    <component :is="layoutComponent">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { capitalize } from 'vue';

const theme = 'default'
const layoutComponent = computed(() => {
    return `Theme${capitalize(theme)}Layout`
})
</script>

<style></style>