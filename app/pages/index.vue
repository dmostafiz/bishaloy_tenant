<template>
    <div class="p-10 text-2xl">
        Tenant:
        <span class="font-bold">
            {{ tenant || 'MAIN SITE' }}
        </span>
    </div>

    <ComponentResolver name="ProductCard" :product="{name: 'example product 123'}" />

    <ComponentResolver name="Nested/NestedComponent" :product="{name: 'example product 123'}" />


    <!-- <ThemeProductCard :product="{ name: 'This is a product' }" /> -->
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