import React, { useState } from "react";

// Example data for heads
const teamHeads = [
  {
    name: "Co-Head 1",
    image: "coHead1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Co-Head 2",
    image: "coHead2.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Tech Head",
    image: "techHead.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Graphics Head",
    image: "graphicsHead.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Content Head",
    image: "contentHead.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

// Example data for each team
const techTeam = [
  {
    name: "Tech Member 1",
    image: "techMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Tech Member 2",
    image: "techMember2.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

const graphicsTeam = [
  {
    name: "Graphics Member 1",
    image: "graphicsMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

const contentTeam = [
  {
    name: "Content Member 1",
    image: "contentMember1.jpg",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

// Reusable flip card component
const FlipCard = ({ name, image, socials }) => {
  return (
    <div className="group [perspective:1000px] w-44 h-56 sm:w-48 sm:h-60 md:w-52 md:h-64 mx-auto">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* Back side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-md p-3 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="flex flex-col space-y-2">
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Instagram
            </a>
            <a
              href={socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Facebook
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Team dropdown component
const TeamDropdown = ({ title, members }) => {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <div
      className="relative group w-52 p-4 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer text-center"
      onMouseEnter={() => setShowMembers(true)}
      onMouseLeave={() => setShowMembers(false)}
    >
      <div className="font-bold mb-2">{title}</div>

      {/* Dropdown content */}
      {showMembers && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-lg flex flex-wrap gap-4 justify-center z-10">
          {members.map((member, idx) => (
            <FlipCard
              key={idx}
              name={member.name}
              image={member.image}
              socials={member.socials}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Team component
const Team = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Meet Our Team</h1>
      <h2 className="text-xl mb-6">2024-25</h2>

      {/* Heads Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {teamHeads.map((head, idx) => (
          <FlipCard
            key={idx}
            name={head.name}
            image={head.image}
            socials={head.socials}
          />
        ))}
      </div>

      {/* Teams Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <TeamDropdown title="Tech Team" members={techTeam} />
        <TeamDropdown title="Graphics Team" members={graphicsTeam} />
        <TeamDropdown title="Content Team" members={contentTeam} />
      </div>
    </div>
  );
};

export default Team;
