import React,{useState} from 'react'
import Navbar from '../Component/Navbar';
import Cards from '../Component/Cards';
import Home from '../Component/Home';
import Footer from '../Component/Footer';
import  './Home_page.css';

function Homepage() {
    const [Cart,setCart]=useState('');
    return (
      <div className='Home'> 
        <Navbar cartItem={Cart}/>
        <Home/>
        <h3 className='pdts'>Products</h3>
        <Cards cartItem={Cart} setFunction={setCart}/>
        <Footer/> 
      </div>
        );
}

export default Homepage