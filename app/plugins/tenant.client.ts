// ~/plugins/tenant.client.ts
import { resolveTenant } from '~/utils/resolveTenant'

export default defineNuxtPlugin(() => {
    let host = ''

    if (import.meta.client) {
        host = window.location.host
    }

    const tenant = resolveTenant(host)

    return {
        provide: {
            tenant
        }
    }
})
