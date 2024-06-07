import React from 'react'

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

        </div>

     </div>
  )
}

export default UploadSection