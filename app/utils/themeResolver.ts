export function resolveTheme(theme: string) {
  switch (theme) {
    case 'classic':
      return 'theme-classic'
    case 'modern':
      return 'theme-modern'
    default:
      return 'theme-default'
  }
}