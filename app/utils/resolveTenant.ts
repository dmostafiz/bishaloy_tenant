export function resolveTenant(
  host?: string | null,
  appDomain?: string
): string | null | undefined {
  if (!host) return null

  // remove port, protocol, lowercase
  let cleanHost = host
    .replace(/^https?:\/\//, '')
    .split(':')[0]!
    .toLowerCase()

  // remove www.
  cleanHost = cleanHost.replace(/^www\./, '')

  // If appDomain is provided, use it to check for subdomain
  if (appDomain) {
    const cleanAppDomain = appDomain.replace(/^https?:\/\//, '').split(':')[0]!.toLowerCase().replace(/^www\./, '')

    // If it ends with appDomain, it's a subdomain (e.g. tenant.storezet.com)
    if (cleanHost.endsWith(cleanAppDomain) && cleanHost !== cleanAppDomain) {
      // Extract subdomain
      return cleanHost.replace(`.${cleanAppDomain}`, '')
    }
  }

  // Fallback or Custom Domain logic
  const parts = cleanHost.split('.')

  // Subdomain logic (fallback)
  if (parts.length > 2) {
    // Check if it looks like a custom domain (e.g. shop.brand.com) vs subdomain (tenant.platform.com)
    // Without appDomain, we can't be 100% sure, but previously we assumed > 2 is subdomain.
    // However, shop.skuvein.com (length 3) should be a custom domain identifier.
    // If we have appDomain, the block above handles it. 
    // If not, we return the full host for safety if it might be a custom domain.
    return cleanHost
  }

  // Default: return the full host (e.g. skuvein.com or localhost)
  return cleanHost
}
