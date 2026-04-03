import bgMusic from './assets/Ernar.mp3';
import React, { useEffect, useRef, useState } from 'react';
import Envelope from './components/Envelope';
import Quiz from './components/Quiz';
import VideoModal from './components/VideoModal';
import Scene from './components/Scene';
import FinalScreen from './components/FinalScreen';
import ProposalScreen from './components/ProposalScreen';
import { questions } from './data/questions';
import FlipCard from './components/Flipcard.jsx';

function App() {
  const [step, setStep] = useState('proposal');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [retryToken, setRetryToken] = useState(0);
  const audioRef = useRef(null);

  const handleProposalYes = () => {
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
      {step !== 'envelope' && step !== 'proposal' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <Scene progress={currentQuestionIndex + (step === 'final' ? 1 : 0)} totalSteps={questions.length} />
        </div>
      )}
      
      {step === 'proposal' && <ProposalScreen onYes={handleProposalYes} />}

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
