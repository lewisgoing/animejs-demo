'use client';

import { useState, useRef } from 'react';

interface SongPlayPauseProps {
  audioContext: AudioContext;
  setAudioSource: (source: MediaElementAudioSourceNode) => void;
  setAnalyser: (analyser: AnalyserNode) => void;
}

const SongPlayPause: React.FC<SongPlayPauseProps> = ({ audioContext, setAudioSource, setAnalyser }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);

      // Set up Web Audio API
      const source = audioContext.createMediaElementSource(audioRef.current);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      setAudioSource(source);
      setAnalyser(analyser);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Song Control</h3>
      <audio ref={audioRef} src="/sample.mp3" />
      <button
        onClick={togglePlay}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default SongPlayPause;