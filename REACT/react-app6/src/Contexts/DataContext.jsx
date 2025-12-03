import React from "react";
import { createContext, useContext, useState } from "react";

let DataContext = createContext()

const DataProvider = ({ children }) => {
    let [data, setdata] = useState(1000)
    let increasevalue = () => {
        setdata(prev => {
            return prev + 100
        })
    }
    let decreasevalue = () => {
        setdata(prev => {
            return prev - 100
        })
    }
    return (
        <DataContext.Provider value={{ data, increasevalue, decreasevalue }}>
            {children}
        </DataContext.Provider>

    )

}

//creating custom hook
let useCustomhook = () => {
    return useContext(DataContext)
}

export { DataProvider, useCustomhook }
//first import createcontext,useContext
//create a context
//create a context provider function
//return context.Provider with the data passes in value attribute
//wrap children inside context.Provider
//export context and provider
//one can even create custom hook for using context