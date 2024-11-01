// Contact.tsx
import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          I’d love to hear from you! Feel free to reach out if you have any
          questions, collaboration ideas, or just want to say hello. You can
          reach me directly at{" "}
          <a href="mailto:24070769@studentmail.ul.ie.com">
            24070769@studentmail.ul.ie.com
          </a>{" "}
          or use the form below.
        </p>

        {/* Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
