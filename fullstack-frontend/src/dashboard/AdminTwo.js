import React from 'react';
import FeeHeadSetup from '../components/FeeHeadSetup';
import { motion, AnimatePresence } from "framer-motion";
import FeePayment from '../components/FeePayment';
import { Link } from 'react-router-dom';

export default function AdminTwo() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3 }}
        className="admin-container"
      >
        {/* Go Back Button */}
        <div className="go-back-container">
          <Link className="btn btn-dark" id="goback4" to="/Admin">
            Go Back
          </Link>
        </div>

        {/* Fee Payment Component */}
        <div className="fee-payment-container">
          <FeePayment />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
