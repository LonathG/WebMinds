import React, { useState, forwardRef, useRef } from "react";
import LogoLight from "../assets/Webminds.webp";
import LogoDark from "../assets/Webminds-dark.webp";
import "../css/commons.css";
import '../css/style.css'

import Curve from "./Curve"
import {AnimatePresence} from 'framer-motion'

import Nav from "../components/Nav"


import { motion } from "framer-motion";

import { PiYoutubeLogoFill } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

// Forward ref for multiple elements
const Commons = forwardRef((props, ref) => {


  const [isActive,setIsActive] = useState(false);

  const [logo, setLogo] = useState(LogoLight);
  const [isCursorVisible, setCursorVisible] = useState(true); // State to manage cursor visibility

  // Refs for the elements you want the cursor to follow
  const youtubeRef = useRef(null);
  const tiktokRef = useRef(null);
  const facebookRef = useRef(null);
  const instagramRef = useRef(null);
  const logoRef = useRef(null);

  // Expose refs via the forwarded ref (stickyElement)
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

  return (
    <>

      <div  className="button22" onClick={() => setIsActive(!isActive)}>
        <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
      </div>
      
      <AnimatePresence mode="wait">

        {isActive && <Nav />}
      </AnimatePresence>
        <Curve/>

      <div className="left">
        <motion.div ref={logoRef}>
          <img className="top" src={logo} alt="WebMinds-Logo" />
        </motion.div>

        <div className="bottom">
          <div className="one" ref={youtubeRef}>
            <a
              href="https://www.youtube.com/" // Replace with your YouTube channel link
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiYoutubeLogoFill className="icons" />
            </a>
          </div>
          <div className="one" ref={tiktokRef}>
            <a
              href="https://www.tiktok.com/" // Replace with your TikTok profile link
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok className="icons" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right">
        <div
          className="top" 
        >

        </div>
        <div className="bottom">
          <div className="one" ref={facebookRef}>
            <a
              href="https://www.facebook.com/" // Replace with your Facebook page link
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="icons" />
            </a>
          </div>
          <div className="one" ref={instagramRef}>
            <a
              href="https://www.instagram.com/" // Replace with your Instagram profile link
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

export default Commons;
