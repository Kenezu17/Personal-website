import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './page/homepage'
import About from './page/aboutpage'
import Contact from './page/contact'
import  Navbar  from './components/navbar';
import Project from './page/project'
import Certificate from './page/certificate'



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
     
      <Route path='/' element={<Home/>}/>
       <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      
      <Route path='/contact' element={<Contact/>}/>
     <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </>
  )
}

export default App