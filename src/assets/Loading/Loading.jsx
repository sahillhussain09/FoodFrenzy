import React from 'react'
import "./Sckelaton.css"

const Loading = () => {
  return (
    <div className="all-top-recip">
      <div className="recip-cart-box">
        {[...Array(10)].map((_, index) => {
          return (
            <div className="recip-maincontainer" key={index}>
              <div className="recip-left skeleton"></div>
              <div className="recip-right">
                <div className="recip-heading skeleton"></div>
                <div className="description skeleton"></div>
                <div className="recip-tags">
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Loading
