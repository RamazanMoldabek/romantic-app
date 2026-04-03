import React, { useState } from 'react';
import kittyFlowers from '../assets/kitty-flowers.png';


const noMessages = [
  "",
  "Сенімдісің бе? 🥺",
  "Қайта ойланшы! 😢",
  "Жүрегімді ауыртпашы... 💔",
  "Келісе салшы енді! 😭",
  "Тағы бір мүмкіндік берейін... 🤔",
  "Шынымен Жоқ па? 🥺",
];

export default function ProposalScreen({ onYes }) {
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  const getNoButtonText = () => {
    if (noCount === 0) return "Жоқ";
    const textArray = ["Жоқ", "Сенімдісің бе?", "Мүмкін иә?", "Қателестің-ау?", "Жылаймын қазір", "Бұлай істемеші"];
    return textArray[Math.min(noCount, textArray.length - 1)];
  };

  const currentMiniText = noMessages[Math.min(noCount, noMessages.length - 1)];

  return (
    <div className="proposal-screen fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '20px' }}>
      <h1 className="romantic-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Сен менің Баян сұлуым боласың ба? 🌹</h1>
      <img src={kittyFlowers} alt="Kitty with flowers" style={{ width: '180px', marginBottom: '20px' }} />
      {noCount > 0 && (
        <p style={{ fontSize: '1.2rem', color: '#ff4d4d', marginBottom: '20px', minHeight: '30px' }}>
          {currentMiniText}
        </p>
      )}
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          className="quiz-btn"
          style={{
            fontSize: `${1.2 + noCount * 0.4}rem`,
            padding: '0.8em 2em',
            transition: 'all 0.2s ease-in-out'
          }}
          onClick={onYes}
        >
          Иә ❤️
        </button>
        <button
          className="quiz-btn"
          style={{
            background: '#666',
            fontSize: '1.2rem',
            padding: '0.8em 2em',
            transition: 'all 0.2s ease-in-out'
          }}
          onClick={handleNoClick}
        >
          {getNoButtonText()}
        </button>
      </div>
    </div>
  );
}
