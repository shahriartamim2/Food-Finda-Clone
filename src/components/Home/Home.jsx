import React from 'react'
import { useState } from 'react'
import './Home.css'
import search from '../assets/search.svg'
import downIcon from '../assets/downicon.svg'

// import bg_image from '../body-bg.png'
const Home = () => {


  const [showOp, setshowOp] = useState(false)

  const handleClick = ()=>{
    setshowOp(!showOp)
  }

  return (
    <div className='Home'>
        <h2 className='heading'>Find The Best Restaurants </h2>
        <h2 className='heading'>Cafes And Bars in</h2>
      <h1 className='city'>Your City</h1>
      <div className='cat-search'>
        <div className="cate">
        <div onClick={handleClick} className='category' >
          <span>Category</span>
          <img src={downIcon} alt="" />
        </div>
        <div className={showOp?'showOption':'hideOption'}><ul>
            <li>Option1</li>
            <li>Option2</li>
            <li>Option3</li>
            </ul>
        </div>
        </div>
        <div className='searchCity'>
        <input className='input' type="text" /><button className='search-btn'><img src={search} alt="" /></button>
        </div>
      </div>

      <button className='order'>Order Now</button>

    </div>
  )
}

export default Home
