import React, { useState } from 'react';
import nevza from '../assets/nevza1.mp4';

export default function FinalScreen({ onRestart }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="final-message fade-in">
      {!showVideo ? (
        <>
          <h1 className="romantic-title">Есіңде екен ғой🥰😍</h1>
          <p style={{ marginTop: '10px' }}>Я никогда не забывал и не забуду все детали</p>
          <button className="quiz-btn" style={{ marginTop: '30px' }} onClick={() => setShowVideo(true)}>
            Еще кое-что 💖
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
      )}
      <button className="quiz-btn" style={{ marginTop: '20px' }} onClick={onRestart}>
        Пройти опять
      </button>
    </div>
  );
}
