import type { Component } from 'vue'
export const themeComponents = import.meta.glob<{
  default: Component
}>(
  '~/themes/*/components/**/*.vue'
)