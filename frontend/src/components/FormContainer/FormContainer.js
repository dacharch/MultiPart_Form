import React from "react";
import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from 'axios' ;

import PersonalInfo from "../Pages/PersonalInfo";
import TechnicalSkill from "../Pages/TechnicalSkill";
import UploadSection from "../Pages/UploadSection";
import ReviewAndSubmit from "../Pages/ReviewAndSubmit";
import { FormState } from "../../context/StateProvider";

const FormContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const {
    fullName,
    dateOfBirth,
    email,
    phoneNumber,
    programmingLanguage,
    experience,
    developmentCheck,
    interestedArea,
    selectedFile,
  } = FormState();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <TechnicalSkill />;
      case 2:
        return <UploadSection />;
      case 3:
        return <ReviewAndSubmit />;
    }
  };

  const getSteps = () => {
    return [
      "Personal Information",
      "Technical Skills and Preferences",
      "Upload Section",
      "Review and Submit",
    ];
  };

 

  const handleNext = () => {
     if(activeStep == 0){
         if(fullName!= "" && dateOfBirth != "" && email !="" && phoneNumber !=""){
             setActiveStep(1) ;
         }else{
             setError("Please Fill all the Details before clicking the Next button")
         }
     }else{
      if (activeStep == 1){
          if(programmingLanguage !="" && experience !=""){
            setActiveStep(2) ;
          }else{
             setError("Please Fill all the mandatory details");
          }
      }else {
         if(activeStep == 2){
           if(selectedFile != null){
             setActiveStep(3) ;
           }else{
             setError("Please Select the File ")
           }
         } else{
            if(activeStep ==3){
               submitForm() ;
            }
         }
      }
     }
  };

   const handlePrevious = () => {
     setActiveStep(0);
   };

   const handleCloseSnackbar2 = ()=>{
      setOpen(false) ;
   }



  const  submitForm = () =>{
    let file = selectedFile ;
    const formSubmission = {
      fullName,
      dateOfBirth,
      email,
      phoneNumber,
      programmingLanguage,
      experience,
      developmentCheck,
      interestedArea,
    } ;

    const formData = new FormData() ;
    formData.append("file",file) ;
    formData.append("fileName",file.name) ;
    formData.append("userData",JSON.stringify(formSubmission)) ;
    try{
      axios.post("http://localhost:8080/api/submit/",formData,{
        headers:{
           "Content-Type":"multipart/form-data",
        },

      }).then((res)=>{
         setOpen(true) ;
         setMessage(res.data.message) ;

      })

    }catch(error){}
  }



  const steps = getSteps();

  const handleCloseSnackbar = ()=>{
    setError(null)
  }
  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box mt="15px">
        {getStepContent(activeStep)}
        <Box
          mt="20px"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Button 
            variant="contained"
            disabled={activeStep === steps.length -1 ? false: true}
            onClick={handlePrevious}
          >
            Edit
         </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length -1 ? "Submit":"Next"}
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={error !== null}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="error"
        >
          {error}
        </Alert>
      </Snackbar>

      <Snackbar
         open = {open}
         autoHideDuration={5000}
         onClose={handleCloseSnackbar2}
         anchorOrigin={{vertical: "bottom",horizontal:"center"}}
      >

        <Alert
           elevation={6}
           variant="filled"
           onClose={handleCloseSnackbar2}
           severity="success"
        >
           {message}
        </Alert>
          
      </Snackbar>
    </>
  );
};

export default FormContainer;
