import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../../config/eventConfig";
import { LittleFlower } from "../DecorativeElements/DecorativeElements";
import "./RSVP.css";

export function RSVP() {
  return (
    <section className="rsvp section" aria-label="Confirmação de presença">
      <LittleFlower top="2%" left="4%" size={20} color="var(--samuel-300)" />
      <LittleFlower top="4%" left="88%" size={18} color="var(--sofia-300)" delay={0.2} />

      <motion.div
        className="rsvp__content"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="rsvp__title">
          Sua presença tornará esse dia ainda mais especial. 
          <br />
          <br />
          Confirme sua presença para que possamos receber você com todo carinho!
        </h2>

        <a
          className="rsvp__button"
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Confirmar presença pelo WhatsApp"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Confirmar presença
        </a>
      </motion.div>
    </section>
  );
}
