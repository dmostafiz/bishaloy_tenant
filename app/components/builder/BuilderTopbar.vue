<script setup>
import { Monitor, Tablet, Smartphone, Undo, Redo, Eye, Code } from 'lucide-vue-next'
import { useBuilder } from '@/composables/useBuilder'

const {
  viewport,
  mode,
  undo,
  redo,
  showCode
} = useBuilder()
</script>

<template>
  <div class="bg-white border-b p-3 flex items-center gap-2">
    <button @click="undo"><Undo /></button>
    <button @click="redo"><Redo /></button>

    <div class="w-px h-6 bg-gray-300 mx-2" />

    <button @click="viewport = 'desktop'"><Monitor /></button>
    <button @click="viewport = 'tablet'"><Tablet /></button>
    <button @click="viewport = 'mobile'"><Smartphone /></button>

    <div class="w-px h-6 bg-gray-300 mx-2" />

    <button @click="mode = mode === 'edit' ? 'preview' : 'edit'">
      <Eye /> {{ mode }}
    </button>

    <button @click="showCode = true"><Code /> Code</button>
  </div>
</template>
