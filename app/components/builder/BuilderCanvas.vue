<script setup>
import { useBuilder } from '@/composables/useBuilder'
import BuilderRenderer from './BuilderRenderer.vue'

const { components, viewportWidth, selectedId, mode } = useBuilder()
</script>

<template>
  <div class="flex-1 p-8 bg-gray-50 overflow-y-auto">
    <div class="mx-auto transition-all" :style="{ width: viewportWidth }">
      <div
        class="bg-white min-h-screen shadow"
        @click="mode === 'edit' && (selectedId = null)"
      >
        <div v-if="!components.length" class="text-center py-20 text-gray-400">
          Start building 🚀
        </div>

        <BuilderRenderer
          v-for="c in components"
          :key="c.id"
          :component="c"
        />
      </div>
    </div>
  </div>
</template>
