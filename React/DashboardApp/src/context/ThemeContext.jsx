import { createContext, useState } from "react";


export let ThemeContext = createContext()

export function ThemeProvider({ children }) {
    let [theme, setTheme] = useState('light')

    let toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    let value = {
        theme, toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}