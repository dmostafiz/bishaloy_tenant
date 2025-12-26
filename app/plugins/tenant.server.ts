import { resolveTenant } from "~/utils/resolveTenant"

export default defineNuxtPlugin(() => {
  const event = useRequestEvent()

  // Vercel-safe way
  const host =
    event?.node.req.headers['x-forwarded-host'] ||
    event?.node.req.headers.host ||
    ''

  const tenant = resolveTenant(host as string)

  return {
    provide: {
      tenant
    }
  }
})
