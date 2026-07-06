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
        <div className='login-container d-flex flex-column justify-content-center align-items-center vh-100 text-center'>
            <div className="card-box  w-50 py-5 rounded-5">
                <h1 className='mb-5 fw-bold'>Login</h1>
                {errorMessage && (
                    <div className='error-message m-4'>
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handelSubmit} noValidate>
                    <div className=''>
                        <h6 className='lable-text text-start '>User Name</h6>
                        <input className='input-box w-75 p-2 mb-2 rounded-3' type="text" placeholder='input user name' onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <h6 className='lable-text text-start '>Email</h6>
                        <input className='input-box w-75 p-2 mb-2 rounded-3' type="email" placeholder='input your email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <h6 className='lable-text text-start '>Password</h6>
                        <input className='input-box w-75 p-2 mb-2 rounded-3' type="password" placeholder='input your password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit' className='btn-box btn mt-5 w-25'>Login</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login