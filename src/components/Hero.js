import React from 'react';
import './HeroStyles.css';
import IntroImg from '../Images/bg-hero.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>hi i'm rivka</p>
        <h1>junior full stack developer</h1>
        <div>
          <Link to="/projects" className="btn">
            projects
          </Link>

          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
