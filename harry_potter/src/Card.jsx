import React from 'react'

/**
 * Card component displays a single Harry Potter book
 * Shows book cover, title, release date, and page count
 */
function Card({ book }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-72 hover:border-purple-500 transition">
      {/* Book cover image */}
      <img 
        src={book.cover} 
        alt={book.title}
        className="w-full h-80 object-cover rounded mb-3"
      />
      {/* Book title */}
      <h2 className="text-xl font-bold mb-2 text-purple-400">
        {book.title}
      </h2>
      {/* Release date */}
      <p className="text-gray-400 text-sm mb-1">
        📅 {book.releaseDate}
      </p>
      {/* Number of pages */}
      <p className="text-gray-400 text-sm">
        📖 {book.pages} pages
      </p>
    </div>
  )
}

export default Card