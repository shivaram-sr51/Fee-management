import React from "react";
import { useNavigate } from "react-router-dom";
import StudentRegistration from "../components/StudentRegistration";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboardone() {
  const navigate = useNavigate();

  // Handle logout with toast and delayed navigation
  const handleLogout = () => {
    toast.success("Logout Successful", {
      position: "top-center",
      autoClose: 1000, // Show the toast for 1 second
    });

    setTimeout(() => {
      navigate("/"); // Navigate to the login page after 1 second
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
          initial={{ opacity: 0, x: -100 }} // Initial state for animation
          animate={{ opacity: 1, x: 0 }} // Animate to this state
          exit={{ opacity: 0, x: 100 }} // Exit state for animation
          transition={{ duration: 0.3 }} // Duration of the animation
          className="main-work"
        >
          <StudentRegistration />
        </motion.div>
      </AnimatePresence>

      {/* Toast container for displaying toast messages */}
      <ToastContainer />
    </>
  );
}
