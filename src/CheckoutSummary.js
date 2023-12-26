// CheckoutSummary.js
import React from 'react';

const CheckoutSummary = ({ title, totalAmount }) => {
  return (
    <div>
      <h2>Checkout Summary</h2>
      <hr />
      <p>Movie Title: {title}</p>
      <p>Total Amount: ${totalAmount}</p>
      {/* Add more checkout summary details as needed */}
    </div>
  );
};

export default CheckoutSummary;
