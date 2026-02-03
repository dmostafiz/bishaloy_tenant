import { defineStore } from 'pinia'
import type { ColorThemeConfig, ColorTheme, ColorPalette } from '~~/types/colorTheme'
import { COLOR_CSS_VARS } from '~~/types/colorTheme'
import colorThemesData from '~/data/colorThemes.json'

export const useColorStore = defineStore('colorStore', () => {
    // State
    const themes = ref<Record<string, ColorTheme>>({})
    const activeThemeKey = ref<string>('orange')
    const isLoaded = ref<boolean>(false)

    // Getters
    const currentTheme = computed<ColorTheme | null>(() => {
        return themes.value[activeThemeKey.value] || null
    })

    const themeKeys = computed<string[]>(() => {
        return Object.keys(themes.value)
    })

    const themeList = computed(() => {
        return Object.entries(themes.value).map(([key, theme]) => ({
            key,
            name: theme.name
        }))
    })

    // Actions
    function loadThemes() {
        const config = colorThemesData as ColorThemeConfig
        themes.value = config.themes

        // Set default theme if not already set
        if (!themes.value[activeThemeKey.value]) {
            const keys = Object.keys(themes.value)
            activeThemeKey.value = config.defaultTheme || keys[0] || 'orange'
        }

        isLoaded.value = true
    }

    function setTheme(key: string) {
        if (themes.value[key]) {
            activeThemeKey.value = key
            applyColors()
        } else {
            console.warn(`Theme "${key}" not found`)
        }
    }

    function getColorsForMode(isDark: boolean): ColorPalette | null {
        const theme = currentTheme.value
        if (!theme) return null
        return isDark ? theme.dark : theme.light
    }

    function applyColors(isDark: boolean = false) {
        const colors = getColorsForMode(isDark)
        if (!colors) {
            console.warn('No colors available to apply')
            return
        }

        // Apply CSS variables to document root
        if (typeof document !== 'undefined') {
            const root = document.documentElement

            for (const [key, cssVar] of Object.entries(COLOR_CSS_VARS)) {
                const colorValue = colors[key as keyof ColorPalette]
                if (colorValue) {
                    root.style.setProperty(cssVar, colorValue)
                }
            }
        }
    }

    function initializeTheme(themeKey?: string, isDark: boolean = false) {
        loadThemes()

        if (themeKey && themes.value[themeKey]) {
            activeThemeKey.value = themeKey
        }

        applyColors(isDark)
    }

    return {
        // State
        themes,
        activeThemeKey,
        isLoaded,

        // Getters
        currentTheme,
        themeKeys,
        themeList,

        // Actions
        loadThemes,
        setTheme,
        getColorsForMode,
        applyColors,
        initializeTheme
    }
}, {
    persist: {
        pick: ['activeThemeKey']
    }
})
