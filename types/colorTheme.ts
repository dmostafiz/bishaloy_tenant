/**
 * Color palette for a single mode (light or dark)
 */
export interface ColorPalette {
    // Primary colors
    primary: string
    primaryHover: string
    primaryMuted: string

    // Accent colors
    accent: string
    accentHover: string

    // Background colors
    bg: string
    bgAlt: string
    bgCard: string
    bgElevated: string

    // Text colors
    text: string
    textMuted: string
    textLight: string

    // Border colors
    border: string
    borderLight: string

    // Button colors
    btnPrimaryBg: string
    btnPrimaryText: string
    btnSecondaryBg: string
    btnSecondaryText: string

    // Status colors
    success: string
    successMuted: string
    warning: string
    warningMuted: string
    error: string
    errorMuted: string
    info: string
    infoMuted: string
}

/**
 * Single color theme with light and dark variants
 */
export interface ColorTheme {
    name: string
    light: ColorPalette
    dark: ColorPalette
}

/**
 * Full color themes configuration
 */
export interface ColorThemeConfig {
    themes: Record<string, ColorTheme>
    defaultTheme: string
}

/**
 * CSS variable names mapping
 */
export const COLOR_CSS_VARS: Record<keyof ColorPalette, string> = {
    primary: '--color-primary',
    primaryHover: '--color-primary-hover',
    primaryMuted: '--color-primary-muted',
    accent: '--color-accent',
    accentHover: '--color-accent-hover',
    bg: '--color-bg',
    bgAlt: '--color-bg-alt',
    bgCard: '--color-bg-card',
    bgElevated: '--color-bg-elevated',
    text: '--color-text',
    textMuted: '--color-text-muted',
    textLight: '--color-text-light',
    border: '--color-border',
    borderLight: '--color-border-light',
    btnPrimaryBg: '--color-btn-primary-bg',
    btnPrimaryText: '--color-btn-primary-text',
    btnSecondaryBg: '--color-btn-secondary-bg',
    btnSecondaryText: '--color-btn-secondary-text',
    success: '--color-success',
    successMuted: '--color-success-muted',
    warning: '--color-warning',
    warningMuted: '--color-warning-muted',
    error: '--color-error',
    errorMuted: '--color-error-muted',
    info: '--color-info',
    infoMuted: '--color-info-muted'
}
