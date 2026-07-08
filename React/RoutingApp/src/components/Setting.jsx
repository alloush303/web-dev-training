import React from 'react'
import '../style/setting.css'
import { Link, NavLink } from 'react-router-dom'
import UserProfile from './UserProfile'
import Security from './Security'

function Setting() {
    return (
        <div>
            <h1>Setting Page</h1>
            <span className='linner mb-3'></span>
            <nav className='d-flex gap-5'>
                <NavLink className='setting-link' to='../userprofile'>User Profile</NavLink>
                <NavLink className='setting-link' to='../security'>Security</NavLink>
            </nav>
        </div>)
}

export default Setting