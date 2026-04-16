import React from 'react';

const MovieCard = ({ movie }) => {
  const imgUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden group cursor-pointer border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
      <div className="relative">
        {/* Requirement: Display essential details (image, rating) */}
        <img src={imgUrl} alt={movie.title} className="w-full h-80 object-cover group-hover:opacity-75 transition" />
        <span className="absolute top-2 right-2 bg-yellow-500 text-black font-bold text-xs px-2 py-1 rounded shadow-md">
          ⭐ {movie.vote_average.toFixed(1)}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold truncate text-base">{movie.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;