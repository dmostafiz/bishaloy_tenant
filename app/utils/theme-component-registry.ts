import type { Component } from 'vue'
export const themeComponentsGlobal = import.meta.glob<{
  default: Component
}>(
  '~/themes/*/components/**/*.vue'
)