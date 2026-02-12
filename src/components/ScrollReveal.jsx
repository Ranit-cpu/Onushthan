import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollRevealStack({
  children,
  index = 0,
  total = 5,
}) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Stack math
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - index * 0.05]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -index * 80]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0.85]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
        opacity,
        zIndex: total - index,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
