import { Container, TextField,Grid} from '@mui/material'
import { FormState } from '../../context/StateProvider';
import React from 'react'

const PersonalInfo = () => {

   const { fullName, setFullName, dateOfBirth, setDateOfBirth } = FormState(); ;


   function settingDateOfBirth(e){
       const enterDob = e.target.value ;
       setDateOfBirth(enterDob) ;
       validateDob(enterDob) ;

   }     
   
   function validateDob(dob){
      const currentDate = new Date() ;
      const enteredDate = new Date(dob) ;
      const minDate = new Date ;
      minDate.setFullYear(minDate.getFullYear()-18) ;
   }
  
  return (
     <Container>
          <Grid container spacing={2}>
             <Grid item xs={12} >
                 <TextField
                   fullWidth
                   label="Full Name"
                   name="Full Name"
                   value={fullName}
                   onChange={(e)=>setFullName(e.target.value)}
                   required
               />                
             </Grid>
             <Grid item xs={12}>
                <TextField
                   fullWidth
                   label="Date of Birth"
                   type="date"
                   name="dob"
                   value={dateOfBirth}
                   onChange={settingDateOfBirth}
                   required
                />
             </Grid>
             <Grid item xs={12}>
                 <TextField 
                    fullWidth
                    label="Email Address"
                    type="email"
                    name="email"
                    value={email}
                    required
                 />
             </Grid>

             <Grid item xs={12}>
                 <TextField
                    fullWidth
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    required
                 />
             </Grid>
          </Grid>

      
     </Container>
  )
}

export default PersonalInfo