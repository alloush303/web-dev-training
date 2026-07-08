import React from 'react'
import '../style/setting.css'
import { Link, NavLink } from 'react-router-dom'
import UserProfile from './UserProfile'

function Setting() {
    return (
        <div>
            <h1>Setting Page</h1>
            <span className='linner mb-3'></span>
            <nav className='d-flex gap-5'>
                <NavLink className='nav-link' to='../userprofile'>User Profile</NavLink>
                <NavLink className='nav-link' to='../userprofile'>User Profile</NavLink>
            </nav>
            {/* <NavLink to='./'>Go Back</NavLink> */}
        </div>)
}

export default Setting