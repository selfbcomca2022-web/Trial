import React, { useState } from 'react';
import { Header } from './components/Header';
import { Biography } from './components/Biography';
import { PhotoGallery } from './components/PhotoGallery';
import { MemoryList } from './components/MemoryList';
import { AddMemoryForm } from './components/AddMemoryForm';
import { FloralDivider } from './components/FloralDivider';
import type { Memory } from './types';

const App: React.FC = () => {
  const person = {
    name: "Michael Jackson",
    lifespan: "1958 - 2009",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Michael_Jackson_in_1988.jpg/800px-Michael_Jackson_in_1988.jpg",
    bio: "The King of Pop, a global icon who redefined music, dance, and entertainment. Michael's artistry, innovation, and boundless creativity touched billions. His music broke barriers, and his electrifying performances remain legendary. He taught the world to heal, to love, and to never stop believing in the magic of a dream."
  };

  const initialPhotos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Michael_Jackson_Moonwalk.jpg/800px-Michael_Jackson_Moonwalk.jpg",
    "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Jackson_5_in_1972.JPG/1024px-Jackson_5_in_1972.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Michael_Jackson_performing_in_Munich_1997.jpg/800px-Michael_Jackson_performing_in_Munich_1997.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Michael_Jackson_1993.jpg/800px-Michael_Jackson_1993.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Michael_Jackson_by_Glowimages.jpg/800px-Michael_Jackson_by_Glowimages.jpg"
  ];

  const initialMemories: Memory[] = [
    {
      author: "A Lifelong Fan",
      text: "I remember the first time I saw the moonwalk on TV. It was pure magic. His music was the soundtrack to my childhood, and his creativity inspired me to dream bigger. He wasn't just an entertainer; he was a phenomenon. His legacy will live on forever."
    },
    {
      author: "A Fellow Musician",
      text: "Working with Michael in the studio was a masterclass. His attention to detail, his understanding of rhythm and melody was unparalleled. He poured his entire soul into every note. He pushed all of us to be better, to reach for a level of perfection we didn't know we had."
    },
     {
      author: "A Young Admirer",
      text: "My parents showed me his videos, and I was instantly captivated. The way he moved, the power of his voice... it's timeless. Even today, his songs make me want to dance and sing along. He proved that one person can truly change the world with their art."
    }
  ];

  const [memories, setMemories] = useState<Memory[]>(initialMemories);

  const handleAddMemory = (newMemory: Memory) => {
    setMemories(prevMemories => [newMemory, ...prevMemories]);
  };

  return (
    <div className="min-h-screen text-gray-200">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <Header name={person.name} lifespan={person.lifespan} imageUrl={person.imageUrl} />
        
        <main className="mt-8 space-y-12">
          <FloralDivider />
          <Biography bio={person.bio} />
          <PhotoGallery photos={initialPhotos} />
          <MemoryList memories={memories} />
          <AddMemoryForm onAddMemory={handleAddMemory} />
        </main>

        <footer className="text-center text-gray-500 mt-16 pb-8">
          <p>In loving memory of Michael Jackson.</p>
          <p>&copy; {new Date().getFullYear()} The Estate of Michael Jackson</p>
        </footer>
      </div>
    </div>
  );
};

export default App;