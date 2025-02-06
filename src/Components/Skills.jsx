import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend Development",
    description: "Building modern, responsive, and interactive UI using powerful frontend technologies.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, topics: ["Semantic Markup", "SEO Optimization", "Forms & Validation"] },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, topics: ["Flexbox & Grid", "Animations", "Responsive Design"] },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, topics: ["ES6+", "DOM Manipulation", "Async/Await"] },
      { name: "React.js", icon: <FaReact className="text-blue-400" />, topics: ["Hooks", "State Management", "React Router"] },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, topics: ["Utility-First", "Dark Mode", "Animations"] },
    ],
  },
  {
    category: "Backend Development",
    description: "Creating scalable, secure, and efficient backend applications using powerful frameworks.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, topics: ["Event-Driven", "File System", "Streams"] },
      { name: "Express.js", icon: <SiExpress className="text-gray-600" />, topics: ["Routing", "Middleware", "REST APIs"] },
    ],
  },
  {
    category: "Database Management",
    description: "Handling and managing structured and unstructured data efficiently.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, topics: ["CRUD Operations", "Aggregation", "Indexes"] },
      { name: "SQL", icon: <FaDatabase className="text-blue-600" />, topics: ["Joins", "Stored Procedures", "Optimization"] },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-32 px-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Skills & Technologies</h2>
      <div className="max-w-5xl mx-auto">
        {skillsData.map((skillSet, index) => (
          <div key={index} className="mb-12">
            {/* Skill Category */}
            <h3 className="text-2xl font-semibold text-green-600">{skillSet.category}</h3>
            <p className="text-gray-600 mt-2">{skillSet.description}</p>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
              {skillSet.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-5xl">{skill.icon}</div>
                  <h4 className="mt-3 text-lg font-medium">{skill.name}</h4>
                  <ul className="text-sm text-gray-500 mt-2">
                    {skill.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Green Separator Line */}
            {index !== skillsData.length - 1 && <div className="w-full h-1 bg-green-500 my-10"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
