<template>
    <div class="p-10 text-2xl">
        Tenant:
        <span class="font-bold">
            {{ tenant || 'MAIN SITE' }}
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


const seo = computed(() => getTenantSeo(tenant.value))

useSeoMeta(() => ({
  title: 'Tenant',
//   description: seo.value.description,
//   ogTitle: seo.value.ogTitle,
//   ogDescription: seo.value.ogDescription,
  ogType: 'website',
}))
</script>