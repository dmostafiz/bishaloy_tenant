<script setup>
import { useBuilder } from '@/composables/useBuilder'
const { showCode } = useBuilder()
</script>

<template>
    <div v-if="showCode" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click="showCode = false">
        <div class="bg-white p-6 rounded w-[800px]" @click.stop>
            <h3 class="font-bold mb-2">Export HTML</h3>
            <pre class="bg-gray-900 text-green-400 p-4 text-xs rounded">
Ready for export
      </pre>
        </div>
    </div>
</template>
