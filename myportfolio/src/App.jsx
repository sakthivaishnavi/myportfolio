import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero"
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Achievements from "./Components/Achievements/Achievements";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    <div>
    <div className='container mx-auto px-4 py-4 text-white ml-6'>
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact/>
          <Footer />
        </div>
    </div>
    </>
   
  )
}
export default App;
