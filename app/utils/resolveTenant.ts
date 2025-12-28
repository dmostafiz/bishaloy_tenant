export async function resolveTenant(host: string) {
  if (!host) return null

  const cleanHost = host.split(':')[0]
  const parts = cleanHost!.split('.')

  // store.yourdomain.com
  if (parts.length > 2 && parts[0] !== 'www') {

    const hostData = parts[0]!

    console.log('Host Data: ', hostData)

    const config = useRuntimeConfig()
    const serverDomain = config.public.serverDomain

    return await $fetch(`${serverDomain}/tenant`, {
      headers: { 'x-host': hostData }
    })
    // return parts[0]
  }

  return null
}
