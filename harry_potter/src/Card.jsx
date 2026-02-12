import React from 'react'

function Card({ book }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-72 hover:border-purple-500 transition">
      <img 
        src={book.cover} 
        alt={book.title}
        className="w-full h-80 object-cover rounded mb-3"
      />
      <h2 className="text-xl font-bold mb-2 text-purple-400">
        {book.title}
      </h2>
      <p className="text-gray-400 text-sm mb-1">
        📅 {book.releaseDate}
      </p>
      <p className="text-gray-400 text-sm">
        📖 {book.pages} pages
      </p>
    </div>
  )
}

export default Card