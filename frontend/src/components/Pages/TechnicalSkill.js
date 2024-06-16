import { Checkbox, FormControlLabel, FormLabel, Grid, MenuItem, TextField,Box } from '@mui/material'
import { FormState } from '../../context/StateProvider';
import { useEffect, useState } from "react";
import React from 'react'

const TechnicalSkill = () => {
  const {
    programmingLanguage,
    setProgrammingLanguage,
    experience,
    setExperience,
    developmentCheck,
    setDevelopmentCheck,
    interestedArea,
    setInterestedArea,
  } = FormState() ;

  const handleDevelopmentCheckBoxChange = (name) => (event) => {
      if (event.target.checked || developmentCheck.length > 1) {
        setDevelopmentCheck((prevdevelopmentCheck) => {
          if (event.target.checked) {
            return [...prevdevelopmentCheck, name];
          } else {
            return prevdevelopmentCheck.filter(
              (checkboxName) => checkboxName !== name
            );
          }
        });
      }
  };

  const handleInterestedCheckBoxChange = (name) => (event) =>{
      if(event.target.checked){
         setInterestedArea((interestedCheck)=>{
             if(event.target.checked){
                return [...interestedCheck,name] ;
             }else{
               return interestedCheck.filter(
                 (checkboxName) => checkboxName !== name
               )
             }
         })
      }
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Primary Programming Language"
            name="language"
            value={programmingLanguage}
            onChange={(e)=>setProgrammingLanguage(e.target.value)}
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
            onChange={(e) => setExperience(e.target.value)}
            required
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
                  checked={developmentCheck.includes("MEAN")}
                  onChange={handleDevelopmentCheckBoxChange("MEAN")}
                />
              }
              label="MEAN"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={developmentCheck.includes("MERN")}
                  onChange={handleDevelopmentCheckBoxChange("MERN")}
                />
              }
              label="MERN"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={developmentCheck.includes("LAMP")}
                  onChange={handleDevelopmentCheckBoxChange("LAMP")}
                />
              }
              label="LAMP"
            />

          

            <FormControlLabel control={<Checkbox 
               checked ={developmentCheck.includes("OTHER")}
               onChange={handleDevelopmentCheckBoxChange("OTHER")}
            />} label="OTHER" />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <FormLabel>Interested Area in Task Scheduling</FormLabel>

          <Box>
            <FormControlLabel control={<Checkbox
                 checked={interestedArea.includes("UI/UX Design")}
                 onChange={handleInterestedCheckBoxChange("UI/UX Design")} 
            />}
             label="UI/UX Design"
           />

            <FormControlLabel
              control={<Checkbox
                checked={interestedArea.includes("Backend Development")}
                onChange={handleInterestedCheckBoxChange("Backend Development")}
             />}
              label="Backend Development"
            />

            <FormControlLabel
              control={<Checkbox 
                checked={interestedArea.includes("Database Management")}
                onChange={handleInterestedCheckBoxChange("Database Management")}
              />}
              label="Database Management"
            />

            <FormControlLabel control={<Checkbox
               checked={interestedArea.includes("Authentication")}
               onChange={handleInterestedCheckBoxChange("Authentication")}
            />} label="Authentication" />
            <FormControlLabel
              control={<Checkbox 
                checked={interestedArea.includes("Real Time Updates")}
                onChange={handleInterestedCheckBoxChange("Real Time Updates")}
              />}
              label="Real Time Updates"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default TechnicalSkill ;