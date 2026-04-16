import React from 'react';

const MovieCard = ({ movie }) => {
  const imgUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer border border-gray-800 hover:border-red-600 transition duration-300">
      <div className="relative">
        <img src={imgUrl} alt={movie.title} className="w-full h-80 object-cover group-hover:opacity-75 transition" />
        <span className="absolute top-2 right-2 bg-yellow-500 text-black font-bold text-xs px-2 py-1 rounded">
          {movie.vote_average.toFixed(1)}
        </span>
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold truncate text-sm">{movie.title}</h3>
        <p className="text-gray-500 text-xs mt-1">{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;