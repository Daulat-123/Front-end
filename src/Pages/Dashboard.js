import React from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="inner-container">
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li><a href="#add-update-employee">Add/Update Employee</a></li>
            <li><a href="/Performance"  className= "perfomance-link">Performance Reports</a></li>
            <li><a href="/task"  className= "perfomance-link" >Task Management</a></li>
          </ul>
        </nav>
        <h2>Add/Update Employee</h2>
        <form>
          <div className="form-group">
            <label htmlFor="employee-FullName">Employee fullName:</label>
            <input type="text" id="employee-fullname" name="employee-fullname" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone-Number:</label>
            <input type="text" id="phonenumber" name="phonenumber" required />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
