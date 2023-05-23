import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  memo,
} from "react";
import Navbar from "../Header/Navbar";
import { IoMdTrash } from "@react-icons/all-files/io/IoMdTrash";
import { BiArrowBack } from "@react-icons/all-files/bi/BiArrowBack";
import { Link } from "react-router-dom";
import { CartDataContext, setCartContext } from "../../App";
import { gettotalCartItemPrice } from "../../App";

const Card = () => {
  const cartContext = useContext(CartDataContext);
  const setCartItems = useContext(setCartContext);
  const cartItemPrice = useContext(gettotalCartItemPrice);
  const [cartItemsPrice, setCartItemsPrice] = useState(0);

  const cartItemRemove = (id) => {
    const finelCart = cartContext.filter((item) => item.id !== id);
    setCartItems(finelCart);
  };

  useEffect(() => {
    const cartItemPriceupdate = () => {
      const totalPrice = cartContext.reduce((accumulator, cartitem) => {
        let price = parseInt(cartitem.precio);
        return accumulator + price;
      }, 0);

      setCartItemsPrice(totalPrice)
      cartItemPrice(totalPrice)
    };
    cartItemPriceupdate();
  }, [cartContext]);

  return (
    <div className="cart-container">
      <div className="cart">
        {
          cartContext.length > 0 ? cartContext.map((product, index) => {
          return (

            <div className="cart-items" key={index}>
              <img
                src={
                  product.linkImagen ? product.linkImagen : product.food.image
                }
                alt=""
              />
              <div className="cart-items-info">
                <h4>{product.descripcion}</h4>
                <span>
                  $ <span>{product.precio}</span>
                </span>
              </div>
              <div className="remove">
                <span onClick={() => cartItemRemove(product.id)}>
                  <IoMdTrash />
                </span>
              </div>
            </div>
          );
        }) : <div className="no-item-added">
            <p>No item added here... <Link to={"/"}>Please add items</Link></p>
        </div>
        
        }
      </div>
      <div className="back-to-home">
      <div className="back-to-home">
      {
        cartContext.length > 0 ? <div className="order-icon">
        <Link to={"/"}>
           <span>
            <BiArrowBack />
           </span>       
          <h4> Continue Order </h4>
          </Link> 
        </div> : null
      }
      </div>
        <div className="cart-total-pricediv">
          <p>Total price : </p> <span>${cartItemsPrice ? cartItemsPrice : "0"}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
