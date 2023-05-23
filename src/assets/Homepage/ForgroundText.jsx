import React from 'react'
import { Link } from 'react-router-dom'

const ForgroundText = () => {
  return (
    <>
    <div className='forground-text'>
      <h2>Food<span>Frenzy</span> : your ultimate cooking companion</h2>
      <p>Looking for a delicious and easy-to-make meal idea? Try this quick and flavorful Mediterranean Quinoa Salad! Simply cook quinoa according to package instructions and toss with diced cucumbers,</p>
      <Link to={"/singup"} className="btn">Join us</Link>
    </div>
    </>
  )
}

export default ForgroundText
