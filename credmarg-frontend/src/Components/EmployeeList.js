import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmployeeList = () => {
    const[employee,setEmployee]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
            const result=await axios.get('http://localhost:8000/api/employee/getall');
            console.log('result' ,result);
            if(!result){
                alert('there is no data')
            }
        
            setEmployee(result.data);
            }catch(error){
                alert('something went wrong')
            }
        }
        fetchData();
    },[])

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employee.map((employees,index) => (
          <li key={index}>
            {employees.name} - {employees.designation} - {employees.ctc} - {employees.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmployeeList