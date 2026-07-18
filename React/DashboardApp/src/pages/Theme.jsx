import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../style/Theme.css'

function Theme() {
    let { theme, selectTheme } = useContext(ThemeContext)
    let [savedValue, setSavedValue] = useState(theme)
    let [tempValue, setTempValue] = useState(theme)

    const handleUpdate = () => {
        setSavedValue(tempValue)
        selectTheme(tempValue)
    }
    console.log(theme)
    return (
        <div className={theme} style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <h4>App Setting:</h4>
            <div className={theme + " gap-4 d-flex flex-column  w-25 mt-4"}>
                <div className='d-flex flex-column'>
                    <label>theme</label>
                    <select className={`${theme === 'light' ? 'select-light' : 'select-dark'} text-center`} value={tempValue} onChange={(e) => setTempValue(e.target.value)}>
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                    </select>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className={`${theme === 'light' ? 'btn-light' : 'btn-dark'} btn-update`} onClick={handleUpdate} disabled={tempValue === savedValue}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Theme