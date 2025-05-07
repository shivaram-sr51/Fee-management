import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import EditNewFeeHead from '../NewFeeHead/EditNewFeeHead';
import HomeOne from '../NewStudent/HomeOne';
export default function AdminFive() {
  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="" // Ensure this class is applied to the motion div
    >
      <HomeOne/>
    </motion.div>
  </AnimatePresence>
  )
}
