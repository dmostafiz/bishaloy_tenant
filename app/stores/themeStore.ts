import { defineStore } from "pinia";

export const useThemeStore = defineStore('themeStore', () => {
    const currentTheme = ref('default')

    return { currentTheme }
}, {
    persist: true
})