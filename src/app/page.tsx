'use client';

import { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import AudioVisualizer from '@/components/AudioVisualizer';
import VisualizerParameters from '@/components/VisualizerParameters';
import SongPlayPause from '@/components/SongPlayPause';

export default function Home() {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioSource, setAudioSource] = useState<MediaElementAudioSourceNode | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [visualizerParams, setVisualizerParams] = useState({
    barWidth: 4,
    barColor: '#3b82f6',
  });

  useEffect(() => {
    const context = new AudioContext();
    setAudioContext(context);
    return () => {
      context.close();
    };
  }, []);

  const layout = [
    { i: 'visualizer', x: 0, y: 0, w: 1, h: 2 },
    { i: 'parameters', x: 1, y: 0, w: 1, h: 1 },
    { i: 'playpause', x: 1, y: 1, w: 1, h: 1 },
  ];

  return (
    <main className="min-h-screen w-full p-4">
      <GridLayout
        className="bento-grid"
        layout={layout}
        cols={2}
        rowHeight={150}
        width={typeof window !== 'undefined' ? window.innerWidth : 1200}
        isDraggable={true}
        isResizable={true}
        autoSize={true}
        margin={[16, 16]}
        containerPadding={[0, 0]}
        useCSSTransforms={true}
        draggableHandle=".drag-handle"
      >
        <div key="visualizer" className="bento-item">
          <div className="drag-handle absolute top-2 right-2 w-6 h-6 cursor-move opacity-50 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/>
            </svg>
          </div>
          {audioContext && analyser && (
            <AudioVisualizer
              analyser={analyser}
              barWidth={visualizerParams.barWidth}
              barColor={visualizerParams.barColor}
            />
          )}
        </div>
        <div key="parameters" className="bento-item">
          <div className="drag-handle absolute top-2 right-2 w-6 h-6 cursor-move opacity-50 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/>
            </svg>
          </div>
          <VisualizerParameters
            params={visualizerParams}
            setParams={setVisualizerParams}
          />
        </div>
        <div key="playpause" className="bento-item">
          <div className="drag-handle absolute top-2 right-2 w-6 h-6 cursor-move opacity-50 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/>
            </svg>
          </div>
          {audioContext && (
            <SongPlayPause
              audioContext={audioContext}
              setAudioSource={setAudioSource}
              setAnalyser={setAnalyser}
            />
          )}
        </div>
      </GridLayout>
    </main>
  );
}