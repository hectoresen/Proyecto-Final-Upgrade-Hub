import { createContext, useState } from "react";

export const FavContext = createContext();

export const FavProvider = ({children})=>{

    const [favInfo, setFavInfo] = useState([])

    return(
        <FavContext.Provider value={[ favInfo , setFavInfo ]}>
            {children}
        </FavContext.Provider>
    )
}