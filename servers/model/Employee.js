import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
    name:String,
    designation:String,
    ctc:Number,
    email:{
        type:String,
        unique:true
    }
})

export default mongoose.model("Employee",employeeSchema);