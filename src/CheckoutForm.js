// CheckoutForm.js
import React from 'react';
import './checkoutPage.css'; // Import the CSS file



const countriesList = [
  { code: 'us', name: 'United States' },
  { code: 'ca', name: 'Canada' },
  { code: 'gb', name: 'United Kingdom' },
  // Add more countries as needed
];


const CheckoutForm = () => {
  const countryOptions = Object.entries(countriesList).map(([code, country]) => (
    <option key={code} value={code}>
      {country.name}
    </option>
  ));
  return (
    <div className='container'>
      <h1>Order information</h1>
      {/* <hr /> */}

      <form className="checkout-form">
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" />
        </div>

        <div className="form-column">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
      </div>
<br></br>
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
        </div>

        <div className="form-column">
          <label htmlFor="country">Country:</label>
          <select id="country" name="country">
            {countryOptions}
          </select>
        </div>
      </div>
    </form>
    </div>
  );
};

export default CheckoutForm;
