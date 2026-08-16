import { useEffect, useState } from "react";
import { OpeningScreen } from "./components/OpeningScreen/OpeningScreen";
import { Hero } from "./components/Hero/Hero";
import { EventDate } from "./components/EventDate/EventDate";
import { Location } from "./components/Location/Location";
import { RSVP } from "./components/RSVP/RSVP";
import { Gifts } from "./components/Gifts/Gifts";
import { Footer } from "./components/Footer/Footer";
import { MusicControl } from "./components/MusicControl/MusicControl";
import { ScrollHint } from "./components/ScrollHint/ScrollHint";
import { useBackgroundMusic } from "./utils/useBackgroundMusic";

// Distância de rolagem (em px) a partir da qual consideramos que a pessoa
// já percebeu que dá pra rolar, escondendo a setinha.
const SCROLL_HINT_THRESHOLD = 60;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const music = useBackgroundMusic();

  const handleOpen = () => {
    setIsOpen(true);
    // Inicia a música dentro do mesmo toque que abre o convite — o navegador
    // exige que a reprodução comece dentro do gesto do usuário, então isso
    // precisa ser chamado aqui, e não depois em um efeito separado.
    music.play();
  };

  useEffect(() => {
    if (!isOpen || hasScrolled) return;

    const onScroll = () => {
      if (window.scrollY > SCROLL_HINT_THRESHOLD) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen, hasScrolled]);

  return (
    <div className="app-shell">
      <audio ref={music.audioRef} src={music.AUDIO_SRC} loop preload="none" />

      <OpeningScreen isOpen={isOpen} onOpen={handleOpen} />

      {isOpen && (
        <main>
          <Hero />
          <EventDate />
          <Location />
          <RSVP />
          <Footer />
          <MusicControl music={music} />
        </main>
      )}

      <ScrollHint visible={isOpen && !hasScrolled} />
    </div>
  );
}

export default App;
