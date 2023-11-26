import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export const PageAnimator = ({ children }: { children: ReactNode }) => {



  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{opacity:1, y:0}}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.10 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
