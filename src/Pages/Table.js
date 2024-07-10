import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from 'axios';


// const Staffs = () => {
    

// }

const Table = () => {

  const [staffs, setStaffs] = useState([]);
    const [editingStaff, setEditingStaffs ] = useState(null);

    useEffect(() => {
        fetchStaffs();

    }, []);

    const fetchStaffs = async () => {
        try {
            const response = await axios.get('http://localhost:4500/api/v2/Staff')
            setStaffs(response.data);
        }catch (error) {
            console.error('error fetching staffs', error);
        }
    };
  return (
      <div className="table-container">
       
        <table className="styled-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Address</th>
              <th>PhoneNumber</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows with data here */}
            {staffs.map((staffs) => (
              <tr key={staffs.userID}>
                <td>{staffs.userID}</td>
                <td>{staffs.phoneNumber}</td>
                <td>{staffs.FullName}</td>
                <td>{staffs.Address}</td>
              </tr>
            )
            
            
            
            )}
           {/* Add more rows as needed */}
          </tbody>
  
           
          </table>
          
          <button className='up'>Update</button>
          <button className='de'>Delete</button> 
        <button className='bo'>Add</button> 
        
        </div> 
        
      
      
  );
};

export default Table;
