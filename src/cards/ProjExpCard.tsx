import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

interface ProjExpCardProps {
  title: string;
  description: string;
  code: string; 
  technologies: string[];
}

const ProjExpCard: React.FC<ProjExpCardProps> = ({
  title,
  description,
  code,
  technologies,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTech = showAll ? technologies : technologies.slice(0, 6);

  return (
    <div className="bg-gray-900 text-gray-200 rounded-xl shadow-lg p-6 mb-6 relative border border-gray-800">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>

        {/* github link */}
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaGithub size={20} />
            <span className="hidden sm:inline text-mid">Code</span>
          </a>
        )}
      </div>


      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {visibleTech.map((tech, index) => (
          <span
            key={index}
            className="border border-gray-600 text-sm px-3 py-1 rounded-lg hover:bg-gray-700 transition"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Show more / less */}
      {technologies.length > 6 && (
        <button
          className="mt-3 text-blue-400 text-sm hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ProjExpCard;
