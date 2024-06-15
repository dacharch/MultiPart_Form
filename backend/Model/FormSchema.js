const mongoose = require('mongoose') ;

const {Schema} = mongoose ;

const personalInfo = new Schema({
    fullName:{type:String,required:true},
    dateOfBirth: {type:Date,required:true},
    email: {type:String,required:true},
    phoneNumber: {type:Number, required: true},

}) ;

const technicalSkills = new Schema({
     programmingLanguages: {
         type:String,
         required: true,

     },
     experience: {
        type:String,
        required:true,

     },
     developmentCheck:[
         {
            type:String,
            required:true,
         }
     ],
     interestedArea:[
         {
            type:String,
         },
     ],
}) ;

const fileSchema  =new mongoose.Schema({
    filename:String,
    uploadDate:{
        type:Date,
        default:Date.now,
    }
}) ;

const Personal = mongoose.model ("PersonalInfo",personalInfo) ;
const Skills =  mongoose.model ("TechnicalSkills", technicalSkills) ;
const File  = mongoose.model("File", fileSchema) ;


module.exports =  {Personal,Skills, File} ;