import { resolveTenant } from '~/utils/resolveTenant'
import { useTenant } from '~/composables/useTenant'

export default defineNuxtPlugin(async () => {
  const tenantState = useTenant()

  // 🔐 If already resolved by SSR → do NOTHING
  if (tenantState.value) {
    return {
      provide: {
        tenant: tenantState.value,
      },
    }
  }

  const { $axios } = useNuxtApp()

  const res = await $axios.get('/tenant')

  // console.log('tenant client plugin response: ', res?.data)

  if (res?.data?.success) {
    tenantState.value = res?.data?.tenant
  }

  return {
    provide: {
      tenant: tenantState.value,
    },
  }
})
