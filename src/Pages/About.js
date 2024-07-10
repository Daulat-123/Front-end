import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Staff Management System</h1>
      <p>
        Our Staff Management System is designed to streamline and optimize the management of staff within an organization. 
        The system aims to simplify the process of handling employee records, tracking performance, and managing payroll, 
        thus allowing HR departments to focus on more strategic tasks.
      </p>
      
      <h1>Aims of the Project</h1>
      <ul>
        <li>To provide a centralized platform for managing employee information.</li>
        <li>To improve the efficiency of HR operations through automation.</li>
        <li>To ensure accurate and timely payroll processing.</li>
        <li>To facilitate performance tracking and management.</li>
      </ul>

      <h1>Benefits of the System</h1>
      <ul>
        <li><strong>Efficiency:</strong> Automates repetitive tasks, reducing the workload of HR staff.</li>
        <li><strong>Accuracy:</strong> Minimizes errors in employee records and payroll calculations.</li>
        <li><strong>Accessibility:</strong> Provides a centralized database that can be accessed from anywhere.</li>
        <li><strong>Scalability:</strong> Can be easily scaled to accommodate the growth of the organization.</li>
        <li><strong>Compliance:</strong> Helps ensure compliance with labor laws and regulations.</li>
      </ul>
    </div>
  );
};

export default About;
