import React from "react";
import { useState, useEffect } from "react";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { BiHome } from "@react-icons/all-files/bi/BiHome";
import { AiFillCaretLeft } from "@react-icons/all-files/ai/AiFillCaretLeft";
import { AiFillCaretRight } from "@react-icons/all-files/ai/AiFillCaretRight";
import { RotatingLines } from "react-loader-spinner";
import { GiForkKnifeSpoon } from "@react-icons/all-files/gi/GiForkKnifeSpoon";
import { IoLogoTwitter } from "@react-icons/all-files/io/IoLogoTwitter";

const Famouschefe = () => {
  const [brokersList, setBrokersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const box = document.querySelector(".main-container");

  const scrollLeft = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const scrollRight = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  useEffect(() => {
    setLoading(true);

    const headers = {
      'app-id': "646e03775ac8d2f13505334c"
    };

    const ApiData = async() => {
       const res = await fetch("https://dummyapi.io/data/v1/user?limit=30", {headers});
       const result = await res.json();
       setBrokersList(result.data)
       setLoading(false)
    }
    ApiData();
  }, []);


  return (
    <div id="famous-chef" className="container">
      <h2 className="heading-container">
        Our most famous chef!{" "}
        <span style={{ color: "rgb(255, 44, 7)" }}>
          <GiForkKnifeSpoon />
        </span>
      </h2>
      <h2 className="scrollLeft" onClick={scrollLeft}>
        <span style={{color: "purple"}}>
          <AiFillCaretLeft />
        </span>
      </h2>
      <h2 className="scrollRight" onClick={scrollRight}>
        <span  style={{color: "purple"}}>
          <AiFillCaretRight />
        </span>
      </h2>
      <div className="main-container">
        {loading ? (
          <div className="loading-spiner">
            <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
          </div>
        ) : (
          brokersList.map((elem, index) => {
            return (
              <div
                className="broker-container"
                id="broker-container"
                key={index + 1}
              >
                <div className="head-cont" key={index + 2}>
                  <img src={elem.picture} alt="" />
                  <div className="info" key={index + 3}>
                    <h4>
                      <span style={{ color: "black", marginRight: "2px" }}>
                        <BiUser />
                      </span>
                      {elem.firstName} {elem.lastName}
                    </h4>
                    <span className="bihome" style={{ color: "tomato" }}>
                      {" "}
                      <span style={{ color: "green", marginRight: "2px" }}>
                        {" "}
                        <BiHome />{" "}
                      </span>{" "}
                      world wild
                    </span>
                  </div>
                </div>
                <div className="dawn-cont" key={index + 4}>
                  <h5>{Math.floor(Math.random() * 10000)} {Math.floor(Math.random() * 10000)} {Math.floor(Math.random() * 10000)}</h5>
                  <a className="tw-btn" href="https://twitter.com/">
                    <IoLogoTwitter />
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Famouschefe;
