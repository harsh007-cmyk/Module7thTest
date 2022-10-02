
import './App.css';
import React from 'react';
import Homepage from './Pages/Homepage';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Shop from './Pages/Shop';
import {BrowserRouter,
Routes,
Route,
} from "react-router-dom";
import Page from './Pages/Page';
import Contact from './Pages/Contact';
import Routing from './Pages/Routing';
 
function App() {
  
  return (
  <>
   <BrowserRouter>
   
    <Routes>
      
     <Route path='/' element={<Homepage/>}/>

      
     <Route path='Blog' element={
     <>
     <Routing/>
     <Blog/>
     </>
     
     }/>
      <Route path='About' element={
      <>
      <Routing/>
      <About/>
      </>
    }/>
      <Route path='Shop' element={
      <>
      <Routing/>
      <Shop/>
      </>}/>
      <Route path='Page' element={
        <>
        <Routing/>
        <Page/>
        </>}/>
      <Route path='Contact' element={
        <>
        <Routing/>
        <Contact/>
        </>
      }/>
      
    </Routes>
  </BrowserRouter>
  </>
      );
}

export default App;
