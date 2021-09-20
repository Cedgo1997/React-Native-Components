import { Theme } from "@react-navigation/native";

type ThemeActions =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.7)',
    dark: false,
    colors: {
        primary: 'red',
        background: 'blue',
        card: 'green',
        text: 'pink',
        border: 'orange',
        notification: 'teal',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeActions) => {
    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme };
        default:
            return state;
    }
}