import React, { useState, useEffect } from "react";
import MemeCard from "./components/MemeCard";

function App() {
  const [memes, setMemes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes))
      .catch((err) => console.error(err));
  }, []);

  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Meme Search</h1>

      <div className="flex items-center mb-10 w-full max-w-md">
        <input
          type="text"
          placeholder="Search memes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-xl hover:bg-blue-600 transition">
          🔍
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
}

export default App;
