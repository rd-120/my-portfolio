import React from 'react';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer';

import AllProjects from '../components/AllProjects';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="Projects" text="some of my works" />
      <AllProjects />
      <Footer />
    </div>
  );
};

export default Projects;
