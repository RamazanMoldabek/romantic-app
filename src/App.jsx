import bgMusic from './assets/Ernar.mp3';
import React, { useEffect, useRef, useState } from 'react';
import Envelope from './components/Envelope';
import Quiz from './components/Quiz';
import VideoModal from './components/VideoModal';
import Scene from './components/Scene';
import FinalScreen from './components/FinalScreen';
import ProposalScreen from './components/ProposalScreen';
import TransitionScreen from './components/TransitionScreen';
import { questions } from './data/questions';
import FlipCard from './components/FlipCard.jsx';

function App() {
  const [step, setStep] = useState('proposal');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [retryToken, setRetryToken] = useState(0);

  // Ref for the audio element
  const audioRef = useRef(null);
  // Ref to store previous audio time so we can restore it when modal closes
  const audioTimeRef = useRef(0);

  const handleProposalYes = () => {
    setStep('transition');
  };

  const handleTransitionNext = () => {
    setStep('envelope');
  };

  const handleEnvelopeOpen = () => {
    setStep('cards');
    audioRef.current?.play().catch(() => { });
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
    if (audioRef.current) {
      // Save current audio time
      audioTimeRef.current = audioRef.current.currentTime;
      // Pause background music
      audioRef.current.pause();
    }
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setRetryToken(prev => prev + 1);

    // Attempt to resume audio properly
    if (audioRef.current) {
      // Restore previous audio time
      audioRef.current.currentTime = audioTimeRef.current;
      // Resume playback using audio.play() and handle autoplay errors using .catch()
      audioRef.current.play().catch(error => {
        console.warn("Background music autoplay was blocked by the browser:", error);
      });
    }
  };

  const handleRestart = () => {
    setStep('envelope');
    setCurrentQuestionIndex(0);
    setShowVideo(false);
    setRetryToken(0);
    audioRef.current?.play().catch(() => { });
  };

  const handleStopMusic = () => {
    audioRef.current?.pause();
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
      {step !== 'envelope' && step !== 'proposal' && step !== 'transition' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <Scene progress={currentQuestionIndex + (step === 'final' ? 1 : 0)} totalSteps={questions.length} />
        </div>
      )}

      {step === 'proposal' && <ProposalScreen onYes={handleProposalYes} />}

      {step === 'transition' && <TransitionScreen onNext={handleTransitionNext} />}

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

      {step === 'final' && <FinalScreen onRestart={handleRestart} onStopMusic={handleStopMusic} />}

      {showVideo && <VideoModal onClose={closeVideo} videoSrc={questions[currentQuestionIndex].video} failMessage={questions[currentQuestionIndex].failMessage} />}
    </>
  );
}

export default App;
