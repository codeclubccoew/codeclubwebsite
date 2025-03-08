import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 bg-[#1F2833] rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-[#1F2833] rounded" />
        <textarea placeholder="Message" className="w-full p-2 mb-4 bg-[#1F2833] rounded"></textarea>
        <button type="submit" className="bg-[#66FCF1] text-[#0B0C10] px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;