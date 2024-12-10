import React, { useState, forwardRef, useRef } from "react";
import LogoLight from "../assets/Webminds.webp";
import LogoDark from "../assets/Webminds-dark.webp";
import "../css/commons.css";
import "../css/style.css";

import Curve from "./Curve";
import { AnimatePresence, motion } from "framer-motion";

import Nav from "../components/Nav";

import { PiYoutubeLogoFill } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Commons = forwardRef((props, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [logo, setLogo] = useState(LogoLight);

  // Refs for the elements
  const youtubeRef = useRef(null);
  const tiktokRef = useRef(null);
  const facebookRef = useRef(null);
  const instagramRef = useRef(null);
  const logoRef = useRef(null);

  // Expose refs via the forwarded ref
  React.useImperativeHandle(ref, () => ({
    youtubeIcon: youtubeRef.current,
    tiktokIcon: tiktokRef.current,
    facebookIcon: facebookRef.current,
    instagramIcon: instagramRef.current,
    WebMindsLogo: logoRef.current,
  }));

  // Update logo on theme change
  React.useEffect(() => {
    const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateLogo = () => {
      const theme = themeMediaQuery.matches ? LogoDark : LogoLight;
      setLogo(theme);
    };

    updateLogo();
    themeMediaQuery.addEventListener("change", updateLogo);

    return () => {
      themeMediaQuery.removeEventListener("change", updateLogo);
    };
  }, []);

  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <motion.div
        className="button22"
        onClick={() => setIsActive(!isActive)}
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
      </motion.div>

      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
      <Curve />

      <motion.div
        className="left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div ref={logoRef} variants={itemVariants}>
          <img className="top" src={logo} alt="WebMinds-Logo" />
        </motion.div>

        <div className="bottom">
          <motion.div className="one" ref={youtubeRef} variants={itemVariants}>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiYoutubeLogoFill className="icons" />
            </a>
          </motion.div>
          <motion.div className="one" ref={tiktokRef} variants={itemVariants}>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok className="icons" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="right"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="top"></div>
        <div className="bottom">
          <motion.div className="one" ref={facebookRef} variants={itemVariants}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="icons" />
            </a>
          </motion.div>
          <motion.div
            className="one"
            ref={instagramRef}
            variants={itemVariants}
          >
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="icons" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
});

export default Commons;
