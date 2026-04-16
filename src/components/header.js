import React from 'react';

const Header = ({ setSearchQuery }) => (
  <header className="bg-gray-900/95 sticky top-0 z-50 py-4 px-10 flex flex-col md:flex-row justify-between items-center border-b border-gray-800 backdrop-blur-sm">
    <h1 className="text-2xl font-black text-red-600 tracking-tighter mb-4 md:mb-0">
      CINE<span className="text-white">FLIX</span>
    </h1>
    {/* Requirement: Include a functional search bar */}
    <input
      type="text"
      placeholder="Search for a movie..."
      className="w-full md:w-80 bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-600 outline-none transition-all"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </header>
);

export default Header;