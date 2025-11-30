import React, { createContext, useContext, useState } from "react";

let FormContext = createContext()

const FormProvider = ({ children }) => {
  const [SubmittedData,SetSubmittedData]=useState([])
  const AddUserData=(Data)=>{
    SetSubmittedData((prev)=>{
          return [...prev, Data]
    })
  }
    return (
        <FormContext.Provider value={{AddUserData,SubmittedData}}>
            {children}
        </FormContext.Provider>
    )
}
//custom hook
const useFormContext = () => {
    return useContext(FormContext)
}  

export {FormProvider,useFormContext}

