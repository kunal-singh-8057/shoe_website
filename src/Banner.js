import React from 'react'
import './Banner.css'
import legs from './Assets5/img13.png'
import sets from './Assets5/img14.png'
import rarrow from './Assets5/img12.png'

const Banner = () => {
  return (
   <>
<div className='bann'>
<h1 className='sl'>Slick</h1>
<img src={legs} className='legs'></img>

<h1 className='bannertext'>
Are you ready to
<br></br>
lead the way
</h1>

<p className='bannerpara'>
Lorem ipsum dolor sit amet, consectetur 
<br></br>
adipiscing elit, sed do.
</p>
<button className='bannerbtn'>Explore</button>
<img src={sets} className='sets'></img>
</div>

<div className='arrows'>
<img src={rarrow} className='left'></img>
<img src={rarrow} className='right'></img>
</div>


</>
  )
}

export default Banner
