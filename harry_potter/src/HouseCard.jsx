import React from "react";

function HouseCard({house}) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 w-64 hover:border-purple-500 transition">
      <div className="text-center mb-4">
        <div className="text-5xl mb-2">{house.emoji}</div>
        <h2 className="text-2xl font-bold text-purple-400">
          {house.house}
        </h2>
      </div>

      <div className="space-y-2 text-gray-400 text-sm">
        <p><strong>Founder:</strong> {house.founder}</p>
        <p><strong>Colors:</strong> {house.colors.join(', ')}</p>
        <p><strong>Animal:</strong> {house.animal}</p>
      </div>
    </div>
  );
}

export default HouseCard;
