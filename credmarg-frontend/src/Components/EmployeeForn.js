import React, { useState } from 'react'
import axios from 'axios';

const EmployeeForn = ({setEmployee}) => {
    const[employee,setEmploye]=useState({
        name:"",
        designation:"",
        ctc:"",
        email:""

    })

console.log(employee.name);


const handleSubmit=async(e)=>{
    e.preventDefault();

    const newEmployee={
        name:employee.name,
        designation:employee.designation,
        ctc:employee.ctc,
        email:employee.email,
    }
    try{
        const res=await axios.post('http://localhost:8000/api/employee/create',newEmployee)
        if(!res){
            alert("please cheack data")
        }
        setEmployee(prev=>[...prev,res.data]);
        setEmploye({
            name:"",
            designation:"",
            ctc:"",
            email:""
    });
        alert('sent succesfullly')
    }
    catch(error){
        alert("somethong went wrong")
    }
}


  return (
    <div>
        <h1>EmployeeForm</h1>
        <form onSubmit={handleSubmit}>
        <input value={employee.name} onChange={(e)=>setEmploye({...employee,name:e.target.value})} placeholder='enter name'/> <br />
         <input value={employee.designation} onChange={(e)=>setEmploye({...employee,designation:e.target.value})} placeholder='enter designation'/><br />
       <input  value={employee.ctc} onChange={(e)=>setEmploye({...employee,ctc:e.target.value})} placeholder='enter ctc'/><br />
        <input value={employee.email} onChange={(e)=>setEmploye({...employee,email:e.target.value})} placeholder='enter email'/><br />
        <button>Add Employee Form</button>
        </form>
    </div>
  )
}

export default EmployeeForn