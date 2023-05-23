import React from "react";
import { useState, useEffect } from "react";
import { BiDish } from "@react-icons/all-files/bi/BiDish";
import "react-loading-skeleton/dist/skeleton.css";
import { ImArrowDown2 } from "@react-icons/all-files/im/ImArrowDown2";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Letestrecip = ({ cartItems, setCarditems }) => {
  const [loading, setLoading] = useState(false);

  const [letestrecip, setLetestRecip] = useState([]);
  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1f9fcf25a7msh24b86bc3dd54c76p1eae2ajsna624d4085451",
        "X-RapidAPI-Host": "pizzaallapala.p.rapidapi.com",
      },
    };

    fetch("https://pizzaallapala.p.rapidapi.com/productos", options)
      .then((response) => response.json())
      .then((response) => {
        setLetestRecip(response.productos.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const cartItemsAdd = (item) => {
    console.log(cartItems, item);
    const itemPresent = cartItems.some((elem) => elem.id === item.id);
    if (itemPresent) {
      toast.warning("Oops! - items is allreday added");
    } else {
      setCarditems([...cartItems, item]);
      toast.success("successfuly - item added!!");
    }
  };

  return (
    <div className="letestrecip" id="letestrecip">
      <div className="heading">
        <h1>
          Our letest recipes
          <span>
            <BiDish />
          </span>
        </h1>
      </div>

      <div className="flex-items" id="flex-items">
        <ToastContainer autoClose={1500} />

        {loading ? (
          <Loading />
        ) : (
          letestrecip.map((items, index) => {
            return (
              <div key={index} className="main-flex-cont">
                <div className="recip-img">
                  <img src={items.linkImagen} alt="loading" />
                </div>

                <div className="cart-body">
                  <div className="recip-body">
                    <div className="text">
                      <h3>{items.descripcion.slice(0, 15)}</h3>
                      <span> ${items.precio}</span>
                    </div>

                    <div className="small-img">
                      <img
                        style={{
                          height: "45px",
                          width: "45px",
                          borderRadius: "50%",
                        }}
                        src={items.linkImagen}
                        alt="loading..."
                      />
                    </div>
                  </div>
                  <div className="add-cart-btn">
                    <button
                      onClick={() => cartItemsAdd(items)}
                      className="cart-btn"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Letestrecip;
