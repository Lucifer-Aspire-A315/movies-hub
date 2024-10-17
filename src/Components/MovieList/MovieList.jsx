// src/components/MovieList.js
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './movieList.css';
const MovieList = ({ movies }) => {
  return (
    <div className="list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
