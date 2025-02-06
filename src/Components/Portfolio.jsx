import React from "react";

const projects = [
  {
    title: "Spotify clone web music player",
    description:
      "A React-based movie browser application using TMDB API. It allows users to search, filter, and view details of movies interactively.",
    image: "/project2.png", // Update with correct image path
    github: "https://github.com/shaikvahab/Spotify-Clone.git",
  },
  {
    title: "E-Commerce Beauty Web App",
    description:
      "A modern e-commerce UI built using React and Tailwind, featuring product categories, a checkout page, and animated transitions.",
    image: "/project1.png",
    github: "https://github.com/shaikvahab/Glamify---Beauty-E-Commerce-Web-Application-.git",
  },
  {
    title: "To-do list app (listify)",
    description:
      "This portfolio website showcases my projects, skills, and experiences with a sleek and interactive design.",
    image: "/project3.png",
    github: "https://github.com/shaikvahab/Listify---Responsive-Todo-List-App-Description-.git",
  },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-36 px-6 md:px-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-400">My Projects</h1>
        <p className="text-gray-400 mt-2">Explore some of my best work</p>
      </div>

      {/* Projects List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-48 object-cover mb-4 hover:opacity-80 transition-opacity"
            />
            <h2 className="text-2xl font-semibold text-green-400">
              {project.title}
            </h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
