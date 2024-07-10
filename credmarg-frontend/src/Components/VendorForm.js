import axios from 'axios';
import React, { useState } from 'react'

const VendorForm = ({setVendors}) => {
const [details,setDetails]=useState({
    name:"",
    email:"",
    upi:""
})

const handleSubmit=async(e)=>{
e.preventDefault();
const newVendor={
    name:details.name,
    email:details.email,
    upi:details.upi
}
console.log(newVendor);
try {
    const response = await axios.post('http://localhost:8000/api/vendor/create', newVendor);
    if(!response){
        alert("data not found")
    }
    alert('send success')
    setVendors(prev=>[...prev,response.data]);
    setDetails([])

} catch (error) {
    console.log(error);
    alert('something went wrong')
}
}

  return (
    <div>
        <h1>vendorform</h1>
        <form onSubmit={handleSubmit}>
       <input value={details.name} onChange={(e)=>setDetails({...details,name:e.target.value})} placeholder='enter name'/> <br />
       <input value={details.email} onChange={(e)=>setDetails({...details,email:e.target.value})} placeholder='enter email'/>  <br />
       <input value={details.upi} onChange={(e)=>setDetails({...details,upi:e.target.value})}  placeholder='enter upi'/>  <br />
       <button>Add Vendors</button>
       </form>
    </div>
  )
}

export default VendorForm