import type { Component } from 'vue'
import { themeLayouts } from './theme-registry'

export async function loadTheme(theme: string): Promise<Component> {
  const key = `/themes/${theme}/Layout.vue`
  const loader = themeLayouts[key]

  if (!loader) {
    throw new Error(`Theme "${theme}" not found`)
  }

  const mod = await loader()
  return mod.default
}