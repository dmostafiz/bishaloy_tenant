export const useTenant = () =>
  useState<any | null>('tenant', () => null)
