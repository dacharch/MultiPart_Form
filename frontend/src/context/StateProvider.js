import React from 'react'
import { useState,useContext,createContext } from 'react'


const FormContext = createContext( ) ;

const StateProvider = ({children}) => {
    const [fullName,setFullName] =useState("");
    const [dateOfBirth,setDateOfBirth] =useState(new Date());

  
    return (
    <FormContext.Provider value={{fullName,setFullName,dateOfBirth,setDateOfBirth}}>
         {children}
    </FormContext.Provider>
  )
}


export function FormState(){
     return useContext(FormContext);
}
export default StateProvider