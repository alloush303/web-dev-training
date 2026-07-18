import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Theme from './Theme'
import Currency from './Currency'
import Userprofile from './Userprofile'

function Setting() {
    return (
        <div >
            <h1>Setting:</h1>
            <div className='container py-3 '>
                <nav className='d-flex justify-content-start gap-5'>
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