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
    programmingLanguage,
    experience,
    developmentCheck,
    interestedArea,
    selectedFile,
  } = FormState() ;
   
   
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
              value={fullName}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              name="dob"
              value={dateOfBirth}
              
              disabled
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
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
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
              value={programmingLanguage}
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
              value={experience}
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
                    checked={developmentCheck.includes("MEAN")}
                  />
                }
                label="MEAN"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    checked={developmentCheck.includes("MERN")}
                   
                  />
                }
                label="MERN"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    checked={developmentCheck.includes("LAMP")}
                  />
                }
                label="LAMP"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={developmentCheck.includes("OTHER")}
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
                    checked={interestedArea.includes("UI/UX Design")}
                     
                  />
                }
                label="UI/UX Design"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interestedArea.includes("Backend Development")}
                    disabled
                   
                  />
                }
                label="Backend Development"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    checked={interestedArea.includes("Database Management")}
                    
                  />
                }
                label="Database Management"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    checked={interestedArea.includes("Authenticatino")}
                    
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