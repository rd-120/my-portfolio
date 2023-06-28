import React from 'react';
import './HeroStyles2.css';

const Hero2 = ({ heading, text }) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Hero2;
