<script setup lang="ts">
import { defineAsyncComponent, computed } from "vue";
import FileNotExists from "@/components/FileNotExists.vue";
import type { Component } from "vue";

const props = defineProps<{
    name: string;
}>();

const themeComponents = import.meta.glob<Component>("/CustomComponents/**/*.vue");
const path = `/CustomComponents/${props.name}.vue`;

console.log('themeComponents: ', themeComponents)
console.log('path: ', path)


const Comp = computed(() => {
    // ❌ Component file does not exist
    if (!themeComponents[path]) {
        return null;
    }

    // ✅ Component exists
    return defineAsyncComponent({
        loader: themeComponents[path],
        delay: 200,
        timeout: 5000,
        onError(error, retry, fail, attempts) {
            if (attempts <= 2) {
                retry();
            } else {
                console.error("Failed to load:", path, error);
                fail();
            }
        },
    });
});
</script>

<template>
    <component v-if="Comp" :is="Comp" v-bind="$attrs">
        <slot />
    </component>

    <FileNotExists v-else :path="path" />
</template>
