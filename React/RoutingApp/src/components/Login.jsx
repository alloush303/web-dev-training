import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    let navigate = useNavigate()
    let [userName, setUserName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [errorMessage, setErrorMessage] = useState('')

    let handelSubmit = (e) => {
        e.preventDefault();

        if (userName === '') {
            setErrorMessage('User Name is Empty... pleas input your user name')
            return;
        }
        if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Email is Empty or Incorrect email address. Please enter a valid email address.')
            return;
        }
        if (password === '' || password.length < 6) {
            setErrorMessage('The password must be at least 6 characters long.')
            return;
        }

        setErrorMessage('')
        navigate('/dashboard')
    }

    return (
        <div className='welcome-container d-flex flex-column justify-content-center align-items-center vh-100 text-center'>
            <div className="welcome-box box w-50 p-3 rounded-5">
                <h1>Login</h1>
                {errorMessage && (
                    <div>
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handelSubmit} noValidate>
                    <div className=''>
                        <input className='w-75' type="text" placeholder='input user name' onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <input className='w-75' type="email" placeholder='input your email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input className='w-75' type="password" placeholder='input your password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit' className='btn w-75'>Login</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login