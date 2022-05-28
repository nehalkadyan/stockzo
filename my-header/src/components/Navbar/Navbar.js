import React from 'react'
import './navbar.css';
import {SiNextdotjs} from 'react-icons/si';
import {GiHamburgerMenu} from 'react-icons/gi';

function Navbar() {
  return (
    <>
      <nav className='main-nav'>
        {/* Logo */}

        <div className='logo'>
          <h2>STOCKZO</h2>
        </div>

        {/* Menu */}
         
         <div className='menu-list'>
             <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Contact</a></li>
             </ul>
         </div>

         {/* Social Media Icons */}

         <div className='social-media'>
           <div className="social-media-desktop">
              <ul>
                 <li><a href="https://nextjs.org/"><SiNextdotjs /></a></li>
              </ul>
           </div> 

           <div className='hamburger-menu'>
               <ul>
                 <li><a href="#"> <GiHamburgerMenu /></a></li>
               </ul>
           </div>
          </div>
          </nav>
           <div className='hero-section'>
               <p></p>
               <h1>Work in Progress</h1>
               

           </div>
           <div className='photo'>
           <img src="./assets/logo.jpeg" alt="photo"/>
           </div>

        

     
    </>
  )
}

export default Navbar
