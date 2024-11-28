import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom'; // Import React Router Link
import '../css/Nav.css'; // Assuming global CSS file is being used
import { menuSlide } from '../js/anim';

const navItems = [
  {
    title: "Work",
    href: "/Work",
  },
  {
    title: "Services",
    href: "/Services",
  },
  {
    title: "FAQs",
    href: "/FAQs",
  },
  {
    title: "Contact",
    href: "/Contact",
  },
];

export default function Index() {
  const [selectedIndicator, setSelectedIndicator] = useState(window.location.pathname);

  // Update active state when URL changes (simulate componentDidUpdate)
  React.useEffect(() => {
    const handleLocationChange = () => {
      setSelectedIndicator(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

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
          onMouseLeave={() => { setSelectedIndicator(window.location.pathname); }}
          className="nav"
        >
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <div key={index} className={`link-item ${selectedIndicator === data.href ? 'active' : ''}`}>
              <RouterLink
                to={data.href}
                onMouseEnter={() => setSelectedIndicator(data.href)}
                className="nav-link"
              >
                {data.title}
              </RouterLink>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
