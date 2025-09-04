import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeUpOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeUpOnScroll: React.FC<FadeUpOnScrollProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px" 
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        y: 60 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0 
      } : { 
        opacity: 0, 
        y: 60 
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

export default FadeUpOnScroll;
