<script setup lang="ts">
import {
    defineAsyncComponent,
    computed
} from 'vue'
import FileNotExists from '@/components/FileNotExists.vue'
import type { Component } from 'vue'

const tenant = useNuxtApp().$tenant

const themeLayouts = import.meta.glob<Component>('~/themes/*/Layout.vue')

const path = `/themes/${tenant.theme}/Layout.vue`

const Comp = computed(() => {

    // ❌ Component file does not exist
    if (!themeLayouts[path]) {
        return null
    }

    // ✅ Component exists
    return defineAsyncComponent({
        loader: themeLayouts[path],
        delay: 200,
        timeout: 5000,
        onError(error, retry, fail, attempts) {
            if (attempts <= 2) {
                retry()
            } else {
                console.error('Failed to load:', path, error)
                fail()
            }
        }
    })
})
</script>

<template>
    <component v-if="Comp" :is="Comp">
        <slot />
    </component>

    <FileNotExists v-else :path="path" />

</template>
