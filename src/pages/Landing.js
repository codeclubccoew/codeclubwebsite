import React from 'react';
import { motion } from 'framer-motion';
import leftBracket from '../assets/leftbracket.jpg';
import rightBracket from '../assets/rightbracket.jpg';
import leftC from '../assets/leftC.jpg';
import rightC from '../assets/rightC.jpg';
import codeclub from '../assets/codeclub.jpg';
const Landing = () => {
    return (
        <div className="h-screen w-screen bg-black flex items-center justify-center">
            <div className="relative flex gap-2 items-center">

                {/* Left Bracket */}
                <motion.img
                    src={leftBracket}
                    alt="Left Bracket"
                    className="w-16 h-16"
                    initial={{ x: -400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Left C trace */}
                <motion.img
                    src={leftC}
                    alt="Left C"
                    className="w-12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />

                {/* Right C trace */}
                <motion.img
                    src={rightC}
                    alt="Right C"
                    className="w-12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
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

                {/* Code Club Logo */}
                {/* <motion.img
                    src={codeclub}
                    alt="Code Club Logo"
                    className="w-20 h-16"
                    initial={{ x: -50, y: 300, opacity: 0 }}
                    animate={{ x: -50, y: 100, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                /> */}
            </div>
        </div>
    );
};

export default Landing;
