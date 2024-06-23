import React from 'react'
import social1 from './Assets5/img24.png'
import social2 from './Assets5/img23.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='fb'>

        <div className='col1'>
        <h1 className='footh'>Slick</h1>

        <p>
        Lorem ipsum dolor sit amet, consectetur <br></br>
        adipiscing elit, sed do eiusmod tempor  <br></br>
        incididunt ut labore et dolore magna aliqua.
        </p>

        <div className='social'>
        <img src={social1}></img>
        <img src={social2} className='social2'></img>
        </div>


        </div>


        <div className='ss2'>
        <h1 className='ss2h'>Subscribe to our news latter</h1>
        <input className='in' placeholder='Enter Email'></input>
        </div>


        <div className='sidebar'>
        <h3>Quick Link’s</h3>
        <ul>
            <li>
              <h4>Home</h4>
              <h4>Shop</h4>
              <h4>Collection</h4>
              <h4>Contact</h4>
              <h4>Privacy</h4>
            </li>
        </ul>
        </div>

        <div className='flast'>
        <div className='pe15'></div>
        <br></br>
        <h5>slick.com©allrightreserv</h5>
        </div>

        </div>
    </>
  )
}

export default Footer
