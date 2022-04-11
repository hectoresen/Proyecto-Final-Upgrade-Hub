import { createContext, useState } from "react";


export const ProfileContext = createContext();

export const ProfileProvider = ({children})=>{

    const [profileNavbarActions, setProfileNavbarActions] = useState({
        showFavProducts: false,
        showUserMailSettings: false,
        showOrders: false
    })


    return(
        <ProfileContext.Provider value={[profileNavbarActions, setProfileNavbarActions]}>
            {children}
        </ProfileContext.Provider>
    )
}
