import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home.jsx';
import MovieDetail from './Pages/MovieDetail/MovieDetail.jsx';
import SearchBar from './Components/SearchBox/SearchBar.jsx';
import TopRated from './Pages/Top-Rated/TopRated.jsx';
import UpComing from './Pages/Up-Coming/UpComing.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Top-Rated/" element={<TopRated/>}/>
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/Up-Coming/" element={<UpComing/>} />
      </Routes>
    </Router>
  );
};

export default App;
