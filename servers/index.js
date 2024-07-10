import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import employeRoute from './route/Employeeroutes.js'
import vendorRoute from './route/Vendoroutes.js'
import emailRoute from './route/Emailroute.js'
const app=express();

app.use(cors());
app.use(bodyParser.json());

dotenv.config();

const PORT=process.env.PORT || 7000;
const URL=process.env.MONGOURL;

mongoose.connect(URL).then(()=>{

    console.log("connected succesfully");

   
    app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`);
    })
    
}).catch((error)=>{console.log(error);})


app.use('/api/employee',employeRoute);
app.use('/api/vendor',vendorRoute);
app.use('/api/send-email',emailRoute);