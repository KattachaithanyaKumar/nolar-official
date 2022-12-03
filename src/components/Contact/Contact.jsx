import React from "react";
import "./contact.css";

// import image from "../../assets/contact-image.jpg";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Get in touch</h2>
      <div className="contact-container">
        <div className="contact-left-pannel"></div>
        <div className="contact-right-pannel">
          <form>
            <input type="text" className="field" placeholder="Your Name" />
            <input type="text" className="field" placeholder="Your Email" />
            <input type="text" className="field" placeholder="Phone" />
            <textarea placeholder="Message" className="field"></textarea>
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
