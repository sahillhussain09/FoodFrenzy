import React from 'react'
import Navbar from '../Header/Navbar'
import Allnutriton from './Allnutriton'
import Footer from '../Homepage/Footer'
import "./Nutrition.css"

const Nutritions = () => {
  return (
    <div className='nutrition-page'>
    <Navbar />
    <Allnutriton /> 
    <Footer />
    </div>
  )
}

export default Nutritions
