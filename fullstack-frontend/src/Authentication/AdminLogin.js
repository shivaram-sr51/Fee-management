import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; // Import Framer Motion
import Adminimage from "../assets/Admin-Login.png";

export default function AdminLogin() {
  const [Password, setPasswordValue] = useState("");
  const [userId, setUserIdValue] = useState("");
  const navigate = useNavigate();

  function setPassword(e) {
    setPasswordValue(e.target.value);
  }

  function setUserId(e) {
    setUserIdValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("this is our data: " + userId + " " + Password);

    const data = {
      userId: userId,
      password: Password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/loginAdminUser",
        data
      );

      console.log("this is the response: ", response.data);

      if (!response.data) {
        toast.error("Invalid User Id or Password");
      } else {
        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/Admin");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again!");
    }
  };

  // Animation variants for form and image
  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <motion.div
        className="box-1"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>

      <motion.div
        className="box-2"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <Link className="btn btn-light" id="goback" to="/dashboard">
          Go Back
        </Link>

        <form className="Admin-Login-form" onSubmit={handleSubmit}>
          <center>
            <motion.h2
              className="head"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              ADMIN LOGIN
            </motion.h2>
          </center>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email-Id"
              onChange={setUserId}
              value={userId}
              required
              className="box-2-input-box"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              onChange={setPassword}
              value={Password}
              required
              className="box-2-input-box"
            />
          </div>

          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
          ></motion.h5>

          <center>
            <motion.button
              className="box-2-button"
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Login
            </motion.button>
          </center>
        </form>
      </motion.div>

      <ToastContainer />
    </div>
  );
}
