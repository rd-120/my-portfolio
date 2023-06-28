import React from 'react';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2
        heading={'about'}
        text={`hi i'm rivka, junior full stack developer`}
      />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
};

export default About;
