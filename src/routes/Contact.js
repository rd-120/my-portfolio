import React from 'react';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer';
import ContCard from '../components/ContCard';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="contact" text="feel free to contact me" />
      <ContCard />
      <Footer />
    </div>
  );
};

export default Contact;
