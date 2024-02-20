import React from 'react'
import './Home.css'

// import bg_image from '../body-bg.png'
const Home = () => {
  return (
    <div className='total'>
        <h2 className='heading'>Find The Best Restaurants </h2>
        <h2 className='heading'>Cafes And Bars in</h2>
      <h1 className='city'>Your City</h1>
      <div className='cat-search'>
        <div className="cate">
        <div className='category'>Category</div>
        {/* <div className="option"><ul>
            <li>Option1</li>
            <li>Option2</li>
            <li>Option3</li>
            </ul></div> */}
        </div>
        <div className='srch'>
        <input className='input' type="text" /><button className='search-btn'>Search</button>
        </div>
      </div>

      <button className='order'>Order Now</button>

      <div></div>
    </div>
  )
}

export default Home
