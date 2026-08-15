import { useState } from "react";
import { OpeningScreen } from "./components/OpeningScreen/OpeningScreen";
import { Hero } from "./components/Hero/Hero";
import { EventDate } from "./components/EventDate/EventDate";
import { Location } from "./components/Location/Location";
import { RSVP } from "./components/RSVP/RSVP";
import { Gifts } from "./components/Gifts/Gifts";
import { Footer } from "./components/Footer/Footer";
import { MusicControl } from "./components/MusicControl/MusicControl";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-shell">
      <OpeningScreen isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      {isOpen && (
        <main>
          <Hero />
          <EventDate />
          <Location />
          <RSVP />
          <Gifts />
          <Footer />
          <MusicControl />
        </main>
      )}
    </div>
  );
}

export default App;
