import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Theme from './Theme'
import Currency from './Currency'
import Userprofile from './Userprofile'
import { ThemeContext } from '../context/ThemeContext'
import '../style/Setting.css'

function Setting() {
    let { theme } = useContext(ThemeContext)
    return (
        <div >
            <h1>Setting:</h1>
            <div className='container setting-nav py-3 '>
                <nav className={`${theme === 'light' ? 'nav-light' : 'nav-dark'} d-flex justify-content-start gap-5`}>
                    <NavLink to='/dashboard/setting/userprofile'>User Profile</NavLink>
                    <NavLink to='/dashboard/setting/theme'>Theme</NavLink>
                    <NavLink to='/dashboard/setting/currency'>Currency</NavLink>
                </nav>
            </div>
            <div className='container'>
                <Outlet />
            </div>
        </div>
    )
}

export default Setting