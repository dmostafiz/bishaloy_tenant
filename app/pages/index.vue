<template>
    <!-- {{ $tenant?.layoutComponents?.carousel }} -->

    <!-- Dynamic Sections Loop -->
    <div v-for="(section, index) in dynamicSections" :key="section.id">
        <!-- Render Custom Component if defined -->
        <CustomComponentResolver v-if="section.component" :name="section.component" v-bind="section.props || {}" />
        
        <!-- Section Separator -->
        <div v-if="index < dynamicSections.length - 1" class="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
    </div>

    <!-- Legacy / Fallback Content (if needed, or can be removed if fully dynamic) -->
    <!-- Keeping this logic if it handles other types not in local-db yet -->

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

// Fetch dynamic sections from API
// Fetch dynamic sections from API
const { $axios } = useNuxtApp()

const { data: apiResult } = await useAsyncData('homepage-sections', async () => {
    try {
        const response = await $axios.get('/tenant/home-page')
        return response.data
    } catch (error) {
        console.error('Failed to fetch homepage sections:', error)
        return { sections: [] }
    }
})

const dynamicSections = computed(() => {
    return apiResult.value?.sections?.sort((a, b) => a.order - b.order) || []
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
