import React from 'react'
import './Selling.css'
import img15 from './Assets5/img15.png'
import img16 from './Assets5/img16.png'
import img17 from './Assets5/img17.png'
import img18 from './Assets5/img18.png'
import img19 from './Assets5/img19.png'
import img20 from './Assets5/img20.png'
import dot from './Assets5/dot.png'
import up from './Assets5/up.png'
const Selling = () => {
  return (
   <>
<div className='b5'>
<div className='section'>
<div className='pe1'></div>
<h1>Best Selling</h1>
<div className='pe2'></div>
</div>
<div className='setbtns'>
<button className='bm'>Men</button>
<button className='ba'>Women</button>
<button className='ba'>Boy</button>
<button className='ba'>Child</button>
</div>

<div className='pads'>

<div className='c1'>
<img src={img15} className='img15'></img>
<button className='btnn'>New</button>
<h1 className='n1'>Formal canvas shoe for man</h1>
<div className='pp'>
<h3>₹2999.00</h3>
<h5>₹4999.00</h5>
<img src={dot} className='dot'></img>
<img src={up} className='up'></img>
</div>
</div>



<div className='c1'>
<img src={img16} className='img15'></img>
<button className='btnn'>New</button>
<h1 className='n1'>Sneakers shoe for man</h1>
<div className='pp'>
<h3>₹2999.00</h3>
<h5>₹4999.00</h5>
<img src={dot} className='dot'></img>
<img src={up} className='up'></img>
</div>
</div>


<div className='c1'>
<img src={img17} className='img15'></img>
<button className='btnn'>New</button>
<h1 className='n1'>Slick Sneakers shoe</h1>
<div className='pp'>
<h3>₹2999.00</h3>
<h5>₹4999.00</h5>
<img src={dot} className='dot'></img>
<img src={up} className='up'></img>
</div>
</div>

</div>
</div>







/*seprate*/


<div className='pb'>
<div className='pads2'>

<div className='c1'>
<img src={img18} className='img15'></img>
<button className='btnn'>New</button>
<h1 className='n1'>Formal canvas shoe for man</h1>
<div className='pp'>
<h3>₹2999.00</h3>
<h5>₹4999.00</h5>
<img src={dot} className='dot'></img>
<img src={up} className='up'></img>
</div>
</div>



<div className='c1'>
<img src={img19} className='img15'></img>
<button className='btnn'>New</button>
<h1 className='n1'>Sneakers shoe for man</h1>
<div className='pp'>
<h3>₹2999.00</h3>
<h5>₹4999.00</h5>
<img src={dot} className='dot'></img>
<img src={up} className='up'></img>
</div>
</div>


<div className='c1'>
<img src={img20} className='img15'></img>
<button className='btnn'>New</button>
<h1 className='n1'>Slick Sneakers shoe</h1>
<div className='pp'>
<h3>₹2999.00</h3>
<h5>₹4999.00</h5>
<img src={dot} className='dot'></img>
<img src={up} className='up'></img>
</div>
</div>

</div>
</div>


</>
  )
}

export default Selling
