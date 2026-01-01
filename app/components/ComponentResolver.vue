<script setup lang="ts">
const props = defineProps<{
    name: string
}>()

const tenant = useNuxtApp().$tenant
const Comp = computed(() => defineAsyncComponent(() => themeComponents[`/themes/${tenant.theme}/components/${props.name}.vue`]!()))

</script>

<template>
    <div>Componet resolver</div>
    <component :is="Comp" v-if="Comp" v-bind="$attrs" />
</template>
