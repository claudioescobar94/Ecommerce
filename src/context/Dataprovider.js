import { createContext, useEffect, useState } from "react";
import Data from "../Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
    
    const [productos, setPreductos] = useState([])

    useEffect(()=>{
        const producto = Data
        setPreductos(producto)
    },[])

    const value = {
        productos: [productos] 
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}