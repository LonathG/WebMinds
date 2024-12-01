import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Import react-scroll Link for smooth scrolling
import '../css/Nav.css'; // Assuming global CSS file is being used
import { menuSlide } from '../js/anim';

const navItems = [
  {
    title: "Work",
    href: "Work", // Matching section name for smooth scroll
  },
  {
    title: "Services",
    href: "Services", // Matching section name for smooth scroll
  },
  {
    title: "FAQs",
    href: "FAQ", // Matching section name for smooth scroll
  },
  {
    title: "Socials",
    href: "Socials", // Matching section name for smooth scroll
  },
  {
    title: "Contact",
    href: "Contact", // Matching section name for smooth scroll
  },
];

export default function Index() {
  const [selectedIndicator, setSelectedIndicator] = useState('');

  // Update active state on link hover
  const handleHover = (href) => {
    setSelectedIndicator(href);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="body">
        <div
          onMouseLeave={() => setSelectedIndicator('')} // Reset active state on mouse leave
          className="nav"
        >
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <div key={index} className={`link-item ${selectedIndicator === data.href ? 'active' : ''}`}>
              <Link
                to={data.href}
                smooth={true}
                duration={500}
                onMouseEnter={() => handleHover(data.href)} // Highlight link on hover
                onMouseLeave={() => setSelectedIndicator('')} // Reset hover effect when mouse leaves
                className="nav-link"
              >
                {data.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
