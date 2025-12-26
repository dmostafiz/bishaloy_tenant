<template>
    <div class="p-10 text-2xl">
        Tenant:
        <span class="font-bold">
            {{ tenant }} {{ tenant || 'MAIN SITE' }}
        </span>
    </div>
</template>

<script setup>
// const tenant = useNuxtApp().$tenant

const tenant = computed(() => {
    
    const data = useNuxtApp().$tenant

    if (['bishaloy-tenant'].includes(data)) {
        return null
    } else {
        return data
    }
})
</script>