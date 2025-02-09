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
import { Fade } from "react-swift-reveal";
import { useInView } from "react-intersection-observer";
import Certifications from "./Components/Certifications/Certifications";

function HomePage() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="achievements"><Achievements /></section>
      <section ref={ref} id="contact">
        <Fade key={inView ? "inView" : "notInView"} top={true} duration={1000}>
          <Contact />
        </Fade>
      </section>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="container mx-auto text-white">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
