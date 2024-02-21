import React from 'react'
import './Services.css'
import Diningtable from '../assets/diningtable-img.png'
import Alcohol from '../assets/alcohol-img.png'
import Coffee from '../assets/coffee-img.png'
import Dinner from '../assets/dinner-img.png'
import Delivery from '../assets/delivery-img.png'
import Breakfast from '../assets/breakfast-img.png'
const Services = () => {
  return (
    <div className='services'>
      <h2>Quick Services</h2>
      <div className="container">
        <div className="card">
        <div className="image">
        <img src={Breakfast} alt="" />
        </div>
            <p>Breakfast</p>
            <div className="more">
                <span>SEE MORE</span>
            </div>
        </div>
        <div className="card">
        <div className="image">
        <img src={Delivery} alt="" />
        </div>
            <p>Delivery</p>
            <div className="more">
                <span>SEE MORE</span>
            </div>
        </div>
        <div className="card">
        <div className="image">
        <img src={Dinner} alt="" />
        </div>
            <p>Dinner</p>
            <div className="more">
                <span>SEE MORE</span>
            </div>
        </div>
        <div className="card">
        <div className="image">
        <img src={Coffee} alt="" />
        </div>
            <p>Coffee</p>
            <div className="more">
                <span>SEE MORE</span>
            </div>
        </div>

        <div className="card">
        <div className="image">
        <img src={Alcohol} alt="" />
        </div>
            <p>Alcohol</p>
            <div className="more">
                <span>SEE MORE</span>
            </div>
        </div>
        <div className="card">
        <div className="image">
        <img src={Diningtable} alt="" />
        </div>
            <p>Diningtable</p>
            <div className="more">
                <span>SEE MORE</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
