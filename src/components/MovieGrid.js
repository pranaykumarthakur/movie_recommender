import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) return <p className="text-center text-gray-500 mt-20">No movies found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;