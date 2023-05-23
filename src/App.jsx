import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Header/Root";
import Card from "../src/assets/Homepage/Card";
import React, { useState, createContext } from "react";
import Signup from "./assets/Homepage/Join us/Signup";
import Recippage from "./assets/RecipPage/Recippage";
import Nutritions from "./assets/NutritionsPage/Nutritions";

// contexts
export const CartDataContext = createContext();
export const setCartContext = createContext();
export const userInfoContext = createContext();
export const getUserdata = createContext();
export const gettotalCartItemPrice = createContext();
export const totalCartItemPrice = createContext();

function App() {
  const [cartItems, setCarditems] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [cartItemPrice, setCartItemPrice] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root cartItems={cartItems} setCarditems={setCarditems} />,
      errorElement: <Root />,
    },

    {
      path: "/cart",
      element: <Card />,
    },

    {
      path: "/singup",
      element: <Signup />,
    },

    {
      path: "/recip",
      element: <Recippage />,
    },

    {
      path: "/nutrition",
      element: <Nutritions />,
    },
  ]);

  return (
    <CartDataContext.Provider value={cartItems}>
      <setCartContext.Provider value={setCarditems}>
        <userInfoContext.Provider value={setUserInfo}>
          <getUserdata.Provider value={userInfo}>
            <gettotalCartItemPrice.Provider value={setCartItemPrice}>
              <totalCartItemPrice.Provider value={cartItemPrice}>
                <div className="App">
                  <RouterProvider router={router} />
                </div>
              </totalCartItemPrice.Provider>
            </gettotalCartItemPrice.Provider>
          </getUserdata.Provider>
        </userInfoContext.Provider>
      </setCartContext.Provider>
    </CartDataContext.Provider>
  );
}

export default App;
