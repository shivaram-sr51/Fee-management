import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; // Import Framer Motion
import Loginimg from "../assets/book.jpg";

export default function Login() {
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
        "http://localhost:8080/loginUser",
        data
      );

      console.log("this is the response: ", response.data);

      if (!response.data) {
        toast.error("Invalid User Id or Password");
      } else {
        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/dashboard");
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
    <>
      <motion.div
        className="box-1"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img className="box-1-login-img" src={Loginimg} alt="login" />
      </motion.div>

      <motion.div
        className="box-2"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <form onSubmit={handleSubmit}>
          <motion.h2
            className="head"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            LOGIN
          </motion.h2>

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
          >
            Don't have an account? Click&nbsp;
            <Link to="/register">Signup</Link>
          </motion.h5>

          <motion.button
            className="box-2-button"
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>

      <ToastContainer />
    </>
  );
}
