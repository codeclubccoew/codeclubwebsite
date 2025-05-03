import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { id: 1, name: "Home", to: "homepage" },
    { id: 2, name: "About Us", to: "about" },
    { id: 3, name: "Meet Our Team", to: "team" },
    { id: 4, name: "Events", to: "events" },
    { id: 5, name: "Resources", to: "resources" },
    { id: 6, name: "Contact Us", to: "contact" },
  ];

  const dynamicText = [
    "01010101 01010101 01010101",
    "public class CodeClub { }",
    "System.out.println('Welcome!');",
    "function codeClub() { }",
    "const codeClub = () => { }",
    "print('Learn Code Innovate');",
    "console.log('Let's code it!');",
    "def code_club(): pass",
    "<!-- Code Club -->",
  ];

  const [currentText, setCurrentText] = useState(dynamicText[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = dynamicText.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % dynamicText.length;
        return dynamicText[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const codeElements = [
    "0101", "1010", "{}", "[]", "()", ";", "+", "-", "*", "/", "if", "else", "for",
    "while", "print()", "console.log()", "def", "function", "return", "class",
  ];

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-[#1F2833]/80 backdrop-blur-md p-4 fixed w-full top-0 z-50 shadow-lg"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.span
            className="text-[#66FCF1] text-xl font-bold"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 10px #66FCF1, 0 0 20px #45A29E",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            Code Club
          </motion.span>

          <div className="hidden lg:flex items-center space-x-4 relative overflow-hidden flex-1 mx-4 h-12 w-1/2">
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute text-[#66FCF1]/50 text-xs font-mono pointer-events-none whitespace-nowrap"
              style={{
                left: "10%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {currentText}
            </motion.div>

            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ y: "100%", x: Math.random() * 100 }}
                animate={{ y: "-100%", x: Math.random() * 100 }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
                className="absolute w-1.5 h-1.5 bg-[#66FCF1] rounded-full pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  boxShadow: "0 0 5px #66FCF1, 0 0 10px #45A29E",
                }}
              ></motion.div>
            ))}
          </div>

          <ul className="hidden lg:flex lg:space-x-4">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px #66FCF1, 0 0 30px #45A29E",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="p-0 rounded-full border-2 border-[#66FCF1] hover:bg-[#66FCF1]/10 relative"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="active-nav-link"
                  className="text-[#C5C6C7] hover:text-[#66FCF1] cursor-pointer block w-full h-full text-center flex items-center justify-center px-4 py-2 text-sm"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <button
            className="text-[#C5C6C7] lg:hidden focus:outline-none relative w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="absolute w-8 h-1 bg-[#66FCF1] rounded-full"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -6,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            ></motion.div>
            <motion.div
              className="absolute w-8 h-1 bg-[#66FCF1] rounded-full"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            ></motion.div>
            <motion.div
              className="absolute w-8 h-1 bg-[#66FCF1] rounded-full"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 6,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            ></motion.div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 h-full w-80 bg-[#1F2833] z-50 shadow-2xl border-l-2 border-[#66FCF1]"
              style={{
                boxShadow: "0 0 20px #66FCF1, 0 0 40px #45A29E",
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: "-100%" }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-full text-[#66FCF1]/20 text-2xl font-mono whitespace-nowrap"
                >
                  01010101 01010101 01010101 01010101 01010101 01010101
                </motion.div>
              </div>

              <div className="flex flex-col space-y-6 p-8 pt-16 relative z-10">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px #66FCF1, 0 0 30px #45A29E",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="p-0 rounded-full hover:bg-[#66FCF1]/10 border-2 border-[#66FCF1]"
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-70}
                      activeClass="active-nav-link"
                      className="text-[#C5C6C7] hover:text-[#66FCF1] cursor-pointer block w-full h-full text-center flex items-center justify-center px-6 py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-4 right-4">
                <motion.div
                  className="w-4 h-4 bg-[#66FCF1] rounded-full"
                  style={{
                    boxShadow: "0 0 10px #66FCF1, 0 0 20px #45A29E",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>

                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0, x: 0, opacity: 0 }}
                    animate={{ y: -100, x: -50, opacity: [0, 1, 0] }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute text-[#66FCF1]/80 text-sm font-mono"
                    style={{
                      left: `${Math.random() * 20}px`,
                      top: `${Math.random() * 20}px`,
                    }}
                  >
                    {codeElements[Math.floor(Math.random() * codeElements.length)]}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;