export function resolveTenant(
  host?: string | null
): string | null | undefined {
  if (!host) return null

  // remove port, protocol, lowercase
  let cleanHost = host
    .replace(/^https?:\/\//, '')
    .split(':')[0]!
    .toLowerCase()

  // remove www.
  cleanHost = cleanHost.replace(/^www\./, '')

  const parts = cleanHost.split('.')

  // single domain or custom domain → tenant.com
  if (parts.length === 2) {
    return cleanHost
  }

  // subdomain → tenant.domain.com
  if (parts.length > 2) {
    return parts[0]
  }

  return null
}
