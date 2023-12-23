// MovieList.js
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './Movie.css'
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual TMDb API key
    const apiKey = '7af9af3ab65fe6bba7f11a28b15bad69';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
    
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  

  return (
    <div className="movie-list">
      
      {movies.map((movie) => (
     <Link to={`/movie/${movie.id}`} key={movie.id}>
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          overview={movie.overview}
         
          
        />
         </Link>  
      ))}

    </div>
  );
};

export default MovieList;
