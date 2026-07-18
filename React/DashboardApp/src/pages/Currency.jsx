import React, { useContext, useState } from 'react'
import { CurenccyContext } from '../context/CurenccyContext'
import { ThemeContext } from '../context/ThemeContext'
import '../style/Theme.css'

function Curenccy() {
    let { theme } = useContext(ThemeContext)
    let { curenccy, selectCurenccy } = useContext(CurenccyContext)
    let [savedValue, setSavedValue] = useState(curenccy)
    let [tempValue, setTempValue] = useState(curenccy)

    const handleUpdate = () => {
        setSavedValue(tempValue)
        selectCurenccy(tempValue)
    }
    console.log(curenccy)
    return (
        <div className={theme} style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <h4>Curenccy Setting:</h4>
            <div className={theme + " gap-4 d-flex flex-column  w-25 mt-4"}>
                <div className='d-flex flex-column'>
                    <label>Curenccy</label>
                    <select className={`${theme === 'light' ? 'select-light' : 'select-dark'} text-center`} value={tempValue} onChange={(e) => setTempValue(e.target.value)}>
                        <option value="syrianBounds">Syrian Bounds</option>
                        <option value="dollarBounds">Doolar Bounds</option>
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

export default Curenccy