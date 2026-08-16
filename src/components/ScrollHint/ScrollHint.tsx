import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./ScrollHint.css";

interface ScrollHintProps {
  visible: boolean;
}

/**
 * Setinha flutuante avisando que dá pra rolar a tela.
 * Some assim que a pessoa começa a rolar (controlado pelo pai via `visible`).
 */
export function ScrollHint({ visible }: ScrollHintProps) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        >
          <motion.div
            className="scroll-hint__icon"
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={26} strokeWidth={2.4} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
