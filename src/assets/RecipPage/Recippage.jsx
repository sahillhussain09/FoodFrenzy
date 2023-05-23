import React, { useState, createContext } from "react";
import Navbar from "../Header/Navbar";
import Allrecips from "./Allrecips";
import "./recip.css";
import Footer from "../Homepage/Footer";
import "./Responsive.css"

export const GetRecipQuery = createContext();

const Recippage = () => {
  const [searchQuery, setSearchQuery] = useState();


  return (
    <>
      <GetRecipQuery.Provider value={searchQuery}>
        <div className="recip-container">
          <Navbar />
          <div className="all-recip">
            <div className="recip-searchbar">
              <div className="searchbar-heading">
                <h2>
                  Our all recip here, <span>Search</span> and <span>Find</span>{" "}
                  best recip!
                </h2>
              </div>
              <div className="search-bar">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="search here..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <Allrecips />
          <div className="recip-footer">
            <Footer />
          </div>
        </div>
      </GetRecipQuery.Provider>
    </>
  );
};

export default Recippage;
