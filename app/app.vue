<template>
  <NuxtLayout :name="isTenant ? 'tenant' : 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// const tenant = useNuxtApp().$tenant

const isTenant = computed(() => {

  const data = useNuxtApp().$tenant

  console.log('app tenant data:', data.value)


  if (['bishaloy-tenant'].includes(data.value) || data.value == null || !data.value) {
    return false
  } else {
    return true
  }
})
</script>
