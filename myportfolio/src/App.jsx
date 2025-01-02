import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Achievements from "./Components/Achievements/Achievements";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { LightSpeed } from "react-swift-reveal";
import { Fade } from "react-swift-reveal";
import { useInView } from 'react-intersection-observer';

function App() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      <div className='container mx-auto text-white'>
        <Navbar />
        <Hero />
        <div ref={ref}>
          <LightSpeed key={inView ? 'inView' : 'notInView'} left={true} duration={2500}>
            <About />
          </LightSpeed>
        </div>
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1000}>
        <Contact />
        </Fade>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
