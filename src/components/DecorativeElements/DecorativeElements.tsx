import { motion, useReducedMotion } from "framer-motion";
import "./DecorativeElements.css";

/** Uma pequena estrela dourada que brilha suavemente. */
export function TwinkleStar({
  top,
  left,
  size = 14,
  delay = 0,
}: {
  top: string;
  left: string;
  size?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      className="deco-star"
      style={{ top, left, width: size, height: size }}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      animate={
        reduce
          ? { opacity: 0.7 }
          : { opacity: [0.35, 0.9, 0.35], scale: [0.9, 1.05, 0.9] }
      }
      transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <path
        d="M12 0 L14.2 9.5 L24 12 L14.2 14.5 L12 24 L9.8 14.5 L0 12 L9.8 9.5 Z"
        fill="var(--gold-500)"
      />
    </motion.svg>
  );
}

/** Uma nuvem que flutua muito lentamente. */
export function DriftingCloud({
  top,
  left,
  width = 120,
  duration = 40,
  reverse = false,
}: {
  top: string;
  left: string;
  width?: number;
  duration?: number;
  reverse?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      className="deco-cloud"
      style={{ top, left, width }}
      viewBox="0 0 200 90"
      fill="none"
      aria-hidden="true"
      animate={reduce ? {} : { x: reverse ? [10, -10, 10] : [-10, 10, -10] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M40 65 C15 65 5 45 25 35 C25 15 55 5 75 20 C90 5 125 10 130 30 C155 28 170 45 155 60 C160 75 140 80 125 72 C110 82 70 82 55 72 C40 80 25 75 40 65 Z"
        fill="var(--white-warm)"
        fillOpacity="0.75"
      />
    </motion.svg>
  );
}

/** Uma pequena flor decorativa (linha simples). */
export function LittleFlower({
  top,
  left,
  size = 20,
  color = "var(--sofia-300)",
  delay = 0,
}: {
  top: string;
  left: string;
  size?: number;
  color?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      className="deco-flower"
      style={{ top, left, width: size, height: size }}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      <g fill={color}>
        <circle cx="20" cy="10" r="7" />
        <circle cx="30" cy="20" r="7" />
        <circle cx="20" cy="30" r="7" />
        <circle cx="10" cy="20" r="7" />
      </g>
      <circle cx="20" cy="20" r="5" fill="var(--gold-300)" />
    </motion.svg>
  );
}

/** Camada de fundo com estrelas e nuvens posicionadas, reutilizável em várias seções. */
export function CelestialLayer({ variant = "light" }: { variant?: "light" | "subtle" }) {
  return (
    <div className={`celestial-layer celestial-layer--${variant}`} aria-hidden="true">
      <TwinkleStar top="8%" left="12%" size={12} delay={0} />
      <TwinkleStar top="18%" left="85%" size={16} delay={1.2} />
      <TwinkleStar top="55%" left="6%" size={10} delay={0.6} />
      <TwinkleStar top="70%" left="90%" size={14} delay={1.8} />
      <DriftingCloud top="4%" left="-10%" width={140} duration={45} />
      <DriftingCloud top="78%" left="55%" width={110} duration={38} reverse />
    </div>
  );
}
