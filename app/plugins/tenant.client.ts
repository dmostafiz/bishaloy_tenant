import { resolveTenant } from '~/utils/resolveTenant'
import { useTenant } from '~/composables/useTenant'

export default defineNuxtPlugin(async () => {
  const tenantState = useTenant()

  // 🔐 If already resolved by SSR → do NOTHING
  if (tenantState.value) {
    return {
      provide: {
        tenant: tenantState,
      },
    }
  }

  // CSR-only fallback
  const host = window.location.host
  tenantState.value = await resolveTenant(host)

  return {
    provide: {
      tenant: tenantState,
    },
  }
})
