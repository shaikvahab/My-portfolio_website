import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const projectData = [
        {
            id: 1,
            title: "E-Commerce Website",
            description: "A full-fledged e-commerce platform with secure payment integration.",
            image: `${import.meta.env.BASE_URL}/images/project1.png`,
        },
        {
            id: 2,
            title: "Spotify music-palyer app",
            description: "A Clone to actual spotify web-player built using Html, Css, Java script.",
            image: `${import.meta.env.BASE_URL}/images/project2.png`,
        },
        {
            id: 3,
            title: "Task Management App",
            description: "A productivity tool for tracking daily tasks and deadlines.",
            image: `${import.meta.env.BASE_URL}/images/project3.png`,
        },
    ];

    const handleContactClick = () => {
        navigate("/ContactDetails");  // Navigate to the homepage when clicking on the logo
    };

    const handlePortfolioClick = () => {
        navigate("/Portfolio");  // Navigate to the homepage when clicking on the logo
    };

    const handleShowmoreClick = () => {
        navigate("/Portfolio");  // Navigate to the homepage when clicking on the logo
    };

    return (
        <section className="relative flex flex-col items-center px-6 md:px-10 py-28 bg-white overflow-hidden">
            {/* Background Design Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 md:w-24 md:h-24 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    <span className="text-green-600 text-lg font-semibold">Welcome</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-3">
                        I am <span className="text-green-600">Shaik Khaja</span> vahab
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        React-Developer with a strong background in managing design projects across multiple platforms, including
                        web, iOS, and Android. Proficient in the full design lifecycle, from ideation and wireframing to prototyping and
                        implementation. Skilled in developing and maintaining high-quality, scalable front-end applications using
                        JavaScript, HTML5, CSS3, tailwindCss and frameworks like React.js.                    </p>
                    <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <button onClick={handleContactClick} className="px-5 py-3 bg-green-600 text-white rounded-lg text-lg transition-transform duration-300 hover:scale-105">
                            Contact Me
                        </button>
                        <button onClick={handlePortfolioClick} className="px-5 py-3 border border-green-600 text-green-600 rounded-lg text-lg transition-transform duration-300 hover:bg-green-600 hover:text-white">
                            View Portfolio
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 group mt-10 md:mt-0">
                    <img
                       src={`${import.meta.env.BASE_URL}/images/profile.jpg`} 
                        alt="Profile"
                        className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-3"
                    />
                    <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="py-20 bg-gray-100 w-full mt-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                    My Creative Works
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white shadow-lg rounded-xl p-5 transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 md:h-56 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-5">{project.title}</h3>
                            <p className="text-gray-600 mt-3">{project.description}</p>
                            <button onClick={handleShowmoreClick} className="mt-5 px-5 py-3 bg-green-600 text-white rounded-lg text-lg transition-transform duration-300 hover:scale-105">
                                Show More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
