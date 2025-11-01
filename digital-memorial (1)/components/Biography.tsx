import React from 'react';

interface BiographyProps {
  bio: string;
}

export const Biography: React.FC<BiographyProps> = ({ bio }) => {
  return (
    <section 
      className="text-center border-t border-b border-gray-700/50 py-8 animate-fade-in-up"
      style={{ animationDelay: '0.8s' }}
    >
      <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto italic">
        "{bio}"
      </p>
    </section>
  );
};