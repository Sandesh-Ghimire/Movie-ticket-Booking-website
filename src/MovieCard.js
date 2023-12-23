// MovieCard.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



const MovieCard = ({  id,title, posterPath,overview }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
//   console.log("yo card ",posterUrl); // Add this line
  const iddd= posterPath;
  console.log(id, "id check")
  console.log(posterUrl,"posterurl check")
    // Get the current date and format it as "Month day, year"
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    console.log(`${id}`)

    navigate(`/movie/${id}`);
    console.log("iddd check",iddd)
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="button-container">
        <button className="watch-button">Watch Now</button>
      </div>
      <img src={posterUrl} alt={title} />
      <p>{currentDate}
        &bull; Kathmandu, Nepal</p>
      <p>{overview}</p> {/* Display description */}
      {/* <div className="overlay">
        <h3>{title}</h3>
        <p>Date: {currentDate}
        &bull; </p>
        <p>{overview}</p> 
      </div> */}
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired, // Add description prop type
};

export default MovieCard;
