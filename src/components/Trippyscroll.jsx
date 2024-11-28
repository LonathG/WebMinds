import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

const TrippyScroll = ({ theme = "light" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

  return (
    <div ref={targetRef} className="relative z-0 h-[800vh]">
      <div className="sticky top-0 h-screen">
        <Trippy rotate={rotate} theme={theme} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (count, color, rotate, theme) => {
  if (count === NUM_SECTIONS) {
    return <></>;
  }

  const nextColor =
    theme === "light" ? (color === "#f4f4f4" ? "#242424" : "#f4f4f4") : (color === "#242424" ? "#f4f4f4" : "#242424");

  return (
    <Section rotate={rotate} background={color}>
      {generateSections(count + 1, nextColor, rotate, theme)}
    </Section>
  );
};

const Trippy = ({ rotate, theme }) => {
  const initialColor = theme === "light" ? "#f4f4f4" : "#242424";

  return (
    <motion.div className="absolute inset-0 overflow-hidden">
      {generateSections(0, initialColor, rotate, theme)}
    </motion.div>
  );
};

const Section = ({ background, children, rotate }) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TrippyScroll;
