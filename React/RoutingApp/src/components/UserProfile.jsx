import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function UserProfile() {
    let navigate = useNavigate()
    let goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>User Profile setting</h3>
            <span className="linner mb-3"></span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt quasi dolor dolorem error, repellendus sed molestiae. Dolorem mollitia non perferendis totam neque quisquam harum?</p>
            <button className='btn-box btn' onClick={goBack}>Back</button>
        </div>
    )
}

export default UserProfile