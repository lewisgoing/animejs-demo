'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface AudioVisualizerProps {
  analyser: AnalyserNode;
  barWidth: number;
  barColor: string;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ analyser, barWidth, barColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barCount = Math.floor(canvas.width / (barWidth + 2));
    const barSpacing = 2;

    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < barCount; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
        const x = i * (barWidth + barSpacing);
        const y = canvas.height - barHeight;

        ctx.fillStyle = barColor;
        ctx.fillRect(x, y, barWidth, barHeight);

        // Anime.js animation for smooth scaling
        animate(`#bar-${i}`, {
          scaleY: barHeight / 100,
          duration: 50,
          ease: 'linear',
        });
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(0);
    };
  }, [analyser, barWidth, barColor]);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default AudioVisualizer;