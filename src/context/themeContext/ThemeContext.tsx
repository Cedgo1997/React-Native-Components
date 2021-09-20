import React, { createContext, useReducer } from "react";
import { lightTheme, themeReducer, ThemeState } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme); // TODO necesito leer el tema global del tlf

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('dark')
    };

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('light')

    };
    return (
        <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}