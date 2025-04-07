// import React from 'react';


// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-[#0B0C10] text-white p-8">
//       <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
//       <form className="max-w-md mx-auto">
//         <input type="text" placeholder="Name" className="w-full p-2 mb-4 bg-[#1F2833] rounded" />
//         <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-[#1F2833] rounded" />
//         <textarea placeholder="Message" className="w-full p-2 mb-4 bg-[#1F2833] rounded"></textarea>
//         <button type="submit" className="bg-[#66FCF1] text-[#0B0C10] px-4 py-2 rounded">Send</button>
//       </form>
//     </div>
//   );
// };


// export default Contact;


import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin, FaMedium } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5"; // Success Icon


import emailjs from "emailjs-com"; // Import EmailJS


const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    setShowModal(true); // Show modal


    emailjs
      .sendForm(
        "service_xxx", // Replace with your EmailJS Service ID
        "template_xxx", // Replace with your EmailJS Template ID
        e.target,
        "user_xxx" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setShowModal(true);
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };


  return (
    <section id="contact">
      <div className="min-h-screen bg-[#0B0C10] text-white p-8 flex flex-col justify-between pt-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Contact Us</h1>


        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-[#1F2833] rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-[#1F2833] rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-[#1F2833] rounded"
            required
          ></textarea>
          <button type="submit" className="bg-[#66FCF1] text-[#0B0C10] px-4 py-2 rounded w-full">
            Send
          </button>
        </form>


        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#1F2833] p-6 rounded-lg shadow-lg text-center w-80">
              <IoCheckmarkCircleOutline className="text-[#66FCF1] text-5xl mx-auto mb-2" />
              <h2 className="text-2xl font-bold text-white">Success!</h2>
              <p className="text-gray-300">Message sent successfully!</p>
              <button onClick={() => setShowModal(false)} className="mt-4 bg-[#66FCF1] text-[#0B0C10] px-4 py-2 rounded">
                OK
              </button>
            </div>
          </div>
        )}




        {/* Social Media Links */}
        <p className="text-center">Connect with Us</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.youtube.com/@codeclubccew6359" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center focus:outline-none">
            <FaYoutube className="text-white text-2xl transition duration-300 group-hover:text-[#66FCF1] group-hover:drop-shadow-[0_0_8px_#66FCF1]" />
          </a>
          <a href="https://www.instagram.com/codeclub_ccew" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center focus:outline-none">
            <FaInstagram className="text-white text-2xl transition duration-300 group-hover:text-[#66FCF1] group-hover:drop-shadow-[0_0_8px_#66FCF1]" />
          </a>
          <a href="https://chat.whatsapp.com/CEHO7xAxE2g2rRke9RfHYo" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center focus:outline-none">
            <FaWhatsapp className="text-white text-2xl transition duration-300 group-hover:text-[#66FCF1] group-hover:drop-shadow-[0_0_8px_#66FCF1]" />
          </a>
          <a href="mailto:codeclub@cumminscollege.in" className="group inline-flex items-center focus:outline-none">
            <FaEnvelope className="text-white text-2xl transition duration-300 group-hover:text-[#66FCF1] group-hover:drop-shadow-[0_0_8px_#66FCF1]" />
          </a>
          <a href="https://www.linkedin.com/company/code-club-ccew" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center focus:outline-none">
            <FaLinkedin className="text-white text-2xl transition duration-300 group-hover:text-[#66FCF1] group-hover:drop-shadow-[0_0_8px_#66FCF1]" />
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center focus:outline-none">
            <FaMedium className="text-white text-2xl transition duration-300 group-hover:text-[#66FCF1] group-hover:drop-shadow-[0_0_8px_#66FCF1]" />
          </a>
        </div>
      </div>
    </section>
  );
};




export default Contact;
