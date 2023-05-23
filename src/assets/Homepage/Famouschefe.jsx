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
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1f9fcf25a7msh24b86bc3dd54c76p1eae2ajsna624d4085451",
        "X-RapidAPI-Host":
          "dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com",
      },
    };

    fetch(
      "https:dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?format=json&gender=b&cc=all&email=gmail.com%2Cyahoo.com&pwlen=12&ip=a&phone=l%2Ct%2Co&seed=helloworld&count=20&maxage=40&minage=20&uuid=1&color=1&lic=1&images=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setBrokersList(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
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
                  <img src={elem.image} alt="" />
                  <div className="info" key={index + 3}>
                    <h4>
                      <span style={{ color: "black", marginRight: "2px" }}>
                        <BiUser />
                      </span>
                      {elem.firstname} {elem.lastname}
                    </h4>
                    <span className="bihome" style={{ color: "tomato" }}>
                      {" "}
                      <span style={{ color: "green", marginRight: "2px" }}>
                        {" "}
                        <BiHome />{" "}
                      </span>{" "}
                      {elem.location.city}
                    </span>
                  </div>
                </div>
                <div className="dawn-cont" key={index + 4}>
                  <h5>{elem.phone.mobile}</h5>
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
