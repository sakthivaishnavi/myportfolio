import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-swift-reveal';
import { FaArrowCircleRight } from "react-icons/fa";

const Projects = () => {

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div>
      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1500}>
          <h1 className='text-center text-4xl mb-8'>My Projects</h1>
        </Fade>
      </div>


      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} left={true} duration={2000} distance='50%'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-20 mr-20'>
            <div className='text-wrap bg-gray-950 hover:bg-gray-900 hover:text-[#5eead4] p-5 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out'>
              <h1 className='text-center text-xl font-bold mt-2'>Picky - The Recipe Finder App</h1>
              <p className='mt-4 text-wrap text-justify'>
                Recipe Finder is a user-friendly web app designed for food lovers to explore,
                save, and share recipes. It offers secure login and registration powered by Firebase
                and fetches recipes from <b>TheMealDB API</b>, complete with ingredients and step-by-step instructions.
                Users can rate recipes, add their favorites to a wishlist, and even translate recipe details into
                different languages using <b>Microsoft Azure Translation API</b>.With a MongoDB backend supporting user-submitted
                recipes,the app creates a personalized cooking experience for everyone.
              </p>
              <div className='flex gap-4 mt-4 justify-center items-center'>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>React.js</p>
                </div>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>Node.js</p>
                </div>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>MongoDB</p>
                </div>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>Firebase</p>
                </div>
              </div>
              <div>
                <div className='bg-gray-800 hover:bg-[#5eead4] hover:text-gray-950 p-2 rounded-xl mt-4 w-36 flex gap-2 justify-center items-center ml-20'>
                  <div>
                    <a href='https://picky-recipe-finder.vercel.app/' target='_blank' rel='noreferrer'>Check it out</a>
                  </div>
                  <div> <FaArrowCircleRight /></div>
                </div>
              </div>
            </div>

            <div className='text-wrap bg-gray-950 hover:bg-gray-900 hover:text-[#5eead4] p-5 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out'>
              <h1 className='text-center text-xl font-bold mt-2'>KEC Food Court App</h1>
              <p className='mt-4 text-wrap text-justify'>
                KEC Food Court is a smart food ordering platform tailored for students to avoid long canteen queues,
                reduce overcrowding, and ensure timely access to meals without delaying classes. Students can browse dishes and
                daily specials with pricing and veg/non-veg tags, add items to their cart, and make secure payments
                through integrated Razorpay. The college canteen admin, can efficiently handle specials with
                quantity controls, manage orders, and print receipts. This system streamlines the food ordering process for a smoother and more efficient canteen
                experience.
              </p>
              <div className='flex gap-4 mt-4 justify-center items-center'>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>React.js</p>
                </div>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>Python</p>
                </div>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>MySQL</p>
                </div>
              </div>
              <div>
                <div className='bg-gray-800 hover:bg-[#5eead4] hover:text-gray-950 p-2 rounded-xl mt-4 w-36 flex gap-2 justify-center items-center ml-20'>
                  <div>
                    <a href='https://fc-app-psi.vercel.app/' target='_blank' rel='noreferrer'>Check it out</a>
                  </div>
                  <div> <FaArrowCircleRight /></div>
                </div>
              </div>
            </div>

            <div className='text-wrap bg-gray-950 hover:bg-gray-900 hover:text-[#5eead4] p-5 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out'>
              <h1 className='text-center text-xl font-bold mt-2'>Vehicle Monitoring App</h1>
              <p className='mt-4 text-wrap text-justify'>
                The Vehicle Monitoring App is a mobile application designed to track and analyze vehicle performance.
                It monitors real-time data such as fuel level, speed, and GPS location, providing detailed analytics for better decision-making.
                Users can access and manage driver and vehicle details, ensuring comprehensive fleet monitoring.
                The app features OTP-based login via mobile numbers for secure access.
                Integration with WebSocket and MQTT ensures seamless real-time data communication, making it an efficient tool for managing vehicles.
              </p>
              <div className='flex gap-4 mt-4 justify-center items-center'>
                <div className='text-center text-wrap bg-gray-800 p-1 rounded-xl w-28 text-[#2dc1ab]'>
                  <p>React Native</p>
                </div>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>Node.js</p>
                </div>
                <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                  <p>SQLite</p>
                </div>
              </div>
              <div>
                <div className='bg-gray-800 hover:bg-[#5eead4] hover:text-gray-950 p-2 rounded-xl mt-4 w-36 flex gap-2 justify-center items-center ml-20'>
                  <div>
                    <a href='https://vehicle-monitoring-app.vercel.app/' target='_blank' rel='noreferrer'>Check it out</a>
                  </div>
                  <div> <FaArrowCircleRight /></div>
                </div>
              </div>
            </div>
          </div>
        </Fade></div>

      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} right={true} duration={2000} distance='50%'>
          <div className="flex justify-center items-center">
            <div className='flex justify-center items-center ml-64 mr-72 mt-8 gap-8 '>
              <div className='text-wrap w-3/4 bg-gray-950 hover:bg-gray-900 hover:text-[#5eead4] p-5 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out'>
                <h1 className='text-center text-xl font-bold mt-2'>Portfolio Website</h1>
                <p className='mt-4 text-wrap text-justify'>
                  My portfolio website is a showcase of my skills, projects, and achievements.
                  It is designed to provide a comprehensive overview of my work and experience.
                  The website features a responsive design, ensuring optimal viewing across all devices.
                  Users can navigate through different sections, view my projects, and contact me for collaborations.
                  The website is built using React.js and Tailwind CSS, offering a seamless and engaging user experience.
                </p>
                <div className='flex gap-4 mt-4 justify-center items-center'>
                  <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                    <p>React.js</p>
                  </div>
                  <div className='text-center  bg-gray-800 p-1 rounded-xl w-28 text-[#2dc1ab]'>
                    <p>Tailwind CSS</p>
                  </div>
                </div>
                <div>
                  <div className='bg-gray-800 hover:bg-[#5eead4] hover:text-gray-950 p-2 rounded-xl mt-4 w-36 flex gap-2 justify-center items-center ml-20'>
                    <div>
                      <a href='' target='_blank' rel='noreferrer'>Check it out</a>
                    </div>
                    <div> <FaArrowCircleRight /></div>
                  </div>
                </div>
              </div>

              <div className='text-wrap w-3/4 bg-gray-950 hover:bg-gray-900 hover:text-[#5eead4] p-5 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out'>
                <h1 className='text-center text-xl font-bold mt-2'>Anonymous Messaging App</h1>
                <p className='mt-4 text-wrap text-justify'>
                  The Anonymous Messaging App enables users to send anonymous messages to an admin by submitting text and
                  selecting an emoji. The admin can view, update, and delete these messages, ensuring efficient management.
                  The app is built with React for the frontend, Node.js for the backend, and MongoDB for data storage.
                  Bootstrap is used for styling, providing a clean and responsive interface, and CRUD operations ensure seamless
                  functionality throughout the system.
                </p>
                <div className='flex gap-4 mt-4 justify-center items-center'>
                  <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                    <p>React.js</p>
                  </div>
                  <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                    <p>Node.js</p>
                  </div>
                  <div className='text-center bg-gray-800 p-1 rounded-xl w-20 text-[#2dc1ab]'>
                    <p>MongoDB</p>
                  </div>
                </div>
                <div>
                  <div className='bg-gray-800 hover:bg-[#5eead4] hover:text-gray-950 p-2 rounded-xl mt-4 w-36 flex gap-2 justify-center items-center ml-20'>
                    <div>
                      <a href='https://ghostly.netlify.app/' target='_blank' rel='noreferrer'>Check it out</a>
                    </div>
                    <div> <FaArrowCircleRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade></div>

      <div className='flex justify-center mt-10 mb-20'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>
    </div>
  )
}

export default Projects