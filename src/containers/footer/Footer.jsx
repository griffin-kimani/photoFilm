import React from 'react';
import './footer.css';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-quotes">
        <p>“Photography is the story I fail to put into words.” - Destin Sparks</p>
        <p>“The best thing about a picture is that it never changes, even when the people in it do.” - Andy Warhol</p>
      </div>

      <div className="footer-call">
        <p>Need assistance? <a href="tel:+123456789"><FaPhone /> Call Us Directly</a></p>
      </div>

      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/privacy">Privacy Policy</a>
      </div>

      <div className="footer-copyright">
        &copy; 2024 Your Company Name. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
