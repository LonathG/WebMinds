import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../css/Cursor.css"; // Import your cursor styles

const Cursor = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSticky, setIsSticky] = useState(false);  // Track sticky state

  const cursorSize = isHovered || isSticky ? 60 : 20; // Larger cursor when hovering or sticky

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Mouse move handler to track the mouse position
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  // Smooth options for the cursor movement
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // Handle mouseover to set hovered state
  const manageMouseOver = () => {
    setIsHovered(true);
  };

  // Handle mouseleave to reset hovered state
  const manageMouseLeave = () => {
    setIsHovered(false);
  };

  // Handle sticky effect when hovering over an element
  const manageStickyOn = () => {
    setIsSticky(true); // Set cursor to sticky when hovering over specific element
  };

  const manageStickyOff = () => {
    setIsSticky(false); // Reset sticky effect when mouse leaves element
  };

  useEffect(() => {
    // Attach global mousemove listener for cursor movement
    window.addEventListener("mousemove", manageMouseMove);

    // Attach event listeners to all elements in stickyElement.current
    if (stickyElement?.current) {
      Object.values(stickyElement.current).forEach((element) => {
        if (element) {
          element.addEventListener("mouseover", manageMouseOver);
          element.addEventListener("mouseleave", manageMouseLeave);
          element.addEventListener("mouseenter", manageStickyOn);  // Make the cursor sticky when hovering over
          element.addEventListener("mouseleave", manageStickyOff);  // Remove sticky when leaving
        }
      });
    }

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);

      if (stickyElement?.current) {
        Object.values(stickyElement.current).forEach((element) => {
          if (element) {
            element.removeEventListener("mouseover", manageMouseOver);
            element.removeEventListener("mouseleave", manageMouseLeave);
            element.removeEventListener("mouseenter", manageStickyOn);
            element.removeEventListener("mouseleave", manageStickyOff);
          }
        });
      }
    };
  }, [stickyElement]);

  return (
    <motion.div
      className="cursor"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{ width: cursorSize, height: cursorSize }}
      transition={{ type: "spring", stiffness: 500 }}  // Smooth animation transition
    ></motion.div>
  );
};

export default Cursor;
