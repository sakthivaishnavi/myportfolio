import React from 'react';
import { RiReactjsFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5, SiMongodb, SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaPython, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaC } from "react-icons/fa6";

const skillStyles = ' hover:bg-[#5eead4] bg-gray-900 text-[#5eead4]  hover:text-black p-4 rounded-xl scale-110 hover:scale-125 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out';

const skills = [
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <RiJavascriptFill />, name: 'JavaScript' },
  { icon: <RiReactjsFill />, name: 'React' },
  { icon: <TbBrandReactNative />, name: 'React Native' },
  { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
  { icon: <DiNodejs />, name: 'Node.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FaC />, name: 'C' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaJava />, name: 'Java' },
];

const Skills = () => {
  return (
    <div>
      <div className='flex justify-center mt-16 mb-20'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>
      <h1 className='text-4xl mb-16 text-center'>My Skillsets</h1>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-14'>
          {skills.map((skill, index) => (
            <div key={index} className={skillStyles}>
              <h1 className='text-7xl ml-3 font-bold'>{skill.icon}</h1>
              <p className='mt-2 text-center'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-20 mb-20'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>
    </div>
  );
}

export default Skills;
