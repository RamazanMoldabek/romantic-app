import React, { useState, useEffect } from 'react';

export default function Quiz({ question, onCorrect, onBlock, playVideo }) {
  const [attempts, setAttempts] = useState(3);
  const [hearts, setHearts] = useState([]);

  const handleAnswer = (option) => {
    if (question.answers.includes(option)) {
      const newHearts = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() + i,
        left: (Math.random() * 80 + 10) + 'vw',
        animationDuration: (Math.random() * 2 + 1.5) + 's'
      }));
      setHearts(newHearts);

      setTimeout(() => {
        setHearts([]);
        onCorrect('cards');
      }, 1500);

    } else {
      const newAttempts = attempts - 1;
      setAttempts(newAttempts);
      if (newAttempts <= 0) {
        onBlock();
        setTimeout(() => {
          playVideo();
        }, 1500); // show fail message briefly before video
      }
    }
  };

  return (
    <div className="quiz-container fade-in">
      {hearts.map(heart => (
        <div key={heart.id} className="floating-heart" style={{ left: heart.left, animationDuration: heart.animationDuration }}>❤️</div>
      ))}
      <h2 className="romantic-title" style={{ fontSize: '28px', marginBottom: '20px' }}>
        {question.question}
      </h2>
      <div className="options-grid">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className="quiz-btn"
            onClick={() => handleAnswer(opt)}
            disabled={attempts <= 0 || hearts.length > 0}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="attempts-text">
        {attempts > 0 ? `Осталось попыток: ${attempts}` : 'Шамалы дұрыстап оқысай'}
      </div>
    </div>
  );
}
