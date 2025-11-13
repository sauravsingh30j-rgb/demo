import React from "react";

function MemeCard({ meme }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md w-60 overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
      <img
        src={meme.url}
        alt={meme.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 text-center">
        <h3 className="text-gray-800 font-semibold text-lg">{meme.name}</h3>
      </div>
    </div>
  );
}

export default MemeCard;
