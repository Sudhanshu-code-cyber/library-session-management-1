import mongoose from "mongoose";

const NewSessionSchema = new mongoose.Schema({
    studentName:{type:String,required:true},
    fatherName:{type:String,required:true},
    add:{type:String,required:true},
    pin:{type:Number,required:true},
    mobile:{type:Number,required:true},
    email:{type:String,required:true},
})

export default mongoose.models.NewSession || mongoose.model("NewSession", NewSessionSchema);