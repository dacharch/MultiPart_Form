import React from 'react'
import {
  TextField,
  Container,
  Grid,
  MenuItem,
  FormLabel,
  Box,
  Checkbox,
  FormControlLabel,
  Typography

} from "@mui/material" ;


const ReviewAndSubmit = () => {
  return (
     <div className='FormViewContainer'>
        <Container>
            <h2>Personal Details</h2>
            <Grid container spacing={2}>
                <TextField
                   fullWidth
                   label="Full Name"
                   name="fullName"
                   disabled
                />

            </Grid>

            
        </Container>

     </div>
 )
}

export default ReviewAndSubmit