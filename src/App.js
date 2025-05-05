import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor'; 
import Landing from './pages/Landing';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showLanding) {
    return <Landing />;
  }

  return (
    <div className="cursor-none">
      <Cursor />
      <NavBar />
      <main className="relative z-10">
        <Homepage />
        <About />
        <Team />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
  
}

export default App;
