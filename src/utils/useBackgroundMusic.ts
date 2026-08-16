import { useCallback, useRef, useState } from "react";

const AUDIO_SRC = "/audio/musica-fundo.mp3";
const AUDIO_START_SECONDS = 5;

/**
 * Controla a música de fundo a partir de um único <audio>.
 *
 * O navegador só permite iniciar áudio dentro do mesmo gesto de toque do
 * usuário (isso vale principalmente para iPhone/Safari). Por isso, `play()`
 * deve ser chamado diretamente dentro do onClick que o visitante já vai dar
 * (o toque em "Abrir convite"), e não depois, de forma assíncrona.
 */
export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.currentTime < AUDIO_START_SECONDS) {
      audio.currentTime = AUDIO_START_SECONDS;
    }

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        setAvailable(false);
      });
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) {
      pause();
    } else {
      play();
    }
  }, [playing, play, pause]);

  return { audioRef, playing, available, play, pause, toggle, AUDIO_SRC };
}

export type BackgroundMusic = ReturnType<typeof useBackgroundMusic>;
