
import React from 'react';

const CONFETTI_COUNT = 150;
const COLORS = ['#fde68a', '#fca5a5', '#a78bfa', '#818cf8', '#60a5fa', '#93c5fd'];

const Confetti: React.FC = () => {
  const confettiPieces = Array.from({ length: CONFETTI_COUNT }).map((_, index) => {
    const style = {
      left: `${Math.random() * 100}%`,
      backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
      animationDuration: `${Math.random() * 3 + 4}s`, // 4s to 7s
      animationDelay: `${Math.random() * 2}s`, // 0s to 2s
      transform: `rotate(${Math.random() * 360}deg)`,
      width: `${Math.floor(Math.random() * 8) + 8}px`,
      height: `${Math.floor(Math.random() * 6) + 6}px`,
    };
    return (
      <div
        key={index}
        className="absolute top-0 rounded-full animate-confetti-fall"
        style={style}
      />
    );
  });

  return <div className="absolute inset-0 w-full h-full pointer-events-none z-20">{confettiPieces}</div>;
};

export default Confetti;
