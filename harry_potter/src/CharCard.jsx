import React from 'react'

function CharCard({ character }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-72 hover:border-purple-500 transition">
      {character.image && (
        <img 
          src={character.image} 
          alt={character.fullName}
          className="w-full h-80 object-cover rounded mb-3"
        />
      )}
      
      <h2 className="text-xl font-bold mb-1 text-purple-400">
        {character.fullName}
      </h2>
      
      {character.nickname && (
        <p className="text-gray-500 italic text-sm mb-3">"{character.nickname}"</p>
      )}

      {character.hogwartsHouse && (
        <p className="text-gray-400 text-sm mb-1">
          🏰 {character.hogwartsHouse}
        </p>
      )}

      {character.birthDate && (
        <p className="text-gray-400 text-sm mb-1">
          📅 {character.birthDate}
        </p>
      )}

      {character.interpretedBy && (
        <p className="text-gray-400 text-sm">
          🎭 {character.interpretedBy}
        </p>
      )}
    </div>
  )
}

export default CharCard