import React from 'react'
import Home from '../NewFeeHead/Home'
import { motion, AnimatePresence } from "framer-motion";
export default function AdminFour() {
  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="" // Ensure this class is applied to the motion div
    >
      <Home/>
    </motion.div>
  </AnimatePresence>
  )
}
