import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import image1 from '../../assets/wed1.jpg';
import image2 from '../../assets/wed3.jpg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [slide, setSlide] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar-container">
      {location.pathname === '/' && (
        <div className="gpt__navbar-background" style={{ backgroundImage: `url(${slide ? image2 : image1})` }}></div>
      )}
      <div className={`gpt__navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="gpt__navbar-content">
          <div className="gpt__navbar-links">
            <div className="gpt__navbar-links-container">
              <p><Link to="/">Home</Link></p>
              <p><Link to="/about">About</Link></p>
              <p><Link to="/blog">Blog</Link></p>
              <p><Link to="/portfolio">Portfolio</Link></p>
              <p><Link to="/contact">Contact us</Link></p>
            </div>
          </div>
          <div className="gpt__navbar-menu">
            {toggleMenu ? (
              <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            ) : (
              <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div className="gpt__navbar-menu-container scale-up-center">
                <div className="gpt__navbar-menu-container-links">
                  <p><Link to="/">Home</Link></p>
                  <p><Link to="/about">About</Link></p>
                  <p><Link to="/blog">Blog</Link></p>
                  <p><Link to="/portfolio">Portfolio</Link></p>
                  <p><Link to="/contact">Contact Us</Link></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
