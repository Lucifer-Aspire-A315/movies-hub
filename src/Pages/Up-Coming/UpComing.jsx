import React, { useEffect, useState } from 'react'
import SearchBar from '../../Components/SearchBox/SearchBar'
import MovieList from '../../Components/MovieList/MovieList';
import axios from 'axios';
import './upComing.css';
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

const UpComing = () => {
    const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query = '', pageNum = 1) => {
    setLoading(true);
    try {
      const url = query
        ? `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${pageNum}`
        : `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNum}`;
      const response = await axios.get(url);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('', page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };
  
  return (
    <>
    <div className='body'>
      <nav className='navigation'>
      <div className='title' >
        <Link to="/" className='link'>
          Movies Hub
        </Link>
         </div>
        <div className='route'>
          <Link to="/" >
            Home
          </Link>
           <Link to="/Top-Rated" className='ratedd'>
            Top-Rated
          </Link>
          <Link to="/Up-Coming" className='upcoming'>
            Up-Coming
          </Link>
          
          <div className="search">
        <SearchBar onSearch={(query) => fetchMovies(query, 1)} />
      </div>
      </div>
       
      
    </nav>
    
      
      {loading ? (
        <div className="flex justify-center items-center my-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin">Loading...</div>
        </div>
      ) : (
        <MovieList movies={movies} />
      )}

      <div className="button">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className={`previous ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          Prev
        </button>
        <span >
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`next ${page === totalPages
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-600'}`}
        >
          Next
        </button>
      </div>
    </div></>
  );
}

export default UpComing