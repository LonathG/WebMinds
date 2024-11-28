import '../css/Link.css';
import { motion } from 'framer-motion';
import { slide, scale } from '../js/anim';

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="link"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator"
      ></motion.div>
      <a href={href}>{title}</a> {/* Replace Link with a regular anchor tag */}
    </motion.div>
  );
}
