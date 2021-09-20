import { Theme } from "@react-navigation/native";

type ThemeActions =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.7)',
    dark: false,
    colors: {
        primary: '#5856D6',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'orange',
        notification: 'teal',
    }
}
export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'rgba(255,255,255, 0.7)',
    dark: true,
    colors: {
        primary: '#5856D6',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeActions) => {
    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme };
        case 'set_dark_theme':
            return { ...darkTheme }
        default:
            return state;
    }
}