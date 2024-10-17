// src/pages/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './movieDetail.css';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      console.log(response);
      
      setMovie(response.data);
    };
    const fetchCast = async () => {
      const response = await axios.get(
        `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      console.log(response);
      
      setCast(response.data);
    };
    fetchMovie();
    fetchCast();
  }, [id]);

  if (!movie) return <div className="text-center">Loading...</div>;

  return (

    <div className="body">
      <div className="detail card">
        <div className='space'>
        <div className="main">
        <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="info">
      <h1 className="title">{movie.title}</h1>
        <h3 className='release'>Release Date : {movie.release_date}</h3>

      <p className="rate">Rating: {movie.vote_average}</p>
      </div>
      
      
      </div>
      <div className='backdrop'>
              <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
      />
            </div>
            </div>
      
      <div className="col">
        <div>
      <h1 className='tag'>Overview</h1>
            <p className="desc">{movie.overview}</p>
            </div>

            
            </div>
      </div>
      <h1 className='casttag'>Cast</h1>
      <div className="cast">
        <div className="card">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${cast.cast[0].profile_path}`}
      />
      <h4>{cast.cast[0].original_name}</h4>
      <h4>Character :{cast.cast[0].character}</h4>
      </div>
      <div className="card">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${cast.cast[1].profile_path}`}
      />
      <h4>{cast.cast[1].original_name}</h4>
            <h4>Character :{cast.cast[1].character}</h4>

      </div>
      <div className="card">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${cast.cast[2].profile_path}`}
      />
      <h4>{cast.cast[2].original_name}</h4>
            <h4>Character :{cast.cast[2].character}</h4>

      </div>
      <div className="card">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${cast.cast[3].profile_path}`}
      />
      <h4>{cast.cast[3].original_name}</h4>
            <h4>Character :{cast.cast[3].character}</h4>

      </div>
      <div className="card">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${cast.cast[4].profile_path}`}
      />
      <h4>{cast.cast[4].original_name}</h4>
            <h4>Character :{cast.cast[4].character}</h4>
</div>
      <div className="card">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${cast.cast[5].profile_path}`}
      />
      <h4>{cast.cast[5].original_name}</h4>
            <h4>Character :{cast.cast[5].character}</h4>
</div>
      <div className="card">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${cast.cast[6].profile_path}`}
      />
      <h4>{cast.cast[6].original_name}</h4>
            <h4>Character : {cast.cast[6].character}</h4>
</div>
      </div>
    </div>
  );
};

export default MovieDetail;
