import { Volume2, VolumeX } from "lucide-react";
import type { BackgroundMusic } from "../../utils/useBackgroundMusic";
import "./MusicControl.css";

interface MusicControlProps {
  music: BackgroundMusic;
}

/**
 * Botão flutuante de música. A reprodução em si é iniciada no toque de
 * "Abrir convite" (veja useBackgroundMusic + App.tsx); este botão serve para
 * a pessoa pausar/retomar depois, caso queira.
 */
export function MusicControl({ music }: MusicControlProps) {
  const { playing, available, toggle } = music;

  return (
    <div className="music-control">
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
