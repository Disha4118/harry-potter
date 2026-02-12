import React from 'react'

function SpellCard({ spell }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-72 hover:border-purple-500 transition">
      <h2 className="text-xl font-bold mb-3 text-purple-400">
        {spell.spell}
      </h2>
      <p className="text-gray-400 text-sm mb-2">
        📜 {spell.use}
      </p>
    </div>
  )
}

export default SpellCard;