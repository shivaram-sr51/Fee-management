import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import the toast library
import { motion } from "framer-motion"; // Import framer-motion
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import Loginimg from "../assets/book.jpg";

export default function Register() {
  const [register, setRegister] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register);

    try {
      const response = await axios.post("http://localhost:8080/addUser", register);
      console.log(response.data);
      toast.success("Registered successfully!"); // Show success toast
      
      // Add delay before navigating (for the toast to appear)
      setTimeout(() => {
        navigate("/"); // Redirect to the login page
      }, 3000); // Wait for 3 seconds for the toast to finish
    } catch (error) {
      console.log(error);
      toast.error("Error: Could not add user."); // Show error toast
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Initial state of the component
        animate={{ opacity: 1, x: 0 }} // Final state of the component (visible)
        exit={{ opacity: 0, x: 100 }} // Final state when exiting (fade out and slide to the right)
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div className="box-1">
          <img className="box-1-login-img" src={Loginimg} alt="login" />
        </div>

        <div className="box-2">
          <form onSubmit={handleSubmit}>
            <h2 className="head">SIGN UP</h2>

            <div className="form-group">
              <input
                type="text"
                id="username"
                name="name"
                placeholder="Enter your Name"
                value={register.name}
                onChange={handleChange}
                required
                className="box-2-input-box"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={register.email}
                onChange={handleChange}
                required
                className="box-2-input-box"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                value={register.password}
                onChange={handleChange}
                required
                className="box-2-input-box"
              />
            </div>
            
            <h5>
              <Link to="/">Back to Login</Link>
            </h5>

             <motion.button
                        className="box-2-button"
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Register
                      </motion.button>
          </form>
        </div>

      </motion.div>

      {/* ToastContainer renders the toast notifications */}
      <ToastContainer />
    </>
  );
}
