const express = require("express") ;
const cors = require('cors') ;
const connectDB = require("./config/db") ;
const dotenv = require("dotenv") ;
const fs = require('fs') ;
const multer = require('multer') ;
const mongoose = require('mongoose') ;
const app = express() ;



app.get('/',(req,res)=>{
    res.send("Hello world") ;
})


app.post("/api/submit",upload.single("file"),async (req,res)=>{
    const {
        fullName,
        dateOfBirth,
        email,
        phoneNumber,
        programmingLangauge,
        experience,
        developmentCheck,
        interestedArea,
    } = JSON.parse (req.body.userDate) ;

    const file = req.file ;

    Personal.create({
        fullName,
        dateOfBirth,
        email,
        phoneNumber,
    }) ;

    Skills.create({
        programmingLangauge,
        experience,
        developmentCheck,
        interestedArea,
    })

    if(!file){
         return res.status(400).json({message:"No file uploaded"}) ;
    }

    try{
         const file = new File ({
             filename: req.body.filename,
         }) ;

         await file.save() ;

         res.json({message: "Form Successfully Submitted"}) ;

    }catch(error){
        console.error("Error uploading file",error) ;
        res.status(500).json({message: "Internal server error"}) ;
    }

    
})

const PORT =  process.env.PORT  || 8080 ;

app.listen(PORT,()=>{
    console.log("server is running") ;
})
