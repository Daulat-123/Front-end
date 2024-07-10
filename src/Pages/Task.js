import React from 'react';
import './Task.css';

const TaskManagement = () => {
  return (
    <div className="task-managaments">
      <h1>Task Management</h1>
      <form>
        <div className="forms-groups">
          <label htmlFor="fullName">Full name:</label>
          <input type="text" id="fullName" name="fullName" />
        </div>
        <div className="forms-groups">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
        </div>
        <div className="forms-groups">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" />
        </div>
        
        <div className="forms-groups">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        
        <button type="submit" className="submit-button">Assign Task</button>
      </form>
    </div>
  );
};

export default TaskManagement;
