<script setup lang="ts">
const props = defineProps<{
    name: string
}>()
const themeStore = useThemeStore()


const Comp = defineAsyncComponent(() => themeComponents[`/themes/${themeStore.currentTheme}/components/${props.name}.vue`]!())

</script>

<template>
    <div>Componet resolver</div>
    <component :is="Comp" v-if="Comp" v-bind="$attrs" />
</template>
