import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Fade } from 'react-swift-reveal'

const Achievements = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <div>
      <div className='flex justify-center mt-32 mb-20'>
        <hr className='border-[#353d3c] w-3/4'/>
      </div>
      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1500}>
      <h1 className='text-4xl text-center'>Accomplishments</h1>
      </Fade>
      </div>
      <div ref={ref} className='flex justify-center'>
        <Fade key={inView ? 'inView' : 'notInView'} right={true} duration={2000}>
        <div className="relative border-l-2 border-teal-500 mt-20 mx-10">
  {[
    { date: "30/09/2023", title: "1st prize in Brain Baffle, KEC" },
    { date: "30/09/2023", title: "3rd prize in Mystery Box, KEC" },
    { date: "19/03/2024", title: "1st prize in Mathcon, KEC" },
  ].map((achievement, index) => (
    <div key={index} className="mb-10 ml-6">
      <div className="absolute -left-4 w-8 h-8 bg-teal-500 rounded-full"></div>
      <p className="text-gray-400">{achievement.date}</p>
      <h3 className="text-[#5eead4] font-semibold">{achievement.title}</h3>
    </div>
  ))}
</div>

        </Fade>
      </div>
      <div className='flex justify-center mt-24 mb-20'>
        <hr className='border-[#353d3c] w-3/4'/>
      </div>

    </div>
  )
}

export default Achievements