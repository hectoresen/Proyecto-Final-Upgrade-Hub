import { createContext, useState } from "react";

const themes = {
    dark: {
        backgroundColor: '#202124',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{

    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? themes.dark: themes.light;

    const toggleTheme = () =>{
        setIsDark(!isDark)
    }
    return (
        <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}