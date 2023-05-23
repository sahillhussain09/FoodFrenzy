import React, { useState, useEffect, useMemo, useCallback } from "react";
import NutritionData from "./Nutrition.json";
import "./Nutrition.css";
import { RotatingLines } from "react-loader-spinner";
import Loading from "../Loading/Loading";

const Allnutriton = () => {
  const [loadMore, setLoadMore] = useState(12);
  const [loadingRing, setLoadingring] = useState(false);
  const [loadMoreText, setLoadMoreText] = useState("Load more");
  const [nutritionQuery, setNutritionQuery] = useState();

  const LoadMoreContent = () => {
    setLoadingring(true);
    setTimeout(() => {
      setLoadMore(loadMore + 12);
      setLoadingring(false);
    }, 1000);

    nutrition.length === slicedNutrition.length
      ? setLoadMoreText("No More Content ☹️ ")
      : false;
  };

  // console.log(NutritionData);
  const { nutrition } = NutritionData;
  const slicedNutrition = nutrition.slice(0, loadMore);

  return (
    <div className="nutrition-container">
      <div className="nutrition-top">
        <div className="nutrition-heading">
          <h2>Explore Comprehensive Nutrition Details!!</h2>
        </div>
        <div className="nutrition-searchbar">
          <input
            type="text"
            placeholder="Search Nutritions Here..."
            onChange={(e) => setNutritionQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="nutrition-box">
        {loadingRing ? (
          <Loading />
        ) : (
          slicedNutrition
            .filter((elem) =>
              nutritionQuery
                ? elem.name.toLowerCase().includes(nutritionQuery.toLowerCase())
                : true
            )
            .map((item, key) => {
              return (
                <div className="nutrition-items" key={key}>
                  <div className="nutritionitem-left">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="nutrition-details">
                    <div className="item-name">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="item-details">
                      <div className="item-flex">
                        <li> Fat</li>
                        <span>{item.fat}</span>
                      </div>

                      <div className="item-flex">
                        <li> Fiber </li>
                        <span>{item.fiber}</span>
                      </div>

                      <div className="item-flex">
                        <li> Calories </li>
                        <span>{item.calories}</span>
                      </div>

                      <div className="item-flex">
                        <li> Carbohydrates</li>
                        <span>{item.carbohydrates}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>
      <div className="load-more">
        <button onClick={LoadMoreContent}>
          {" "}
          {loadingRing ? (
            <p className="laading-ring">
              <span>loading...</span>
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="18"
                visible={true}
              />
            </p>
          ) : (
            loadMoreText
          )}{" "}
        </button>
      </div>
    </div>
  );
};

export default Allnutriton;
