import React from 'react';
import {
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
} from 'react-icons/fa';
import './ContCardStyles.css';
import { Link } from 'react-router-dom';

const ContCard = () => {
  return (
    <div>
      <div className="big-container">
        <h1 className="project-heading">Get in Touch</h1>
        <div className="cont-container">
          <div className="project-card contact">
            <h2 className="cont-title">whatsapp</h2>
            <Link to="https://wa.me/0524812556" target="_blank">
              <FaWhatsapp className="social" />
            </Link>
          </div>

          <div className="project-card contact">
            <h2 className="cont-title">linkedIn</h2>
            <Link
              to="https://www.linkedin.com/in/rivka-desta-759a01224/"
              target="_blank"
            >
              <FaLinkedin className="social" />
            </Link>
          </div>

          <div className="project-card contact">
            <h2 className="cont-title">gmail</h2>
            <Link
              to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=desta1202@gmail.com&tf=1"
              target="_blank"
            >
              <FaEnvelope className="social" />
            </Link>
          </div>

          <div className="project-card contact">
            <h2 className="cont-title">052-4812556</h2>
            <FaPhone className="social" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContCard;
