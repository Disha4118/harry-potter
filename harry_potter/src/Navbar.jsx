import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Navbar component provides navigation across all pages
 * Sticky positioned to remain visible while scrolling
 */
function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* App logo/brand */}
          <Link to="/" className="text-xl font-bold text-purple-400">
             Harry Potter
          </Link>
          
          {/* Navigation links */}
          <div className="flex gap-6">
            <Link to="/spell" className="text-gray-300 hover:text-purple-400 transition">
              Spells
            </Link>
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition">
              Books
            </Link>
            <Link to="/characters" className="text-gray-300 hover:text-purple-400 transition">
              Characters
            </Link>
            <Link to="/houses" className="text-gray-300 hover:text-purple-400 transition">
              Houses
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar