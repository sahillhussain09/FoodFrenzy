import React, { useState, useContext } from "react";
import "./Joinus.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchemas } from "./schemas";
import { userInfoContext } from "../../../App";

const Signup = () => {
  const userdata = useContext(userInfoContext);
  const [emptyVal, setEmptyVal] = useState(true);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchemas,
      onSubmit: (value) => {
        setEmptyVal(false);
        userDataUpdate();
      },
    });

  function showPass() {
    var x = document.querySelector("#password");
    var y = document.querySelector("#c_pass");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }

  const userDataUpdate = () => {
    userdata(values);
  };

  return (
    <div className="signup-container">
      <div className="signup-main-cont">
        <form className="signup-left" onSubmit={handleSubmit}>
          {emptyVal ? (
            <div>
              <div className="signup-heading">
                <h3>
                  {" "}
                  Register<span>Here</span>{" "}
                </h3>
              </div>

              <div className="signup-mid">
                <div className="signup-inputs">
                  <input
                    className="input"
                    type="text"
                    name="username"
                    placeholder="enter username"
                    id="username"
                    autoComplete="off"
                    value={emptyVal ? values.username : ""}
                    onChange={handleChange}
                  />
                  {errors.username && touched.username ? (
                    <span className="requred">{errors.username}</span>
                  ) : null}
                </div>

                <div className="signup-inputs">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="enter email"
                    id="email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <span className="requred">{errors.email}</span>
                  ) : null}
                </div>

                <div className="signup-inputs">
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="enter password"
                    id="password"
                    autoComplete="off"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password ? (
                    <span className="requred">{errors.password}</span>
                  ) : null}
                </div>

                <div className="signup-inputs">
                  <input
                    className="input"
                    type="password"
                    name="confirm_password"
                    placeholder="confirm password"
                    id="c_pass"
                    autoComplete="off"
                    value={values.confirm_password}
                    onChange={handleChange}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <span className="requred">{errors.confirm_password}</span>
                  ) : null}
                </div>
              </div>

              <div className="signup-bottom">
                <div className="signup-bottom-top">
                  <input type="checkbox" name="" id="" onClick={showPass} />
                  <span>show password</span>
                </div>
                <div className="signup-bottom-bottom">
                  <button type="submit" className="signup-tm-btn">
                    sign up
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="congo">
              <p>
                Thank you <span>{values.username}</span> for join us !
              </p>
              <div className="back-to-home">
                <Link className="back-to-home-btn" to={"/"}>
                  back to home
                </Link>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
