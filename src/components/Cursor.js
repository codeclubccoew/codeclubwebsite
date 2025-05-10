import React, { useEffect, useState } from 'react';
import customCursor from '../assets/CustomCursor.png'; // adjust path if needed

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <img
      src={customCursor}
      alt="Custom Cursor"
      className="fixed w-6 h-6 pointer-events-none z-50"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Cursor;
