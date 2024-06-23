import React from 'react'
import c1 from './Assets5/img21.png'
import s1 from './Assets5/img26.png'
import s2 from './Assets5/img27.png'
import c2 from './Assets5/img22.png'
import './Client.css'

const Clients = () => {
  return (
 <>

<div className='che'>
<div className='pe3'></div>
<h1>Clients Testimonials</h1>
<div className='pe4'></div>
</div>


<div className='ff1'>

<div className='ff2'>
<img src={c1}></img>
<h1 className='me'>Meythli odex</h1>
</div>

<div className='setstars'>
<img src={s1}></img>
<img src={s1}></img>
<img src={s1}></img>
<img src={s1}></img>
<img src={s2}></img>
</div>

<p className='fp'>
Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>
elit, sed do eiusmod tempor incididunt ut labore et <br></br>
dolore magna aliqua.
</p>
</div>




<div className='ff3'>

<div className='ff4'>
<img src={c2}></img>
<h1 className='me'>Meythli odex</h1>
</div>

<div className='setstars1'>
<img src={s1}></img>
<img src={s1}></img>
<img src={s1}></img>
<img src={s1}></img>
<img src={s2}></img>
</div>

<p className='fp1'>
Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>
elit, sed do eiusmod tempor incididunt ut labore et <br></br>
dolore magna aliqua.
</p>
</div>
 </>
  )
}

export default Clients
