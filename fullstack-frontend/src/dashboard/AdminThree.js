import React from "react";
import FeeHeadSetup from "../components/FeeHeadSetup";
import { motion, AnimatePresence } from "framer-motion";
import FeePayment from "../components/FeePayment";
import StudentDetails from "../components/StudentDetails";
import { Link } from "react-router-dom";

export default function AdminThree() {
  return (
    <div className="admin-three-container">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="admin-three-content"
        >
          {/* Go Back Button */}
          <div className="go-back-container">
            <Link className="btn btn-dark go-back-button" id="goback5" to="/Admin">
              Go Back
            </Link>
          </div>

          {/* Student Details Component */}
          <div className="student-details-container">
            <StudentDetails />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
