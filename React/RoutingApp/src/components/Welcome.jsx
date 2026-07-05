import React from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {

    let navigate = useNavigate()
    return (
        <div className='welcome-container d-flex flex-column justify-content-center align-items-center vh-100 text-center'>
            <div className="welcome-box box w-50 p-3 rounded-5">
                <h1 >Welcome to Your Digital Future</h1>
                <p className='p-5'>Everything you need to manage your business and grow your skills, all in one easy place.</p>
                <button onClick={() => navigate('./Login')} className='btn-box btn '>Let's Start</button>

            </div>
        </div>
    )
}

export default Welcome