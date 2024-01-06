// CheckoutPage.js
import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import { useLocation } from "react-router-dom";
import "./checkoutPage.css"; // Import the CSS file

const CheckoutPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  const totalAmount = queryParams.get("totalAmount");

  const [name, setName] = useState("*");
  const [email, setEmail] = useState("*");
  const [address, setAddress] = useState("*");
  const [country, setCountry] = useState("*");

  return (
    <div className="checkout-page">
      <div className="left-side">
        <CheckoutForm
          setName={setName}
          setEmail={setEmail}
          setAddress={setAddress}
          setCountry={setCountry}
        />
      </div>

      <div>
        <CheckoutSummary
          title={title}
          totalAmount={totalAmount}
          name={name === "" ? "*" : name}
          email={email === "" ? "*" : email}
          address={address === "" ? "*" : address}
          country={country === "" ? "*" : country}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
