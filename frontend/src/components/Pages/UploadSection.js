import React from 'react'
import {Button,Typography} from "@mui/material" ;
import { GrCloudUpload } from "react-icons/gr";


const UploadSection = () => {
  return (
     <div className='upload_section'>
        <div className='upload_container'>
             <input 
                type="file"
                accept='.doc, .docx, .pdf'
                hidden
             />

             <GrCloudUpload />
             <Button variant="contained" >
                 Browse
             </Button>

             <br/>

             <Typography>FileName:  </Typography>
             <Typography>PDF/ DOCX</Typography>
             <Typography>File Size : 5 MB</Typography>

        </div>

     </div>
  )
}

export default UploadSection