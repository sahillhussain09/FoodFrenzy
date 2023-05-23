import React, { useState } from "react";
// import "../Homepage/Home.css";
import "./Home.css"
import ForgroundText from "./ForgroundText";
import Letestrecip from "./Letestrecip";
import Famouschefe from "./Famouschefe";
import Service from "./Service";
import Footer from "./Footer";
import Counter from "../Loading/Counter";


const Home = ({ cartItems, setCarditems }) => {
  return (
    <div>
      <ForgroundText />
      <div className="search-box-header">
        <div className="counter">
          <Counter start={0} end={17} text={"Award Winning"} />
          <Counter start={0} end={567} text={"Daily Visiters"} />
          <Counter start={0} end={1700} text={"Total Users"} />
        </div>
      </div>
      <Letestrecip cartItems={cartItems} setCarditems={setCarditems} />
      <Service />
      <Famouschefe />
      <Footer />
    </div>
  );
};

export default Home;
