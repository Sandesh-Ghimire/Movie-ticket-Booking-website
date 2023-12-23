// CheckoutForm.js
import React from 'react';

const CheckoutForm = () => {
  return (
    <form>
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" />

      <label htmlFor="country">Country:</label>
      <input type="text" id="country" name="country" />
    </form>
  );
};

export default CheckoutForm;
