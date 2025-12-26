<template>
    <div class="p-10 text-2xl">
        Tenant:
        <span class="font-bold">
            {{ tenant }} {{ tenant || 'MAIN SITE' }}
        </span>
    </div>
</template>

<script setup>
const tenant = useNuxtApp().$tenant
</script>