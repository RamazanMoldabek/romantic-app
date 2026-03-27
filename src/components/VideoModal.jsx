import React from 'react';

export default function VideoModal({ onClose, videoSrc, failMessage }) {
  return (
    <div className="video-overlay fade-in">
      <div className="video-modal-content">
        <h2 className="romantic-title" style={{ marginBottom: '20px' }}>
          {failMessage || 'Дұрыстап ойлансай шамалы'}
        </h2>
        <video
          className="Abdilda1"
          src={videoSrc}
          autoPlay
          controls={false}
          onEnded={onClose}
        ></video>
        <button className="quiz-btn" style={{ marginTop: '20px' }} onClick={onClose}>
          Қайтып тырысып көрейін
        </button>
      </div>
    </div>
  );
}
