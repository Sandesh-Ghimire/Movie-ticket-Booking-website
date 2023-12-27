

const CheckoutSummary = ({ title, totalAmount }) => {

const ttlamt = parseInt(totalAmount)
const FinalAmount= ttlamt+(totalAmount*(0.13));


  return (
    <div className='right-side'>
      
      <h2>Checkout Summary</h2>
      <hr />
      <h3> {title}</h3>
      <p>Location: Kathmandu, Nepal</p>
      <hr></hr>
      <p>VAT :<span>13%</span> </p>
      <p>Sub Total: <span>Rs.{totalAmount}</span></p>
      <p>Discount :<span>Rs.0</span> </p>
      <hr/>
      <p>Total Amount: <span>${FinalAmount}</span></p>
      <hr></hr>
      <button className="checkout-button-confrm" >
              Confirm & Pay
            </button>
         
      {/* Add more checkout summary details as needed */}
    </div>
  );
};

export default CheckoutSummary;
