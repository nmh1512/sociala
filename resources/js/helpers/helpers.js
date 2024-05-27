import store from "../store";

export const getColorTheme = () => {
    const colorTheme = store.state.settings.colorTheme;
    return `text-color-theme-${colorTheme}`
}