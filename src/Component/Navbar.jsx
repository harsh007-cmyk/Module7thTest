import React from 'react'
import './Navbar.css'
import {
  Link,
} from "react-router-dom";
function Navbar(props) {
  return (
    <div className='Nav'>
        <div className='Nav-logo'>
            <h3>AccioJob</h3>
        </div>
        
      
        <nav className='Nav-component'>
          <Link to='/'><div className='Home_Text'>Home</div></Link>  
           <Link to='Shop'> <div className='shopComponent'>Shop</div></Link>
           <Link to='About'><div>About</div></Link>
           <Link to='Blog'><div>Blog</div></Link>
           <Link to='Contact'> <div>Contact</div></Link>
           <Link to='Page'> <div>Pages</div></Link>
          </nav>
       
            
        
        <div className='Nav-icons'>
            <div className='Register'>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99969 6C6.79534 6 7.55841 5.68393 8.12102 5.12132C8.68362 4.55871 8.99969 3.79565 8.99969 3C8.99969 2.20435 8.68362 1.44129 8.12102 0.87868C7.55841 0.316071 6.79534 0 5.99969 0C5.20405 0 4.44098 0.316071 3.87837 0.87868C3.31577 1.44129 2.99969 2.20435 2.99969 3C2.99969 3.79565 3.31577 4.55871 3.87837 5.12132C4.44098 5.68393 5.20405 6 5.99969 6ZM7.99969 3C7.99969 3.53043 7.78898 4.03914 7.41391 4.41421C7.03884 4.78929 6.53013 5 5.99969 5C5.46926 5 4.96055 4.78929 4.58548 4.41421C4.21041 4.03914 3.99969 3.53043 3.99969 3C3.99969 2.46957 4.21041 1.96086 4.58548 1.58579C4.96055 1.21071 5.46926 1 5.99969 1C6.53013 1 7.03884 1.21071 7.41391 1.58579C7.78898 1.96086 7.99969 2.46957 7.99969 3ZM11.9997 11C11.9997 12 10.9997 12 10.9997 12H0.999695C0.999695 12 -0.000305176 12 -0.000305176 11C-0.000305176 10 0.999695 7 5.99969 7C10.9997 7 11.9997 10 11.9997 11ZM10.9997 10.996C10.9987 10.75 10.8457 10.01 10.1677 9.332C9.51569 8.68 8.28869 8 5.99969 8C3.70969 8 2.48369 8.68 1.83169 9.332C1.15369 10.01 1.00169 10.75 0.999695 10.996H10.9997Z" fill="#23A6F0"/>
</svg>
              Login/Register</div>
            <div className='search'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

            </div>
            <div className='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<span>{props.cartItem}</span>

            </div>
            <div className='Favourites'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<span></span>

            </div>
        </div>
    </div>
  )
}

export default Navbar