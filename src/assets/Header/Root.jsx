import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../Homepage/Home";

const Root = ({ cartItems, setCarditems }) => {
  return (
    <div>
      <Outlet />
      <Navbar />
      <Home cartItems={cartItems} setCarditems={setCarditems} />
    </div>
  );
};

export default Root;
