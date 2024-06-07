import { Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'

const TechnicalSkill = () => {
  return (
     <div>
         <Grid container spacing={2}>
               <Grid item xs={12}>
                   <TextField
                      fullWidth
                      select
                      label="Primary Programming Language"
                      name="language"
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
                 >
                     <MenuItem value="Beginner">Beginner</MenuItem>
                     <MenuItem value="Intermediate">Intermediate</MenuItem>
                     <MenuItem value="Advanced">Advanced</MenuItem>
                     <MenuItem value="Expert">Expert</MenuItem>

                 </TextField>
               </Grid>

               <Grid item xs={12}>
                  

               </Grid>

         </Grid>
     </div>
  )
}

export default TechnicalSkill