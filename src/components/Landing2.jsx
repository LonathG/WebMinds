'use client';

import "../css/Landing.css";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Landing() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();

    // Dynamically calculate size based on hover state
    const size = isHovered ? 400 : 0.001;

    return (
        <>
            <div className="main">
                    
                <motion.div
                    className="mask"
                    animate={{
                        WebkitMaskPosition: `${x - size / 2}px ${y - size /2}px`,
                        maskSize: `${size}px`, // Unprefixed property
                        WebkitMaskSize: `${size}px`, // Correct dynamic size handling
                    }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 0.5, // Adjust timing for smoother animation
                    }}

                >
                    <h1 onMouseEnter={() => {
                        console.log("Mouse entered");
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        console.log("Mouse left");
                        setIsHovered(false);
                    }}>
                        "We Love our <br />Website too"
                    </h1>
                </motion.div>

                <div className="hero">
                    <h1>"Hope you're <br /> Not Hypnotized"</h1>
                </div>
            </div>
        </>
    );
}
