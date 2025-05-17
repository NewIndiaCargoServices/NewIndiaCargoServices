import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Landing page components
import Background from './Landing/Background/Background';
import NavBar from './Landing/Navbar/Navbar'; // Landing NavBar
import Hero from './Landing/Hero/Hero';

// Main site components
import NavbarMain from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Potfolio from './components/Potfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testomonial';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Component } from 'react';

// Landing Page
const LandingPage = () => {
  const heroData = [
    { text1: "Streamlining", text2: "the supply chain" },
    { text1: "Ensuring", text2: "on-time delivery" },
    { text1: "Enhancing", text2: "fleet efficiency" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      {/* Link to navigate to the MainPage */}
      {/* <Link to="/main">
        <button>Go to Main Site</button>
      </Link> */}
    </div>
  );
};

// Main Website Page
const MainPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavbarMain />
      <Header />
      <About />
      <Potfolio />
      <Pricing />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        {/* Route for the main website */}
        <Route path="/header" element={<MainPage />} />
        {/* <Route path="/header" element={<Component />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
