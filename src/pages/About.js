import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../assets/about.JPG"; // Correct path

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,       // Smooth fade-in transition
      once: false,          // Re-trigger animation on every scroll
      easing: "ease-in-out", 
      mirror: true,         // Animate when scrolling past elements
    });
  }, []);

  return (
    <div section id="about" className="min-h-screen bg-[#0B0C10] text-white 
                    px-4 sm:px-6 md:px-12 lg:px-20 py-20 
                    font-sans overflow-hidden">
      {/* Intro Section: Text and Image */}
      <div
        className="max-w-5xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
      >
        {/* Text Column */}
        <div className="space-y-6">
          <h1
            data-aos="fade"
            data-aos-delay="200" // Slight delay for a smooth entrance
            className="text-3xl sm:text-4xl md:text-5xl font-bold 
                       text-center md:text-right text-transparent 
                       bg-clip-text bg-gradient-to-l from-[#66FCF1] to-white 
                       animate-pulse"
          >
            Get to Know Us
            <span className="animate-ping ml-1 text-[#66FCF1]">_</span>
          </h1>
          <div
            data-aos="fade"
            data-aos-delay="400"
            className="text-base sm:text-lg md:text-xl text-center 
                       md:text-right text-white font-mono leading-relaxed 
                       border-r-0 md:border-r-4 md:pr-4"
          >
            <p>
              <span className="text-[#66FCF1]">{`>`}</span> We're not just a club — we're a <span className="font-bold">movement</span>.<br />
              <span className="text-[#66FCF1]">{`>`}</span> Where code isn't just syntax, it's <span className="font-bold">expression</span>.<br />
              <span className="text-[#66FCF1]">{`>`}</span> We build. We learn. We break. We <span className="font-bold">grow</span>.<br />
              <span className="text-[#66FCF1]">{`>`}</span> This is your place to <span className="font-bold">belong</span>.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div
          data-aos="fade"
          data-aos-delay="600" // Adds a bit more delay for a seamless staggered effect
          className="relative w-full h-64 md:h-full mx-auto 
                     overflow-hidden rounded-[20px] shadow-[0_0_15px_#66FCF1]"
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Glowing Content Blocks */}
      <div
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2"
        data-aos="fade"
      >
        <div className="bg-[#0B0C10] p-6 sm:p-8 rounded-2xl 
                        border border-[#66FCF1] shadow-[0_0_20px_#66FCF1] 
                        transition-shadow duration-300 hover:shadow-[0_0_30px_#66FCF1]">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66FCF1] mb-4">
            Who We Are
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-white">
            Code Club is a college-wide initiative open to students from all disciplines,
            with the objective of enhancing coding proficiency and preparing you for
            internships, placements, and cracking great opportunities.
          </p>
        </div>

        <div className="bg-[#0B0C10] p-6 sm:p-8 rounded-2xl 
                        border border-[#66FCF1] shadow-[0_0_20px_#66FCF1] 
                        transition-shadow duration-300 hover:shadow-[0_0_30px_#66FCF1]">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66FCF1] mb-4">
            What We Do
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-white">
            We offer a comprehensive platform for all coding-related endeavors — from
            learning and building projects to collaborating on ideas and preparing for the
            dynamic tech industry. We help you grow, build confidence, and chase your passion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
