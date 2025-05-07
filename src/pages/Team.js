import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const teamHeads = [
  {
    name: "Anushka Kulkarni",
    position: "Co-Head",
    image: "coHead1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Anagha Kumar",
    position: "Co-Head",
    image: "coHead2.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Shruti Bhavsar",
    position: "Tech Head",
    image: "techHead.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Lavanya Waghulde",
    position: "Graphics Head",
    image: "graphicsHead.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Astha Pandey",
    position: "Content Head",
    image: "contentHead.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

const techTeam = [
  {
    name: "Mayuri Dandekar",
    position: "Tech Member",
    image: "techMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Shatakshi Sinha",
    position: "Tech Member",
    image: "techMember2.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Adwita Jain",
    position: "Tech Member",
    image: "techMember2.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Dhanshri Patare",
    position: "Tech Member",
    image: "techMember2.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Aarya Gawade",
    position: "Tech Member",
    image: "techMember2.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Bhargavi Salunkhe",
    position: "Tech Member",
    image: "techMember2.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

const graphicsTeam = [
  {
    name: "Esha Vasagadekar",
    position: "Graphics Member",
    image: "graphicsMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Aanchal Hargunani",
    position: "Graphics Member",
    image: "graphicsMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Sofiya Shahpure",
    position: "Graphics Member",
    image: "graphicsMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Anjali Patel",
    position: "Graphics Member",
    image: "graphicsMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

const contentTeam = [
  {
    name: "Sanskruti Gangwal",
    position: "Content Member",
    image: "contentMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Priyal Nema",
    position: "Content Member",
    image: "contentMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Anushka Jagdale",
    position: "Content Member",
    image: "contentMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Arpita Wankhade",
    position: "Content Member",
    image: "contentMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Aadya Singh",
    position: "Content Member",
    image: "contentMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

const FlipCard = ({ name, position, image, socials }) => {
  return (
    <motion.div
      className="group [perspective:1000px] w-44 h-64 sm:w-48 sm:h-72 md:w-52 md:h-80 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
          {/* Overlay for name and position */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black to-transparent text-white p-2 rounded-b-md">
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-sm text-gray-300">{position}</p>
          </div>
        </div>
        {/* Back side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1A1A1A] text-white rounded-md p-3 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-base text-gray-400 mb-2">{position}</p>
          <div className="flex space-x-4">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-2xl transition duration-300 hover:text-[#66FCF1] hover:drop-shadow-[0_0_8px_#66FCF1]" />
            </a>
            <a href={socials.instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="text-white text-2xl transition duration-300 hover:text-[#66FCF1] hover:drop-shadow-[0_0_8px_#66FCF1]" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamDropdown = ({ title, members, isActive, onClick }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Button to toggle dropdown */}
      <div className="text-center">
        <div
          className={`p-4 bg-[#0D0D0D] border-2 border-cyan-400 rounded-lg text-cyan-400 font-semibold cursor-pointer hover:brightness-125 ${
            isActive ? "brightness-125" : ""
          }`}
          onClick={onClick}
        >
          {title}
        </div>
      </div>

      {/* Dropdown content */}
      {isActive && (
        <div className="w-full bg-[#1A1A1A] text-white py-6 px-4 shadow-lg z-20 mt-4 rounded-lg">
          <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-6">
            {members.map((member, idx) => (
              <FlipCard
                key={idx}
                name={member.name}
                position={member.position}
                image={member.image}
                socials={member.socials}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Team = () => {
  const [activeTeam, setActiveTeam] = useState(null);

  const handleTeamClick = (team) => {
    setActiveTeam(activeTeam === team ? null : team);
  };

  return (
    <motion.div
      id="team"
      className="w-full bg-[#0D0D0D] text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl font-bold mb-2 text-cyan-400">Meet Our Team</h1>
        <h2 className="text-xl">2024-25</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-12 px-4">
        {teamHeads.map((head, idx) => (
          <FlipCard
            key={idx}
            name={head.name}
            position={head.position}
            image={head.image}
            socials={head.socials}
          />
        ))}
      </div>
      <div className="w-full px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <TeamDropdown
              title="Tech Team"
              members={techTeam}
              isActive={activeTeam === "Tech Team"}
              onClick={() => handleTeamClick("Tech Team")}
            />
          </div>
          <div className="w-full md:w-1/3">
            <TeamDropdown
              title="Graphics Team"
              members={graphicsTeam}
              isActive={activeTeam === "Graphics Team"}
              onClick={() => handleTeamClick("Graphics Team")}
            />
          </div>
          <div className="w-full md:w-1/3">
            <TeamDropdown
              title="Content Team"
              members={contentTeam}
              isActive={activeTeam === "Content Team"}
              onClick={() => handleTeamClick("Content Team")}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;