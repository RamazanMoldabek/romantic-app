import React, { useState } from 'react';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        onOpen();
      }, 1000);
    }
  };

  return (
    <div className={`envelope-container fade-in ${isOpen ? 'envelope-open' : ''}`} onClick={handleClick}>
      <div className="envelope">
        <div className="envelope-flap"></div>
        <div className="heart-seal">❤️</div>
      </div>
    </div>
  );
}
