import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CelestialLayer, LittleFlower } from "../DecorativeElements/DecorativeElements";
import "./OpeningScreen.css";

interface OpeningScreenProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function OpeningScreen({ isOpen, onOpen }: OpeningScreenProps) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="opening-screen"
          exit={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.04 }
          }
          transition={{ duration: reduce ? 0.3 : 0.9, ease: [0.65, 0, 0.35, 1] }}
        >
          <CelestialLayer />
          <LittleFlower top="80%" left="10%" size={26} color="var(--sofia-300)" delay={0.3} />
          <LittleFlower top="84%" left="78%" size={22} color="var(--samuel-300)" delay={0.5} />

          <div className="opening-screen__arch">
            <svg
              className="opening-screen__arch-svg"
              viewBox="0 0 320 420"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 420 V150 C20 60 90 20 160 20 C230 20 300 60 300 150 V420"
                stroke="url(#archGradient)"
                strokeWidth="6"
                fill="none"
              />
              <path
                d="M46 420 V152 C46 78 100 46 160 46 C220 46 274 78 274 152 V420"
                stroke="var(--gold-300)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="archGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--gold-500)" />
                  <stop offset="100%" stopColor="var(--gold-300)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="opening-screen__content">
              <motion.p
                className="opening-screen__eyebrow"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Você está convidado
              </motion.p>

              <motion.h1
                className="opening-screen__title script-name"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
              >
                Sofia 
                &amp;
                Samuel
              </motion.h1>

              <motion.p
                className="opening-screen__subtitle"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Uma celebração muito especial está chegando…
              </motion.p>

              <motion.button
                type="button"
                className="opening-screen__button"
                onClick={onOpen}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileTap={{ scale: 0.96 }}
              >
                <Sparkles size={18} aria-hidden="true" />
                Abrir convite
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
