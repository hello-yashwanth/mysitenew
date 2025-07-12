
import React, { useState } from 'react';
import './index.css'

export function Contact(){
  const [showToast, setShowToast] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResult("Sending...");
    const formData = new FormData(e.target);

    formData.append("access_key", "db5d21e3-7bea-419f-b3d4-06867ef58557");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        e.target.reset();
      } else {
        console.error("Error:", data);
        setResult("Error: " + data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("Submission failed");
    }
  };

  
  return(
    <>
    <section className="contact">
  <form onSubmit={handleSubmit}>
    <h3>Contact Form</h3>
    <div className="input">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" className="form-input" name='name' required />
    </div>
    <div className="input">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" className="form-input" name='email'required />
    </div>
    <div className="input">
      <label htmlFor="message">Message</label>
      <textarea id="message" placeholder="Enter message" required name='message'></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
  {showToast && (
    <div className='toast'>
      Message sended
    </div>
  )}
</section>
   
    </>
    )
}

