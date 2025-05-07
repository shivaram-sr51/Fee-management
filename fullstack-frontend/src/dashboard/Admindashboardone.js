import React from "react";
import StudentRegistration from "../components/StudentRegistration";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Admindashboardone() {
  return (
    <div className="admin-dashboard">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="admin-dashboard-container"
        >
          <div className="content-wrapper">
            <h1 className="dashboard-title1">Student Registration</h1>

            <div className="registration-container">
              <StudentRegistration />
            </div>

            <Link className="btn btn-dark go-back-button"  id="goback3" to="/Admin">
              Go Back
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
