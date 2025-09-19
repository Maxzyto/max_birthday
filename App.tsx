
import React, { useState, useCallback } from 'react';
import GiftBox from './components/GiftBox';
import BirthdayMessage from './components/BirthdayMessage';
import Confetti from './components/Confetti';
import Spinner from './components/Spinner';
import PersonalizeForm from './components/PersonalizeForm';
import { generateBirthdayWish } from './services/geminiService';

type View = 'form' | 'gift' | 'message';

const backgroundImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApgAAAPoCAYAAAD8aG0cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAP+6SURBVHjazL15nBzVlf7/s6p6dndXV1dXl3t27h0sCQECgQAJgZAQkCA5JEFy4iBBEiAhgSQgBAhYILGAYGNHGnsbG2/jN97GN7GNb+Kb2GZns7PZ2ezOzuzunu6uro7qVfX2X5+vV3V1dXV3Z3dnZ3d29unP+5SeVFWvqq7qVOWBf64gIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi-      '
const App: React.FC = () => {
  const [view, setView] = useState<View>('form');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [birthdayMessage, setBirthdayMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  
  const [name, setName] = useState<string>('Maxwell');
  const [userMessage, setUserMessage] = useState<string>('');

  const handleFormSubmit = (submittedName: string, submittedUserMessage: string) => {
    setName(submittedName);
    setUserMessage(submittedUserMessage);
    setView('gift');
  };

  const handleOpenGift = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const wish = await generateBirthdayWish(name);
      setBirthdayMessage(wish);
    } catch (err) {
      console.error(err);
      setError('Oops! The magic birthday candle went out. Please try again.');
      // Fallback message
      setBirthdayMessage('Wishing you a day filled with joy, laughter, and everything you love. Happy Birthday!');
    } finally {
      setIsLoading(false);
      setView('message');
    }
  }, [name]);
  
  const renderContent = () => {
    switch(view) {
      case 'form':
        return <PersonalizeForm initialName={name} onSubmit={handleFormSubmit} />;
      case 'gift':
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-pacifico text-white mb-4 drop-shadow-lg">Happy Birthday, {name}!</h1>
            <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">A surprise is waiting for you...</p>
            <div className="relative">
              <GiftBox onClick={handleOpenGift} />
              {isLoading && (
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                  <Spinner />
                </div>
              )}
            </div>
          </div>
        );
      case 'message':
        return <BirthdayMessage name={name} message={birthdayMessage} userMessage={userMessage} error={error} />;
      default:
        return null;
    }
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <main
      className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden p-4 ${view !== 'form' ? 'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400' : ''}`}
      style={view === 'form' ? backgroundStyle : {}}
    >
      {view === 'message' && <Confetti />}
      <div className="z-10 w-full max-w-md flex justify-center">
        {renderContent()}
      </div>
       <footer className="absolute bottom-4 text-white text-opacity-70 text-sm z-10">
          Made with ❤️ for you to wish Max on this special day.
      </footer>
    </main>
  );
};

export default App;
