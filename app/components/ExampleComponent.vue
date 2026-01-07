<template>
  <div>
    Example Component
  </div>
</template>

<script lang="ts" setup>


const { $axios } = useNuxtApp()

const { data } = useQuery({
  queryKey: ['checking'],
  queryFn: async () => {
    const res = await $axios.post('/tenant/checking')
    console.log('res: ', res?.data)
    return res?.data
  }
})


</script>

<style></style>