// CheckoutPage.js
import React from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';
import { useLocation } from 'react-router-dom';
import './checkoutPage.css'; // Import the CSS file

const CheckoutPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const totalAmount = queryParams.get('totalAmount');

  return (
    <div className="checkout-page">
      <div className="left-side">
    
        <CheckoutForm />
      </div>
      <div className="right-side">
        <CheckoutSummary title={title} totalAmount={totalAmount} />
      </div>
    </div>
  );
};

export default CheckoutPage;
