import React from 'react';
import type { Memory } from '../types';

interface MemoryListProps {
  memories: Memory[];
}

export const MemoryList: React.FC<MemoryListProps> = ({ memories }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-400 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>Cherished Memories</h2>
      <div className="space-y-6">
        {memories.map((memory, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-amber-400 animate-fade-in-up"
            style={{ animationDelay: `${1.7 + index * 0.2}s` }}
          >
            <p className="text-gray-300 mb-4 leading-relaxed">"{memory.text}"</p>
            <p className="text-right text-amber-300 font-semibold">- {memory.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};