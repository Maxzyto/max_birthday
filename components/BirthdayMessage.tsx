
import React from 'react';
import ImageGallery from './ImageGallery';

interface BirthdayMessageProps {
  name: string;
  message: string; // AI generated message
  userMessage: string; // User's custom message
  error: string | null;
}

const BirthdayMessage: React.FC<BirthdayMessageProps> = ({ name, message, userMessage, error }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl max-w-2xl w-full animate-fade-in-up">
      <h2 className="text-3xl md:text-5xl font-pacifico text-white mb-6 text-center drop-shadow-lg">Happy Birthday, {name}!</h2>
      
      {userMessage && (
        <div className="mb-6 bg-white bg-opacity-10 p-4 rounded-lg">
          <p className="text-lg text-white font-light italic leading-relaxed drop-shadow-md text-center">
            "{userMessage}"
          </p>
        </div>
      )}

      <div className="bg-black bg-opacity-10 p-4 rounded-lg">
        <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed drop-shadow-md text-center">
          "{message}"
        </p>
      </div>

      {error && (
         <p className="mt-4 text-sm text-yellow-200 bg-yellow-900 bg-opacity-30 px-3 py-1 rounded-md text-center">{error}</p>
      )}

      {/* <ImageGallery /> */}
    </div>
  );
};

export default BirthdayMessage;
