import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import "./EventDate.css";

export function EventDate() {
  const { day, month, year, time } = eventConfig.event;

  return (
    <section className="event-date section" aria-label="Data e horário da festa">
      <motion.p
        className="event-date__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        Marque na sua agenda
      </motion.p>

      <motion.div
        className="event-date__calendar"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <div className="event-date__calendar-header">{month}</div>
        <div className="event-date__calendar-day">{day}</div>
        <div className="event-date__calendar-year">{year}</div>
      </motion.div>

      <motion.div
        className="event-date__time"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <Clock size={50} aria-hidden="true" />
        <span font-size="3.25rem">às {time}</span>
      </motion.div>
    </section>
  );
}
