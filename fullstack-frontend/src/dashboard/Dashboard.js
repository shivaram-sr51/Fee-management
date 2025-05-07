import React from "react";
import FeeHeadSetup from "../components/FeeHeadSetup";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show the toast message
    toast.success("Logout Successful", {
      position: "top-center",
      autoClose: 1000, // 1 second
    });

    // Redirect after 1 second
    setTimeout(() => {
      navigate("/"); // Navigate to the login page
    }, 1000);
  };

  return (
    <>
      <div className="navbar">
        <div className="project-name">
          <h4>Dashboard</h4>
          <button className="btn btn-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="sub-navbar">
          <p
            className="sub-navbar-one"
            onClick={() => navigate("/dashboard")}
            style={{ cursor: "pointer" }}
          >
            Fee Head Setup
          </p>
          <p
            className="sub-navbar-one"
            onClick={() => navigate("/dashboardone")}
            style={{ cursor: "pointer" }}
          >
            Student Registration
          </p>
          <p
            className="sub-navbar-one"
            onClick={() => navigate("/Two")}
            style={{ cursor: "pointer" }}
          >
            Fee Payment
          </p>

          <p
            className="sub-navbar-one"
            onClick={() => navigate("/Three")}
            style={{ cursor: "pointer" }}
          >
            Student Detail
          </p>
        </div>
        <div className="adminicon">
          <p
            className="sub-navbar-one"
            onClick={() => navigate("/AdminLogin")}
            style={{ cursor: "pointer" }}
          >
            Admin
          </p>
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="main-work" // Ensure this class is applied to the motion div
        >
          <FeeHeadSetup />
        </motion.div>
      </AnimatePresence>

      {/* Toast container */}
      <ToastContainer />
    </>
  );
}
