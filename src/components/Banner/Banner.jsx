import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import search from '../assets/search.svg'
import sidebar from '../assets/sidebar.svg'
import './Banner.css'


const Banner = () => {

  const [isDropdown, setisDropdown] = useState(false)

  return (

    <>
    <div>
            <div className="Banner">
        <div className="phone">
          <img src={phone} alt="" />
          <span>Call: +0123 456789</span>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="mail">
          <img src={mail} alt="" />
          <span>abc@gmail.com</span>
        </div>
        <div className="sideBar">
          <img onClick={()=>setisDropdown(!isDropdown)} src={sidebar} alt="FFF" />
        </div>
      </div>
    </div>


{/* // -------------------------------------NavBar----------------------------------------- */}



<div className={isDropdown?'navBarShown' : 'navBarHidden'} >
<ul >
  <li>Home</li>
  <li>Services</li>
  <li>About</li>
  <li>Blog</li>
  <li>Shop</li>
  <li>Contact</li>
</ul>
<div className="search">
    <input type="text" />
    <button>
    <img src={search} alt="" />
    </button>
  </div>
  <div className="login">login</div>
</div>
    
    
    </>

  )

  }
export default Banner
