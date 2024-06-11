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

import { FormState } from '../../context/StateProvider';

const ReviewAndSubmit = () => {

   const {
     fullName,
     dateOfBirth,
     email,
     phoneNumber,
     programmingLanguages,
     experience,
     developmentCheck,
     interestedArea,
     selectedFile,
   } = FormState();
   
   
  return (
    <div className="FormViewContainer">
      <Container>
        <h2>Personal Details</h2>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              name="dob"
              
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              name="email"
             
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              name="phoneNumber"
        
              disabled
            />
          </Grid>
        </Grid>
        <br />
        <h2>Technical Skills</h2>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Primary Programming Language"
              name="language"
              
              disabled
              required
            >
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="Python">Python</MenuItem>
              <MenuItem value="Java">Java</MenuItem>
              <MenuItem value="C#">C#</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Experience"
              name="Experience level"
              
              required
              disabled
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
              <MenuItem value="Expert">Expert</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormLabel required>Development Stack</FormLabel>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                   
                  />
                }
                label="MEAN"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                   
                  />
                }
                label="MERN"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    
                  />
                }
                label="LAMP"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                   
                  />
                }
                label="OTHER"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Interested Area in Task Scheduling</FormLabel>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                     
                  />
                }
                label="UI/UX Design"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                   
                  />
                }
                label="Backend Development"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    
                  />
                }
                label="Database Management"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    
                  />
                }
                label="Authentication"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    
                  />
                }
                label="Real-Time Updates "
              />
            </Box>
          </Grid>
        </Grid>
        <h2>Uploaded File</h2>
        <Typography>File Name : {selectedFile.name}</Typography>
      </Container>
    </div>
  );
}

export default ReviewAndSubmit