import React from 'react';

interface PhotoGalleryProps {
  photos: string[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-400 animate-fade-in-up" style={{ animationDelay: '1s' }}>A Life in Pictures</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-lg bg-gray-800 aspect-[3/2] animate-fade-in-up"
            style={{ animationDelay: `${1.2 + index * 0.15}s` }}
          >
            <img 
              src={photo} 
              alt={`Memory ${index + 1}`} 
              className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500 ease-in-out" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};