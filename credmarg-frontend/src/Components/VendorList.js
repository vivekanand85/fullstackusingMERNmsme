import React, { useEffect, useState } from 'react'
import axios from 'axios';
const VendorList = () => {
    const[vendors,setVendors]=useState([]);
    const[selectedVendors,setSelectedVendors]=useState([]);

    useEffect(()=>{
        const fetchVendor=async()=>{
            try{  
           const response= await axios.get('http://localhost:8000/api/vendor/getvendor');
           console.log(response.data);
           setVendors(response.data);
        }catch(error){
            console.error('Error fetching vendors', error);

        }
        }
        fetchVendor()
    },[])

    const sendEmail=async()=>{
        try{ 
        await axios.post('http://localhost:8000/api/send-email/create',{ vendorEmails: selectedVendors })
        alert("email sent succsfully")
    }catch(error){
        console.log('Error sending eamisl',error);
        alert('Error sending emails')
    }
}

    const handleCheckboxChange = (email) => {
        setSelectedVendors(prev =>
          prev.includes(email) ? prev.filter(e => e !== email) : [...prev, email]
        );
    };
    
    return (
      <div>
        <h1>Vendor List</h1>
        <ul>
          {vendors.map((vendor,index) => (
            <li key={index}>
              {vendor.name} - {vendor.email} - {vendor.upi}
              <input
                type="checkbox"
                value={vendor.email}
                onChange={() => handleCheckboxChange(vendor.email)}
              />
            </li>
          ))}
        </ul>
        <button onClick={sendEmail}>Send Email</button>
      </div>
    );
  };
  
export default VendorList;