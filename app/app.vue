<template>
  <NuxtLayout :name="'tenant'">

    <NuxtPage />

  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'

// Theme initialization is handled in the Header component

// const tenant = useNuxtApp().$tenant
const data = useNuxtApp()?.$tenant

// Initialize color theme system
const { initColorTheme } = useColorTheme()

onMounted(() => {
  // Initialize with tenant's theme key if available (from database)
  // For now, uses the default from the JSON config
  const tenantThemeKey = data?.colorTheme // This would come from database
  initColorTheme(tenantThemeKey)
})

const isTenant = computed(() => {
  // console.log('app tenant data:', data)
  if (['bishaloy-tenant'].includes(data) || data == null || !data) {
    return false
  } else {
    return true
  }
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: data.favicon,
    },
  ],
})

useHead(() => ({
  link: data.faviocon
    ? [
      {
        rel: 'icon',
        type: 'image/png',
        href: data.faviocon,
      },
    ]
    : [],
}))

useSeoMeta({
  title: `${data.name} - ${data.title}`,
  ogTitle: data.title,
  description: data.description,
  ogDescription: data.description,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
