import { useColorStore } from '~/stores/colorStore'

/**
 * Composable to manage color theme initialization and syncing with color mode
 */
export function useColorTheme() {
    const colorStore = useColorStore()

    // Simple dark mode detection based on document class or media query
    const isDark = computed(() => {
        if (typeof document === 'undefined') return false
        return document.documentElement.classList.contains('dark')
    })

    // MutationObserver to watch for class changes on document
    let observer: MutationObserver | null = null

    onMounted(() => {
        if (typeof document !== 'undefined') {
            // Watch for dark mode class changes
            observer = new MutationObserver(() => {
                const currentIsDark = document.documentElement.classList.contains('dark')
                if (colorStore.isLoaded) {
                    colorStore.applyColors(currentIsDark)
                }
            })

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
            })
        }
    })

    onUnmounted(() => {
        observer?.disconnect()
    })

    /**
     * Initialize the color theme system
     * @param themeKey - Optional theme key to set (from database/API)
     */
    function initColorTheme(themeKey?: string) {
        const currentIsDark = typeof document !== 'undefined'
            ? document.documentElement.classList.contains('dark')
            : false
        colorStore.initializeTheme(themeKey, currentIsDark)
    }

    /**
     * Switch to a different color theme
     * @param themeKey - The key of the theme to switch to
     */
    function setColorTheme(themeKey: string) {
        const currentIsDark = typeof document !== 'undefined'
            ? document.documentElement.classList.contains('dark')
            : false
        colorStore.setTheme(themeKey)
        colorStore.applyColors(currentIsDark)
    }

    /**
     * Get the list of available themes
     */
    function getAvailableThemes() {
        return colorStore.themeList
    }

    /**
     * Get current theme info
     */
    const currentTheme = computed(() => ({
        key: colorStore.activeThemeKey,
        name: colorStore.currentTheme?.name || '',
        colors: colorStore.getColorsForMode(isDark.value)
    }))

    return {
        // State
        isDark,
        currentTheme,

        // Methods
        initColorTheme,
        setColorTheme,
        getAvailableThemes,

        // Store access for advanced usage
        colorStore
    }
}
