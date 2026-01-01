<script setup lang="ts">
const props = defineProps<{
    name: string
}>()


const Comp = defineAsyncComponent(() => themeComponentsGlobal[`/themes/${'default'}/components/${props.name}.vue`]!())

</script>

<template>
    <div>Componet resolver</div>
    <component :is="Comp" v-if="Comp" v-bind="$attrs" />
</template>
