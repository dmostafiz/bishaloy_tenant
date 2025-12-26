<template>
  <NuxtLayout :name="isTenant ? 'tenant' : 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// const tenant = useNuxtApp().$tenant

const isTenant = computed(() => {

  const data = useNuxtApp().$tenant
  if (['bishaloy-tenant'].includes(data) || data == null || !data) {
    return false
  } else {
    return true
  }
})
</script>
