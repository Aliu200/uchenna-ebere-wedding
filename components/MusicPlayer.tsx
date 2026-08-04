"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/audio/stay.mp3"
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-8 left-8 z-[9999] bg-red-600 text-white px-6 py-4 rounded-full border-4 border-white shadow-2xl"
      >
        {playing ? "⏸ Pause Music" : "♪ Play Music"}
      </button>
    </>
  );
}