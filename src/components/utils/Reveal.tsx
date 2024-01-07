import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  mainVariants?: Record<string, any>;
  slideVariants?: Record<string, any>;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  mainVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  slideVariants = {
    hidden: { left: 0 },
    visible: { left: '100%' },
  },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={mainVariants}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={slideVariants}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#071a2b',
          zIndex: 20,
        }}
      />
    </div>
  );
};
