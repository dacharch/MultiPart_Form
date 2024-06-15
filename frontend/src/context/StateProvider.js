import React from 'react'
import { useState,useContext,createContext } from 'react'


const FormContext = createContext() ;

const StateProvider = ({children}) => {
    const [fullName,setFullName] =useState("");
    const [dateOfBirth,setDateOfBirth] =useState(new Date());
    const [email,setEmail] = useState("") ;
    const [phoneNumber, setPhoneNumber] = useState("") ;
    const [programmingLanguage,setProgrammingLanguage] = useState() ;
    const [experience,setExperience]= useState("") ;
    const [interestedArea,setInterestedArea] =useState([]) ;
    const [developmentCheck,setDevelopmentCheck] = useState(["MEAN"]) ;
    
    const [selectedFile,setSelectedFile] = useState(null) ;

  
    return (
    <FormContext.Provider value={{
           fullName,
           setFullName,
           dateOfBirth,
           setDateOfBirth,
           email,
           setEmail,
           programmingLanguage,
           setProgrammingLanguage,
           experience,
           setExperience,
           developmentCheck,
           setDevelopmentCheck,
           interestedArea,
           setInterestedArea
           ,selectedFile,
           setSelectedFile

    }}>
         {children}
    </FormContext.Provider>
  )
}


export function FormState(){
     return useContext(FormContext);
}
export default StateProvider;