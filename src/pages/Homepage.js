import React from 'react';
import { Link } from 'react-scroll';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white">
      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">Learn Code Innovate</h1>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center bg-[#1F2833]">
        <h2 className="text-4xl font-bold">About Us</h2>
      </section>

      {/* Team Section */}
      <section id="team" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
      </section>

      {/* Events Section */}
      <section id="events" className="h-screen flex items-center justify-center bg-[#1F2833]">
        <h2 className="text-4xl font-bold">Events</h2>
      </section>

      {/* Resources Section */}
      <section id="resources" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Resources</h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center bg-[#1F2833]">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </section>
    </div>
  );
};

export default Homepage;