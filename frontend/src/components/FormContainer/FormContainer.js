import React from 'react'
import { useState } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import PersonalInfo from '../Pages/PersonalInfo';

const FormContainer = () => {
  const [activeStep,setActiveStep] = useState(0) ;
  
  const getStepContent = (step)=>{
       switch(step) {
          case 0: 
              return <PersonalInfo/>

       }
  }
  const getSteps = () =>{
     return [
        "Personal Information",
        "Technical Skills and Preferences",
        "Upload Section",
        "Review and Submit"
     ] ;
  }

  const steps = getSteps() ;

  return (
     <>
        <Stepper activeStep={activeStep}>
         {
            steps.map((step,index) =>{
                return(
                    <Step key={index}>
                         <StepLabel>{step}</StepLabel>
                    </Step>
                )
            })
         }
        </Stepper>
        <Box
           mt="15px"
        >
         {getStepContent(activeStep)}
         <Box
            mt="20px"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
         >
            <Button
               variant="contained"
            >
                Edit
            </Button>
            <Button variant='contained'>
               Next
            </Button>
            
         </Box>

        </Box>
     
     </>
  )
}

export default FormContainer