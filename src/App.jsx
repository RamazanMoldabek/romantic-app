import bgMusic from './assets/ayaulym.mp3';
import React, { useEffect, useRef, useState } from 'react';
import Envelope from './components/Envelope';
import Quiz from './components/Quiz';
import VideoModal from './components/VideoModal';
import Scene from './components/Scene';
import FinalScreen from './components/FinalScreen';
import { questions } from './data/questions';
import FlipCard from './components/FlipCard.jsx';

function App() {
  const [step, setStep] = useState('envelope');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [retryToken, setRetryToken] = useState(0);
  const audioContextRef = useRef(null);
  const musicIntervalRef = useRef(null);
  const audioRef = useRef(null);

  const initBackgroundMusic = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext || audioContextRef.current) return;

    const context = new AudioContext();
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.03, context.currentTime);
    gain.connect(context.destination);

    audioContextRef.current = { context, gain };
  };

  const playTone = (frequency, startTime) => {
    if (!audioContextRef.current) return;
    const { context, gain } = audioContextRef.current;
    const oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, startTime);
    oscillator.connect(gain);
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.18);
  };

  const startBackgroundMusic = async () => {
    initBackgroundMusic();
    const audio = audioContextRef.current;
    if (!audio) return;

    if (audio.context.state === 'suspended') {
      try {
        await audio.context.resume();
      } catch (_) {
        // ignore resume failure
      }
    }

    if (musicIntervalRef.current) return;

    const melody = [440, 494, 523, 440, 440, 494, 523, 440, 523, 587, 659, 523, 523, 587, 659, 523];
    const noteLength = 0.22;

    const scheduleMelody = () => {
      const now = audio.context.currentTime + 0.05;
      melody.forEach((freq, idx) => playTone(freq, now + idx * noteLength));
    };

    scheduleMelody();
    musicIntervalRef.current = window.setInterval(scheduleMelody, melody.length * noteLength * 1000);
  };

  useEffect(() => {
    initBackgroundMusic();

    return () => {
      if (musicIntervalRef.current) {
        clearInterval(musicIntervalRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.context.close();
      }
    };
  }, []);

  const handleEnvelopeOpen = () => {
    startBackgroundMusic();
    setStep('cards');
    audioRef.current?.play().catch(() => {});
  };

  const handleCorrectAnswer = (nextStep) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('final');
    }
  };

  const handleBlock = () => {
    // Optionally log or track fails
  };

  const playVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setRetryToken(prev => prev + 1);
  };

  const handleRestart = () => {
    setStep('envelope');
    setCurrentQuestionIndex(0);
    setShowVideo(false);
    setRetryToken(0);
  };

  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop preload="auto" />
      {step === 'cards' && (
        <div className="flip-cards-container fade-in">
          <h2 className="romantic-title" style={{ marginBottom: "20px" }}>
            Маған сенен басқа қандай қыздар унайды? 😍
          </h2>

          <div className="flip-cards-grid">
            {questions[currentQuestionIndex].cardTexts.map((text, i) => (
              <FlipCard
                key={i}
                text={text}
                img={questions[currentQuestionIndex].images?.[i]}
              />
            ))}
          </div>

          <button
            className="quiz-btn"
            style={{ marginTop: "20px" }}
            onClick={() => setStep('quiz')}
          >
            Енді сұрақтарға өтейік 💌
          </button>
        </div>
      )}
      {step !== 'envelope' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <Scene progress={currentQuestionIndex + (step === 'final' ? 1 : 0)} totalSteps={questions.length} />
        </div>
      )}

      {step === 'envelope' && <Envelope onOpen={handleEnvelopeOpen} />}

      {step === 'quiz' && !showVideo && (
        <Quiz
          key={`${currentQuestionIndex} - ${retryToken}`}
          question={questions[currentQuestionIndex]}
          onCorrect={handleCorrectAnswer}
          onBlock={handleBlock}
          playVideo={playVideo}
        />
      )}

      {step === 'final' && <FinalScreen onRestart={handleRestart} />}

      {showVideo && <VideoModal onClose={closeVideo} videoSrc={questions[currentQuestionIndex].video} failMessage={questions[currentQuestionIndex].failMessage} />}
    </>
  );
}

export default App;
