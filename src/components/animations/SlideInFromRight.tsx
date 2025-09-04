import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SlideInFromRightProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const SlideInFromRight: React.FC<SlideInFromRightProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px" 
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        x: 60 
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0 
      } : { 
        opacity: 0, 
        x: 60 
      }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromRight;
