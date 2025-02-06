import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-36 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Profile & Bio */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/profile.jpg" // Replace with your actual image path
            alt="Profile"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Section - Short Bio */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green-400">About Me</h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            React-Developer with a strong background in managing design projects across multiple platforms, including
            web, iOS, and Android. Proficient in the full design lifecycle, from ideation and wireframing to prototyping and
            implementation. Skilled in developing and maintaining high-quality, scalable front-end applications using
            JavaScript, HTML5, CSS3, tailwindCss and frameworks like React.js.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-36">
        <h2 className="text-3xl font-bold text-green-400 text-center">Education</h2>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
            <p className="text-gray-400">GITAM University, 2019 - 2023</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold">UX Designer / UI Developer </h3>
            <p className="text-gray-400">Design Boat UX/UI School, 2023 - 2024</p>
          </div>
        </div>
      </div>

      {/* Hobbies & Activities Section */}
      <div className="mt-36">
        <h2 className="text-3xl font-bold text-green-400 text-center">Hobbies & Activities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <p className="text-gray-400">📸 Photography</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <p className="text-gray-400">🖥️ Coding</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <p className="text-gray-400">🎵 Music</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <p className="text-gray-400">✈️ Traveling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
