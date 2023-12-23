// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import CheckoutPage from './CheckoutPage';

function App() {
  return (
   
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  </Router>
     

  );
}

export default App;

