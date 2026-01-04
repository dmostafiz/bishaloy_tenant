<template>
    <div class="p-5 shadow">
        <h1 class="text-red-900 font-bold! text-2xl">File Not Exists!</h1>
        <p class="text-red-600">{{ props.path }}</p>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['path'])
</script>

<style></style>