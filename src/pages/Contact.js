import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin, FaMedium } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5"; // Success Icon
import { motion } from "framer-motion";
import { useEffect } from "react";






import emailjs from "emailjs-com"; // Import EmailJS




const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);


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
        "service_lwbwatm", // Replace with your EmailJS Service ID
        "template_dl9akvp", // Replace with your EmailJS Template ID
        e.target,
        "86KMi8jOVZRH3m5Dg" // Replace with your EmailJS Public Key
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
      {/* <div className="min-h-screen bg-[#0B0C10] text-white px-4 py-12 flex flex-col items-center justify-center space-y-8"> */}
      <div className="min-h-[calc(100vh-80px)] w-full bg-[#0B0C10] text-white flex flex-col justify-between px-4 pt-12 pb-20 sm:px-6">




        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Contact Us</h1>




        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-[#1F2833] text-white rounded-2xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
            required
          />




          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-[#1F2833] text-white rounded-2xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
            required
          />




          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 mb-3 bg-[#1F2833] text-white rounded-2xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all resize-none"
            required
          ></textarea>
          {/* <button type="submit" className="bg-[#66FCF1] text-[#0B0C10] px-4 py-2 rounded w-full">
            Send
          </button> */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px 8px rgba(0, 248, 255, 0.6)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-[#1B1F23] text-white px-8 py-2 rounded-full font-semibold border border-[#00F8FF] hover:bg-[#1F2A38] transition-all duration-300 mx-auto block mt-6"
          >
            Send
          </motion.button>
























        </form>




        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md px-4">
            <div className="bg-gradient-to-br from-[#0B0C10] to-[#1F2833] p-6 rounded-2xl border border-[#66FCF1] shadow-[0_0_20px_#66FCF1] w-full max-w-xs text-center animate-fade-in font-[Georgia]">


              <IoCheckmarkCircleOutline className="text-[#66FCF1] text-5xl mx-auto mb-4 drop-shadow-[0_0_8px_#66FCF1]" />


              <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">Success!</h2>


              <p className="text-sm text-gray-300 mb-5">Message sent successfully.</p>


              <button
                onClick={() => setShowModal(false)}
                className="bg-[#66FCF1] text-[#0B0C10] px-6 py-2 rounded-lg font-semibold hover:bg-[#45e3da] transition-all duration-200 shadow-[0_0_10px_#66FCF1] hover:shadow-[0_0_15px_#45e3da]"
              >
                OK
              </button>
            </div>
          </div>
        )}














        {/* Social Media Links */}
        {/* <p className="text-center">Connect with Us</p>
        <div className="flex justify-center space-x-6 mt-4"> */}
        <p className="text-center mt-10 font-[Georgia]">Connect with Us</p>


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



