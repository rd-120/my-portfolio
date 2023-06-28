import React from 'react';
import './FooterStyles.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <Link to="https://wa.me/0524812556" target="_blank">
            <FaLinkedin />
          </Link>
          <Link to="https://wa.me/0524812556" target="_blank">
            <FaWhatsapp />
          </Link>

          <Link to="https://github.com/rd-120" target="_blank">
            <FaGithub />
          </Link>
          <Link
            to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=desta1202@gmail.com&tf=1"
            target="_blank"
          >
            <FaEnvelope />
          </Link>
        </div>
        <p>&copy; by rivka desta</p>
      </div>
    </footer>
  );
}

export default Footer;
