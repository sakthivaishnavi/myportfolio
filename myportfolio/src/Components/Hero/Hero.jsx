import Hi from '../../assets/Hi.gif';
import profile from '../../assets/edited.webp';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { useInView } from 'react-intersection-observer';
import { Slide, Fade } from "react-swift-reveal";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="lg:my-12 my-32">
      <div className="flex flex-col md:flex-row lg:justify-around">
        <div className="flex flex-col justify-center items-center">
              <div className='flex flex-col items-center'>
                <div ref={ref} className='text-center'>
                  <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1000}>
                    <div className="text-5xl font-bold text-white">Hi, I'm<span className="text-[#5eead4]"> Sakthi</span></div>
                    {/* <img src={Hi} width={24} height={24}/> */}
                    <div className="text-2xl text-white mt-4">Front-end Developer</div>
                  </Fade>
                </div>

                <div ref={ref}>
                <div className='mt-4 flex justify-center items-center gap-4'>
                <Fade key={inView ? 'inView' : 'notInView'} right={true} duration={1000}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sakthivaishnavi12@gmail.com"
          target="_blank">
                    <BiLogoGmail className="text-4xl text-[#5eead4] cursor-pointer w-7" /></a>
                  <a href='https://www.linkedin.com/in/sakthivaishnavi/'>
                    <FaLinkedin className="text-[#5eead4] text-4xl cursor-pointer w-7" /></a>
                  <a href='https://github.com/sakthivaishnavi'>
                    <FaGithub className="text-[#5eead4] text-4xl cursor-pointer w-7" /></a>
                  <a href='https://leetcode.com/sakthivaishnavi/'>
                    <SiLeetcode className="text-[#5eead4] text-4xl cursor-pointer w-7" /></a>
                </Fade></div>
                </div>

                <div>
          <div ref={ref}>
            <Slide key={inView ? 'inView' : 'notInView'} left={true} duration={1000} distance={'50px'}>
                  <button className="border border-[#5eead4] bg-gray-900 text-[#5eead4] font-bold py-2 px-4 rounded-full mt-4 hover:bg-[#5eead4] hover:text-black">Resume</button>
            </Slide>
                </div>
              </div>
          </div>
        </div>
        <div ref={ref}>
          <Fade key={inView ? 'inView' : 'notInView'} right={true} duration={1500} distance={'100px'}>
            <div className='mt-10 flex justify-center py-10'>
              <img src={profile} alt="hero" className="w-80 h-80 object-cover rounded-full" />
            </div>
          </Fade>
        </div>
      </div>
      <div className='flex justify-center mt-20 mb-32'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>
    </div>
  );
}

export default Hero;
