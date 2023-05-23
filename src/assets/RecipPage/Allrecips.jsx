import React, { useEffect, useState, useContext, useMemo } from "react";
import { GetRecipQuery } from "./Recippage";
import noImgfound from "../../bgAssets/trditional bg.jpg";
import Sckelaton from "../Loading/Sckelaton";
import Pagination from "./Pagination";


const Toprecip = () => {
  const recipSearchQuery = useContext(GetRecipQuery);
  const [recip, setRecip] = useState([]);
  const [sckelatonLoading, setSckelatonLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [totelPost, settotelPost] = useState([]);


  useEffect(() => {
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const url =
      "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1f9fcf25a7msh24b86bc3dd54c76p1eae2ajsna624d4085451",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    const apiCalling = async () => {
      setSckelatonLoading(false);
      const api = await fetch(url, options);
      const res = await api.json();
      const finelRes = res.hints;
      settotelPost(finelRes.length);
      const result = finelRes.slice(firstPostIndex, lastPostIndex);
      setRecip(result);
      setSckelatonLoading(true);
    };

    apiCalling();
  }, [currentPage, postPerPage, totelPost]);

  return (
    <>
      <div className="all-top-recip">
        {sckelatonLoading ? (
          <div className="recip-cart-box">
            {recip
              .filter((elem) =>
                recipSearchQuery
                  ? elem.food.knownAs
                      .toLowerCase()
                      .includes(recipSearchQuery.toLowerCase())
                  : true
              )
              .map((items, index) => {
                return (
                  <div className="recip-maincontainer" key={index}>
                    <div className="recip-left">
                      <img
                        src={items.food.image ? items.food.image : noImgfound}
                        alt="image not found"
                      />
                    </div>
                    <div className="recip-right">
                      <div className="recip-heading">
                        <h3>{items.food.knownAs.slice(0, 50)}</h3>
                      </div>
                      <div className="description">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorem facilis possimus ad eveniet distinctio
                          tenetur esse, quae facere unde a!
                        </p>
                      </div>
                      <div className="recip-tags">
                        <span>#{items.food.category}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <Sckelaton />
        )}
        <Pagination
          totalPost={totelPost}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Toprecip;
