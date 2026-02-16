import React from "react";

/**
 * HouseCard component displays a single Hogwarts house
 * Shows house emoji, name, founder, colors, and animal symbol
 */
function HouseCard({house}) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 w-64 hover:border-purple-500 transition">
      <div className="text-center mb-4">
        {/* House emoji symbol */}
        <div className="text-5xl mb-2">{house.emoji}</div>
        {/* House name */}
        <h2 className="text-2xl font-bold text-purple-400">
          {house.house}
        </h2>
      </div>

      {/* House details */}
      <div className="space-y-2 text-gray-400 text-sm">
        {/* House founder */}
        <p><strong>Founder:</strong> {house.founder}</p>
        {/* House colors */}
        <p><strong>Colors:</strong> {house.colors.join(', ')}</p>
        {/* House animal symbol */}
        <p><strong>Animal:</strong> {house.animal}</p>
      </div>
    </div>
  );
}

export default HouseCard;
