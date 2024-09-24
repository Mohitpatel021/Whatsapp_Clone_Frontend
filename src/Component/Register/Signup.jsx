import { Alert, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser, register } from "../../Redux/Auth/Action";
import "./SignUp.css";
import img from "../../images/whatsapp images.webp";

const Signup = () => {
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth || {}); // Ensure auth has a default value
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("current user here ", auth.reqUser);
  }, [auth.reqUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", inputData);
    dispatch(register(inputData));
    setOpenSnackBar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const handleSnackBarClose = () => {
    setOpenSnackBar(false);
  };

  useEffect(() => {
    if (token && !auth.reqUser) {
      dispatch(currentUser(token));
    }
  }, [token, dispatch, auth.reqUser]);

  useEffect(() => {
    if (auth.reqUser?.fullName) {
      navigate("/signin");
    }
  }, [auth.reqUser, navigate]);

  return (
    <div className="flex flex-row justify-center w-[100vw] min-h-screen bg-#1e262c">
      <div className="flex items-center justify-center w-1/3 left">
        <div className="main-container">
          <form onSubmit={handleSubmit} className="screen-1">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <div className="email">
              <label htmlFor="fullName" className="text-white">
                Full Name
              </label>
              <input
                type="text"
                className="text-white bg-transparent input-field"
                placeholder="Full Name"
                name="fullName"
                value={inputData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email" className="text-white">
                Email Address
              </label>
              <input
                type="email"
                className="text-white bg-transparent input-field"
                placeholder="Email"
                name="email"
                value={inputData.email}
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                className="text-white bg-transparent input-field"
                placeholder="Password"
                name="password"
                value={inputData.password}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "green.600", color: "white" }}
              className="login"
            >
              Sign Up
            </Button>
            <div className="flex justify-start footers">
              <p className="text-white text-md">Already Have an Account?</p>
              <Button
                sx={{ color: "blue", fontSize: "12px" }}
                className="relative -top-1 -left-2"
                variant="text"
                onClick={() => navigate("/signin")}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center w-2/3 bg-gray-300 right">
        <div className="max-w-[80%] text-center">
          <img
            src={img}
            alt="WhatsApp"
            className="h-64 mx-auto rounded-full mix-blend-multiply"
          />
          <h1 className="text-3xl font-bold text-green-600">
            WhatsApp for Windows
          </h1>
          <p className="text-slate800">
            Send and receive messages without keeping your phone online. Use
            WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success">
          Your Account Successfully Created !!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
