import React, { useRef, useState } from 'react'
import {Button,Snackbar,Typography,Alert} from "@mui/material" ;
import { GrCloudUpload } from "react-icons/gr";
import { FormState } from "../../context/StateProvider";



const UploadSection = () => {
  const [fileName,setFileName] = useState('')  ;
  const fileInputRef = useRef(null) ;
  const [error,setError] = useState(null) ;

  const {setSelectedFile} = FormState() ;
  
  const handleBrowse = ()=>{
    fileInputRef.current.click() ;
  }

  const fileUpload =(e) =>{
    const file = e.target.files[0] ;
    setFileName(file.name) ;
    
    if(file){
       if(file.size <=5 *1024 * 1024){
          setSelectedFile(file) ;
       }else{
         setError("File size exceeds 5 MB limit") ;
         e.target.value = null ;
         setSelectedFile(null) ;
       }
    }
  }

  const handleCloseSnackbar = ()=>{
     setError(null) ;
  }
  
  return (
    <div className="upload_section">
      <div className="upload_container">
        <input 
             ref={fileInputRef}
             type="file"
             accept=".doc, .docx, .pdf"
             onChange={fileUpload}
             hidden 
         />

        <GrCloudUpload className='img' />
        <Button 
         variant="contained"
         onClick={handleBrowse}
        >
         Browse
        </Button>
              
        <br />
        <Typography>FileName: {fileName} </Typography>
        <Typography>PDF/ DOCX</Typography>
        <Typography>File Size : 5 MB</Typography>

        <Snackbar
          open={error !== null}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity='error'
          >
             {error}
          </Alert>

        </Snackbar>
      </div>
    </div>
  );
}

export default UploadSection