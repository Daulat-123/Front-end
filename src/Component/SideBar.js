import React from 'react';
import './SideBar.css';

const SideBar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-nav">
        <li><a href="/Dashboard " className="sidebar-item">Dashboard </a></li>
        <li><a href="/Dashboard " className="sidebar-item">Add/Update Employee </a></li>
        <li><a href="/Performance "  className="sidebar-item">Performance Report </a></li>
        <li><a href="/task "  className="sidebar-item">Task Management </a></li>
       
      </ul>
    </aside>
  );
};

export default SideBar;
