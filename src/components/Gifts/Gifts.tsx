import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, Shirt, Footprints, X } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import "./Gifts.css";

export function Gifts() {
  const [open, setOpen] = useState(false);
  const { sofia, samuel } = eventConfig.children;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="gifts section" aria-label="Sugestões de presentes">
      <motion.button
        type="button"
        className="gifts__trigger"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <Gift size={20} aria-hidden="true" />
        Sugestões de presentes
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="gifts__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="gifts__sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Sugestões de presentes"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gifts__sheet-handle" aria-hidden="true" />
              <div className="gifts__sheet-header">
                <h2>Sugestões de presentes</h2>
                <button
                  type="button"
                  className="gifts__close"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar sugestões de presentes"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="gifts__cards">
                <div className="gifts__card gifts__card--sofia">
                  <h3>{sofia.name}</h3>
                  <p className="gifts__card-lead">
                    <Gift size={16} aria-hidden="true" /> Brinquedos ou roupas
                  </p>
                  <p>
                    <Shirt size={16} aria-hidden="true" /> Roupa: {sofia.clothingSize}
                  </p>
                  <p>
                    <Footprints size={16} aria-hidden="true" /> Calçado: {sofia.shoeSize}
                  </p>
                </div>

                <div className="gifts__card gifts__card--samuel">
                  <h3>{samuel.name}</h3>
                  <p className="gifts__card-lead">
                    <Gift size={16} aria-hidden="true" /> Brinquedos ou roupas
                  </p>
                  <p>
                    <Shirt size={16} aria-hidden="true" /> Roupa: {samuel.clothingSize}
                  </p>
                  <p>
                    <Footprints size={16} aria-hidden="true" /> Calçado: {samuel.shoeSize}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
