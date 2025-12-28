<template>
  <NuxtLayout :name="isTenant ? 'tenant' : 'main'">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// const tenant = useNuxtApp().$tenant
const data = useNuxtApp().$tenant

const isTenant = computed(() => {
  // console.log('app tenant data:', data)
  if (['bishaloy-tenant'].includes(data) || data == null || !data) {
    return false
  } else {
    return true
  }
})

useSeoMeta({
  title: `${data.name} - ${data.title}`,
  ogTitle: data.title,
  description: data.description,
  ogDescription: data.description,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
