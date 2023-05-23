import React from 'react'
import {TiLocation} from "@react-icons/all-files/ti/TiLocation";
import {FiPhoneCall} from "@react-icons/all-files/fi/FiPhoneCall";
import {HiOutlineMail} from "@react-icons/all-files/hi/HiOutlineMail";
import {FaUsers} from "@react-icons/all-files/fa/FaUsers"
import{CgUserlane} from "@react-icons/all-files/cg/CgUserlane";
import {IoLogoFacebook} from "@react-icons/all-files/io/IoLogoFacebook"
import {FaWhatsappSquare} from "@react-icons/all-files/fa/FaWhatsappSquare"
import {FaTwitterSquare} from "@react-icons/all-files/fa/FaTwitterSquare"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-body">
      <div className="about">
      <h2>www.FoodFrenzy.com</h2>
      <p>Thank you for using our recipe website. We hope you found the recipes you were looking for and enjoyed trying them out. Don't forget to bookmark our site and come back for more delicious ideas!</p>
      </div>
      <div className="footer-links">
         <Link to={"/"}>Home</Link>
        <a href="#navbar">Menu</a>
        <Link to={"/cart"} >Cart</Link>
        <Link to={"/singup"}>Join us</Link>
        <a href="#letestrecip">Letest reipes</a>
        <Link to={"/recip"}>Top recips</Link>
        <Link to={"/nutrition"}>Nutrition</Link>
        <Link to={"/broker-container"}>Famous Chefes</Link>
      </div>
      <div className="fotter-adress">
           <div className="footer-info">
            <h3 style={{  color: "rgba(0, 0, 0, 0.79)"}} > <CgUserlane /></h3>
            <h4 >owner ~ bruece frenclyne</h4>
          </div>
          <div className="footer-info ">
            <h3 style={{color: "blue" }} > <TiLocation /></h3>
            <h4 >123 Street, Anytown USA </h4>
          </div>
          <div className="footer-info ">
            <h3 style={{color: "green" }} > <FiPhoneCall/></h3>
            <h4>(123) 456-7890</h4>
          </div>
          <div className="footer-info ">
            <h3 style={{color: "tomato" }} > <HiOutlineMail/></h3>
            <h4>contact@yummyrecipes.com</h4>
          </div>
          <div className="footer-info ">
            <h3 style={{color: 'aqua' }} > <FaUsers/></h3>
            <h4>800-900 employees</h4>
          </div>
      </div>
     </div>

     <div className="fotter-bottom-body">
       <div className="nocopyrights">
        <p> @nocopyrights : 2018 Foodfrenzy pvt ltd.</p>
       </div>
       <div className="social-links">
        <a href="https://www.facebook.com/"> <span style={{color: "blue"}}><IoLogoFacebook /></span></a>
        <a href=""> <span style={{color: "green"}}><FaWhatsappSquare /></span></a>
        <a href="https://twitter.com/explore"> <span style={{color: "blue"}}> <FaTwitterSquare /></span></a>
       </div>
     </div>
    </div>
  )
}

export default Footer
