export async function loadThemeComponent(
    theme: string,
    componentName: string
) {
    try {
        return await import(
            `~/themes/${theme}/components/${componentName}.vue`
        )
    } catch (error) {
        console.warn(`Theme fallback: ${theme}/${componentName}`)
        return await import(
            `~/themes/default/components/${componentName}.vue`
        )
    }
}