import Hi from '../../assets/Hi.gif';
import profile from '../../assets/cropped.jpg';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { useInView } from 'react-intersection-observer';
import { Slide, Fade } from "react-swift-reveal";
import resume from '../../assets/my_resume.pdf';

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="lg:my-52 my-44 px-6">
      <div className="flex flex-col-reverse md:flex-row lg:justify-around items-center gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col justify-center items-center text-center">
          <div ref={ref}>
            <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1000}>
              <div className="flex justify-center items-center gap-2 md:gap-4">
                <div className="text-3xl md:text-5xl font-bold text-white">
                  Hi, I'm<span className="text-[#5eead4]"> Sakthi</span>
                </div>
                <img src={Hi} width={36} height={36} />
              </div>
              <div className="text-lg md:text-2xl text-white mt-2 md:mt-4">Front-end Developer</div>
            </Fade>
          </div>

          <div ref={ref} className="mt-4">
            <Fade key={inView ? 'inView' : 'notInView'} right={true} duration={1000}>
              <div className="flex justify-center items-center gap-3 md:gap-4">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sakthivaishnavi12@gmail.com" target="_blank">
                  <BiLogoGmail className="text-3xl md:text-4xl text-[#5eead4] cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/sakthivaishnavi/">
                  <FaLinkedin className="text-3xl md:text-4xl text-[#5eead4] cursor-pointer" />
                </a>
                <a href="https://github.com/sakthivaishnavi">
                  <FaGithub className="text-3xl md:text-4xl text-[#5eead4] cursor-pointer" />
                </a>
                <a href="https://leetcode.com/sakthivaishnavi/">
                  <SiLeetcode className="text-3xl md:text-4xl text-[#5eead4] cursor-pointer" />
                </a>
              </div>
            </Fade>
          </div>

          <div ref={ref} className="mt-8 sm:mt-10">
              <Slide key={inView ? 'inView' : 'notInView'} bottom={true} duration={1000} distance="100px">
                <a 
                  href={resume}
                  className="inline-block border-2 border-[#5eead4] bg-gray-900 text-[#5eead4] font-bold py-2 px-4 sm:py-2 sm:px-6 rounded-full hover:bg-[#5eead4] hover:text-black transition-all duration-300 text-md sm:text-xl"
                >
                  Resume
                </a>
              </Slide>
            </div>
        </div>

        <div ref={ref} className="mt-6 md:mt-10">
          <Fade key={inView ? 'inView' : 'notInView'} right={true} duration={1500} distance="100px">
            <div className="flex justify-center">
              <img src={profile} alt="hero" className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Hero;
