import React from 'react'
import { LightSpeed,Pop } from "react-swift-reveal";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div>
    <div className='flex justify-center mt-32 mb-40'>
    <hr className='border-[#353d3c] w-3/4' />
  </div>
    <div ref={ref}>
          <Pop key={inView ? 'inView' : 'notInView'} left={true} duration={2500} distance='50px'>
    <div>
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-center text-4xl">About <span className='text-[#5eead4] font-bold'> Me</span></h1>
      <div className='my-8 flex justify-center lg:justify-start '>
        <p className='text-center sm:max-w-xl text-lg sm:text-xl  max-w-sm'>I am a passionate and proficient full-stack developer with a strong focus on front-end development. Skilled in major programming languages, I am highly motivated in problem-solving and continuously expanding my expertise through full-stack projects.</p>
      </div>
    </div>
      <div className='flex justify-center mt-32 mb-40'>
           <hr className='border-[#353d3c] w-3/4'/>
      </div>
    </div>
     </Pop>
    </div>
    </div>
  )
}

export default About