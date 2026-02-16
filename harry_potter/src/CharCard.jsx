import React from 'react'

/**
 * CharCard component displays a single Harry Potter character
 * Shows character image, name, nickname, house, birthdate, and actor
 * Conditionally renders each field only if data is available
 */
function CharCard({ character }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-72 hover:border-purple-500 transition">
      {/* Character image (if available) */}
      {character.image && (
        <img 
          src={character.image} 
          alt={character.fullName}
          className="w-full h-80 object-cover rounded mb-3"
        />
      )}
      
      {/* Character full name */}
      <h2 className="text-xl font-bold mb-1 text-purple-400">
        {character.fullName}
      </h2>
      
      {/* Character nickname (if available) */}
      {character.nickname && (
        <p className="text-gray-500 italic text-sm mb-3">"{character.nickname}"</p>
      )}

      {/* Hogwarts house (if available) */}
      {character.hogwartsHouse && (
        <p className="text-gray-400 text-sm mb-1">
          🏰 {character.hogwartsHouse}
        </p>
      )}

      {/* Birth date (if available) */}
      {character.birthDate && (
        <p className="text-gray-400 text-sm mb-1">
          📅 {character.birthDate}
        </p>
      )}

      {/* Actor who played the character (if available) */}
      {character.interpretedBy && (
        <p className="text-gray-400 text-sm">
          🎭 {character.interpretedBy}
        </p>
      )}
    </div>
  )
}

export default CharCard