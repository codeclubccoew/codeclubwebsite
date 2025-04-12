import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Homepage />
      <About />
      <Team />
      <Resources />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;