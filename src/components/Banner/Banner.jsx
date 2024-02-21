import React from 'react'
import { Link } from "react-router-dom";
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
  <Link to="/" >
      {" "}
      <li>Home</li>
  </Link>

  <Link to="/services">
      {" "}
      <li>Services</li>
  </Link>
  <Link to="/about">
      {" "}
      <li>About</li>
  </Link>
  <Link to="/blog">
      {" "}
      <li>Blog</li>
  </Link>
  <Link to="/shop">
      {" "}
      <li>Shop</li>
  </Link>
  <Link to="/contact">
      {" "}
      <li>Contact</li>
  </Link>
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
