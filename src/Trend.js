import React from 'react'
import img7 from './Assets5/img8.png'
import img8 from './Assets5/img9.png'
import img9 from './Assets5/img10.png'
import './Trend.css'


const Trend = () => {
  return (
   <>
<div className='h2'>
<div className='psu'></div>
<h1 className='t'>Our Trending Shoes</h1>

<h1 className='sub1'>
Most popular <br></br>
products
</h1>
<p className='para2'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
</p>
<button className='btn2'>Explore More</button>


<div className='casule'>

<div className='div1'>
<img src={img7} className='img7'></img>
<h1 className='ch'>Running Canvas Shoes</h1>
<h2 className='p2'>Rs . 2999.00</h2>
<button className='btn3'>Buy Now</button>
</div>

<div className='div2'>
<img src={img8} className='img7'></img>
<h1 className='ch'>Running Canvas Shoes</h1>
<h2 className='p2'>Rs . 2999.00</h2>
<button className='btn3'>Buy Now</button>
</div>

<div className='div3'>
<img src={img9} className='img7'></img>
<h1 className='ch'>Running Canvas Shoes</h1>
<h2 className='p2'>Rs . 2999.00</h2>
<button className='btn3'>Buy Now</button>
</div>


</div>
</div>
</>
  )
}

export default Trend
