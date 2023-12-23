// MovieDetails.js
import "./movieDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import CheckoutForm from "./CheckoutForm";
const MovieDetails = ({ id, title, posterPath, overview }) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchMovie() {
      const apiKey = "7af9af3ab65fe6bba7f11a28b15bad69";
      const apiUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`;

      try {
        setLoading(true);

        const response = await fetch(apiUrl);
        const json = await response.json();

        // a hack to check if response is movie detail
        // note value checking so only `==`
        if (json.id == params.id) setMovie(json);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [params.id, setMovie, setLoading]);

  const [ticketQuantity, setTicketQuantity] = useState(1);

  const ticketPrice = 100;
  const totalAmount = ticketQuantity * ticketPrice;

  const handleIncrement = useCallback(() => {
    setTicketQuantity(ticketQuantity + 1);
  }, [ticketQuantity]);

  const handleDecrement = useCallback(() => {
    ticketQuantity > 1 && setTicketQuantity(ticketQuantity - 1);
  }, [ticketQuantity]);

  // Get the current date and format it as "Month day, year"
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleCheckout = () => {
    // Redirect to the checkout page when the checkout button is clicked
    // navigate(`/checkout/${movie.title}/${totalAmount}`);
    navigate(`/checkout?title=${encodeURIComponent(movie.title)}&totalAmount=${totalAmount}`);

  };


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!movie) {
    return <h1>404! Movie not found</h1>;
  } else {
    return (
      <div>
      <div className="movie-details-container1">
         <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={title}
        />

        <h3>{movie.title}</h3>
        <p>
          {" "}
          {currentDate}
          &bull; Kathmandu, Nepal
        </p>
        {/* <p>{movie.overview}</p> */}
        {/* <p>{movie.id}</p> */}
        </div>
        

        <div className="movie-details-container">
          <h3>Event Details</h3>
          <hr></hr>
          <div className="movie-details-header">
            <p>Date and Time</p>
            <h1>Sat,Apr 30,2022 11:30AM</h1>
          </div>
          <hr></hr>
          <div className="movie-details-header">
            <p>Location</p>
            <h1>Kathmandu ,City Center</h1>
            <a href="googl.com" className="map-link">
              View on map
            </a>
          </div>
          <hr></hr>
          <div className="price-calculator">
            <h3>Select Tickets</h3>
            {/* <label htmlFor="ticketQuantity">Tickets:</label> */}
            <div className="quantity-controls">
              <p>1x Ticket(s)</p>
              <button onClick={handleDecrement}>-</button>
              <span>{ticketQuantity}</span>

              <button onClick={handleIncrement}>+</button>
            </div>
            <h1>USD $100</h1>

            <button className="checkout-button" onClick={handleCheckout}>
              Check out for ${totalAmount}.000
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
