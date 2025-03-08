import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="bg-[#1F2833] p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-[#66FCF1] text-xl font-bold">Code Club</span>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-[#C5C6C7] hover:text-[#66FCF1] cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-[#C5C6C7] hover:text-[#66FCF1] cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              duration={500}
              className="text-[#C5C6C7] hover:text-[#66FCF1] cursor-pointer"
            >
              Meet Our Team
            </Link>
          </li>
          <li>
            <Link
              to="events"
              smooth={true}
              duration={500}
              className="text-[#C5C6C7] hover:text-[#66FCF1] cursor-pointer"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="resources"
              smooth={true}
              duration={500}
              className="text-[#C5C6C7] hover:text-[#66FCF1] cursor-pointer"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-[#C5C6C7] hover:text-[#66FCF1] cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;