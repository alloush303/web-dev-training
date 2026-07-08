import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function UserProfile() {
    let navigate = useNavigate()
    let goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>User Profile setting</h2>
            <span className="linner mb-3"></span>
            <button className='btn-box btn' onClick={goBack}>Back</button>
        </div>
    )
}

export default UserProfile