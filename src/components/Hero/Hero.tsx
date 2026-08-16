import { motion } from "framer-motion";
import { CelestialLayer, LittleFlower } from "../DecorativeElements/DecorativeElements";
import { eventConfig } from "../../config/eventConfig";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { sofia, samuel } = eventConfig.children;

  return (
    <section className="hero section" id="inicio" aria-label="Apresentação dos aniversariantes">
      <CelestialLayer variant="subtle" />
      <LittleFlower top="4%" left="8%" size={22} color="var(--sofia-300)" />
      <LittleFlower top="6%" left="86%" size={18} color="var(--samuel-300)" delay={0.2} />

      <motion.p
        className="hero__intro"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.7 }}
      >
        Com Jesus, Maria e José, celebramos o dom da vida de
      </motion.p>

      <div className="hero__names">
        <motion.div
          className="hero__name-block hero__name-block--sofia"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="hero__name script-name">{sofia.name}</h2>
        </motion.div>

        <span className="hero__ampersand" aria-hidden="true">
          &amp;
        </span>

        <motion.div
          className="hero__name-block hero__name-block--samuel"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h2 className="hero__name script-name">{samuel.name}</h2>
        </motion.div>
      </div>

      <motion.div
        className="hero__illustration-wrap"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="hero__illustration-frame">
          <img
            src="/images/familia-ilustrada.webp"
            alt={`Ilustração da família de ${sofia.name} e ${samuel.name} em estilo infantil, inspirada na Sagrada Família`}
            className="hero__illustration"
            width={1086}
            height={600}
            loading="eager"
          />
        </div>
      </motion.div>

      <div className="hero__names">
        <motion.div
          className="hero__name-block hero__name-block--sofia"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="hero__name script-name">{sofia.name}</h2>
          <p className="hero__age">{sofia.age} anos</p>
        </motion.div>

        <span className="hero__ampersand" aria-hidden="true">
          &amp;
        </span>

        <motion.div
          className="hero__name-block hero__name-block--samuel"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h2 className="hero__name script-name">{samuel.name}</h2>
          <p className="hero__age">{samuel.age} anos</p>
        </motion.div>
      </div>
    </section>
  );
}
