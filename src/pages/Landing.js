import React from 'react';
import { motion } from 'framer-motion';
import leftBracket from '../assets/leftbracket.jpg';
import rightBracket from '../assets/rightbracket.jpg';
import leftC from '../assets/leftC.jpg';
import rightC from '../assets/rightC.jpg';

// ✅ Define text and animation config BEFORE the component
const text = "CODE\u00A0CLUB";

const letterAnimation = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: 2 + i * 0.1,
    },
  }),
};


const Landing = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center">
      <div className="relative flex gap-2 items-center mb-6">
        {/* Left Bracket */}
        <motion.img
          src={leftBracket}
          alt="Left Bracket"
          className="w-16 h-16"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Left C */}
        <motion.img
          src={leftC}
          alt="Left C"
          className="w-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Right C */}
        <motion.img
          src={rightC}
          alt="Right C"
          className="w-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Right Bracket */}
        <motion.img
          src={rightBracket}
          alt="Right Bracket"
          className="w-16 h-16"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Typing Animation Text */}
      <motion.div className="flex text-[#66FCF1] text-5xl font-mono tracking-wide">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Landing;
