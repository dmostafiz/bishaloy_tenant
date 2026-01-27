<script setup lang="ts">
import { defineAsyncComponent, shallowRef } from 'vue'
import FileNotExists from '@/components/FileNotExists.vue'
import type { Component } from 'vue'

const props = defineProps<{
  name: string
}>()

const themeLayouts = import.meta.glob<Component>('/CustomLayouts/**/*.vue')
const path = `/CustomLayouts/${props.name}.vue`

const Comp = shallowRef<Component | null>(null)

if (themeLayouts[path]) {
  Comp.value = defineAsyncComponent({
    loader: themeLayouts[path],
    delay: 0,        // IMPORTANT for SSR
    timeout: 5000,
    onError(error, retry, fail, attempts) {
      if (attempts <= 2) retry()
      else fail()
    }
  })
}
</script>

<template>
  <Suspense>
    <template #default>
      <component v-if="Comp" :is="Comp">
        <slot />
      </component>
    </template>

    <template #fallback>
      <!-- SSR & Client SAME fallback -->
      <div />
    </template>
  </Suspense>

  <FileNotExists v-if="!Comp" :path="path" />
</template>
