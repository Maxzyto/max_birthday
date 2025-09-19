
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
        <div
        className="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-yellow-300 border-t-transparent shadow-md"
        ></div>
        <p className="mt-3 text-lg font-semibold">Brewing a wish...</p>
    </div>
  );
};

export default Spinner;
