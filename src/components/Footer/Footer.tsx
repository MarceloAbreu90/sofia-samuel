import { motion } from "framer-motion";
import { CelestialLayer } from "../DecorativeElements/DecorativeElements";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer section" aria-label="Mensagem final">
      <CelestialLayer variant="subtle" />

      <motion.div
        className="footer__content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        <svg
          className="footer__ornament"
          viewBox="0 0 120 60"
          fill="none"
          aria-hidden="true"
        >
          <path d="M60 6 V26 M52 14 H68" stroke="var(--gold-500)" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M60 32 C55 26 45 27 45 35 C45 42 60 50 60 50 C60 50 75 42 75 35 C75 27 65 26 60 32 Z"
            fill="var(--sofia-300)"
          />
          <path d="M20 40 c6 -6 12 0 6 6 c-6 6 -12 0 -6 -6 Z" fill="var(--sage)" opacity="0.8" />
          <path d="M100 40 c6 -6 12 0 6 6 c-6 6 -12 0 -6 -6 Z" fill="var(--samuel-300)" opacity="0.8" />
        </svg>

        <p className="footer__message">
          Esperamos você para celebrar conosco este presente de Deus.
        </p>

        <p className="footer__signature">Com carinho,</p>
        <p className="footer__family">Família da Sofia e do Samuel</p>
      </motion.div>
    </footer>
  );
}
