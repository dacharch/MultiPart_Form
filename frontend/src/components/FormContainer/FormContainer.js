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
import TechnicalSkill from '../Pages/TechnicalSkill';
import UploadSection from '../Pages/UploadSection';
import ReviewAndSubmit from '../Pages/ReviewAndSubmit';

const FormContainer = () => {
  const [activeStep,setActiveStep] = useState(0) ;
  const[error,setError] =useState(null) ;
  const [open,setOpen] =useState(false) ;
  const[message,setMessage] = useState("") ;
  
  
  const getStepContent = (step)=>{
       switch(step) {
          case 0: 
              return <PersonalInfo/>
          case 1:
             return <TechnicalSkill/>
          case 2: 
             return <UploadSection/>
          case 3: 
             return <ReviewAndSubmit/>

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

 const handleNext = ()=>{
     setActiveStep(activeStep+1) ;
 }

  const steps = getSteps() ;
  
  function handleCloseSnackbar(){
     setError(null);
  }
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
            <Button
              variant='contained'
              onClick={handleNext}
            >
               Next
            </Button>
            
         </Box>
      </Box>
     
     <Snackbar
        open={error !== null}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{vertical:"bottom",horizontal:"center"}}
     >
      <Alert
         elevation={6}
         variant='filled'
         onClose={handleCloseSnackbar}
         severity='error'
      >
          {error}
      </Alert>
     </Snackbar>
     </>
  )
}

export default FormContainer