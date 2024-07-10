import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Performance from './Pages/Performance';
import Task from './Pages/Task';
import NavBar from './Component/NavBar';
import MenuIcon from './Component/MenuIcon';
import SideBar from './Component/SideBar';
import Table from './Pages/Table';
import Contact from './Pages/Contact';
import About from './Pages/About';


const App = () => {
  return (
   
   
   
  <div className= 'App'>
    <BrowserRouter>
    <NavBar/>
    <MenuIcon/>
    <SideBar/>
      <Routes>
        <Route path='Login' element = {<Login/>}/>
        <Route path='Register' element = {<Register/>}/>
        <Route path='dashboard' element = {<Dashboard/>}/>
        <Route path='performance' element = {<Performance/>}/>
        <Route path='task' element = {<Task/>}/>
        <Route path='table' element = {<Table/>}/>
        <Route path='contact' element = {<Contact/>}/>
        <Route path='about' element = {<About/>}/>
        

      </Routes>


    </BrowserRouter>
      
    </div>
  )
}

export default App