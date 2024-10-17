import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="card shadow-lg transform hover:scale-105 transition duration-300 w-60">
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="info">
          <h3 className="title">{movie.title}</h3>
          <p className="rating">⭐ {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
