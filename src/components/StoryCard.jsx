"use client";

import Link from "next/link";

const StoryCard = ({ story }) => {
  const {
    id,
    name,
    designation,
    experience,
    skills,
    company,
    stories,
  } = story;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 duration-300">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-6 text-white">

        <div className="w-20 h-20 mx-auto rounded-full bg-white text-cyan-700 flex items-center justify-center text-3xl font-bold">
          {name.charAt(0)}
        </div>

        <h2 className="text-2xl font-bold text-center mt-4">
          {name}
        </h2>

        <p className="text-center text-cyan-100">
          {designation}
        </p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-5 text-white">

        <div className="flex justify-between">
          <span className="font-semibold text-gray-400">
            Experience
          </span>

          <span>{experience}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-gray-400">
            Company
          </span>

          <span>{company}</span>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-cyan-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">
            Story Preview
          </h3>

          <p className="text-gray-300">
            {stories.slice(0, 120)}...
          </p>
        </div>

        <Link href={`/stories/${id}`}>
          <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-semibold transition duration-300 cursor-pointer">
            📖 Read Full Story
          </button>
        </Link>

      </div>
    </div>
  );
};

export default StoryCard;