<template>
  <NuxtLayout :name="isTenant ? 'tenant' : 'main'">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// const tenant = useNuxtApp().$tenant

const isTenant = computed(() => {

  const data = useNuxtApp().$tenant

  // console.log('app tenant data:', data)

  if (['bishaloy-tenant'].includes(data) || data == null || !data) {
    return false
  } else {
    return true
  }
})
</script>
