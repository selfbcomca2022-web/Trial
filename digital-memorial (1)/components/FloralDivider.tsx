import React from 'react';

export const FloralDivider: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
      <svg
        className="w-24 h-auto text-amber-400/50"
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M100 5C70 5 60 15 50 15S30 5 0 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M100 5C130 5 140 15 150 15S170 5 200 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M100 10C90 10 85 15 80 15S70 10 60 10"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M100 10C110 10 115 15 120 15S130 10 140 10"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};
