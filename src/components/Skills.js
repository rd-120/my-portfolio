import React from 'react';
import './AboutMeStyles.css';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { DiBootstrap, DiJqueryLogo } from 'react-icons/di';
import {
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';

const Skills = () => {
  return (
    <div>
      <div className="big-container">
        <h1 className="project-heading">Skills</h1>
        <div className="pro-container">
          <div className="project-card skills ">
            <h2 className="skills-title">front-end</h2>
            <div className="logo-icon">
              <FaHtml5 className=" html5" />
              <FaCss3Alt className=" css3" />
              <FaJsSquare className=" js" />
            </div>
          </div>
          <div className="project-card skills">
            <h2 className="skills-title">back-end</h2>
            <div className="logo-icon">
              <SiMongodb className=" mongo" />
              <FaNodeJs className=" node" />
              <SiMysql className=" sql" />
            </div>
          </div>
          <div className="project-card skills">
            <h2 className="skills-title">frameworks</h2>
            <div className="logo-icon">
              <FaReact className=" react" />
              <DiBootstrap className=" bootstrap" />
              <DiJqueryLogo className=" jquery" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
