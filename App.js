import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import { Loader, ErrorMessage } from './components/UI';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  useEffect(() => {
    const getData = async () => {
      if (!API_KEY) {
        setError("API Key is missing. Check your .env file.");
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const url = search 
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError("Failed to load movies. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(getData, 500); // Debounce to save API calls
    return () => clearTimeout(delay);
  }, [search, API_KEY]);

  return (
    <div className="min-h-screen">
      <Header setSearchQuery={setSearch} />
      <div className="max-w-7xl mx-auto p-6">
        {error && <ErrorMessage message={error} />}
        {loading ? <Loader /> : <MovieGrid movies={movies} />}
      </div>
    </div>
  );
}

export default App;