import React, { useState } from 'react';
import './App.css';

import VendorList from './Components/VendorList';
import VendorForm from './Components/VendorForm';
import EmployeeForn from './Components/EmployeeForn';
import EmployeeList from './Components/EmployeeList';

function App() {
  const [vendorslist, setVendors] = useState([]);
  const [employee, setEmployee] = useState([]);

  return (
    <div className="App">
      <h1>Admin Management</h1>
      <EmployeeForn setEmployee={setEmployee}/>
      <VendorForm setVendors={setVendors}/>
      <VendorList/>
      <EmployeeList/>
    </div>
  );
}

export default App;
