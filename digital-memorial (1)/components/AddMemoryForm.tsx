import React, { useState } from 'react';
import { generateTribute } from '../services/geminiService';
import type { Memory } from '../types';

interface AddMemoryFormProps {
  onAddMemory: (memory: Memory) => void;
}

const LoadingSpinner: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export const AddMemoryForm: React.FC<AddMemoryFormProps> = ({ onAddMemory }) => {
  const [author, setAuthor] = useState('');
  const [memoryText, setMemoryText] = useState('');
  const [generatedTribute, setGeneratedTribute] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateTribute = async () => {
    if (!memoryText.trim()) {
      setError('Please share a memory first.');
      return;
    }
    setError('');
    setIsLoading(true);
    setGeneratedTribute('');
    const tribute = await generateTribute(memoryText);
    setGeneratedTribute(tribute);
    setIsLoading(false);
  };

  const handleAddTributeToWall = () => {
    if (!generatedTribute) return;
    const finalAuthor = author.trim() || 'Anonymous';
    onAddMemory({ author: finalAuthor, text: generatedTribute });
    setAuthor('');
    setMemoryText('');
    setGeneratedTribute('');
  };

  return (
    <section className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border-t-4 border-amber-400">
      <h2 className="text-3xl font-bold text-center mb-6 text-amber-400">Share a Memory</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">Your Name (Optional)</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="e.g., A Friend"
            className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-amber-400 focus:border-amber-400"
          />
        </div>
        <div>
          <label htmlFor="memory" className="block text-sm font-medium text-gray-300 mb-1">Your Memory</label>
          <textarea
            id="memory"
            rows={4}
            value={memoryText}
            onChange={(e) => setMemoryText(e.target.value)}
            placeholder="Share a story, a feeling, or a moment you cherished..."
            className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-amber-400 focus:border-amber-400"
          />
          {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </div>
        <div className="text-center">
            <button
                onClick={handleGenerateTribute}
                disabled={isLoading}
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-amber-400 disabled:bg-amber-700 disabled:cursor-not-allowed"
            >
                {isLoading && <LoadingSpinner />}
                {isLoading ? 'Generating...' : 'Generate a Tribute'}
            </button>
        </div>
      </div>
      
      {generatedTribute && (
        <div className="mt-6 pt-6 border-t border-gray-700 animate-fade-in">
            <h3 className="text-xl font-semibold text-center text-amber-300 mb-4">Our Suggested Tribute</h3>
            <div className="bg-gray-900 p-4 rounded-md">
                <p className="text-gray-300 italic">"{generatedTribute}"</p>
            </div>
            <div className="text-center mt-4">
                <button
                    onClick={handleAddTributeToWall}
                    className="px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
                >
                    Add to Memorial Wall
                </button>
            </div>
        </div>
      )}
    </section>
  );
};