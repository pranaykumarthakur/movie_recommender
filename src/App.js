import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import { Loader, ErrorMessage } from './components/UI';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Using environment variable for API Security
  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  useEffect(() => {
    const getData = async () => {
      if (!API_KEY) {
        setError("API Key is missing. Please check your .env file.");
        return;
      }
      
      setLoading(true);
      setError(null);
      
      try {
        const url = search 
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        
        const res = await fetch(url);
        if (!res.ok) throw new Error('Could not fetch data from server.');
        
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError("Network error: Failed to load movies.");
      } finally {
        setLoading(false);
      }
    };

    // Debouncing: waits 500ms after user stops typing to reduce API calls
    const delay = setTimeout(getData, 500); 
    return () => clearTimeout(delay);
  }, [search, API_KEY]);

  return (
    <div className="min-h-screen bg-black">
      <Header setSearchQuery={setSearch} />
      <main className="max-w-7xl mx-auto p-6">
        {/* Requirement: Implement basic loading and error states */}
        {error && <ErrorMessage message={error} />}
        {loading ? <Loader /> : <MovieGrid movies={movies} />}
      </main>
    </div>
  );
}

export default App;