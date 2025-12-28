import { resolveTenant } from '~/utils/resolveTenant'
import { useTenant } from '~/composables/useTenant'

export default defineNuxtPlugin(async () => {
  const event = useRequestEvent()
  const tenantState = useTenant()

  let host =
    event?.node.req.headers['x-forwarded-host'] ||
    event?.node.req.headers.host ||
    ''

  if (Array.isArray(host)) host = host[0]
  if (typeof host === 'string' && host.includes(',')) {
    host = host.split(',')[0]?.trim()
  }

  if (!tenantState.value) {
    tenantState.value = await resolveTenant(host)
  }

  return {
    provide: {
      tenant: tenantState,
    },
  }
})
