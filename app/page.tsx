"use client";

import { useState } from "react";
import { characters } from "@/lib/characters";

// Helper function to add basePath for GitHub Pages
// This should match the basePath in next.config.js
const BASE_PATH = '/basics-of-narrative';
const getImagePath = (path: string) => {
  if (path.startsWith('/')) {
    return `${BASE_PATH}${path}`;
  }
  return path;
};

export default function Home() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCharacter = selectedId
    ? characters.find((c) => c.id === selectedId)
    : null;

  return (
    <main
      className="w-full min-h-screen bg-cover bg-center overflow-hidden flex items-center justify-center relative"
      style={{ backgroundImage: `url('${getImagePath('/background.jpg')}')` }}
    >
      {/* Dark overlay to dim background and keep characters visible */}
      <div className="fixed inset-0 bg-black/85 z-0" />

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-x-0 gap-y-4 md:gap-y-6 relative z-10 pt-4 md:pt-6">
        {characters.map((character) => (
          <div
            key={character.id}
            className="relative overflow-hidden cursor-pointer group aspect-square"
            onMouseEnter={() => setHoveredId(character.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedId(character.id)}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-500 ease-out flex items-center justify-center"
              style={{
                backgroundImage: `url('${getImagePath(character.image)}')`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                padding: "3rem",
              }}
            />

            {hoveredId === character.id && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-end p-4 md:p-6 z-40">
                <h2 className="text-lg md:text-2xl font-bold text-white mb-2">
                  {character.name}
                </h2>
                <p className="text-xs md:text-sm text-gray-300 mb-3">
                  {character.role}
                </p>
                <p className="text-xs text-gray-400 line-clamp-4">
                  {character.fullBio}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedCharacter && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="bg-gradient-to-br from-green-950/90 to-black rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row gap-6 md:gap-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-white transition-colors z-10 p-2 cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Character image */}
            <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-96 bg-black/50 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={getImagePath(selectedCharacter.image || "/placeholder.svg")}
                alt={selectedCharacter.name}
                className="w-auto h-full max-w-full object-contain"
              />
            </div>

            {/* Character details */}
            <div className="flex-1 flex flex-col justify-center py-4 md:py-6 px-4 md:pr-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {selectedCharacter.name}
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-1">
                {selectedCharacter.role}
              </p>
              <p className="text-xs md:text-sm italic text-gray-400 mb-4 md:mb-6">
                {selectedCharacter.archetype}
              </p>

              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                {selectedCharacter.fullBio}
              </p>

              <div className="space-y-3">
                <h3 className="text-white font-semibold text-sm md:text-base">
                  Key Traits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCharacter.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-full border border-white/20"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}
