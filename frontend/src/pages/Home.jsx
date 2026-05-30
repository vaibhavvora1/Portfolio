import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Tools from '../components/Tools';
import AITools from '../components/AITools';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Tools />
      <AITools />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
