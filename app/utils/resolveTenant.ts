 export function resolveTenant(host: string) {
  if (!host) return null

  const cleanHost = host.split(':')[0]
  const parts = cleanHost!.split('.')

  // store.yourdomain.com
  if (parts.length > 2 && parts[0] !== 'www') {
    return parts[0]
  }

  return null
}
