import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Curve.css';  // Assuming styles.scss or .css is in the same directory

const Curve = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Update window height dynamically when window resizes
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="svgCurve">
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
};

export default Curve;
