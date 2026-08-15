import { useState } from "react";
import { OpeningScreen } from "./components/OpeningScreen/OpeningScreen";
import { Hero } from "./components/Hero/Hero";
import { EventDate } from "./components/EventDate/EventDate";
import { Location } from "./components/Location/Location";
import { RSVP } from "./components/RSVP/RSVP";
import { Gifts } from "./components/Gifts/Gifts";
import { Footer } from "./components/Footer/Footer";
import { MusicControl } from "./components/MusicControl/MusicControl";
import { useBackgroundMusic } from "./utils/useBackgroundMusic";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const music = useBackgroundMusic();

  const handleOpen = () => {
    setIsOpen(true);
    // Inicia a música dentro do mesmo toque que abre o convite — o navegador
    // exige que a reprodução comece dentro do gesto do usuário, então isso
    // precisa ser chamado aqui, e não depois em um efeito separado.
    music.play();
  };

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
          <Gifts />
          <Footer />
          <MusicControl music={music} />
        </main>
      )}
    </div>
  );
}

export default App;
