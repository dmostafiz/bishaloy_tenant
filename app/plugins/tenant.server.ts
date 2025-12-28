import { useTenant } from '~/composables/useTenant'

export default defineNuxtPlugin(async () => {

  const tenantState = useTenant()

  if (!tenantState.value) {

    const { $axios } = useNuxtApp()

    const res = await $axios.get('/tenant')

    // console.log('tenant server plugin response: ', res?.data)

    if (res?.data?.success) {
      tenantState.value = res?.data?.tenant
    }
  }

  return {
    provide: {
      tenant: tenantState.value,
    },
  }
})
