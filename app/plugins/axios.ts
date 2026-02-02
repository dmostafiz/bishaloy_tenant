import axios from 'axios'
import { resolveTenant } from '~/utils/resolveTenant'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    if (import.meta.server) {
        console.log('[SSR] Runtime Config Public:', JSON.stringify(config.public, null, 2))
        console.log('[SSR] serverDomain:', config.public.serverDomain)
    }

    const api = axios.create({
        baseURL: config.public.serverDomain,
        withCredentials: true
    })

    api.interceptors.request.use((request) => {
        let host: string | null = null

        // SSR
        if (import.meta.server) {
            const headers = nuxtApp.ssrContext?.event.node.req.headers
            host = (headers?.['x-forwarded-host'] as string) || headers?.host || null
        }

        // Client
        if (import.meta.client) {
            host = window.location.host
        }

        const tenantId = resolveTenant(host, config.public.appDomain)

        if (tenantId) {
            request.headers['x-tenant-id'] = tenantId
        }

        return request
    })

    return {
        provide: {
            axios: api
        }
    }
})
