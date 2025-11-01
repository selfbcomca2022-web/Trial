import React from 'react';

interface HeaderProps {
  name: string;
  lifespan: string;
  imageUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ name, lifespan, imageUrl }) => {
  return (
    <header className="text-center pt-8">
      <img
        src={imageUrl}
        alt={name}
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-amber-400 shadow-xl animate-fade-in-down"
        style={{ animationDelay: '0.2s' }}
      />
      <h1 
        className="text-4xl sm:text-5xl font-bold text-white tracking-tight animate-fade-in-down"
        style={{ animationDelay: '0.4s' }}
      >
        {name}
      </h1>
      <p 
        className="text-lg text-amber-300 mt-2 animate-fade-in-down"
        style={{ animationDelay: '0.6s' }}
      >
        {lifespan}
      </p>
    </header>
  );
};