<script setup lang="ts">
import { useBuilder } from '@/composables/useBuilder'

const builder = useBuilder()
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <BuilderSidebar />
    <div class="flex-1 flex flex-col">
      <BuilderTopbar />
      <BuilderCanvas />
    </div>
    <BuilderProperties />
    <BuilderCodeModal />
  </div>
</template>
