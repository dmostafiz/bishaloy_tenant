<script setup>
import { Plus } from 'lucide-vue-next'
import { useBuilder } from '@/composables/useBuilder'

const { components, saveHistory, genId, selectedId } = useBuilder()

const addText = () => {
    components.value.push({
        id: genId(),
        type: 'text',
        props: { content: 'Edit text', color: '#000', fontSize: '16px' }
    })
    saveHistory(components.value)
}
</script>

<template>
    <aside class="w-64 bg-white border-r p-4 overflow-y-auto">
        <h2 class="font-bold flex items-center gap-2 mb-3">
            <Plus size="18" /> Components
        </h2>

        <button @click="addText" class="w-full bg-blue-50 hover:bg-blue-100 p-2 rounded text-sm">
            Add Text
        </button>
    </aside>
</template>
