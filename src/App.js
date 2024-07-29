import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './containers';
import {
  Navbar,
  Home,
  AboutUs,
  Testimonies,
  Blog,
  Portfolio,
  Contact,
  About,
  Review 
} from './components';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Testimonies />
                  <Contact />
                  <Blog /> 
                  <Review />
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
