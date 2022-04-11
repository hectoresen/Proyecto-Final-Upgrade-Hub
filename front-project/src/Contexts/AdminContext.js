import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({children}) =>{
    const [stock, setStock] = useState(0);
    const [handleStock, setHandleStock] = useState(false);


    return(
        <AdminContext.Provider value = {[stock, setStock, handleStock, setHandleStock,]}>
            {children}
        </AdminContext.Provider>
    )
}