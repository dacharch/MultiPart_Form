import { Container, TextField,Grid} from '@mui/material'
import { FormState } from '../../context/StateProvider';
import React from 'react'

const PersonalInfo = () => {

   const { fullName,setFullName,dateofBirth,setDateofbirth} = FormState() ;

  
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
                   value={dateofBirth}
                />
             </Grid>
             <Grid item xs={12}>
                 <TextField 
                    fullWidth
                    label="Email Address"
                    type="email"
                    name="email"
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