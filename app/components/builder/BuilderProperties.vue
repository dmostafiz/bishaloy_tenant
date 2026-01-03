<script setup>
import { useBuilder } from '@/composables/useBuilder'

const { components, selectedId, saveHistory } = useBuilder()

const selected = computed(() =>
  components.value.find(c => c.id === selectedId.value)
)
</script>

<template>
  <aside v-if="selected" class="w-80 bg-white border-l p-4">
    <h3 class="font-bold mb-3">Properties</h3>

    <div v-if="selected.type === 'text'">
      <label class="text-xs">Content</label>
      <textarea
        v-model="selected.props.content"
        @input="saveHistory(components)"
        class="w-full border rounded p-2 text-sm"
      />
    </div>
  </aside>
</template>
