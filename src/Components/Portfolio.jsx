import React from "react";

const projects = [
  {
    title: "Spotify clone web music player",
    description:
      "A React-based movie browser application using TMDB API. It allows users to search, filter, and view details of movies interactively.",
    video: `${import.meta.env.BASE_URL}/projectvideos/project1.mp4`,
    previewVideo: "https://drive.google.com/file/d/1iV-_Yw0WkyfnZo7djdnZnH4_3HY0ELn7/view?usp=sharing",
    github: "https://github.com/shaikvahab/Spotify-Clone.git",
  },
  {
    title: "E-Commerce Beauty Web App",
    description:
      "A modern e-commerce UI built using React and Tailwind, featuring product categories, a checkout page, and animated transitions.",
    video: `${import.meta.env.BASE_URL}/projectvideos/project2.mp4`,
    previewVideo: "https://drive.google.com/file/d/1S_lLm3bbIClko0mF8R9r5sje31TmnD_7/view?usp=sharing",
    github: "https://github.com/shaikvahab/Glamify---Beauty-E-Commerce-Web-Application-.git",
  },
  {
    title: "To-do list app (listify)",
    description:
      "This task manager website app showcases my projects, skills, and experiences with a sleek and interactive design.",
    video: `${import.meta.env.BASE_URL}/projectvideos/project3.mp4`,
    previewVideo: "https://drive.google.com/file/d/1Ud69mx02o1cyXLyDgEPLaWXKy5OkOz0c/view?usp=sharing",
    github: "https://github.com/shaikvahab/Listify---Responsive-Todo-List-App-Description-.git",
  },

  {
    title: "Portfolio website",
    description:
      "This portfolio website showcases my projects, skills, and experiences with a sleek and interactive design.",
    video: `${import.meta.env.BASE_URL}/projectvideos/project4.mp4`,
    previewVideo: "https://drive.google.com/file/d/1m-LUMVk9ExMW1vCUj6ShXrHstFkBgLHI/view?usp=sharing",
    github: "https://github.com/shaikvahab/My-portfolio_website.git",
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
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <video
                src={project.video}
                className="w-full h-48 md:h-56 object-cover rounded-lg max-w-full max-h-full"
                autoPlay
                loop
                muted
                playsInline
              />

            </div>
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

            <button
              onClick={() => window.open(project.previewVideo, "_blank")}
              className="px-1 py-1 border border-green-600 text-green-600 rounded-lg text-lg transition-transform duration-300 hover:bg-green-600 hover:text-white m-2.5"
            >
              Preview
            </button>

          </div>

        ))}
      </div>
    </section>
  );
};

export default Portfolio;
