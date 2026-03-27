import React from 'react';
import boyImg from '../assets/boy.png';
import girlImg from '../assets/girl.png';

export default function Scene({ progress, totalSteps }) {
  // Определяем диапазон движения в зависимости от размера экрана
  const isMobile = window.innerWidth <= 480;
  const isTablet = window.innerWidth <= 768;
  
  let startPercent, endPercent;
  
  if (isMobile) {
    startPercent = 5;    // На телефоне движение более заметное
    endPercent = 70;     // Менее чем раньше, чтобы не выходил за границы
  } else if (isTablet) {
    startPercent = 8;
    endPercent = 75;
  } else {
    startPercent = 10;   // На десктопе как было
    endPercent = 75;
  }
  
  const currentLeft = startPercent + (progress / totalSteps) * (endPercent - startPercent);
  
  // Позиция girl зависит от размера экрана
  let girlRight = '15%';
  if (isMobile) {
    girlRight = '5%';  // Ближе к краю на мобильных
  } else if (isTablet) {
    girlRight = '10%';
  }

  return (
    <div className="scene-container fade-in">
      <div className="scene-overlay"></div>

      <div className="character boy" style={{ left: currentLeft + '%' }}>
        <img src={boyImg} alt="Boy" />
      </div>
      <div className="character girl" style={{ right: girlRight }}>
        <img src={girlImg} alt="Girl" />
      </div>
    </div>
  );
}
