import React from 'react'

const About = () => {
  return (
    <div>
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-center text-4xl">About <span className='text-[#5eead4] font-bold'> Me</span></h1>
      <div className='my-8 flex justify-center lg:justify-start'>
        <p className='text-center max-w-xl text-lg'>I am a passionate and proficient full-stack developer with a strong focus on front-end development. Skilled in major programming languages, I am highly motivated in problem-solving and continuously expanding my expertise through full-stack projects.</p>
      </div>
    </div>
      <div className='flex justify-center mt-10 mb-20'>
           <hr className='border-[#353d3c] w-3/4'/>
      </div>
    </div>
  )
}

export default About