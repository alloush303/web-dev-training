import React, { useContext, useRef, useState } from 'react'
import { UserProfileContext } from '../context/UserProfileContext'
import { ThemeContext } from '../context/ThemeContext'
import '../style/Userprofile.css'

function Userprofile() {
    let { theme } = useContext(ThemeContext)
    let { userProfile, inputProfileInfo } = useContext(UserProfileContext)

    const userNameInput = useRef(null)
    const emailInput = useRef(null)

    let [input1, setInput1] = useState('')
    let [input2, setInput2] = useState('')

    const isFieldsEmpty = input1 === '' || input2 === ''



    const handleUpdate = () => {
        if (emailInput.current.value === '' || !/\S+@\S+\.\S+/.test(emailInput.current.value)) {
            alert('صيغة الإيميل غير صحيحة')
            return;
        }

        const profileInfo = {
            userName: userNameInput.current.value,
            email: emailInput.current.value
        }

        inputProfileInfo(profileInfo)

        console.log(profileInfo)
    }

    return (
        <div className={theme} style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <h4>App Setting:</h4>
            <div className={theme + " gap-4 d-flex flex-column  w-25 mt-4"}>
                <div className='d-flex flex-column'>
                    <div className='mb-4 ms-1'>
                        <label>User Name</label>
                        <input className={`${theme === 'light' ? 'input-light' : 'input-dark'} p-2`} type="text" placeholder='User Name...' ref={userNameInput} value={input1} onChange={(e) => setInput1(e.target.value)} />
                    </div>
                    <div className='ms-1'>
                        <label>Email</label>
                        <input className={`${theme === 'light' ? 'input-light' : 'input-dark'} p-2`} type="email" placeholder='Email...' ref={emailInput} value={input2} onChange={(e) => setInput2(e.target.value)} />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className={`${theme === 'light' ? 'btn-light' : 'btn-dark'} btn-update`} onClick={handleUpdate} disabled={isFieldsEmpty}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Userprofile