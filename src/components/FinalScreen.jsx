import React, { useState } from 'react';
import nevza from '../assets/love-and-pills.mp4';

export default function FinalScreen({ onRestart, onStopMusic }) {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
    if (onStopMusic) onStopMusic();
  };

  return (
    <div className="final-message fade-in">
      {!showVideo ? (
        <>
          <h1 className="romantic-title">Қозы көрпеш - Баян сұлу мейрамыңмен жаным❤️</h1>
          <p style={{ marginTop: '10px' }}>Сені қана уақыт сүйіп өтсем, сонша күн бақыт кешем</p>
          <button className="quiz-btn" style={{ marginTop: '30px' }} onClick={handleShowVideo}>
            Тағы да💖
          </button>
        </>
      ) : (
        <>
          {/* <h2 className="romantic-title" style={{ marginBottom: '15px' }}></h2> */}
          <video
            className="Abdilda1 final-screen-video"
            src={nevza}
            autoPlay
            controls={false}
          ></video>
        </>
      )}<br />
      <button className="quiz-btn" style={{ marginTop: '20px' }} onClick={onRestart}>
        Тағы да өтейінші
      </button>
    </div>
  );
}
