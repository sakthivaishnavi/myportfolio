import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-swift-reveal';
import { FaArrowCircleRight, FaArrowCircleLeft, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

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
      description: " KEC Food Court is a smart food ordering platform tailored for students to avoid long canteen queues,reduce overcrowding, and ensure timely access to meals without delaying classes. Students can browse dishes and daily specials with pricing and veg/non-veg tags, add items to their cart, and make secure payments through integrated Razorpay. The college canteen admin, can efficiently handle specials with quantity controls, manage orders, and print receipts. This system streamlines the food ordering process for a smoother and more efficient canteen experience.",
      techStack: ["React.js", "Python", "MySQL"],
      liveLink: "https://fc-app-psi.vercel.app/",
      githubLink: "https://github.com/sakthivaishnavi/FC-APP"
    },
    {
      title: "Vehicle Monitoring App",
      description: "The Vehicle Monitoring App is a mobile application designed to track and analyze vehicle performance.It monitors real-time data such as fuel level, speed, and GPS location, providing detailed analytics for better decision-making.Users can access and manage driver and vehicle details, ensuring comprehensive fleet monitoring.The app features OTP-based login via mobile numbers for secure access.Integration with WebSocket and MQTT ensures seamless real-time data communication, making it an efficient tool for managing vehicles.",
      techStack: ["React Native", "Node.js", "SQLite"],
      liveLink: "https://vehicle-monitoring-app.vercel.app/",
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

  return (
    <div className="min-h-screen bg-black py-16">
      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1500}>
          <h1 className="text-center text-4xl mb-16 text-white">My Projects</h1>
        </Fade>
      </div>

      <div className="mx-auto max-w-2xl h-[400px] relative perspective">
        <div className="relative h-full">
          {projects.map((project, index) => {
            const offset = (index - currentIndex) % projects.length;
            let translateX = '100%';
            let opacity = 0;
            let zIndex = 0;
            let rotate = 15;

            if (offset === 0) {
              translateX = '0';
              opacity = 1;
              zIndex = 20;
              rotate = 0;
            } else if (offset === -1 || (offset === projects.length - 1 && currentIndex === 0)) {
              translateX = '-100%';
              opacity = 0.3;
              zIndex = 10;
              rotate = -15;
            }

            return (
              <div
                key={index}
                className="absolute inset-0 w-full"
                style={{
                  transform: `translateX(${translateX}) rotateY(${rotate}deg)`,
                  opacity,
                  zIndex,
                  transition: 'all 0.7s ease-in-out',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="bg-gray-950 rounded-3xl p-8 h-auto hover:shadow-md hover:shadow-[#5eead4] transition-shadow delay-100">
                  <h2 className="text-2xl font-bold text-center mb-6 text-[#5eead4]">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-8 text-justify">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center mb-8">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 px-4 py-1 rounded-xl text-[#2dc1ab]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center items-center gap-6">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-[#5eead4] text-[#5eead4] hover:text-gray-900 px-4 py-2 rounded-xl transition-all duration-300"
                    >
                      Check it out
                      <FaArrowCircleRight />
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5eead4] hover:text-[#2dc1ab] transition-colors duration-300"
                    >
                      <FaGithub size={28} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute z-30 bottom-[-100px] left-0 right-0 flex justify-center gap-10">
          <button
            onClick={previous}
            className="bg-gray-800 p-2 rounded-full hover:bg-[#5eead4] text-[#5eead4] hover:text-gray-900 transition-all duration-300"
          >
            <FaArrowCircleLeft size={24} />
          </button>
          <button
            onClick={next}
            className="bg-gray-800 p-2 rounded-full hover:bg-[#5eead4] text-[#5eead4] hover:text-gray-900 transition-all duration-300"
          >
            <FaArrowCircleRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-36">
        <a 
          href="https://github.com/sakthivaishnavi"
          className="bg-[#5eead4] text-gray-950 px-6 py-3 rounded-full hover:bg-gray-950 hover:text-[#5eead4] hover:shadow-[#5eead4] shadow-md transition-all duration-300 flex items-center gap-2"
        >
          Show more projects
          <FaArrowCircleRight />
        </a>
      </div>

      <div className='flex justify-center mt-32 mb-14'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>

    </div>
  );
};

export default Projects;