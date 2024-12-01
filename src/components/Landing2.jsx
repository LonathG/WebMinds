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

    const handleCallUsClick = () => {
        window.location.href = "tel:+447983637117"; // Updated phone number
    };    

    return (
        <>
            <div className="main flex items-center justify-center relative">

                <div className="absolute flex items-center justify-center z-[50000] mt-[500px] font-k2d text-[32px]">
                    <DrawOutlineButton className="flex items-center justify-center" onClick={handleCallUsClick}>
                        Call Us
                    </DrawOutlineButton>
                </div>

                <motion.div
                    className="mask"
                    animate={{
                        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                        maskSize: `${size}px`, // Unprefixed property
                        WebkitMaskSize: `${size}px`, // Correct dynamic size handling
                    }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 0.5, // Adjust timing for smoother animation
                    }}
                >
                    <h1 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        "Our Interns Made <br />this Website"
                    </h1>
                </motion.div>

                <div className="hero">
                    <h1>"Hope you're <br /> Not Hypnotized"</h1>
                </div>

            </div>
        </>
    );
}

const DrawOutlineButton = ({ children, onClick, ...rest }) => {
    return (
        <button
            {...rest}
            onClick={onClick}
            className="group relative px-4 py-2 font-medium transition-colors duration-[400ms] hover:text-indigo-300"
        >
            <span>{children}</span>

            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};
