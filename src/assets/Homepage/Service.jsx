import React from "react";
import "./Home.css"
import "../Homepage/Home.css"
import orderImg from "../../bgAssets/gifs-de-delivery-5.gif";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { BiDish } from "@react-icons/all-files/bi/BiDish";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FaFreeCodeCamp } from "@react-icons/all-files/fa/FaFreeCodeCamp";


const Service = () => {
  return (
    <div className="service-contaner" id="services-container">
      <div className="left-img">
        <img src={orderImg} alt="" />
      </div>
      <div className="order-body">
        <h2>Take a look at the benifits we offer for you!!</h2>
        <p>
          Browse through our menu and place your order online. It's quick, easy,
          and hassle-free!
        </p>
        <div className="order-services">
          <div className="service-icons">
            <h2 style={{ color: "red", fontSize: "1.5rem" }}>
              <FaFreeCodeCamp />
            </h2>
            <span> Hot and Fresh food </span>
          </div>

          <div className="service-icons">
            <h2 style={{ color: "green", fontSize: "1.5rem" }}>
              <FiPhoneCall />
            </h2>
            <span> 24x7 Custemer services</span>
          </div>

          <div className="service-icons">
            <h2 style={{ color: "blue", fontSize: "1.5rem" }}>
              <GoLocation />
            </h2>
            <span> Diliver any Location </span>
          </div>

          <div className="service-icons">
            <h2 style={{ color: "tomato", fontSize: "1.5rem" }}>
              <BiDish />
            </h2>
            <span> Top Rated food</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
