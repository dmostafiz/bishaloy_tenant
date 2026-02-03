import { useTenant } from '~/composables/useTenant'
import type { Tenant, LayoutComponents } from '~~/types/tenant'

export default defineNuxtPlugin(async () => {
  const tenantState = useTenant()

  console.log('tenantState.value 1: ', tenantState.value)


  // 🔐 If already resolved by SSR → do NOTHING
  if (tenantState.value) {
    const layoutComponents = tenantState.value?.layoutComponents
    return {
      provide: {
        tenant: { ...tenantState.value, layoutComponents: layoutComponents as LayoutComponents } as Tenant,
      },
    }
  }

  const { $axios } = useNuxtApp()

  const res = await $axios.get('/tenant')

  console.log('tenant client plugin response: ', res?.data)

  if (res?.data?.success) {
    tenantState.value = res?.data?.tenant as Tenant
  }

  const layoutComponents = tenantState.value?.layoutComponents

  console.log('tenantState.value 2: ', tenantState.value)
  return {
    provide: {
      tenant: { ...tenantState.value, layoutComponents: layoutComponents as LayoutComponents } as Tenant,
    },
  }
})
