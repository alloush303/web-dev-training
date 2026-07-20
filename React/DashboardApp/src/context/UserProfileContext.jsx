import { createContext, useState } from "react";


export let UserProfileContext = createContext()

export function UserProfileProvider({ children }) {
    let [userProfile, setUserProfile] = useState({ userName: 'Alloush', email: 'alloushali303@gmail.com' })

    let inputProfileInfo = (profileInfo) => {
        setUserProfile(profileInfo)
    }

    let value = {
        userProfile, inputProfileInfo
    }

    return (
        <UserProfileContext.Provider value={value}>
            {children}
        </UserProfileContext.Provider>
    )
}