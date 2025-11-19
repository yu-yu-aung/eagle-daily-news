"use client"

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"

const PageTransition = ({children}) => {

  const pathName = usePathname(); 

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0, y: 10}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: -10}}
        transition={{ duration: 0.2}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition