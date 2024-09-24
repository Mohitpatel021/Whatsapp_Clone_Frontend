import { Alert, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser, login } from "../../Redux/Auth/Action";
import "./Signin.css";
import images from "../../images/whatsapp_2111832.png";
import img from "../../images/whatsapp images.webp";

const Signin = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", inputData);
    setOpenSnackBar(true);
    dispatch(login(inputData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const handleSnackBarClose = () => {
    setOpenSnackBar(false);
  };

  useEffect(() => {
    if (token) dispatch(currentUser(token));
  }, [token]);

  useEffect(() => {
    if (auth.reqUser?.fullName) {
      navigate("/");
    }
  }, [auth.reqUser]);

  return (
    <div className="flex flex-row justify-center w-[100vw] h-[100vh]">
      <div className="left w-[30%] h-[100%]">
        <div className="main-container">
          <div className="screen-1">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full justify-evenly"
            >
              <div className="flex items-center justify-center w-full">
                <img
                  className="w-16 h-16 mix-blend-multiply"
                  src={images}
                  alt=""
                />
              </div>
              {/* <svg
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="80"
                height="80"
                viewBox="0 0 640 480"
              >
                <g transform="matrix(3.31 0 0 3.31 320.4 240.4)">
                  <circle
                    style={{
                      stroke: "rgb(0,0,0)",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: 0,
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    cx="0"
                    cy="0"
                    r="40"
                  ></circle>
                </g>
                <g transform="matrix(0.98 0 0 0.98 268.7 213.7)">
                  <circle
                    style={{
                      stroke: "rgb(0,0,0)",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: 0,
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      fill: "#07b586",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    cx="0"
                    cy="0"
                    r="40"
                  ></circle>
                </g>
                <g transform="matrix(1.01 0 0 1.01 362.9 210.9)">
                  <circle
                    style={{
                      stroke: "rgb(0,0,0)",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: 0,
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      fill: "#07b586",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    cx="0"
                    cy="0"
                    r="40"
                  ></circle>
                </g>
                <g transform="matrix(0.92 0 0 0.92 318.5 286.5)">
                  <circle
                    style={{
                      stroke: "rgb(0,0,0)",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: 0,
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      fill: "#07b586",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    cx="0"
                    cy="0"
                    r="40"
                  ></circle>
                </g>
                <g transform="matrix(0.16 -0.12 0.49 0.66 290.57 243.57)">
                  <polygon
                    style={{
                      stroke: "rgb(0,0,0)",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: 0,
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      fill: "#07b586",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    points="-50,-50 -50,50 50,50 50,-50"
                  ></polygon>
                </g>
                <g transform="matrix(0.16 0.1 -0.44 0.69 342.03 248.34)">
                  <polygon
                    style={{
                      stroke: "rgb(0,0,0)",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: 0,
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      fill: "#07b586",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    points="-50,-50 -50,50 50,50 50,-50"
                  ></polygon>
                </g>
              </svg> */}

              <div className="email">
                <label htmlFor="email" className="text-white">
                  Email Address
                </label>
                <div className="text-white sec-2">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input
                    className="text-white bg-transparent"
                    type="email"
                    name="email"
                    placeholder="Username@gmail.com"
                    value={inputData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="password">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <div className="text-white sec-2">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input
                    className="text-white bg-transparent pas"
                    type="password"
                    name="password"
                    placeholder="············"
                    value={inputData.password}
                    onChange={handleChange}
                  />
                  <ion-icon
                    className="text-white show-hide"
                    name="eye-outline"
                  ></ion-icon>
                </div>
              </div>
              <button className="text-white login">Login</button>
              <div className="footer">
                <p className="text-white">Don't have an Account?</p>
                <Button
                  className="relative -left-14 top-1"
                  sx={{ color: "blue", outline: "none", fontSize: "10px" }}
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </Button>
                <Button
                  sx={{ color: "blue", outline: "none", fontSize: "10px" }}
                  onClick={() => navigate("/forgetpassword")}
                >
                  Forgot Password?
                </Button>
              </div>
            </form>
            <Snackbar
              open={openSnackBar}
              autoHideDuration={6000}
              onClose={handleSnackBarClose}
            >
              <Alert onClose={handleSnackBarClose} severity="success">
                Log In successfully!
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[73%]">
        <div className="flex flex-col items-center justify-center right bg-[#D1D1D6] w-full h-full">
          <div className="flex flex-col items-center justify-center w-[80%] ">
            <div className="max-w-[80%] text-center  items-center">
              {/* need to change the imge color */}
              <img
                className="h-64 pl-36 w-90 mix-blend-darken"
                src={img}
                alt=""
              />

              <h1 className="mt-4 font-sans text-3xl text-green-600 pl-11">
                WhatsApp for Windows
              </h1>
              <p className="pl-10 mt-3 text-slate800 mb-9">
                Send and receive message without keeping your phone online. Use
                WhatsApp on Up to 4 Linked devices and 1 phone at the same time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
