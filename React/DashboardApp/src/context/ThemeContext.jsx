import { createContext, useState } from "react";

export let ThemeContext = createContext()

export function ThemeProvider({ children }) {
    let [theme, setTheme] = useState('light')

    let selectTheme = (tempValue) => {
        setTheme(tempValue)
    }

    let value = {
        theme, selectTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}