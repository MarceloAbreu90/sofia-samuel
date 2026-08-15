import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import "./Location.css";

export function Location() {
  const { locationName, mapsUrl } = eventConfig.event;

  return (
    <section className="location section" aria-label="Local da festa">
      <motion.div
        className="location__card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div className="location__icon">
          <MapPin size={26} aria-hidden="true" />
        </div>

        <h2 className="location__title">{locationName}</h2>
        <p className="location__subtitle">
          Um cantinho especial para celebrarmos juntos, cercados de natureza.
        </p>

        <a
          className="location__button"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir localização de ${locationName} no Google Maps`}
        >
          <Navigation size={18} aria-hidden="true" />
          Como chegar
        </a>
      </motion.div>
    </section>
  );
}
