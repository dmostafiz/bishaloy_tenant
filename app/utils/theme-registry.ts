import type { Component } from 'vue'

export const themeLayouts = import.meta.glob<{
  default: Component
}>('~/themes/*/Layout.vue')