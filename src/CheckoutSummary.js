import jsPDF from 'jspdf';
import logo from './logo.png'
import QRcode    from 'qrcode.react'

const CheckoutSummary = ({ title, totalAmount }) => {

 
const ttlamt = parseInt(totalAmount)
const FinalAmount= ttlamt+(totalAmount*(0.13));

const handleConfirmAndPay=()=>
{
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const country = document.getElementById('country').value;

  const ticketQuantity = ttlamt/100; // Example quantity
  const pdf = new jsPDF();



  pdf.setFont('helvetica');
  pdf.setFontSize(14)
  const contentPadding = 10; // Adjust the padding
  const contentStartY = 20;
  const invoiceNumber = 'INV-12345'; 

  pdf.setFillColor(255, 0, 0); // Red color
    pdf.rect(0, 0, pdf.internal.pageSize.width, 15, 'F');

    // Add logo to the navbar
    const imgWidth = 15; // Adjust as needed
    const imgHeight = 10; // Adjust as needed
    const logoMarginTop = 2; // Adjust the margin top
    pdf.addImage(logo, 'PNG', 10, logoMarginTop, imgWidth, imgHeight);

 // Transforms the canvas into a base64 image
 let base64Image = document.getElementById('qrcode').toDataURL()

 // Adds the image to the pdf
 pdf.addImage(base64Image, 'png', 130, 40, 40, 40)

  pdf.text(`Ticket Quantity: ${ticketQuantity}`, 20, contentStartY + contentPadding);
  pdf.text(`Total Amount: $${FinalAmount.toFixed(2)}`, 20, contentStartY + 10 + contentPadding);
  pdf.text(`Invoice to: ${fullName}`, 20, contentStartY + 20 + contentPadding);
 
  pdf.text(`Address: ${address}`, 20, contentStartY + 30 + contentPadding);
  pdf.text(`Email: ${email}`, 20, contentStartY + 40 + contentPadding);
  pdf.text(`Country: ${country}`, 20, contentStartY + 50 + contentPadding);

  pdf.text(`Invoice Number: ${invoiceNumber}`, pdf.internal.pageSize.width - 80, 20);
 

  pdf.save('TicketConfirmation.pdf');
 
};


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
      
      <QRcode value = {title} id = 'qrcode'/>
      <button className="checkout-button-confrm" onClick={handleConfirmAndPay}>
              Confirm & Pay
            </button>
         
      
    </div>
  );
};

export default CheckoutSummary;
