import React from 'react'
import Navbar from './Navbar'

function Spells() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Navbar />
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              🪄 Magical Spells 🪄
            </h1>
            <p className="text-gray-400 text-lg">Master the art of magic</p>
            <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
          </div>
          
          <div className="text-center text-gray-300 text-xl">
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spells
