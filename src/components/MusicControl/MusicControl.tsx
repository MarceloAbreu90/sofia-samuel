import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./MusicControl.css";

/**
 * Estrutura preparada para música de fundo.
 * Não existe arquivo de áudio ainda — quando disponível, adicione o arquivo em
 * /public/audio/musica-fundo.mp3 e o botão passará a funcionar automaticamente.
 * O áudio nunca é reproduzido automaticamente: apenas após clique explícito.
 */
const AUDIO_SRC = "/audio/musica-fundo.mp3";

export function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Arquivo de áudio ainda não disponível — botão fica desabilitado silenciosamente.
        setAvailable(false);
      });
  };

  return (
    <div className="music-control">
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />
      <button
        type="button"
        className="music-control__button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pausar música de fundo" : "Reproduzir música de fundo"}
        disabled={!available}
      >
        {playing ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <span>Música</span>
      </button>
    </div>
  );
}
