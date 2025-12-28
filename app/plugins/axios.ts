import axios from 'axios'
import { resolveTenant } from '~/utils/resolveTenant'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const api = axios.create({
        baseURL: config.public.serverDomain,
        withCredentials: true
    })

    api.interceptors.request.use((request) => {
        let host: string | null = null

        // SSR
        if (import.meta.server) {
            host = nuxtApp.ssrContext?.event.node.req.headers.host || null
        }

        // Client
        if (import.meta.client) {
            host = window.location.host
        }

        const tenantId = resolveTenant(host)

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
