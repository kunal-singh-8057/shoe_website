import React from 'react'
import img2 from './Assets5/img2.png'
import img3 from './Assets5/img3.png'
import img4 from './Assets5/img4.png'
import img1 from './Assets5/img1.png'
import './Header.css'

const Header = () => {
  return (
   <>
   <div className='header'>
   <h1 className='h1'>Slick</h1>
   
    <ul>
        <li>
            <a href='#'>Home</a>
            <a href='#'>Shop</a>
            <a href='#'>Collection</a>
            <a href='#'>Customize</a>
        </li>
    </ul>
    
    <div className='icon'>
    <img src={img2} className='img2'></img>
    <img src={img3} className='img3'></img>
    <img src={img4} className='img4'></img>
    </div>

<h1 className='sole'>Find Your 
<br></br>Sole Mate 
<br></br>With Us</h1>

<p className='para1'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
</p>

<button className='btn1'>Shop Now</button>

<h1 className='u'>ULTIMATE</h1>

<img src={img1} className='img1'></img>

<div className='st'>
<h1>Trendy slick pro</h1>
<p className='price'>₹ 3999.00</p>
</div>
</div>
   
   </>
  )
}

export default Header
