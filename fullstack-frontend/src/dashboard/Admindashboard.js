import React from 'react'
import FeeHeadSetup from '../components/FeeHeadSetup'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Admindashboard() {
  return (

    
    
   
        <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="main-work" // Ensure this class is applied to the motion div
        >
          <Link className="btn btn-dark" id="goback2" to="/Admin">
    Go Back
  </Link>     
          <FeeHeadSetup />
        </motion.div>
      </AnimatePresence>
      
  )
}
