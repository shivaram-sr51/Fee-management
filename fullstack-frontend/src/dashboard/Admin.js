import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Admione from './Admione';

export default function Admin() {
  const navigate = useNavigate();
  
  return (
    <>
      

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="admin-content" // Add a unique key for each motion element to ensure the transition works
          initial={{ opacity: 0, x: -100 }} // Start from left and invisible
          animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
          exit={{ opacity: 0, x: 100 }} // Exit by moving to the right and fading out
          transition={{ duration: 0.3 }}
          className="" // Ensure this class is applied to the motion div
        >
          <Admione />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
