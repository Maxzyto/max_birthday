
import React, { useState } from 'react';

interface PersonalizeFormProps {
  initialName: string;
  onSubmit: (name: string, userMessage: string) => void;
}

const PersonalizeForm: React.FC<PersonalizeFormProps> = ({ initialName, onSubmit }) => {
  const [name, setName] = useState(initialName);
  const [userMessage, setUserMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
        onSubmit(name, userMessage);
    }
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full animate-fade-in-up">
      <h1 className="text-3xl md:text-5xl font-pacifico text-white mb-6 text-center drop-shadow-lg">A Birthday Surprise!</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2 drop-shadow-md">Who is this for?</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75 transition"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="userMessage" className="block text-white font-semibold mb-2 drop-shadow-md">Add your own wish (optional)</label>
          <textarea
            id="userMessage"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            rows={4}
            placeholder="Wishing you the best day ever..."
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-transform transform hover:scale-105 shadow-lg"
        >
          Create the Surprise
        </button>
      </form>
    </div>
  );
};

export default PersonalizeForm;
