import React from 'react'
import Header from './Header'
import Stripe from './Stripe'
import Trend from './Trend'
import Banner from './Banner'
import Selling from './Selling'
import Clients from './Clients'
import Footer from './Footer'

const App = () => {
  return (
   <>
    <Header/>
    <br></br>
    <Stripe/>
    <br></br>
    <Trend/>
    <br></br>
    <Banner/>
    <br></br>
    <Selling/>
    <br></br>
    <Clients/>
    <br></br>
    <Footer/>
   </>
  )
}

export default App

