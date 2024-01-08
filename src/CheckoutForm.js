// CheckoutForm.js
import React from "react";
import "./checkoutPage.css"; // Import the CSS file

const countriesList = [
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "gb", name: "United Kingdom" },
  // Add more countries as needed
];

const CheckoutForm = ({ setName, setEmail, setAddress, setCountry }) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="container">
      <h1>Order information</h1>

      <form className="checkout-form">
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={handleNameChange}
            />
          </div>

          <div className="form-column">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <br></br>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleAddressChange}
            />
          </div>

          <div className="form-column">
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              onChange={handleCountryChange}
              style={{ backgroundColor: "#1c1c24", color: "white" }}
            >
              {countriesList.map((country, index) => {
                return (
                  <option key={index} value={country.code}>
                    {country.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
