import { useState } from "react";

import "./inquiry.form.scss"

function InquiryForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [product, setProduct] = useState('');
    const [area, setArea] = useState('');
    const [message, setMessage] = useState('');


    const [error, setError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!name || !contact || !product || !area) {
        setError('Please fill in all the mandatory fields.');
      } else {
        // submit form data to backend or do something else with it
        console.log(`Name: ${name}, Email: ${email}`);
      }
    };
  
    return (
    <div className="inquiry-form-container">
      <form onSubmit={handleSubmit}>
        <div className="from-content-title">
          <label htmlFor="name">Shop Name<span style={{ color: 'red' }}>*</span></label>
        </div>
        <div>
          <input className="form-input-field"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="from-content-title">
          <label htmlFor="email">Your Email</label>
        </div>
        <div>
          <input className="form-input-field"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="from-content-title">
          <label htmlFor="contact">Contact Number<span style={{ color: 'red' }}>*</span></label>
        </div>
        <div>
          <input className="form-input-field"
            type="text"
            id="contact"
            placeholder="Contact Numbers"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />
        </div>


        <div className="from-content-title">
          <label htmlFor="product">Your Products<span style={{ color: 'red' }}>*</span></label>
        </div>
        <div>
          <input className="form-input-field"
            type="text"
            id="product"
            placeholder="Product Details"
            value={product}
            onChange={(event) => setProduct(event.target.value)}
          />
        </div>


        <div className="from-content-title">
          <label htmlFor="area">Your Area<span style={{ color: 'red' }}>*</span></label>
        </div>
        <div>
          <input className="form-input-field"
            type="text"
            id="area"
            placeholder="Your City"
            value={area}
            onChange={(event) => setArea(event.target.value)}
          />
        </div>


        <div className="from-content-title">
          <label htmlFor="message">Your Message</label>
        </div>
        <div>
          <textarea className="form-input-area"
            type="text-area"
            id="message"
            placeholder="Type here..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
          ></textarea>
        </div>
        <button className="form-submit-button" type="submit">Submit</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
      </div>
    );
  }


export default InquiryForm;