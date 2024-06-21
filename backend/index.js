const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const fs = require("fs");
const multer = require("multer");
const mongoose = require("mongoose");
const app = express();

// Schema

const { Personal, Skills, File } = require("./Model/FormSchema");

dotenv.config();
connectDB();

app.use(cors(
  {
    origin:["https://*"],
    method:["POST","GET"],
  
  }
));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/api/submit", upload.single("file"), async (req, res) => {
  const {
    fullName,
    dateOfBirth,
    email,
    phoneNumber,
    programmingLanguage,
    experience,
    developmentCheck,
    interestedArea,
  } = JSON.parse(req.body.userData);
  console.log(req.body.userData);
  const file = req.file ;
  Personal.create({
    fullName,
    dateOfBirth,
    email,
    phoneNumber,
  }) ;

  Skills.create({
     programmingLanguage,
     experience,
     developmentCheck,
     interestedArea,
     
  })


  if(!file){
     return res.status(400).json({message:"No file upload"}) ;

  }
  try{
    const file = new File({
      filename:req.body.fileName,

    }) ;

    res.json({message:"Form Successfully Submitted"}) ;
    

  }catch(error){
     console.error("Error uploading File",error) ;
     res.status(500).jsoin({message: "Internal Server error"}) ;
  }
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
