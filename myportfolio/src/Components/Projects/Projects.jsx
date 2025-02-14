import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Picky - The Recipe Finder App",
      description: "Recipe Finder is a user-friendly web app designed for food lovers to explore,save, and share recipes. It offers secure login and registration powered by Firebase and fetches recipes from TheMealDB API, complete with ingredients and step-by-step instructions.Users can rate recipes, add their favorites to a wishlist, and even translate recipe details into different languages using Microsoft Azure Translation API.With a MongoDB backend supporting user-submitted recipes,the app creates a personalized cooking experience for everyone.",
      techStack: ["React.js", "Node.js", "MongoDB", "Firebase"],
      liveLink: "https://picky-recipe-finder.vercel.app/",
      githubLink: "https://github.com/sakthivaishnavi/Recipe-Finder"
    },
    {
      title: "KEC Food Court App",
      description: "KEC Food Court is a smart food ordering platform tailored for students to avoid long canteen queues,reduce overcrowding, and ensure timely access to meals without delaying classes. Students can browse dishes and daily specials with pricing and veg/non-veg tags, add items to their cart, and make secure payments through integrated Razorpay. The college canteen admin, can efficiently handle specials with quantity controls, manage orders, and print receipts.",
      techStack: ["React.js", "Python", "MySQL"],
      liveLink: "https://fc-app-psi.vercel.app/",
      githubLink: "https://github.com/sakthivaishnavi/FC-APP"
    },
    {
      title: "Vehicle Monitoring App",
      description: "The Vehicle Monitoring App is a mobile application designed to track and analyze vehicle performance.It monitors real-time data such as fuel level, speed, and GPS location, providing detailed analytics for better decision-making.Users can access and manage driver and vehicle details, ensuring comprehensive fleet monitoring.The app features OTP-based login via mobile numbers for secure access.Integration with WebSocket and MQTT ensures seamless real-time data communication.",
      techStack: ["React Native", "Node.js", "SQLite"],
      githubLink: "https://github.com/sakthivaishnavi/Vehicle-Monitoring-App"
    },
    {
      title: "Anonymous Messaging App",
      description: "The Anonymous Messaging App enables users to send anonymous messages to an admin by submitting text and selecting an emoji. The admin can view, update, and delete these messages.The app is built with React for the frontend, Node.js for the backend, and MongoDB for data storage.Bootstrap is used for styling, providing a clean and responsive interface, and CRUD operations ensure seamless functionality throughout the system.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      liveLink: "https://ghostly.netlify.app/",
      githubLink: "https://github.com/sakthivaishnavi/Anonymous_feedback_app"
    }
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      previous();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  return (
    <section 
      className="min-h-screen bg-black py-8 md:py-16 px-4 md:px-8" 
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Projects carousel"
    >
      <div className="animate-fade-in">
        <h1 className="text-center text-3xl md:text-4xl mb-8 md:mb-12 text-white font-bold">
          My Projects
        </h1>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentIndex 
                  ? 'opacity-100 translate-x-0' 
                  : 'hidden'
              }`}
              role="tabpanel"
              aria-label={`Project ${index + 1} of ${projects.length}`}
            >
              <div className="bg-gray-950 rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-lg hover:shadow-[#5eead4] transition-shadow duration-300 border border-gray-800">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-teal-300">
                  {project.title}
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed text-justify">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-800 px-3 py-1 rounded-lg text-teal-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center items-center gap-4 flex-wrap">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-teal-300 text-teal-300 hover:text-gray-900 px-4 py-2 rounded-xl transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-teal-300 text-teal-300 hover:text-gray-900 px-4 py-2 rounded-xl transition-all duration-300"
                    >
                      <span>Code</span>
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Navigation buttons - Now closer to the card */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={previous}
                  className="p-2 rounded-full bg-gray-800 hover:bg-teal-300 text-teal-300 hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-gray-800 hover:bg-teal-300 text-teal-300 hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  aria-label="Next project"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Projects button - Properly spaced */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/sakthivaishnavi"
          target="_blank"
          rel="noreferrer"
          className="bg-teal-300 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-teal-300 hover:border-teal-300 border border-transparent transition-all duration-300 flex items-center gap-2 group"
        >
          <span>Show More Projects</span>
          <ExternalLink 
            size={18} 
            className="transform group-hover:translate-x-1 transition-transform duration-300" 
          />
        </a>
      </div>

      <div className="flex justify-center mt-12">
        <hr className="border-gray-800 w-3/4" />
      </div>
    </section>
  );
};

export default Projects;