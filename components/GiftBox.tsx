
import React from 'react';

interface GiftBoxProps {
  onClick: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group group-hover:animate-gift-shake cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 focus-visible:ring-opacity-75 rounded-lg"
      aria-label="Open birthday gift"
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64 gift-body">
        {/* Gift Lid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-[28%] bg-pink-500 rounded-t-lg z-20 shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-4">
           {/* Lid Ribbon */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-rose-400"></div>
        </div>
        
        {/* Gift Box */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[75%] bg-pink-400 rounded-b-lg shadow-2xl">
            {/* Box Ribbon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-rose-300"></div>
        </div>

        {/* Bow */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-30 transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
          <div className="absolute w-8 h-8 bg-rose-400 rounded-full top-0 left-0 transform -translate-x-2 -translate-y-2"></div>
          <div className="absolute w-8 h-8 bg-rose-400 rounded-full top-0 right-0 transform translate-x-2 -translate-y-2"></div>
          <div className="absolute w-8 h-8 bg-rose-400 rounded-full bottom-0 left-0 transform -translate-x-2 translate-y-2"></div>
          <div className="absolute w-8 h-8 bg-rose-400 rounded-full bottom-0 right-0 transform translate-x-2 translate-y-2"></div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg drop-shadow-md">Click to open Me!</div>
      </div>
    </button>
  );
};

export default GiftBox;
