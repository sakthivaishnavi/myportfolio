import Hi from '../../assets/Hi.gif';
import profile from '../../assets/me.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

const Hero = () => {
    return (
        <div className="lg:my-12 my-32">
            <div className="flex flex-col md:flex-row lg:justify-around ">
                <div className="flex flex-col justify-center items-center ">
                    <div className="text-5xl font-bold text-white">Hi, I'm<span className="text-[#5eead4]"> Sakthi</span></div>
                    {/* <img src={Hi} width={24} height={24}/> */}
                    <div className="text-2xl text-white mt-4">Front-end Developer</div>
                    
                    <div className='mt-4 flex justify-center items-center gap-4'>
                        <BiLogoGmail className="text-4xl text-[#5eead4] cursor-pointer" />
                        <FaLinkedin className="text-[#5eead4] text-4xl cursor-pointer" />
                        <FaGithub className="text-[#5eead4] text-4xl  cursor-pointer" />
                        <SiLeetcode  className="text-[#5eead4] text-4xl cursor-pointer"/>
                    </div>

                    <div>
                        {/* <button className=" border border-[#ffffff] text-white font-bold py-2 px-4 rounded-full mt-4">Contact Me</button> */}
                        <button className="border border-[#ffffff] text-white font-bold py-2 px-4 rounded-full mt-4 ml-4">Resume</button>
                    </div>

                </div>
                <div className='mt-10 flex justify-center py-10'>
                    <img src={profile} alt="hero" className="w-80 h-80 object-cover rounded-full" />
                </div>
                
            </div>
            <div className='flex justify-center mt-10 mb-20'>
           <hr className='border-[#353d3c] w-3/4'/>
           </div>
        </div>
    )
}

export default Hero