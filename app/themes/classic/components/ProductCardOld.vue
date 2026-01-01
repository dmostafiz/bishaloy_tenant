<script setup lang="ts">
import NestedComponent from './Nested/NestedComponent.vue';

defineProps<{
  product: {
    name: string
  }
}>()
</script>

<template>
<div>Classic theme Product Card Old Component</div>
<NestedComponent :product="{name:'Hello product'}" />
</template>
