import React, { useState } from "react";

interface WorkExpCardProps {
  company: string;
  role: string;
  type?: string; 
  technologies: string[];
}

const WorkExpCard: React.FC<WorkExpCardProps> = ({
  company,
  role,
  type,
  technologies,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTech = showAll ? technologies : technologies.slice(0, 6);

  return (
    <div className="bg-gray-900 text-gray-200 rounded-xl shadow-lg p-6 mb-6 relative border border-gray-800">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-white">{company}</h3>
          <p className="text-gray-400">{role}</p>
        </div>

        {type && (
          <span className="bg-gray-800 text-gray-400 text-sm px-3 py-1 rounded-full">
            {type}
          </span>
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

export default WorkExpCard;
