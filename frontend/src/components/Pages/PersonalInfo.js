import { Container, TextField,Grid} from '@mui/material'
import { FormState } from '../../context/StateProvider';
import React from 'react'

const PersonalInfo = () => {
  const {
    fullName,
    setFullName,
    dateofBirth,

  } = FormState();
  return (
     <Container>
          <Grid container spacing={2}>
             <Grid item xs={12} >
                 <TextField
                   fullWidth
                   label="Full Name"
                   name="Full Name"
                   value={fullName} 
                >
                   
                 </TextField>
             </Grid>

          </Grid>
      
     </Container>
  )
}

export default PersonalInfo