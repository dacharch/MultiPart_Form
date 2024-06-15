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

app.listen(3002,()=>{
    console.log("server is running") ;
})
