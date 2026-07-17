import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Theme() {
    let { theme, toggleTheme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <h1>Setting</h1>
            <h4>App Setting:</h4>
            <select value={theme} onChange={toggleTheme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
            <button onClick={toggleTheme}>
                Update
            </button>
        </div>
    )
}

export default Theme