import React from 'react';

export default function TransitionScreen({ onNext }) {
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '20px' }}>
      <h1 className="romantic-title" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
        Ураа! 🎉 Мен сенің осылай жауап беретініңді білдім!
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', lineHeight: '1.6', color: '#ff4d4d' }}>
        Енді саған арнаған кішкентай сұрақтарым бар. Дайынсың ба?
      </p>
      <button className="quiz-btn" onClick={onNext} style={{ fontSize: '1.2rem', padding: '0.8em 2em' }}>
        Дайынмын! ❤️
      </button>
    </div>
  );
}
