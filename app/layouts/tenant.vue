<script setup lang="ts">
import { shallowRef } from 'vue'
import type { Component } from 'vue'
import { loadTheme } from '~/utils/loadTheme'

const store = useNuxtApp().$store

const ThemeLayout = shallowRef<Component | null>(null)

// Runs during SSR + client hydration
ThemeLayout.value = await loadTheme('classic')
</script>

<template>
  <div>Tenant Layout</div>
  <component :is="ThemeLayout">
    <NuxtPage />
  </component>
</template>
